"use client";

import { motion } from "framer-motion";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { WorkActivityData, WorkWeekData } from "../types/work-activity";

interface WeekSelectorProps {
  weeks: WorkActivityData;
  selectedWeek: WorkWeekData;
  onSelectWeek: (week: WorkWeekData) => void;
}

export default function WeekSelector({ weeks, selectedWeek, onSelectWeek }: WeekSelectorProps) {
  const [currentIndex, setCurrentIndex] = useState(
    weeks.findIndex((week) => week.weekNumber === selectedWeek.weekNumber)
  );

  const handlePrev = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      onSelectWeek(weeks[newIndex]);
    }
  };

  const handleNext = () => {
    if (currentIndex < weeks.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      onSelectWeek(weeks[newIndex]);
    }
  };

  return (
    <motion.div
      className="flex items-center justify-between w-full px-4 py-2 bg-gray-800 rounded-lg shadow-md border border-gray-700 text-gray-100"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* 🔹 Bouton Précédent */}
      <button
        onClick={handlePrev}
        disabled={currentIndex === 0}
        className="p-2 rounded-lg hover:bg-gray-700 transition disabled:opacity-50"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      {/* 📆 Semaine sélectionnée */}
      <div className="flex flex-col items-center">
        <span className="text-sm text-gray-400">Week {selectedWeek.weekNumber}</span>
        <span className="flex items-center gap-1 text-lg font-semibold">
          <Calendar className="h-5 w-5 text-yellow-400" />
          {new Date(selectedWeek.startDate).toLocaleDateString()} - {new Date(selectedWeek.endDate).toLocaleDateString()}
        </span>
      </div>

      {/* 🔹 Bouton Suivant */}
      <button
        onClick={handleNext}
        disabled={currentIndex === weeks.length - 1}
        className="p-2 rounded-lg hover:bg-gray-700 transition disabled:opacity-50"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </motion.div>
  );
}
