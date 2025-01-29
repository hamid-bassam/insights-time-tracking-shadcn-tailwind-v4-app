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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ActivityData } from '@/types/activity';
import { timeToMinutes } from '@/utils/time';
import { TrendingDown, TrendingUp } from "lucide-react";
import { useState } from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis
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
    new Set(data.flatMap(week => week.activities.map(a => a.name)))
  );

  const chartData: ChartDataType[] = data.map(week => {
    const weekData: ChartDataType = {
      week: `Week ${week.weekNumber}`,
      date: new Date(week.startDate).toLocaleDateString(),
      globalRate: Math.round(week.globalRate * 100),
    };

    week.activities.forEach(activity => {
      weekData[activity.name] = typeof activity.trackedAvgPerDay === 'object'
        ? timeToMinutes(activity.trackedAvgPerDay)
        : (typeof activity.trackedAvgPerDay === 'number' && activity.trackedAvgPerDay !== -1
          ? activity.trackedAvgPerDay
          : 0);
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
    const colors = ['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))', 'hsl(var(--chart-4))', 'hsl(var(--chart-5))'];
    // const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f1c40f', '#9b59b6']; // Remplacez par vos couleurs

    acc[activity] = {
      label: activity,
      color: colors[index % colors.length],
    };
    return acc;
  }, {} as Record<string, { label: string; color: string }>);

  console.log("Chart Config:", chartConfig);
  const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
    if (!active || !payload) return null;

    return (
      <div className="bg-card p-4 rounded-lg border border-border shadow-lg">
        <p className="font-medium mb-2">{label}</p>
        {payload.map((entry, index) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span>{entry.name}: {entry.value} min</span>
          </div>
        ))}
      </div>
    );
  };

  const displayedActivities = selectedActivity === "all"
    ? allActivities
    : [selectedActivity];

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Global Evolution</CardTitle>
            <CardDescription>
              Activity tracking progress over time
            </CardDescription>
          </div>
          <Select
            defaultValue="all"
            onValueChange={setSelectedActivity}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select activity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Activities</SelectItem>
              {allActivities.map(activity => (
                <SelectItem key={activity} value={activity}>
                  {activity}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{
                top: 20,
                right: 20,
                left: 20,
                bottom: 20,
              }}
            >
              <defs>
                {displayedActivities.map((activity, index) => (
                  <linearGradient
                    key={activity}
                    id={`gradient-${activity}`}
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
                      stopColor={chartConfig[activity].color}
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor={chartConfig[activity].color}
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                ))}
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="hsl(var(--border))"
                opacity={0.2}
              />
              <XAxis
                dataKey="week"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickMargin={8}
              />
              <YAxis
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickMargin={8}
                tickFormatter={(value) => `${value}min`}
              />
              <Tooltip content={CustomTooltip} />
              {displayedActivities.map((activity) => (
                <Area
                  key={activity}
                  type="monotone"
                  dataKey={activity}
                  stackId={selectedActivity === "all" ? "1" : undefined}
                  stroke={chartConfig[activity].color}
                  fill={`url(#gradient-${activity})`}
                  fillOpacity={1}
                />
              ))}
            </AreaChart>
          </ResponsiveContainer>
        </div>
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