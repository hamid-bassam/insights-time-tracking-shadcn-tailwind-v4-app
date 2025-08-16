/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";
import { AlertTriangle, BarChart3, Brain, Clock, PieChart, Star, Target } from "lucide-react";
import { TimeValue } from "../types/activity";
import { WorkWeekData } from "../types/work-activity";
import { timeToMinutes } from "../utils/time";


interface WorkActivityStatsProps {
  weekData: WorkWeekData;
}

const toMin = (t?: TimeValue | null) => (t ? t.hours * 60 + t.minutes : 0);

export const WorkActivityStats = ({ weekData }: WorkActivityStatsProps) => {
  const wi = weekData["weekly_insights"]?.[0];

  // Fallback si pas d'insights
  if (!wi) {
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
            No weekly insight available for this week.
          </p>
        </CardHeader>
      </motion.div>
    );
  }

  // 1) Total tracked time (hebdo)
  const KPI_totalTrackedMin = toMin(wi.totalWork);
  const KPI_totalTrackedLabel = `${Math.floor(KPI_totalTrackedMin / 60)}h${String(KPI_totalTrackedMin % 60).padStart(2, "0")}`;
  const totalTrackedTime = KPI_totalTrackedMin
  // 2) Productivity ratio (%)
  const KPI_productivityRatio = Number(wi.productivity_ratio ?? 0).toFixed(2);

  // Base activités (moyenne par jour travaillé)
  const activitiesArr = weekData.activities ?? [];
  const activitiesWithMin = activitiesArr.map(a => ({
    name: a.name,
    minutes: toMin(a.trackedAvgPerDay),
    type: a.type,
  }));
  const sortedActivities_ = [...activitiesWithMin].sort((a, b) => b.minutes - a.minutes);
  // Trier les activités par temps suivi, en excluant "Sleep"
  const sortedActivities = [...weekData.activities]
    .map(activity => ({
      name: activity.name,
      value: timeToMinutes(activity.trackedAvgPerDay),
      type: activity.type
    }))
    .filter(activity => !activity.name.toLowerCase().includes("sleep")) // Exclure le sommeil
    .sort((a, b) => b.value - a.value);
  const topActivity = sortedActivities.length > 0 ? sortedActivities[0] : null;
  const topPercentage = topActivity ? ((topActivity.value / totalTrackedTime) * 100).toFixed(1) : "0";

  // 3) Top activités (top 5 + "Other")
  const top5 = sortedActivities.slice(0, 5);
  const otherSum = sortedActivities_.slice(5).reduce((s, a) => s + a.minutes, 0);
  const top5WithOther = otherSum > 0 ? [...top5, { name: "Other Activities", minutes: otherSum, type: "neutral" }] : top5;

  // 4) Avg temps productif (par jour travaillé)
  const KPI_avgProductiveMin = toMin(wi.byCategory?.avg_productive);
  const KPI_avgProductiveLabel = `${Math.floor(KPI_avgProductiveMin / 60)}h${String(KPI_avgProductiveMin % 60).padStart(2, "0")}`;

  // 5) Avg temps de work (par jour travaillé)
  const KPI_avgWorkMin = toMin(wi.avgPerDay);
  const KPI_avgWorkLabel = `${Math.floor(KPI_avgWorkMin / 60)}h${String(KPI_avgWorkMin % 60).padStart(2, "0")}`;

  // 6) Focus concentration (part des Top-3 activités dans la journée type)
  const sumAllPerDay = activitiesWithMin.reduce((s, a) => s + a.minutes, 0) || 1;
  const sumTop3 = sortedActivities_.slice(0, 3).reduce((s, a) => s + a.minutes, 0);
  const KPI_focusTop3Pct = ((sumTop3 / sumAllPerDay) * 100).toFixed(1);

  // Détermination de la catégorie dominante (pour le header)
  const dominantCat = [
    { name: "productive", minutes: KPI_avgProductiveMin },
    { name: "blocks", minutes: toMin(wi.byCategory?.blocks) },
    { name: "passive", minutes: toMin(wi.byCategory?.passive) },
    { name: "ressource", minutes: toMin(wi.byCategory?.ressource) },
  ].sort((a, b) => b.minutes - a.minutes)[0];

  const topCatPctOfAvgDay =
    KPI_avgWorkMin > 0 ? ((dominantCat.minutes / KPI_avgWorkMin) * 100).toFixed(1) : "0";

  return (
    <motion.div
      className="bg-card p-6 rounded-xl shadow-lg border border-gray-700"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <CardHeader className="text-center">
        <h2 className="text-2xl font-semibold">📈 Weekly Insights</h2>
        {/* <p className="text-muted-foreground text-sm mt-1">
          {dominantCat?.minutes
            ? `🚀 Dominant category: ${dominantCat.name} (${topCatPctOfAvgDay}% of an average worked day)`
            : "No significant category this week."}
        </p> */}
        <p className="text-muted-foreground text-sm mt-1">
          {topActivity
            ? `🚀 Your dominant activity this week was **${topActivity.name}**, making up **${topPercentage}%** of your tracked time.`
            : "No significant activity tracked this week."}
        </p>
      </CardHeader>

      <div className="grid grid-cols-3 gap-4 mt-4">
        {/* 1) Total Tracked Time (week) */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className="bg-muted p-4 rounded-lg flex flex-col items-center"
        >
          <Clock className="text-blue-400 w-8 h-8" />
          <p className="text-sm text-muted-foreground">Total Tracked Time</p>
          <p className="text-xl font-bold">{KPI_totalTrackedLabel}</p>
        </motion.div>

        {/* 2) Productivity Rate (%) */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className="bg-muted p-4 rounded-lg flex flex-col items-center"
        >
          <Brain className="text-green-400 w-8 h-8" />
          <p className="text-sm text-muted-foreground">Productivity Rate</p>
          <p className="text-xl font-bold text-yellow-400">{KPI_productivityRatio}%</p>
        </motion.div>

        {/* 3) Top Activities (avg/day worked) */}
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

        {/* 5) Avg Work Time (per worked day) */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className="bg-muted p-4 rounded-lg flex flex-col items-center"
        >
          <BarChart3 className="w-8 h-8" />
          <p className="text-sm text-muted-foreground">Avg Work Time</p>
          <p className="text-xl font-bold">{KPI_avgWorkLabel}</p>
        </motion.div>

        {/* 4) Avg Productive Time (per worked day) */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className="bg-muted p-4 rounded-lg flex flex-col items-center"
        >
          <Target className="text-green-400 w-8 h-8" />
          <p className="text-sm text-muted-foreground">Avg Productive Time</p>
          <p className="text-xl font-bold">{KPI_avgProductiveLabel}</p>
        </motion.div>

        {/* 6) Focus Top-3 Share (%) */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className="bg-muted p-4 rounded-lg flex flex-col items-center"
        >
          <PieChart className="w-8 h-8" />
          <p className="text-sm text-muted-foreground">Focus Top-3 (avg/day)</p>
          <p className="text-xl font-bold">{KPI_focusTop3Pct}%</p>
        </motion.div>
      </div>
    </motion.div>
  );
};
