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
  X
} from "lucide-react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

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
  const [viewMode, setViewMode] = useState<"progress" | "pie">("progress");
  const [selectedActivities, setSelectedActivities] = useState<Set<string>>(new Set());

  // Calculate annual synthesis
  const typeSummaries = useMemo(() => {
    const summaryMap = new Map<ActivityType, { totalMinutes: number; activities: Map<string, number> }>();

    // Initialize for all types
    const types: ActivityType[] = ["productive", "passive", "ressource", "blocks", "neutral"];
    types.forEach(type => {
      summaryMap.set(type, { totalMinutes: 0, activities: new Map() });
    });

    // Aggregate data across all weeks
    data.forEach(week => {
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
    const numWeeks = data.length || 1;
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
  }, [data]);

  const filteredSummaries = selectedType === "all"
    ? typeSummaries
    : typeSummaries.filter(s => s.type === selectedType);

  // Total excluding neutral
  const totalTrackedMinutes = useMemo(() => {
    return typeSummaries
      .filter(s => s.type !== "neutral")
      .reduce((sum, s) => sum + s.totalMinutes, 0);
  }, [typeSummaries]);

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

    const numWeeks = data.length || 1;
    return {
      count: selectedActivities.size,
      totalMinutes,
      avgPerDay: minutesToTime(totalMinutes / numWeeks),
      percentage: totalTrackedMinutes > 0 ? (totalMinutes / totalTrackedMinutes) * 100 : 0,
    };
  }, [selectedActivities, typeSummaries, totalTrackedMinutes, data.length]);

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

    const numWeeks = data.length || 1;
    return {
      count,
      totalMinutes,
      avgPerDay: minutesToTime(totalMinutes / numWeeks),
      percentage: typeSummary.totalMinutes > 0 ? (totalMinutes / typeSummary.totalMinutes) * 100 : 0,
    };
  };

  // Generate AI Analysis Report
  const downloadAIReport = () => {
    const numWeeks = data.length;

    let report = `# Annual Activity Synthesis Report\n\n`;
    report += `**Period:** ${numWeeks} weeks\n`;
    report += `**Date Range:** ${data[0]?.startDate} to ${data[data.length - 1]?.endDate}\n\n`;

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
    a.download = `annual-activity-synthesis-${new Date().toISOString().split('T')[0]}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Header Card with Controls */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-3xl">Annual Activity Synthesis</CardTitle>
              <CardDescription className="mt-2">
                Comprehensive breakdown of your activity types over {data.length} weeks
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

      {/* Global & Local Averages */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {/* Global Average Card */}
        <Card className="border-2 border-primary/50">
          <CardHeader className="pb-3">
            <CardDescription className="text-xs">Global Average</CardDescription>
            <CardTitle className="text-2xl">
              {fmtHM(minutesToTime(totalTrackedMinutes / (data.length || 1)))}
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
                <div className="text-sm text-muted-foreground">Total Annual</div>
                <div className="text-2xl font-bold">
                  {fmtHM(minutesToTime(selectedSummary.totalMinutes / (data.length || 1)))}
                </div>
                <div className="text-xs text-muted-foreground">average per day</div>
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
                  /* Pie Chart Mode */
                  <div className="pt-2">
                    <div className="flex items-start gap-6">
                      {/* Pie Chart */}
                      <div className="flex-shrink-0">
                        <ResponsiveContainer width={250} height={250}>
                          <PieChart>
                            <Pie
                              data={summary.activities.slice(0, 8)}
                              cx="50%"
                              cy="50%"
                              innerRadius={60}
                              outerRadius={100}
                              dataKey="totalMinutes"
                              paddingAngle={2}
                            >
                              {summary.activities.slice(0, 8).map((_, index) => (
                                <Cell
                                  key={`cell-${index}`}
                                  fill={summary.color}
                                  opacity={1 - (index * 0.08)}
                                />
                              ))}
                            </Pie>
                          </PieChart>
                        </ResponsiveContainer>
                        <div className="text-center -mt-8">
                          <div className="text-sm text-muted-foreground">Total</div>
                          <div className="text-xl font-bold" style={{ color: summary.color }}>
                            {fmtHM(summary.avgPerDay)}
                          </div>
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
