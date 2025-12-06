export type TimeValue = {
  hours: number;
  minutes: number;
};

export type ActivityType = 'productive' | 'passive' | 'ressource' | 'blocks' | 'neutral';

export type Activity = {
  name: string;
  trackedAvgPerDay: TimeValue  // | number | 'non-counted' | -1;
  goalAvgPerDay: TimeValue;
  type: ActivityType;
  description?: string;
  icon?: string;
  impressions?: string[];
  tag?: string;
};

export type WeekData = {
  weekNumber: number;
  activities: Activity[];
  globalRate: number;
  startDate: string;
  endDate: string;
};

export type ActivityData = WeekData[];

export type Phase = {
  id: string;
  name: string;
  focus: string;
  startWeek: number;
  endWeek: number;
  color: string;
  description?: string;
  goals?: string[];
};

export type YearTimeline = {
  year: number;
  phases: Phase[];
};