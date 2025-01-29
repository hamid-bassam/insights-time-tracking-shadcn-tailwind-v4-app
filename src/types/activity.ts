export type TimeValue = {
  hours: number;
  minutes: number;
};

export type ActivityType = 'beneficial' | 'destructive';

export type Activity = {
  name: string;
  trackedAvgPerDay: TimeValue | number | 'non-counted' | -1;
  goalAvgPerDay: TimeValue;
  type: ActivityType;
  description?: string;
  icon?: string;
  impressions?: string[];
};

export type WeekData = {
  weekNumber: number;
  activities: Activity[];
  globalRate: number;
  startDate: string;
  endDate: string;
};

export type ActivityData = WeekData[];