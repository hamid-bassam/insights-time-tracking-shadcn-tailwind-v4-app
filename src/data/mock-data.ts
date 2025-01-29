import { ActivityData } from '@/types/activity';

export const mockActivityData: ActivityData = [
  {
    weekNumber: 1,
    startDate: '2024-03-01',
    endDate: '2024-03-07',
    activities: [
      {
        name: 'Sleep',
        trackedAvgPerDay: { hours: 7, minutes: 50 },
        goalAvgPerDay: { hours: 8, minutes: 0 },
        type: 'beneficial',
        description: 'Quality sleep time tracked',
        icon: 'moon',
        impressions: ['Better than last week', 'Close to goal']
      },
      {
        name: 'Social Media',
        trackedAvgPerDay: { hours: 2, minutes: 30 },
        goalAvgPerDay: { hours: 1, minutes: 0 },
        type: 'destructive',
        description: 'Passive time spent on social media',
        icon: 'smartphone',
        impressions: ['Exceeding limit', 'Consider reducing']
      },
      {
        name: 'Exercise',
        trackedAvgPerDay: { hours: 1, minutes: 15 },
        goalAvgPerDay: { hours: 1, minutes: 30 },
        type: 'beneficial',
        description: 'Physical activity and workout time',
        icon: 'dumbbell',
        impressions: ['Good consistency', 'Room for improvement']
      }
    ],
    globalRate: 0.575
  },
  {
    weekNumber: 2,
    startDate: '2024-03-08',
    endDate: '2024-03-14',
    activities: [
      {
        name: 'Sleep',
        trackedAvgPerDay: { hours: 8, minutes: 15 },
        goalAvgPerDay: { hours: 8, minutes: 0 },
        type: 'beneficial',
        description: 'Quality sleep time tracked',
        icon: 'moon',
        impressions: ['Exceeded goal', 'Great improvement']
      },
      {
        name: 'Social Media',
        trackedAvgPerDay: { hours: 1, minutes: 45 },
        goalAvgPerDay: { hours: 1, minutes: 0 },
        type: 'destructive',
        description: 'Passive time spent on social media',
        icon: 'smartphone',
        impressions: ['Better than last week', 'Still above goal']
      },
      {
        name: 'Exercise',
        trackedAvgPerDay: { hours: 1, minutes: 30 },
        goalAvgPerDay: { hours: 1, minutes: 30 },
        type: 'beneficial',
        description: 'Physical activity and workout time',
        icon: 'dumbbell',
        impressions: ['Met goal', 'Perfect balance']
      }
    ],
    globalRate: 0.725
  }
];