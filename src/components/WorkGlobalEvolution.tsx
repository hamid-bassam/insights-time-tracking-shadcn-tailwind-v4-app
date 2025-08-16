/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formatTime, minutesToTime, timeToMinutes } from "@/utils/time";
import { TrendingDown, TrendingUp } from "lucide-react";
import { useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { WorkActivityData } from "../types/work-activity";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";

interface WorkGlobalEvolutionProps {
  data: WorkActivityData;
}

type ChartDataType = {
  week: string;
  date: string;
  globalRate: number;
  [key: string]: string | number;
};


// --- Helpers --------------------------------------------------

const TYPE_ORDER: Record<string, number> = {
  productive: 1,
  blocks: 2,
  passive: 3,
  ressource: 4,
  neutral: 5,
};

function sortActivitiesForStack(
  activities: string[],
  activityMeta: Map<string, { type: string; name: string }>
) {
  return [...activities].sort((a, b) => {
    const typeA = activityMeta.get(a)?.type ?? "neutral";
    const typeB = activityMeta.get(b)?.type ?? "neutral";
    return TYPE_ORDER[typeA] - TYPE_ORDER[typeB];
  });
}

export default function GlobalEvolution({ data }: WorkGlobalEvolutionProps) {

  const activityMeta = new Map<string, { type: string; name: string }>();

  data.forEach(week => {
    week.activities.forEach(a => {
      if (!activityMeta.has(a.name)) {
        activityMeta.set(a.name, {
          type: a.type,                                // ← utilise la vraie source
          name: a.name // .split('–')[0].split('-')[0],  // petit label lisible
        });
      }
    });
  });



  const [selectedActivity, setSelectedActivity] = useState<string>("all");
  const [typedActivity, setTypedActivity] = useState<string>("all");
  const [stack, setStack] = useState<boolean>(true);
  const [displayGoal, setDisplayGoal] = useState<boolean>(false);

  const switchStack = () => {
    setStack(prev => !prev);
  }

  const switchDisplayGoal = () => {
    setDisplayGoal(prev => !prev);
  }




  // const allActivities = Array.from(allActivitiesSet)
  const allActivities = Array.from(activityMeta.keys());


  const normalizedData = data.map(week => {
    const weekActivitySet = new Set(week.activities.map(a => a.name));
    const missing = allActivities
      .filter(n => !weekActivitySet.has(n))
      .map(n => ({
        name: n,
        trackedAvgPerDay: { hours: 0, minutes: 0 },
        goalAvgPerDay: { hours: 0, minutes: 0 },
        type: activityMeta.get(n)?.type ?? "neutral",
        description: `Tracking ${n} – ${activityMeta.get(n)?.type ?? "neutral"} time.`,
        icon: "activity",
        impressions: [],
      }));
    return { ...week, activities: [...week.activities, ...missing] };
  });







  const chartData: ChartDataType[] = normalizedData.map((week) => {
    const weekData: ChartDataType = {
      week: `S-${week.weekNumber}`, // Week
      date: new Date(week.startDate).toLocaleDateString(),
      globalRate: Math.round(week.globalRate * 100),
    };

    week.activities.forEach((activity) => {
      // console.log(week.weekNumber, activity.name);
      weekData[activity.name] = typeof activity.trackedAvgPerDay === "object"
        ? timeToMinutes(activity.trackedAvgPerDay)
        : typeof activity.trackedAvgPerDay === "number" && activity.trackedAvgPerDay !== -1
          ? activity.trackedAvgPerDay
          : 0;

      weekData[`${activity.name}_goalAvg`] = typeof activity.goalAvgPerDay === "object"
        ? timeToMinutes(activity.goalAvgPerDay)
        : 0;
    });

    return weekData;
  });

  const getGlobalTrend = () => {
    if (normalizedData.length < 2) return 0;
    const last = normalizedData.at(-1)!.globalRate || 0;
    const prev = normalizedData.at(-2)!.globalRate || 0;
    if (!prev) return 0;
    return ((last - prev) / prev) * 100;
  };


  const trend_ = getGlobalTrend();
  const trend = Number.isFinite(trend_) ? trend_ : 0;

  const chartConfig: ChartConfig = allActivities.reduce((acc, name) => {
    const meta = activityMeta.get(name);
    const t = meta?.type ?? "neutral";
    acc[name] = {
      label: meta?.name ?? name,
      color:
        t === "productive" ? "hsl(var(--chart-1))" :
          t === "passive" ? "hsl(var(--destructive))" :
            t === "ressource" ? "hsl(var(--chart-3))" :
              t === "blocks" ? "hsl(var(--primary))" :
                "hsl(var(--chart-4))",
    };
    return acc;
  }, {} as ChartConfig);

  const typedActivities =
    typedActivity === "all"
      ? allActivities
      : allActivities.filter(n => activityMeta.get(n)?.type === typedActivity);

  const filteredActivities =
    selectedActivity === "all" ? allActivities : [selectedActivity];

  const displayedActivitiesUnsorted = typedActivities.filter((activity) =>
    filteredActivities.includes(activity)
  );

  // ici on applique le tri
  const displayedActivities = sortActivitiesForStack(
    displayedActivitiesUnsorted,
    activityMeta);

  const displayedGoalActivities = displayedActivities.map(
    (activity) => `${activity}_goalAvg`
  );


  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex justify-between items-center ">
          <div>
            <CardTitle>Global Evolution</CardTitle>
            <CardDescription>Activity tracking progress over time</CardDescription>
          </div>
          <div className="flex flex-col gap-2">
            <Select defaultValue="all" onValueChange={setTypedActivity}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Activities</SelectItem>

                <SelectItem key={"productive"} value={"productive"}>
                  productive
                </SelectItem>
                <SelectItem key={"passive"} value={"passive"}>
                  passive
                </SelectItem>
                <SelectItem key={"ressource"} value={"ressource"}>
                  ressource
                </SelectItem>
                <SelectItem key={"blocks"} value={"blocks"}>
                  blocks
                </SelectItem>

              </SelectContent>
            </Select>
            <Select defaultValue="all" onValueChange={setSelectedActivity}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Select activity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Activities</SelectItem>
                {allActivities.map((activity) => (
                  <SelectItem key={activity} value={activity}>
                    {activity}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="flex items-center space-x-2">
              <Switch id="stack-switch" checked={stack} onCheckedChange={switchStack} />
              <Label htmlFor="stack-switch">Stack Charts</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="goal-switch" checked={displayGoal} onCheckedChange={switchDisplayGoal} />
              <Label htmlFor="goal-switch">Display Goal</Label>
            </div>

          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={"60vh"} minHeight={300} maxHeight={500}>
            <AreaChart data={chartData} >
              <CartesianGrid vertical={false} />
              <XAxis dataKey="week" tickLine={false} axisLine={false} tickMargin={8} angle={45} />
              <YAxis tickMargin={8} tickFormatter={(value) => formatTime(minutesToTime(Number(value)))} />

              <ReferenceLine
                y={480} // 8h en minutes 
                stroke="hsl(var(--muted-foreground))"
                strokeDasharray="3 3"
                label={{
                  value: "8h",
                  position: "left",
                  fill: "hsl(var(--muted-foreground))",
                  fontSize: 12
                }}
              />
              <ChartTooltip
                // formatter={(value, name, entry) => {
                //   return [name, formatTime(minutesToTime(Number(value)))];
                // }}
                content={< ChartTooltipContent
                  formatTimeValue
                  indicator="dot" />}
              />

              {displayedActivities.map((activity) => (
                <Area
                  key={activity}
                  dataKey={activity}
                  type="monotone"
                  stroke={chartConfig[activity]?.color}
                  fill={chartConfig[activity]?.color}
                  stackId={stack ? "activities" : undefined}
                  fillOpacity={0.4}
                />
              ))}

              {displayGoal && displayedGoalActivities.map((goalActivity) => {
                const baseActivity = goalActivity.replace("_goalAvg", "");
                return (
                  <Area
                    key={goalActivity}
                    dataKey={goalActivity}
                    type="monotone"
                    stroke={chartConfig[baseActivity].color}
                    // fill={chartConfig[baseActivity].color}
                    fill="none" // No fill for goal lines
                    strokeDasharray="4 4" // Dashed line to distinguish goals
                    fillOpacity={0.2} // Lighter fill for goal lines
                    stackId={stack ? "goals" : undefined}
                  />
                );
              })}
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              {trend > 0 ? (
                <>
                  Trending up by {trend.toFixed(1)}% <TrendingUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  Trending down by {Math.abs(trend).toFixed(1)}% <TrendingDown className="h-4 w-4" />
                </>
              )}
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              {new Date(normalizedData[0].startDate).toLocaleDateString()} - {new Date(normalizedData[normalizedData.length - 1].endDate).toLocaleDateString()}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card >
  );
}
