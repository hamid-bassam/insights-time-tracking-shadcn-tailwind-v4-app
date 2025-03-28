"use client";

import { Card, CardHeader } from '@/components/ui/card';
import { WeekData } from '@/types/activity';
import { timeToMinutes } from '@/utils/time';
import { motion } from 'framer-motion';
import { AlertTriangle, Brain, Clock, Star } from 'lucide-react';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

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

  // Trier les activités par temps suivi
  const sortedActivities = [...weekData.activities]
    .map(activity => ({
      name: activity.name,
      value: typeof activity.trackedAvgPerDay === 'object'
        ? timeToMinutes(activity.trackedAvgPerDay)
        : (typeof activity.trackedAvgPerDay === 'number' && activity.trackedAvgPerDay !== -1
          ? activity.trackedAvgPerDay
          : 0),
      type: activity.type
    }))
    .sort((a, b) => b.value - a.value);

  // Vérifier si Sleep est dominant (ex: +50% du total)
  const sleepActivity = sortedActivities.find(a => a.name.toLowerCase().includes("sleep"));
  const isSleepDominant = sleepActivity && sleepActivity.value / totalTrackedTime > 0.5;

  // Sélectionner la **vraie** activité principale après Sleep
  const topActivity = sortedActivities.find(a => a.name !== "Sleep") || sortedActivities[0];
  const topPercentage = ((topActivity.value / totalTrackedTime) * 100).toFixed(1);

  // Garder les 5 plus grandes et fusionner le reste
  const topActivities = sortedActivities.slice(0, 5);
  const otherActivities = sortedActivities.slice(5);
  const otherTotal = otherActivities.reduce((sum, act) => sum + act.value, 0);

  const pieData = otherTotal > 0
    ? [...topActivities, { name: "Other Activities", value: otherTotal, type: "neutral" }]
    : topActivities;

  // Générer un aperçu de la semaine
  const generateWeeklySummary = () => {
    if (topActivities.length === 0) return "No tracked activities this week.";
    if (isSleepDominant) {
      return `💤 Sleep was the dominant activity this week. Ensure a balance between rest and productivity!`;
    }
    return `🚀 You spent the most time on **${topActivity.name}**, making up **${topPercentage}%** of your tracked time.`;
  };

  const COLORS = [
    "hsl(var(--chart-1))",
    "hsl(var(--chart-2))",
    "hsl(var(--chart-3))",
    "hsl(var(--chart-4))",
    "hsl(var(--chart-5))",
    "hsl(var(--muted))" // Couleur pour "Other Activities"
  ];

  return (
    <motion.div
      className="bg-card p-6 rounded-xl shadow-lg border border-gray-700"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <CardHeader className="text-center">
        <h2 className="text-2xl font-semibold">📊 Weekly Insights</h2>
        <p className="text-muted-foreground text-sm mt-1">{generateWeeklySummary()}</p>
      </CardHeader>

      {/* 🚀 Key Stats */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        <Card className="p-4 flex flex-col items-center">
          <Clock className="text-blue-400 w-8 h-8" />
          <p className="text-sm text-muted-foreground">Total Tracked Time</p>
          <p className="text-xl font-bold">{Math.round(totalTrackedTime / 60)}h</p>
        </Card>

        <Card className="p-4 flex flex-col items-center">
          <Brain className="text-green-400 w-8 h-8" />
          <p className="text-sm text-muted-foreground">Productivity Rate</p>
          <p className="text-xl font-bold text-yellow-400">{(weekData.globalRate * 100).toFixed(1)}%</p>
        </Card>

        {isSleepDominant ? (
          <Card className="p-4 flex flex-col items-center">
            <AlertTriangle className="text-red-400 w-8 h-8" />
            <p className="text-sm text-muted-foreground">Sleep Dominance</p>
            <p className="text-xl font-bold text-red-400">⚠️ Adjust Balance</p>
          </Card>
        ) : (
          <Card className="p-4 flex flex-col items-center">
            <Star className="text-yellow-400 w-8 h-8" />
            <p className="text-sm text-muted-foreground">Top Activity</p>
            <p className="text-lg font-bold">{topActivity.name}</p>
          </Card>
        )}
      </div>

      {/* 📊 Pie Chart */}
      <div className="h-[550px] mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={140}
              fill="#8884d8"
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value: number) => `${Math.round(value / 60)}h`} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
