import { TimeValue } from '@/types/activity';

export const timeToMinutes = (time: TimeValue): number => {
  return time.hours * 60 + time.minutes;
};

export const minutesToTime = (minutes: number): TimeValue => {
  return {
    hours: Math.floor(minutes / 60),
    minutes: minutes % 60
  };
};

export const formatTime = (time: TimeValue): string => {
  return `${time.hours}h${time.minutes > 0 ? ` ${time.minutes}m` : ''}`;
};

export const calculateProgress = (tracked: TimeValue, goal: TimeValue): number => {
  const trackedMinutes = timeToMinutes(tracked);
  const goalMinutes = timeToMinutes(goal);
  return (trackedMinutes / goalMinutes) * 100;
};