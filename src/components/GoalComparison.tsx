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
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

interface GoalComparisonProps {
  weekData: WeekData;
}

export default function GoalComparison({ weekData }: GoalComparisonProps) {
  const chartData = weekData.activities.map(activity => ({
    name: activity.name,
    tracked: typeof activity.trackedAvgPerDay === 'object'
      ? timeToMinutes(activity.trackedAvgPerDay)
      : (typeof activity.trackedAvgPerDay === 'number' && activity.trackedAvgPerDay !== -1
        ? activity.trackedAvgPerDay
        : 0),
    goal: timeToMinutes(activity.goalAvgPerDay),
    efficiency: typeof activity.trackedAvgPerDay === 'object'
      ? (timeToMinutes(activity.trackedAvgPerDay) / timeToMinutes(activity.goalAvgPerDay)) * 100
      : (typeof activity.trackedAvgPerDay === 'number' && activity.trackedAvgPerDay !== -1
        ? (activity.trackedAvgPerDay / timeToMinutes(activity.goalAvgPerDay)) * 100
        : 0)
  }));

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (!active || !payload) return null;

    return (
      <div className="bg-card p-4 rounded-lg border border-[hsl(var(--border)] shadow-lg">
        <p className="font-medium mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span>
              {entry.name}: {entry.value.toFixed(0)}
              {entry.name === 'efficiency' ? '%' : ' min'}
            </span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Goal Comparison</CardTitle>
        <CardDescription>
          Tracked time vs goals for Week {weekData.weekNumber}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <motion.div
          className="h-[400px] w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              barGap={0}
              barCategoryGap="20%"
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
                yAxisId="left"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickMargin={8}
                tickFormatter={(value) => `${value}min`}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickMargin={8}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip content={CustomTooltip} />
              <Legend />
              <Bar
                yAxisId="left"
                dataKey="tracked"
                fill="hsl(var(--chart-1))"
                name="Tracked Time"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                yAxisId="left"
                dataKey="goal"
                fill="hsl(var(--chart-2))"
                name="Goal Time"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                yAxisId="right"
                dataKey="efficiency"
                fill="hsl(var(--chart-3))"
                name="Efficiency"
                radius={[4, 4, 0, 0]}
              />
              <ReferenceLine
                y={100}
                yAxisId="right"
                stroke="hsl(var(--chart-5))"
                strokeDasharray="3 3"
                label={{
                  value: "Goal Target",
                  position: "right",
                  fill: "hsl(var(--muted-foreground))",
                  fontSize: 12
                }}
              />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </CardContent>
    </Card>
  );
}