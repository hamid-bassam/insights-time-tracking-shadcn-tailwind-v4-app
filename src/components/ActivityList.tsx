"use client";

import { Activity } from '@/types/activity';
import { formatTime } from '@/utils/time';
import { Activity as ActivityIcon, Dumbbell, Moon, Smartphone } from 'lucide-react';

interface ActivityListProps {
  activities: Activity[];
  className?: string;
}

const iconMap = {
  'moon': Moon,
  'smartphone': Smartphone,
  'dumbbell': Dumbbell,
  'activity': ActivityIcon
};

export default function ActivityList({ activities, className = '' }: ActivityListProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {activities.map((activity, index) => {
        const IconComponent = activity.icon ? iconMap[activity.icon as keyof typeof iconMap] : ActivityIcon;

        return (
          <div
            key={index}
            className="bg-card p-6 rounded-xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <IconComponent className="w-6 h-6" />
              <h3 className="text-lg font-semibold">{activity.name}</h3>
            </div>

            <div className="space-y-2">
              <p className="text-muted-foreground">
                Tracked: {
                  typeof activity.trackedAvgPerDay === 'object'
                    ? formatTime(activity.trackedAvgPerDay)
                    : activity.trackedAvgPerDay === 'non-counted'
                      ? 'Not Counted'
                      : activity.trackedAvgPerDay === -1
                        ? 'No Data'
                        : `${activity.trackedAvgPerDay} minutes`
                }
              </p>
              <p className="text-muted-foreground">
                Goal: {formatTime(activity.goalAvgPerDay)}
              </p>
            </div>

            {activity.impressions && (
              <div className="mt-4">
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                  {activity.impressions.map((impression, i) => (
                    <li key={i}>{impression}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}