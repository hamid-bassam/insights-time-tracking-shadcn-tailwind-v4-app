/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { WeekData } from '@/types/activity';
import { timeToMinutes } from '@/utils/time';
import { motion } from 'framer-motion';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

interface WeeklyOverviewProps {
  weekData: WeekData;
}

export default function WeeklyOverview({ weekData }: WeeklyOverviewProps) {
  const chartData = weekData.activities.map(activity => ({
    name: activity.name,
    tracked: typeof activity.trackedAvgPerDay === 'object' ?
      timeToMinutes(activity.trackedAvgPerDay) :
      (activity.trackedAvgPerDay === 'non-counted' ? 0 : activity.trackedAvgPerDay),
    goal: timeToMinutes(activity.goalAvgPerDay),
    type: activity.type
  }));

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (!active || !payload) return null;

    return (
      <div className="bg-card p-4 rounded-lg border border-border shadow-lg">
        <p className="font-medium mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
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

  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Overview</CardTitle>
        <CardDescription>
          Activity distribution for Week {weekData.weekNumber}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <motion.div
          className="h-[400px]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              barGap={8}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="hsl(var(--border))"
                opacity={0.2}
              />
              <XAxis
                dataKey="name"
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
              <Bar
                dataKey="tracked"
                name="Tracked Time"
                radius={[4, 4, 0, 0]}
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.type === 'productive' ? 'hsl(var(--chart-1))' : 'hsl(var(--chart-2))'}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </CardContent>
    </Card>
  );
}