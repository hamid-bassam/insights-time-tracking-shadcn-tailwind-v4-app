"use client";

import { ActivityData, WeekData } from '@/types/activity';

interface WeekSelectorProps {
  weeks: ActivityData;
  selectedWeek: WeekData;
  onSelectWeek: (week: WeekData) => void;
}

export default function WeekSelector({ weeks, selectedWeek, onSelectWeek }: WeekSelectorProps) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4">
      {weeks.map((week) => (
        <button
          key={week.weekNumber}
          onClick={() => onSelectWeek(week)}
          className={`
            px-6 py-3 rounded-lg whitespace-nowrap
            ${week.weekNumber === selectedWeek.weekNumber
              ? 'bg-primary text-primary-foreground'
              : 'bg-card text-card-foreground'
            }
          `}
        >
          Week {week.weekNumber}
          <span className="block text-sm opacity-75">
            {new Date(week.startDate).toLocaleDateString()} - {new Date(week.endDate).toLocaleDateString()}
          </span>
        </button>
      ))}
    </div>
  );
}