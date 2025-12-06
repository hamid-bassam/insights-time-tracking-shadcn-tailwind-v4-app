/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { ActivityData, ActivityType, TimeValue } from "@/types/activity";
import { fmtHM, minutesToTime, timeToMinutes } from "@/utils/time";
import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  Clock,
  TrendingUp,
  Activity as ActivityIcon,
  Download,
  PieChart as PieChartIcon,
  BarChart2,
  X,
  Calendar
} from "lucide-react";
import { Cell, Pie, PieChart, ResponsiveContainer, Sector, SectorProps } from "recharts";

interface AnnualSynthesisProps {
  data: ActivityData;
}

type ActivityAverage = {
  name: string;
  fullName: string;
  totalMinutes: number;
  avgPerDay: TimeValue;
  percentage: number;
  type: ActivityType;
};

type TypeSummary = {
  type: ActivityType;
  totalMinutes: number;
  avgPerDay: TimeValue;
  activities: ActivityAverage[];
  color: string;
  icon: React.ReactNode;
};

const getActivityType = (activityName: string): ActivityType => {
  const split = activityName.split('-');
  if (split.length > 1) {
    const typeStr = split[1].trim();
    if (typeStr.includes("productive")) return "productive";
    if (typeStr.includes("passive")) return "passive";
    if (typeStr.includes("ressource")) return "ressource";
    if (typeStr.includes("blocks")) return "blocks";
  }
  return "neutral";
};

const TYPE_CONFIG: Record<ActivityType, { color: string; bgColor: string; label: string; icon: React.ReactNode }> = {
  productive: {
    color: "hsl(var(--chart-1))",
    bgColor: "bg-green-500/10",
    label: "Productive",
    icon: <TrendingUp className="h-4 w-4" />,
  },
  passive: {
    color: "hsl(var(--destructive))",
    bgColor: "bg-red-500/10",
    label: "Passive",
    icon: <ActivityIcon className="h-4 w-4" />,
  },
  ressource: {
    color: "hsl(260, 45%, 60%)",
    bgColor: "bg-purple-500/10",
    label: "Resources",
    icon: <Clock className="h-4 w-4" />,
  },
  blocks: {
    color: "hsl(var(--primary))",
    bgColor: "bg-blue-500/10",
    label: "Blocks",
    icon: <BarChart3 className="h-4 w-4" />,
  },
  neutral: {
    color: "hsl(var(--muted-foreground))",
    bgColor: "bg-gray-500/10",
    label: "Neutral",
    icon: <ActivityIcon className="h-4 w-4" />,
  },
};

