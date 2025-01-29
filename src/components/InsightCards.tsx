"use client";

import { WeekData } from '@/types/activity';
import { timeToMinutes } from '@/utils/time';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from 'recharts';

interface InsightCardsProps {
  weekData: WeekData;
}

export default function InsightCards({ weekData }: InsightCardsProps) {
  const totalTrackedTime = weekData.activities.reduce((acc, activity) => {
    if (typeof activity.trackedAvgPerDay === 'object') {
      return acc + timeToMinutes(activity.trackedAvgPerDay);
    }
    return acc + (typeof activity.trackedAvgPerDay === 'number' && activity.trackedAvgPerDay !== -1
      ? activity.trackedAvgPerDay
      : 0);
  }, 0);

  const pieData = weekData.activities.map(activity => ({
    name: activity.name,
    value: typeof activity.trackedAvgPerDay === 'object'
      ? timeToMinutes(activity.trackedAvgPerDay)
      : (typeof activity.trackedAvgPerDay === 'number' && activity.trackedAvgPerDay !== -1
        ? activity.trackedAvgPerDay
        : 0),
    type: activity.type
  }));

  const COLORS = [
    'hsl(var(--chart-1))',
    'hsl(var(--chart-2))',
    'hsl(var(--chart-3))',
    'hsl(var(--chart-4))',
    'hsl(var(--chart-5))'
  ];

  return (
    <div className="bg-card p-6 rounded-xl">
      <h2 className="text-xl font-semibold mb-4">Time Distribution</h2>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={150}
              fill="#8884d8"
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="bg-muted p-4 rounded-lg">
          <h3 className="text-sm font-medium text-muted-foreground">Global Rate</h3>
          <p className="text-2xl font-bold">{(weekData.globalRate * 100).toFixed(1)}%</p>
        </div>
        <div className="bg-muted p-4 rounded-lg">
          <h3 className="text-sm font-medium text-muted-foreground">Total Tracked Time</h3>
          <p className="text-2xl font-bold">{Math.round(totalTrackedTime / 60)}h</p>
        </div>
      </div>
    </div>
  );
}