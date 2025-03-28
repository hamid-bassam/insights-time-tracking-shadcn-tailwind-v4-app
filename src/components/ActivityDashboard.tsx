"use client";

import { ActivityData, WeekData } from "@/types/activity";
import { motion } from "framer-motion";
import { useState } from "react";
import ActivityList from "./ActivityList";
import ActivityPieChart from "./ActivityPieChart";
import ActivityStats from "./ActivityStats";
import GlobalEvolution from "./GlobalEvolution";
import GoalComparison from "./GoalComparison";
import WeeklyOverview from "./WeeklyOverview";
import WeekSelector from "./WeekSelector";

interface ActivityDashboardProps {
  data: ActivityData;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};

export default function ActivityDashboard({ data }: ActivityDashboardProps) {
  const [selectedWeek, setSelectedWeek] = useState<WeekData>(data[data.length - 1]);

  return (
    <motion.div
      className="p-8 flex flex-col gap-10 max-w-7xl mx-auto text-gray-100 bg-gradient-to-br from-gray-900 to-black min-h-screen rounded-lg shadow-lg"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* 🚀 Titre */}
      <motion.h1 className="text-4xl font-bold text-center text-yellow-400 tracking-wide" variants={itemVariants}>
        Weekly Performance Overview
      </motion.h1>

      {/* 🔹 Week Selector (placé ici pour ne pas gêner le graphique) */}
      <motion.div variants={itemVariants} className="max-w-md mx-auto">
        <WeekSelector weeks={data} selectedWeek={selectedWeek} onSelectWeek={setSelectedWeek} />
      </motion.div>

      {/* 📊 Graphique Principal */}
      <motion.div variants={itemVariants} className="p-6 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
        <GlobalEvolution data={data} />
      </motion.div>

      {/* 🎯 Comparaison Objectifs */}
      <motion.div variants={itemVariants} className="p-6 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
        <GoalComparison weekData={selectedWeek} />
      </motion.div>

      {/* 🏆 Aperçu Hebdomadaire et Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.div variants={itemVariants} className="p-6 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
          <WeeklyOverview weekData={selectedWeek} />
        </motion.div>
        <motion.div variants={itemVariants} className="p-6 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
          <ActivityStats weekData={selectedWeek} />
        </motion.div>
        <motion.div variants={itemVariants} className="p-6 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
          <ActivityPieChart weekData={selectedWeek} />
        </motion.div>

      </div>

      {/* 📋 Liste des Activités */}
      <motion.div variants={itemVariants} className="p-6 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
        <ActivityList activities={selectedWeek.activities} />
      </motion.div>
    </motion.div>
  );
}
