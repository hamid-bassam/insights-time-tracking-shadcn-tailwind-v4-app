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
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ActivityData } from "@/types/activity";
import { formatTime, minutesToTime, timeToMinutes } from "@/utils/time";
import { TrendingDown, TrendingUp } from "lucide-react";
import { useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";

interface GlobalEvolutionProps {
  data: ActivityData;
}

type ChartDataType = {
  week: string;
  date: string;
  globalRate: number;
  [key: string]: string | number;
};

const getType = (activity: string) => {
  const split = activity.split('–');
  const split_ = activity.split('-');
  let type = "neutral";
  if (split.length > 1) {
    type = split[1].trim().includes("productive") ? "productive" : split[1].trim().includes("passive") ? "passive" : split[1].trim().includes("ressource") ? "ressource" : split[1].trim().includes("blocks") ? "blocks" : "neutral";
  } else if (split_.length > 1) {
    type = split_[1].trim().includes("productive") ? "productive" : split_[1].trim().includes("passive") ? "passive" : split[1].trim().includes("ressource") ? "ressource" : split[1].trim().includes("blocks") ? "blocks" : "neutral";
  }
  else {
    type = "neutral";
  }
  return type;
}

export default function GlobalEvolution({ data }: GlobalEvolutionProps) {
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


  const allActivities = Array.from(
    new Set(data.flatMap((week) => week.activities.map((a) => a.name)))
  );

  const chartData: ChartDataType[] = data.map((week) => {
    const weekData: ChartDataType = {
      week: `Week ${week.weekNumber}`,
      date: new Date(week.startDate).toLocaleDateString(),
      globalRate: Math.round(week.globalRate * 100),
    };

    week.activities.forEach((activity) => {
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
    if (data.length < 2) return 0;
    const lastWeek = data[data.length - 1].globalRate;
    const previousWeek = data[data.length - 2].globalRate;
    return ((lastWeek - previousWeek) / previousWeek) * 100;
  };

  const trend = getGlobalTrend();

  const chartConfig = allActivities.reduce((acc, activity, index) => {
    const colors = [
      "hsl(var(--chart-1))",
      "hsl(var(--chart-2))",
      "hsl(var(--chart-3))",
      "hsl(var(--chart-4))",
      "hsl(var(--chart-5))",
    ];
    const split = activity.split('–');
    const split_ = activity.split('-');
    let type = "neutral";
    if (split.length > 1) {
      type = split[1].trim().includes("productive") ? "productive" : split[1].trim().includes("passive") ? "passive" : split[1].trim().includes("ressource") ? "ressource" : split[1].trim().includes("blocks") ? "blocks" : "neutral";
    } else if (split_.length > 1) {
      type = split_[1].trim().includes("productive") ? "productive" : split_[1].trim().includes("passive") ? "passive" : split[1].trim().includes("ressource") ? "ressource" : split[1].trim().includes("blocks") ? "blocks" : "neutral";
    }
    else {
      type = "neutral";
    }

    // const type = activity.split('-')[1].includes("productive") ? "productive" : "distracting";
    acc[activity] = {
      label: activity.split('–')[0] || activity.split('-')[0],
      color: type === "productive" ? "hsl(var(--chart-1))" : type === "passive" ? "hsl(var(--destructive))" : type === "ressource" ? "hsl(var(--chart-3))" : type === "blocks" ? "hsl(var(--primary))" : "hsl(var(--chart-4))",
      // color: colors[index % colors.length],
    };
    return acc;
  }, {} as ChartConfig);
  // const filteredActivities = allActivities.filter((activity) => activity.includes(typedActivity));

  const typedActivities = typedActivity === "all" ? allActivities : allActivities.filter((activity) => getType(activity) === typedActivity);


  const filteredActivities = selectedActivity === "all" ? allActivities : [selectedActivity];

  const displayedActivities = typedActivities.filter((activity) => filteredActivities.includes(activity));
  const displayedGoalActivities = displayedActivities.map((activity) => `${activity}_goalAvg`);

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center ">
          <div>
            <CardTitle>Global Evolution</CardTitle>
            <CardDescription>Activity tracking progress over time</CardDescription>
          </div>
          <div className="flex flex-col gap-2">
            <Select defaultValue="all" onValueChange={setTypedActivity}>
              <SelectTrigger className="w-[180px]">
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
              <SelectTrigger className="w-[180px]">
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
              <Switch id="airplane-mode" checked={stack} onCheckedChange={() => { switchStack(); console.log(stack) }} />
              <Label htmlFor="airplane-mode">Stack Charts</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="airplane-mode" checked={displayGoal} onCheckedChange={switchDisplayGoal} />
              <Label htmlFor="airplane-mode">Display Goal</Label>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={chartData} >
              <CartesianGrid vertical={false} />
              <XAxis dataKey="week" tickLine={false} axisLine={false} tickMargin={8} />
              <YAxis tickMargin={8} tickFormatter={(value) => formatTime(minutesToTime(value))} />
              <ChartTooltip content={<ChartTooltipContent indicator="dot" />} />
              {displayedActivities.map((activity) => (
                <Area
                  key={activity}
                  dataKey={activity}
                  type="monotone"
                  stroke={chartConfig[activity].color}
                  fill={chartConfig[activity].color}
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
              {new Date(data[0].startDate).toLocaleDateString()} - {new Date(data[data.length - 1].endDate).toLocaleDateString()}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
