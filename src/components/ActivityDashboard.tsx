"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ActivityData, WeekData } from '@/types/activity';
import WeeklyOverview from './WeeklyOverview';
import ActivityList from './ActivityList';
import WeekSelector from './WeekSelector';
import InsightCards from './InsightCards';
import GlobalEvolution from './GlobalEvolution';
import GoalComparison from './GoalComparison';

interface ActivityDashboardProps {
  data: ActivityData;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

export default function ActivityDashboard({ data }: ActivityDashboardProps) {
  const [selectedWeek, setSelectedWeek] = useState<WeekData>(data[data.length - 1]);

  return (
    <motion.div 
      className="container mx-auto px-4 py-8 space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 
        className="text-3xl font-bold"
        variants={itemVariants}
      >
        Activity Insights
      </motion.h1>
      
      <motion.div variants={itemVariants}>
        <WeekSelector 
          weeks={data} 
          selectedWeek={selectedWeek} 
          onSelectWeek={setSelectedWeek} 
        />
      </motion.div>

      <div className="grid grid-cols-1 gap-8">
        <motion.div variants={itemVariants}>
          <GlobalEvolution data={data} />
        </motion.div>

        <motion.div variants={itemVariants}>
          <GoalComparison weekData={selectedWeek} />
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div variants={itemVariants}>
            <WeeklyOverview weekData={selectedWeek} />
          </motion.div>
          <motion.div variants={itemVariants}>
            <InsightCards weekData={selectedWeek} />
          </motion.div>
        </div>

        <motion.div variants={itemVariants}>
          <ActivityList 
            activities={selectedWeek.activities}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}