export default function AnnualSynthesis({ data }: AnnualSynthesisProps) {
  const [selectedType, setSelectedType] = useState<ActivityType | "all">("all");
  const [viewMode, setViewMode] = useState<"progress" | "pie" | "global">("progress");
  const [selectedActivities, setSelectedActivities] = useState<Set<string>>(new Set());
  const [activePieIndex, setActivePieIndex] = useState<number | null>(null);

  // Week range selection
  const minWeek = data.length > 0 ? Math.min(...data.map(w => w.weekNumber)) : 1;
  const maxWeek = data.length > 0 ? Math.max(...data.map(w => w.weekNumber)) : 52;
  const [startWeek, setStartWeek] = useState(minWeek);
  const [endWeek, setEndWeek] = useState(maxWeek);

  // Filtered data based on week range
  const filteredData = useMemo(() => {
    return data.filter(week => week.weekNumber >= startWeek && week.weekNumber <= endWeek);
  }, [data, startWeek, endWeek]);

  // Calculate annual synthesis
  const typeSummaries = useMemo(() => {
    const summaryMap = new Map<ActivityType, { totalMinutes: number; activities: Map<string, number> }>();

    // Initialize for all types
    const types: ActivityType[] = ["productive", "passive", "ressource", "blocks", "neutral"];
    types.forEach(type => {
      summaryMap.set(type, { totalMinutes: 0, activities: new Map() });
    });

    // Aggregate data across filtered weeks
    filteredData.forEach(week => {
      week.activities.forEach(activity => {
        const type = getActivityType(activity.name);
        const minutes = typeof activity.trackedAvgPerDay === "object"
          ? timeToMinutes(activity.trackedAvgPerDay)
          : typeof activity.trackedAvgPerDay === "number" && activity.trackedAvgPerDay !== -1
            ? activity.trackedAvgPerDay
            : 0;

        const summary = summaryMap.get(type);
        if (summary) {
          summary.totalMinutes += minutes;
          const currentMinutes = summary.activities.get(activity.name) || 0;
          summary.activities.set(activity.name, currentMinutes + minutes);
        }
      });
    });

    // Convert to TypeSummary array
    const numWeeks = filteredData.length || 1;
    const result: TypeSummary[] = [];

    summaryMap.forEach((summary, type) => {
      const activities: ActivityAverage[] = [];

      summary.activities.forEach((totalMinutes, name) => {
        const avgMinutesPerDay = totalMinutes / numWeeks;
        const percentage = summary.totalMinutes > 0
          ? (totalMinutes / summary.totalMinutes) * 100
          : 0;

        activities.push({
          name: name.split('–')[0]?.split('-')[0]?.trim() || name,
          fullName: name,
          totalMinutes,
          avgPerDay: minutesToTime(avgMinutesPerDay),
          percentage,
          type,
        });
      });

      // Sort activities by average per day (total minutes / weeks) descending
      activities.sort((a, b) => {
        const avgA = a.totalMinutes / numWeeks;
        const avgB = b.totalMinutes / numWeeks;
        return avgB - avgA;
      });

      if (activities.length > 0) {
        result.push({
          type,
          totalMinutes: summary.totalMinutes,
          avgPerDay: minutesToTime(summary.totalMinutes / numWeeks),
          activities,
          color: TYPE_CONFIG[type].color,
          icon: TYPE_CONFIG[type].icon,
        });
      }
    });

    // Sort by total minutes descending
    result.sort((a, b) => b.totalMinutes - a.totalMinutes);

    return result;
  }, [filteredData]);

  const filteredSummaries = selectedType === "all"
    ? typeSummaries
    : typeSummaries.filter(s => s.type === selectedType);

  // Total excluding neutral
  const totalTrackedMinutes = useMemo(() => {
    return typeSummaries
      .filter(s => s.type !== "neutral")
      .reduce((sum, s) => sum + s.totalMinutes, 0);
  }, [typeSummaries]);

  // Global activities for global pie chart (excluding neutral)
  const globalActivities = useMemo(() => {
    const activities: Array<ActivityAverage & { color: string; globalPercentage: number }> = [];

    typeSummaries
      .filter(s => s.type !== "neutral")
      .forEach(summary => {
        summary.activities.forEach(activity => {
          activities.push({
            ...activity,
            color: summary.color,
            globalPercentage: 0 // Will be calculated below
          });
        });
      });

    // Sort by total minutes
    const sorted = activities.sort((a, b) => b.totalMinutes - a.totalMinutes);

    // Calculate global percentages based on total tracked time (excluding neutral)
    sorted.forEach(activity => {
      activity.globalPercentage = totalTrackedMinutes > 0
        ? (activity.totalMinutes / totalTrackedMinutes) * 100
        : 0;
    });

    // Find how many activities we need to cover ~22 hours (1320 minutes)
    const targetMinutes = 1320; // 22 hours
    let cumulativeMinutes = 0;
    let topActivitiesCount = 0;

    for (let i = 0; i < sorted.length; i++) {
      cumulativeMinutes += sorted[i].totalMinutes / (filteredData.length || 1);
      topActivitiesCount = i + 1;
      if (cumulativeMinutes >= targetMinutes) break;
    }

    // Take at least top activities that cover 22h, minimum 15, maximum 30
    const displayCount = Math.min(Math.max(topActivitiesCount, 15), 30);
    const topActivities = sorted.slice(0, displayCount);
    const remainingActivities = sorted.slice(displayCount);

    // Create "Other Activities" entry if there are remaining activities
    if (remainingActivities.length > 0) {
      const otherTotalMinutes = remainingActivities.reduce((sum, act) => sum + act.totalMinutes, 0);
      const otherPercentage = totalTrackedMinutes > 0
        ? (otherTotalMinutes / totalTrackedMinutes) * 100
        : 0;

      topActivities.push({
        name: `Other Activities (${remainingActivities.length})`,
        fullName: "other-activities",
        totalMinutes: otherTotalMinutes,
        avgPerDay: minutesToTime(otherTotalMinutes / (filteredData.length || 1)),
        percentage: 0,
        type: "neutral" as ActivityType,
        color: "hsl(var(--muted))",
        globalPercentage: otherPercentage
      });
    }

    return topActivities;
  }, [typeSummaries, totalTrackedMinutes, filteredData.length]);

  // Calculate selected activities summary
  const selectedSummary = useMemo(() => {
    let totalMinutes = 0;
    typeSummaries.forEach(summary => {
      summary.activities.forEach(activity => {
        if (selectedActivities.has(activity.fullName)) {
          totalMinutes += activity.totalMinutes;
        }
      });
    });

    const numWeeks = filteredData.length || 1;
    return {
      count: selectedActivities.size,
      totalMinutes,
      avgPerDay: minutesToTime(totalMinutes / numWeeks),
      percentage: totalTrackedMinutes > 0 ? (totalMinutes / totalTrackedMinutes) * 100 : 0,
    };
  }, [selectedActivities, typeSummaries, totalTrackedMinutes, filteredData.length]);

  // Toggle activity selection
  const toggleActivity = (fullName: string) => {
    setSelectedActivities(prev => {
      const newSet = new Set(prev);
      if (newSet.has(fullName)) {
        newSet.delete(fullName);
      } else {
        newSet.add(fullName);
      }
      return newSet;
    });
  };

  // Select all activities in a type
  const selectAllInType = (type: ActivityType) => {
    setSelectedActivities(prev => {
      const newSet = new Set(prev);
      const typeSummary = typeSummaries.find(s => s.type === type);
      typeSummary?.activities.forEach(activity => {
        newSet.add(activity.fullName);
      });
      return newSet;
    });
  };

  // Deselect all activities in a type
  const deselectAllInType = (type: ActivityType) => {
    setSelectedActivities(prev => {
      const newSet = new Set(prev);
      const typeSummary = typeSummaries.find(s => s.type === type);
      typeSummary?.activities.forEach(activity => {
        newSet.delete(activity.fullName);
      });
      return newSet;
    });
  };

  // Clear all selections
  const clearAllSelections = () => {
    setSelectedActivities(new Set());
  };

  // Calculate local selection per type
  const getTypeSelection = (type: ActivityType) => {
    const typeSummary = typeSummaries.find(s => s.type === type);
    if (!typeSummary) return { count: 0, totalMinutes: 0, avgPerDay: minutesToTime(0), percentage: 0 };

    let totalMinutes = 0;
    let count = 0;
    typeSummary.activities.forEach(activity => {
      if (selectedActivities.has(activity.fullName)) {
        totalMinutes += activity.totalMinutes;
        count++;
      }
    });

    const numWeeks = filteredData.length || 1;
    return {
      count,
      totalMinutes,
      avgPerDay: minutesToTime(totalMinutes / numWeeks),
      percentage: typeSummary.totalMinutes > 0 ? (totalMinutes / typeSummary.totalMinutes) * 100 : 0,
    };
  };

  // Generate AI Analysis Report
  const downloadAIReport = () => {
    const numWeeks = filteredData.length;

    let report = `# Activity Synthesis Report\n\n`;
    report += `**Period:** ${numWeeks} weeks (Week ${startWeek} to Week ${endWeek})\n`;
    report += `**Date Range:** ${filteredData[0]?.startDate} to ${filteredData[filteredData.length - 1]?.endDate}\n\n`;

    report += `## Global Summary\n\n`;
    report += `- **Total Tracked Time (excluding neutral):** ${fmtHM(minutesToTime(totalTrackedMinutes / numWeeks))} per day\n\n`;

    report += `## Type Breakdown\n\n`;
    typeSummaries
      .filter(s => s.type !== "neutral")
      .forEach(summary => {
        const percentage = totalTrackedMinutes > 0 ? (summary.totalMinutes / totalTrackedMinutes) * 100 : 0;
        report += `### ${TYPE_CONFIG[summary.type].label}\n`;
        report += `- **Average per day:** ${fmtHM(summary.avgPerDay)}\n`;
        report += `- **Percentage of total:** ${percentage.toFixed(1)}%\n`;
        report += `- **Activities (${summary.activities.length}):**\n`;
        summary.activities.forEach(activity => {
          report += `  - ${activity.name}: ${fmtHM(activity.avgPerDay)} (${activity.percentage.toFixed(1)}% of ${TYPE_CONFIG[summary.type].label.toLowerCase()})\n`;
        });
        report += `\n`;
      });

    report += `## Analysis Questions for AI\n\n`;
    report += `Please analyze this data and provide insights on:\n\n`;
    report += `1. **Balance Analysis:** Is my time distribution healthy? What patterns do you notice?\n`;
    report += `2. **Productivity Insights:** How effective is my productive time allocation?\n`;
    report += `3. **Resource Management:** Am I allocating enough time to rest and resources?\n`;
    report += `4. **Recommendations:** What specific changes would you recommend to optimize my time usage?\n`;
    report += `5. **Trend Analysis:** What stands out about my activity patterns?\n`;
    report += `6. **Goal Setting:** Based on this data, what realistic goals should I set for the next period?\n\n`;

    report += `## Raw Data Summary\n\n`;
    report += `\`\`\`\n`;
    typeSummaries.forEach(summary => {
      report += `${summary.type.toUpperCase()}: ${fmtHM(summary.avgPerDay)}/day\n`;
    });
    report += `\`\`\`\n`;

    // Create download
    const blob = new Blob([report], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `activity-synthesis-w${startWeek}-w${endWeek}-${new Date().toISOString().split('T')[0]}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Reset week range
  const resetWeekRange = () => {
    setStartWeek(minWeek);
    setEndWeek(maxWeek);
  };

  // Get month label for a week
  const getMonthFromWeek = (weekNumber: number): string => {
    const weekData = data.find(w => w.weekNumber === weekNumber);
    if (!weekData) return "";
    const date = new Date(weekData.startDate);
    return date.toLocaleDateString('en-US', { month: 'short' });
  };

  // Generate month markers for the timeline
  const monthMarkers = useMemo(() => {
    const markers: { week: number; month: string; isFirst: boolean }[] = [];
    let lastMonth = "";

    data.forEach(week => {
      const month = getMonthFromWeek(week.weekNumber);
      if (month !== lastMonth) {
        markers.push({
          week: week.weekNumber,
          month,
          isFirst: lastMonth === ""
        });
        lastMonth = month;
      }
    });

    return markers;
  }, [data]);

  // Handle range slider change
  const handleRangeChange = (values: number[]) => {
    setStartWeek(values[0]);
    setEndWeek(values[1]);
  };

  return (
    <div className="space-y-6">
      {/* Header Card with Controls */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-3xl">Activity Synthesis</CardTitle>
              <CardDescription className="mt-2">
                Analysis of {filteredData.length} weeks {startWeek !== minWeek || endWeek !== maxWeek ? `(Week ${startWeek}-${endWeek})` : `(all ${data.length} weeks)`}
              </CardDescription>
            </div>
            <div className="flex items-center gap-3">
              {/* View Mode Toggle */}
              <div className="flex items-center gap-1 border rounded-lg p-1">
                <Button
                  variant={viewMode === "progress" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("progress")}
                  className="gap-2"
                >
                  <BarChart2 className="h-4 w-4" />
                  Progress
                </Button>
                <Button
                  variant={viewMode === "pie" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("pie")}
                  className="gap-2"
                >
                  <PieChartIcon className="h-4 w-4" />
                  Pie
                </Button>
                <Button
                  variant={viewMode === "global" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("global")}
                  className="gap-2"
                >
                  <TrendingUp className="h-4 w-4" />
                  Global
                </Button>
              </div>

              {/* Download Button */}
              <Button onClick={downloadAIReport} variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                AI Analysis
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Week Range Selector */}
      <Card>
        <CardHeader className="pb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <CardTitle className="text-lg">Period Selection</CardTitle>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={resetWeekRange}
                disabled={startWeek === minWeek && endWeek === maxWeek}
              >
                Reset to Full Year
              </Button>
              <Badge variant="secondary" className="px-3 py-2 text-sm">
                {filteredData.length} weeks
              </Badge>
            </div>
          </div>

          {/* Timeline Range Slider */}
          <div className="space-y-6">
            {/* Month Labels */}
            <div className="relative h-8">
              {monthMarkers.map((marker, idx) => {
                const position = ((marker.week - minWeek) / (maxWeek - minWeek)) * 100;
                return (
                  <div
                    key={idx}
                    className="absolute flex flex-col items-center"
                    style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
                  >
                    <div className="h-2 w-px bg-border" />
                    <span className="text-xs text-muted-foreground mt-1 font-medium">
                      {marker.month}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Range Slider */}
            <div className="px-2">
              <Slider
                min={minWeek}
                max={maxWeek}
                step={1}
                value={[startWeek, endWeek]}
                onValueChange={handleRangeChange}
                className="w-full"
              />
            </div>

            {/* Week Range Display */}
            <div className="flex items-center justify-between text-sm">
              <div className="flex flex-col">
                <span className="text-muted-foreground">Start</span>
                <span className="font-semibold">Week {startWeek}</span>
                {filteredData[0] && (
                  <span className="text-xs text-muted-foreground">{filteredData[0].startDate}</span>
                )}
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="h-px flex-1 bg-border min-w-[100px]" />
                <span className="text-xs font-medium">{endWeek - startWeek + 1} weeks</span>
                <div className="h-px flex-1 bg-border min-w-[100px]" />
              </div>
              <div className="flex flex-col items-end">
                <span className="text-muted-foreground">End</span>
                <span className="font-semibold">Week {endWeek}</span>
                {filteredData[filteredData.length - 1] && (
                  <span className="text-xs text-muted-foreground">
                    {filteredData[filteredData.length - 1].endDate}
                  </span>
                )}
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Global & Local Averages */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {/* Global Average Card */}
        <Card className="border-2 border-primary/50">
          <CardHeader className="pb-3">
            <CardDescription className="text-xs">Period Average</CardDescription>
            <CardTitle className="text-2xl">
              {fmtHM(minutesToTime(totalTrackedMinutes / (filteredData.length || 1)))}
            </CardTitle>
            <p className="text-xs text-muted-foreground">per day (excl. neutral)</p>
          </CardHeader>
        </Card>

        {/* Type-specific averages */}
        {typeSummaries
          .filter(s => s.type !== "neutral")
          .map(summary => (
            <Card key={summary.type} className={cn("border", TYPE_CONFIG[summary.type].bgColor)}>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  {summary.icon}
                  <CardDescription className="text-xs">{TYPE_CONFIG[summary.type].label}</CardDescription>
                </div>
                <CardTitle className="text-xl" style={{ color: summary.color }}>
                  {fmtHM(summary.avgPerDay)}
                </CardTitle>
                <Badge variant="outline" className="text-xs w-fit">
                  {((summary.totalMinutes / totalTrackedMinutes) * 100).toFixed(1)}%
                </Badge>
              </CardHeader>
            </Card>
          ))}
      </div>

      {/* Selected Activities Panel */}
      {selectedActivities.size > 0 && (
        <Card className="border-2 border-blue-500/50 bg-blue-500/5">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg">Custom Selection ({selectedSummary.count} activities)</CardTitle>
                <CardDescription>Combined statistics for selected activities</CardDescription>
              </div>
              <Button variant="ghost" size="sm" onClick={clearAllSelections}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <div className="text-sm text-muted-foreground">Local Average</div>
                <div className="text-2xl font-bold">{fmtHM(selectedSummary.avgPerDay)}</div>
                <div className="text-xs text-muted-foreground">per day</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Global Percentage</div>
                <div className="text-2xl font-bold">{selectedSummary.percentage.toFixed(1)}%</div>
                <div className="text-xs text-muted-foreground">of total tracked</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Total Period</div>
                <div className="text-2xl font-bold">
                  {fmtHM(minutesToTime(selectedSummary.totalMinutes / (filteredData.length || 1)))}
                </div>
                <div className="text-xs text-muted-foreground">average per day</div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Global Pie Chart View */}
      {viewMode === "global" && (
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <TrendingUp className="h-6 w-6" />
              Global Activity Distribution
            </CardTitle>
            <CardDescription>
              All activities across all types (excluding neutral) - {globalActivities.length} total activities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-start gap-8">
              {/* Global Pie Chart */}
              <div className="flex-shrink-0 relative">
                <ResponsiveContainer width={450} height={450}>
                  <PieChart>
                    <defs>
                      {globalActivities.map((activity, i) => (
                        <radialGradient id={`global-grad-${i}`} key={i}>
                          <stop offset="0%" stopColor={activity.color} stopOpacity="0.85" />
                          <stop offset="100%" stopColor={activity.color} stopOpacity="1" />
                        </radialGradient>
                      ))}
                      <filter id="globalInnerShadow" x="-50%" y="-50%" width="200%" height="200%">
                        <feOffset dy="0.5" />
                        <feGaussianBlur stdDeviation="2" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="arithmetic" k2="-1" k3="1" />
                      </filter>
                    </defs>
                    <Pie
                      data={globalActivities}
                      cx="50%"
                      cy="50%"
                      innerRadius={100}
                      outerRadius={180}
                      dataKey="totalMinutes"
                      paddingAngle={1}
                      cornerRadius={6}
                      stroke="hsl(var(--background))"
                      strokeWidth={2}
                      startAngle={90}
                      endAngle={-270}
                      style={{ filter: "url(#globalInnerShadow)" }}
                      onMouseEnter={(_, index) => setActivePieIndex(index)}
                      onMouseLeave={() => setActivePieIndex(null)}
                      activeIndex={activePieIndex ?? undefined}
                      activeShape={(props: SectorProps) => (
                        <Sector
                          {...props}
                          outerRadius={props.outerRadius ? props.outerRadius + 12 : 0}
                          stroke="hsl(var(--foreground)/0.08)"
                          strokeWidth={8}
                        />
                      )}
                      isAnimationActive
                      animationDuration={1000}
                      animationEasing="ease-out"
                    >
                      {globalActivities.map((_, index) => (
                        <Cell
                          key={`global-cell-${index}`}
                          fill={`url(#global-grad-${index})`}
                          style={{
                            filter: activePieIndex === index ? "brightness(1.2)" : "brightness(0.85)",
                            transition: "all 0.3s ease-in-out"
                          }}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>

                {/* Center Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  {activePieIndex != null && globalActivities[activePieIndex] ? (
                    <div className="text-center">
                      <div className="text-sm font-semibold text-muted-foreground max-w-[180px] truncate">
                        {globalActivities[activePieIndex].name}
                      </div>
                      <div className="text-3xl font-bold" style={{ color: globalActivities[activePieIndex].color }}>
                        {fmtHM(globalActivities[activePieIndex].avgPerDay)}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {globalActivities[activePieIndex].globalPercentage.toFixed(1)}%
                      </div>
                      <div className="text-xs text-muted-foreground capitalize mt-1">
                        {globalActivities[activePieIndex].type}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center">
                      <div className="text-xs uppercase text-muted-foreground">Total Tracked</div>
                      <div className="text-3xl font-bold">
                        {fmtHM(minutesToTime(totalTrackedMinutes / (filteredData.length || 1)))}
                      </div>
                      <div className="text-xs text-muted-foreground">per day</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Activity Legend */}
              <div className="flex-1 grid grid-cols-2 gap-2 max-h-[450px] overflow-y-auto pr-2">
                {globalActivities.map((activity, idx) => (
                  <div
                    key={`${activity.fullName}-${idx}`}
                    className={cn(
                      "flex items-center gap-2 p-2 rounded-md transition-all cursor-pointer",
                      activePieIndex === idx ? "bg-accent" : "hover:bg-accent/50"
                    )}
                    onMouseEnter={() => setActivePieIndex(idx)}
                    onMouseLeave={() => setActivePieIndex(null)}
                  >
                    <div
                      className="h-3 w-3 rounded-full flex-shrink-0"
                      style={{ backgroundColor: activity.color }}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium truncate text-sm">{activity.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {fmtHM(activity.avgPerDay)} • {activity.globalPercentage.toFixed(1)}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Type Filter Tabs */}
      <Tabs value={selectedType} onValueChange={(v) => setSelectedType(v as ActivityType | "all")} className="w-full">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="all">All Types</TabsTrigger>
          <TabsTrigger value="productive">Productive</TabsTrigger>
          <TabsTrigger value="passive">Passive</TabsTrigger>
          <TabsTrigger value="ressource">Resources</TabsTrigger>
          <TabsTrigger value="blocks">Blocks</TabsTrigger>
          <TabsTrigger value="neutral">Neutral</TabsTrigger>
        </TabsList>

        <TabsContent value={selectedType} className="mt-6 space-y-4">
          {filteredSummaries.map((summary) => {
            const typeSelection = getTypeSelection(summary.type);
            const hasSelection = typeSelection.count > 0;
            const allSelected = typeSelection.count === summary.activities.length;

            return (
              <Card key={summary.type} className={cn("overflow-hidden", TYPE_CONFIG[summary.type].bgColor)}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-background/50">
                        {summary.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl">
                          {TYPE_CONFIG[summary.type].label}
                        </CardTitle>
                        <CardDescription>
                          {summary.activities.length} activities tracked
                          {hasSelection && ` • ${typeSelection.count} selected`}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {/* Local Selection Summary */}
                      {hasSelection && (
                        <div className="text-right border-r pr-3">
                          <div className="text-sm text-muted-foreground">Selected</div>
                          <div className="text-lg font-bold" style={{ color: summary.color }}>
                            {fmtHM(typeSelection.avgPerDay)}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {typeSelection.percentage.toFixed(1)}% of type
                          </div>
                        </div>
                      )}

                      {/* Select/Deselect Button */}
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => allSelected ? deselectAllInType(summary.type) : selectAllInType(summary.type)}
                      >
                        {allSelected ? "Deselect All" : "Select All"}
                      </Button>

                      {/* Type Total */}
                      <div className="text-right">
                        <div className="text-2xl font-bold" style={{ color: summary.color }}>
                          {fmtHM(summary.avgPerDay)}
                        </div>
                        <div className="text-xs text-muted-foreground">avg per day</div>
                        <Badge variant="outline" className="mt-1">
                          {summary.type !== "neutral" && totalTrackedMinutes > 0
                            ? `${((summary.totalMinutes / totalTrackedMinutes) * 100).toFixed(1)}% of total`
                            : "N/A"}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>

              <CardContent className="space-y-3">
                <Separator />

                {viewMode === "progress" ? (
                  /* Progress Bar Mode */
                  <div className="space-y-4 pt-2">
                    {summary.activities.map((activity, idx) => (
                      <div key={`${activity.fullName}-${idx}`} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <Checkbox
                              checked={selectedActivities.has(activity.fullName)}
                              onCheckedChange={() => toggleActivity(activity.fullName)}
                            />
                            <div className="font-medium">{activity.name}</div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge variant="secondary" className="font-mono">
                              {fmtHM(activity.avgPerDay)}
                            </Badge>
                            <span className="text-muted-foreground min-w-[50px] text-right">
                              {activity.percentage.toFixed(1)}%
                            </span>
                          </div>
                        </div>
                        <Progress
                          value={activity.percentage}
                          className="h-2"
                          style={{
                            // @ts-expect-error: CSS custom property
                            "--progress-background": summary.color,
                          }}
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  /* Pie Chart Mode - Inspired by ActivityPieChart */
                  <div className="pt-2">
                    <div className="flex items-start gap-6">
                      {/* Elegant Pie Chart */}
                      <div className="flex-shrink-0 relative">
                        <ResponsiveContainer width={280} height={280}>
                          <PieChart>
                            <defs>
                              {summary.activities.slice(0, 8).map((_, i) => (
                                <radialGradient id={`grad-${summary.type}-${i}`} key={i}>
                                  <stop offset="0%" stopColor={summary.color} stopOpacity="0.85" />
                                  <stop offset="100%" stopColor={summary.color} stopOpacity="1" />
                                </radialGradient>
                              ))}
                              <filter id="innerShadow" x="-50%" y="-50%" width="200%" height="200%">
                                <feOffset dy="0.5" />
                                <feGaussianBlur stdDeviation="1.5" result="blur" />
                                <feComposite in="SourceGraphic" in2="blur" operator="arithmetic" k2="-1" k3="1" />
                              </filter>
                            </defs>
                            <Pie
                              data={summary.activities.slice(0, 8)}
                              cx="50%"
                              cy="50%"
                              innerRadius={65}
                              outerRadius={110}
                              dataKey="totalMinutes"
                              paddingAngle={2}
                              cornerRadius={6}
                              stroke="hsl(var(--background))"
                              strokeWidth={2}
                              startAngle={90}
                              endAngle={-270}
                              style={{ filter: "url(#innerShadow)" }}
                              onMouseEnter={(_, index) => setActivePieIndex(index)}
                              onMouseLeave={() => setActivePieIndex(null)}
                              activeIndex={activePieIndex ?? undefined}
                              activeShape={(props: SectorProps) => (
                                <Sector
                                  {...props}
                                  outerRadius={props.outerRadius ? props.outerRadius + 8 : 0}
                                  stroke="hsl(var(--foreground)/0.08)"
                                  strokeWidth={6}
                                />
                              )}
                              isAnimationActive
                              animationDuration={800}
                              animationEasing="ease-out"
                            >
                              {summary.activities.slice(0, 8).map((_, index) => (
                                <Cell
                                  key={`cell-${index}`}
                                  fill={`url(#grad-${summary.type}-${index})`}
                                  style={{
                                    filter: activePieIndex === index ? "brightness(1.2)" : "brightness(0.85)",
                                    transition: "all 0.3s ease-in-out"
                                  }}
                                />
                              ))}
                            </Pie>
                          </PieChart>
                        </ResponsiveContainer>

                        {/* Center Overlay */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                          {activePieIndex != null && summary.activities[activePieIndex] ? (
                            <div className="text-center">
                              <div className="text-sm font-semibold text-muted-foreground max-w-[120px] truncate">
                                {summary.activities[activePieIndex].name}
                              </div>
                              <div className="text-2xl font-bold" style={{ color: summary.color }}>
                                {fmtHM(summary.activities[activePieIndex].avgPerDay)}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {summary.activities[activePieIndex].percentage.toFixed(1)}%
                              </div>
                            </div>
                          ) : (
                            <div className="text-center">
                              <div className="text-xs uppercase text-muted-foreground">Total</div>
                              <div className="text-2xl font-bold" style={{ color: summary.color }}>
                                {fmtHM(summary.avgPerDay)}
                              </div>
                              <div className="text-xs text-muted-foreground">per day</div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Activity List with Checkboxes */}
                      <div className="flex-1 grid grid-cols-2 gap-3">
                        {summary.activities.map((activity, idx) => (
                          <div
                            key={`${activity.fullName}-${idx}`}
                            className="flex items-center gap-2 text-sm"
                          >
                            <Checkbox
                              checked={selectedActivities.has(activity.fullName)}
                              onCheckedChange={() => toggleActivity(activity.fullName)}
                            />
                            <div className="flex-1">
                              <div className="font-medium truncate">{activity.name}</div>
                              <div className="text-xs text-muted-foreground">
                                {fmtHM(activity.avgPerDay)} ({activity.percentage.toFixed(1)}%)
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
            );
          })}

          {filteredSummaries.length === 0 && (
            <Card>
              <CardContent className="py-12 text-center text-muted-foreground">
                No activities found for this type
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
