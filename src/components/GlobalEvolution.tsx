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
import { timeToMinutes } from "@/utils/time";
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

interface GlobalEvolutionProps {
  data: ActivityData;
}

type ChartDataType = {
  week: string;
  date: string;
  globalRate: number;
  [key: string]: string | number;
};

export default function GlobalEvolution({ data }: GlobalEvolutionProps) {
  const [selectedActivity, setSelectedActivity] = useState<string>("all");

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
    acc[activity] = {
      label: activity,
      color: colors[index % colors.length],
    };
    return acc;
  }, {} as ChartConfig);

  const displayedActivities = selectedActivity === "all" ? allActivities : [selectedActivity];

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Global Evolution</CardTitle>
            <CardDescription>Activity tracking progress over time</CardDescription>
          </div>
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
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="week" tickLine={false} axisLine={false} tickMargin={8} />
              <YAxis tickMargin={8} tickFormatter={(value) => `${value}min`} />
              <ChartTooltip content={<ChartTooltipContent indicator="dot" />} />
              {displayedActivities.map((activity) => (
                <Area
                  key={activity}
                  dataKey={activity}
                  type="monotone"
                  stroke={chartConfig[activity].color}
                  fill={chartConfig[activity].color}
                  stackId="a"
                  fillOpacity={0.4}
                />
              ))}
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
