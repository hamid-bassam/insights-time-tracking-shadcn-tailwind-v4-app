"use client";

import { CardHeader } from "@/components/ui/card";
import { WeekData } from "@/types/activity";
import { timeToMinutes } from "@/utils/time";
import { motion } from "framer-motion";
import { AlertTriangle, Brain, Clock, Star } from "lucide-react";

interface ActivityStatsProps {
  weekData: WeekData;
}

export default function ActivityStats({ weekData }: ActivityStatsProps) {
  const totalTrackedTime = weekData.activities.reduce((acc, activity) => {
    if (typeof activity.trackedAvgPerDay === "object") {
      return acc + timeToMinutes(activity.trackedAvgPerDay);
    }
    return acc + (typeof activity.trackedAvgPerDay === "number" && activity.trackedAvgPerDay !== -1
      ? activity.trackedAvgPerDay
      : 0);
  }, 0);

  // Trier les activités par temps suivi, en excluant "Sleep"
  const sortedActivities = [...weekData.activities]
    .map(activity => ({
      name: activity.name,
      value: timeToMinutes(activity.trackedAvgPerDay),
      type: activity.type
    }))
    .filter(activity => !activity.name.toLowerCase().includes("sleep")) // Exclure le sommeil
    .sort((a, b) => b.value - a.value);

  // Déterminer l'activité la plus imposante hors sommeil
  const topActivity = sortedActivities.length > 0 ? sortedActivities[0] : null;
  const topPercentage = topActivity ? ((topActivity.value / totalTrackedTime) * 100).toFixed(1) : "0";

  return (
    <motion.div
      className="bg-card p-6 rounded-xl shadow-lg border border-gray-700"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <CardHeader className="text-center">
        <h2 className="text-2xl font-semibold">📈 Weekly Insights</h2>
        <p className="text-muted-foreground text-sm mt-1">
          {topActivity
            ? `🚀 Your dominant activity this week was **${topActivity.name}**, making up **${topPercentage}%** of your tracked time.`
            : "No significant activity tracked this week."}
        </p>
      </CardHeader>

      <div className="grid grid-cols-3 gap-4 mt-4">
        {/* Total Tracked Time */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className="bg-muted p-4 rounded-lg flex flex-col items-center"
        >
          <Clock className="text-blue-400 w-8 h-8" />
          <p className="text-sm text-muted-foreground">Total Tracked Time</p>
          <p className="text-xl font-bold">{Math.round(totalTrackedTime / 60)}h</p>
        </motion.div>

        {/* Productivity Rate */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className="bg-muted p-4 rounded-lg flex flex-col items-center"
        >
          <Brain className="text-green-400 w-8 h-8" />
          <p className="text-sm text-muted-foreground">Productivity Rate</p>
          <p className="text-xl font-bold text-yellow-400">{(weekData.globalRate * 100).toFixed(1)}%</p>
        </motion.div>

        {/* Top Activity ou Warning */}
        {topActivity ? (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="bg-muted p-4 rounded-lg flex flex-col items-center"
          >
            <Star className="text-yellow-400 w-8 h-8" />
            <p className="text-sm text-muted-foreground">Top Activity</p>
            <p className="text-lg font-bold">{topActivity.name}</p>
          </motion.div>
        ) : (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="bg-muted p-4 rounded-lg flex flex-col items-center"
          >
            <AlertTriangle className="text-red-400 w-8 h-8" />
            <p className="text-sm text-muted-foreground">No Activity Logged</p>
            <p className="text-xl font-bold text-red-400">⚠️ Check Tracking</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
