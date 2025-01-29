import { ActivityData } from '@/types/activity';

// export const mockActivityData1: ActivityData = [
//   {
//     weekNumber: 1,
//     startDate: '2024-03-01',
//     endDate: '2024-03-07',
//     activities: [
//       {
//         name: 'Sleep',
//         trackedAvgPerDay: { hours: 7, minutes: 50 },
//         goalAvgPerDay: { hours: 8, minutes: 0 },
//         type: 'productive',
//         description: 'Quality sleep time tracked',
//         icon: 'moon',
//         impressions: ['Better than last week', 'Close to goal']
//       },
//       {
//         name: 'Social Media',
//         trackedAvgPerDay: { hours: 2, minutes: 30 },
//         goalAvgPerDay: { hours: 1, minutes: 0 },
//         type: 'destructive',
//         description: 'Passive time spent on social media',
//         icon: 'smartphone',
//         impressions: ['Exceeding limit', 'Consider reducing']
//       },
//       {
//         name: 'Exercise',
//         trackedAvgPerDay: { hours: 1, minutes: 15 },
//         goalAvgPerDay: { hours: 1, minutes: 30 },
//         type: 'productive',
//         description: 'Physical activity and workout time',
//         icon: 'dumbbell',
//         impressions: ['Good consistency', 'Room for improvement']
//       }
//     ],
//     globalRate: 0.575
//   },
//   {
//     weekNumber: 2,
//     startDate: '2024-03-08',
//     endDate: '2024-03-14',
//     activities: [
//       {
//         name: 'Sleep',
//         trackedAvgPerDay: { hours: 8, minutes: 15 },
//         goalAvgPerDay: { hours: 8, minutes: 0 },
//         type: 'productive',
//         description: 'Quality sleep time tracked',
//         icon: 'moon',
//         impressions: ['Exceeded goal', 'Great improvement']
//       },
//       {
//         name: 'Social Media',
//         trackedAvgPerDay: { hours: 1, minutes: 45 },
//         goalAvgPerDay: { hours: 1, minutes: 0 },
//         type: 'destructive',
//         description: 'Passive time spent on social media',
//         icon: 'smartphone',
//         impressions: ['Better than last week', 'Still above goal']
//       },
//       {
//         name: 'Exercise',
//         trackedAvgPerDay: { hours: 1, minutes: 30 },
//         goalAvgPerDay: { hours: 1, minutes: 30 },
//         type: 'productive',
//         description: 'Physical activity and workout time',
//         icon: 'dumbbell',
//         impressions: ['Met goal', 'Perfect balance']
//       }
//     ],
//     globalRate: 0.725
//   }
// ];


export const mockActivityData: ActivityData = JSON.parse(
  JSON.stringify(


    [
      {
        "weekNumber": 1,
        "startDate": "2024-03-01",
        "endDate": "2024-03-07",
        "activities": [
          {
            "name": "nan",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking nan time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Sleep",
            "trackedAvgPerDay": {
              "hours": 5,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 8,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking sleep time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Meals",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking meals time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Bio Needs (shower, toilet)",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking bio needs (shower, toilet) time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Walk",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 30
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 30
            },
            "type": "neutral",
            "description": "Tracking walk time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Sport",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking sport time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Family",
            "trackedAvgPerDay": {
              "hours": 1,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 2,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking family time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Diverse Responsibilities",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking diverse responsibilities time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Pauses",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking pauses time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Daily Reporting & Activity Analysis",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking daily reporting & activity analysis time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Mentor",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking mentor time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Direct/Deep Conversations",
            "trackedAvgPerDay": {
              "hours": 1,
              "minutes": 30
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 45
            },
            "type": "neutral",
            "description": "Tracking direct/deep conversations time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Learning",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking learning time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Management (calls, logistics, etc.)",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking management (calls, logistics, etc.) time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Strategy",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking strategy time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Vision",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking vision time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Todolist",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking todolist time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Collaboration",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking collaboration time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Tracking App development",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking tracking app development time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Prospecting",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking prospecting time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "LinkedIn Strategy",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking linkedin strategy time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Articles Written",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking articles written time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Script Writing",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking script writing time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Reels Recording",
            "trackedAvgPerDay": {
              "hours": 3,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 1,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking reels recording time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "CapCut Editing",
            "trackedAvgPerDay": {
              "hours": 1,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 45
            },
            "type": "neutral",
            "description": "Tracking capcut editing time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Administrative Tasks",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking administrative tasks time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Phone Calls",
            "trackedAvgPerDay": {
              "hours": 1,
              "minutes": 30
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 45
            },
            "type": "neutral",
            "description": "Tracking phone calls time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Hobbies",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking hobbies time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Unproductive Transport",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "Tracking unproductive transport time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Meditation",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking meditation time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Chill Time",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking chill time time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Reflection (without writing)",
            "trackedAvgPerDay": {
              "hours": 4,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 1,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking reflection (without writing) time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Insomnia",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking insomnia time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Passive Time (social media, etc.)",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "passive",
            "description": "Tracking passive time (social media, etc.) time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Unreported Time",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking unreported time time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Rate ",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking rate  time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Pro Insta (channel)",
            "trackedAvgPerDay": {
              "hours": 2,
              "minutes": 25
            },
            "goalAvgPerDay": {
              "hours": 1,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking pro insta (channel) time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Personal Insta",
            "trackedAvgPerDay": {
              "hours": 1,
              "minutes": 14
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 30
            },
            "type": "neutral",
            "description": "Tracking personal insta time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Code Time",
            "trackedAvgPerDay": {
              "hours": 2,
              "minutes": 25
            },
            "goalAvgPerDay": {
              "hours": 4,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking code time time.",
            "icon": "activity",
            "impressions": []
          }
        ],
        "globalRate": -2.0
      },
      {
        "weekNumber": 2,
        "startDate": "2024-03-08",
        "endDate": "2024-03-14",
        "activities": [
          {
            "name": "nan",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking nan time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Sleep",
            "trackedAvgPerDay": {
              "hours": 8,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 8,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking sleep time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Meals",
            "trackedAvgPerDay": {
              "hours": 1,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 1,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking meals time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Bio Needs (shower, toilet)",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking bio needs (shower, toilet) time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Walk",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 10
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 30
            },
            "type": "neutral",
            "description": "Tracking walk time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Sport",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking sport time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Family",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking family time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Diverse Responsibilities",
            "trackedAvgPerDay": {
              "hours": 3,
              "minutes": 20
            },
            "goalAvgPerDay": {
              "hours": 3,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking diverse responsibilities time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Pauses",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking pauses time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Daily Reporting & Activity Analysis",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking daily reporting & activity analysis time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Mentor",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking mentor time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Direct/Deep Conversations",
            "trackedAvgPerDay": {
              "hours": 4,
              "minutes": 15
            },
            "goalAvgPerDay": {
              "hours": 2,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking direct/deep conversations time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Learning",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking learning time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Management (calls, logistics, etc.)",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking management (calls, logistics, etc.) time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Strategy",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking strategy time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Vision",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking vision time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Todolist",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking todolist time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Collaboration",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking collaboration time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Tracking App development",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking tracking app development time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Prospecting",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking prospecting time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "LinkedIn Strategy",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking linkedin strategy time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Articles Written",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking articles written time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Script Writing",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking script writing time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Reels Recording",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 1,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking reels recording time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "CapCut Editing",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 45
            },
            "type": "neutral",
            "description": "Tracking capcut editing time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Administrative Tasks",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking administrative tasks time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Phone Calls",
            "trackedAvgPerDay": {
              "hours": 1,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 45
            },
            "type": "neutral",
            "description": "Tracking phone calls time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Hobbies",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 10
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 30
            },
            "type": "neutral",
            "description": "Tracking hobbies time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Unproductive Transport",
            "trackedAvgPerDay": {
              "hours": 4,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 2,
              "minutes": 0
            },
            "type": "productive",
            "description": "Tracking unproductive transport time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Meditation",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking meditation time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Chill Time",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking chill time time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Reflection (without writing)",
            "trackedAvgPerDay": {
              "hours": 1,
              "minutes": 30
            },
            "goalAvgPerDay": {
              "hours": 1,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking reflection (without writing) time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Insomnia",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking insomnia time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Passive Time (social media, etc.)",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "passive",
            "description": "Tracking passive time (social media, etc.) time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Unreported Time",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 8
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking unreported time time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Rate ",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking rate  time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Pro Insta (channel)",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 8
            },
            "goalAvgPerDay": {
              "hours": 1,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking pro insta (channel) time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Personal Insta",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 14
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 30
            },
            "type": "neutral",
            "description": "Tracking personal insta time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Code Time",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 4,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking code time time.",
            "icon": "activity",
            "impressions": []
          }
        ],
        "globalRate": -2.0
      },
      {
        "weekNumber": 3,
        "startDate": "2024-03-15",
        "endDate": "2024-03-21",
        "activities": [
          {
            "name": "nan",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking nan time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Sleep",
            "trackedAvgPerDay": {
              "hours": 6,
              "minutes": 30
            },
            "goalAvgPerDay": {
              "hours": 7,
              "minutes": 40
            },
            "type": "neutral",
            "description": "Tracking sleep time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Meals",
            "trackedAvgPerDay": {
              "hours": 2,
              "minutes": 7
            },
            "goalAvgPerDay": {
              "hours": 2,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking meals time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Bio Needs (shower, toilet)",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 22
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 30
            },
            "type": "neutral",
            "description": "Tracking bio needs (shower, toilet) time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Walk",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 17
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 30
            },
            "type": "neutral",
            "description": "Tracking walk time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Sport",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 11
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 30
            },
            "type": "neutral",
            "description": "Tracking sport time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Family",
            "trackedAvgPerDay": {
              "hours": 4,
              "minutes": 35
            },
            "goalAvgPerDay": {
              "hours": 2,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking family time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Diverse Responsibilities",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking diverse responsibilities time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Pauses",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 19
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 30
            },
            "type": "neutral",
            "description": "Tracking pauses time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Daily Reporting & Activity Analysis",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 32
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 30
            },
            "type": "neutral",
            "description": "Tracking daily reporting & activity analysis time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Mentor",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking mentor time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Direct/Deep Conversations",
            "trackedAvgPerDay": {
              "hours": 1,
              "minutes": 53
            },
            "goalAvgPerDay": {
              "hours": 2,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking direct/deep conversations time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Learning",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking learning time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Management (calls, logistics, etc.)",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking management (calls, logistics, etc.) time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Strategy",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking strategy time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Vision",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking vision time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Todolist",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking todolist time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Collaboration",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking collaboration time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Tracking App development",
            "trackedAvgPerDay": {
              "hours": 1,
              "minutes": 46
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking tracking app development time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Prospecting",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking prospecting time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "LinkedIn Strategy",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking linkedin strategy time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Articles Written",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking articles written time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Script Writing",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking script writing time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Reels Recording",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 17
            },
            "goalAvgPerDay": {
              "hours": 1,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking reels recording time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "CapCut Editing",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 45
            },
            "type": "neutral",
            "description": "Tracking capcut editing time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Administrative Tasks",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking administrative tasks time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Phone Calls",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 20
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 30
            },
            "type": "neutral",
            "description": "Tracking phone calls time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Hobbies",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 21
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 30
            },
            "type": "neutral",
            "description": "Tracking hobbies time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Unproductive Transport",
            "trackedAvgPerDay": {
              "hours": 1,
              "minutes": 55
            },
            "goalAvgPerDay": {
              "hours": 1,
              "minutes": 0
            },
            "type": "productive",
            "description": "Tracking unproductive transport time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Meditation",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking meditation time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Chill Time",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking chill time time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Reflection (without writing)",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking reflection (without writing) time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Insomnia",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking insomnia time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Passive Time (social media, etc.)",
            "trackedAvgPerDay": {
              "hours": 1,
              "minutes": 33
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 30
            },
            "type": "passive",
            "description": "Tracking passive time (social media, etc.) time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Unreported Time",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking unreported time time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Rate ",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking rate  time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Pro Insta (channel)",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 13
            },
            "goalAvgPerDay": {
              "hours": 1,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking pro insta (channel) time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Personal Insta",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 30
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 30
            },
            "type": "neutral",
            "description": "Tracking personal insta time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Code Time",
            "trackedAvgPerDay": {
              "hours": 1,
              "minutes": 7
            },
            "goalAvgPerDay": {
              "hours": 4,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking code time time.",
            "icon": "activity",
            "impressions": []
          }
        ],
        "globalRate": 0.503
      },
      {
        "weekNumber": 4,
        "startDate": "2024-03-22",
        "endDate": "2024-03-28",
        "activities": [
          {
            "name": "nan",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking nan time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Sleep",
            "trackedAvgPerDay": {
              "hours": 7,
              "minutes": 50
            },
            "goalAvgPerDay": {
              "hours": 7,
              "minutes": 40
            },
            "type": "neutral",
            "description": "Tracking sleep time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Meals",
            "trackedAvgPerDay": {
              "hours": 2,
              "minutes": 20
            },
            "goalAvgPerDay": {
              "hours": 1,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking meals time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Bio Needs (shower, toilet)",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 40
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 30
            },
            "type": "neutral",
            "description": "Tracking bio needs (shower, toilet) time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Walk",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 5
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 15
            },
            "type": "neutral",
            "description": "Tracking walk time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Sport",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 30
            },
            "type": "neutral",
            "description": "Tracking sport time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Family",
            "trackedAvgPerDay": {
              "hours": 1,
              "minutes": 10
            },
            "goalAvgPerDay": {
              "hours": 1,
              "minutes": 15
            },
            "type": "neutral",
            "description": "Tracking family time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Diverse Responsibilities",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 35
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 30
            },
            "type": "neutral",
            "description": "Tracking diverse responsibilities time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Pauses",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 32
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 30
            },
            "type": "neutral",
            "description": "Tracking pauses time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Daily Reporting & Activity Analysis",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 33
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 15
            },
            "type": "neutral",
            "description": "Tracking daily reporting & activity analysis time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Mentor",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking mentor time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Direct/Deep Conversations",
            "trackedAvgPerDay": {
              "hours": 1,
              "minutes": 33
            },
            "goalAvgPerDay": {
              "hours": 1,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking direct/deep conversations time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Learning",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking learning time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Management (calls, logistics, etc.)",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking management (calls, logistics, etc.) time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Strategy",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking strategy time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Vision",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking vision time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Todolist",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking todolist time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Collaboration",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking collaboration time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Tracking App development",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking tracking app development time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Prospecting",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking prospecting time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "LinkedIn Strategy",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking linkedin strategy time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Articles Written",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking articles written time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Script Writing",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking script writing time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Reels Recording",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 1,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking reels recording time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "CapCut Editing",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 45
            },
            "type": "neutral",
            "description": "Tracking capcut editing time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Administrative Tasks",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking administrative tasks time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Phone Calls",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 26
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 20
            },
            "type": "neutral",
            "description": "Tracking phone calls time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Hobbies",
            "trackedAvgPerDay": {
              "hours": 1,
              "minutes": 1
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 30
            },
            "type": "neutral",
            "description": "Tracking hobbies time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Unproductive Transport",
            "trackedAvgPerDay": {
              "hours": 1,
              "minutes": 55
            },
            "goalAvgPerDay": {
              "hours": 1,
              "minutes": 0
            },
            "type": "productive",
            "description": "Tracking unproductive transport time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Meditation",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking meditation time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Chill Time",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 12
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 1
            },
            "type": "neutral",
            "description": "Tracking chill time time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Reflection (without writing)",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking reflection (without writing) time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Insomnia",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking insomnia time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Passive Time (social media, etc.)",
            "trackedAvgPerDay": {
              "hours": 1,
              "minutes": 15
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 30
            },
            "type": "passive",
            "description": "Tracking passive time (social media, etc.) time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Unreported Time",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 12
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking unreported time time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Rate ",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking rate  time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Pro Insta (channel)",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 22
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 30
            },
            "type": "neutral",
            "description": "Tracking pro insta (channel) time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Personal Insta",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 48
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 30
            },
            "type": "neutral",
            "description": "Tracking personal insta time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Code Time",
            "trackedAvgPerDay": {
              "hours": 1,
              "minutes": 46
            },
            "goalAvgPerDay": {
              "hours": 4,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking code time time.",
            "icon": "activity",
            "impressions": []
          }
        ],
        "globalRate": 0.641
      },
      {
        "weekNumber": 5,
        "startDate": "2024-03-29",
        "endDate": "2024-04-04",
        "activities": [
          {
            "name": "nan",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking nan time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Sleep",
            "trackedAvgPerDay": {
              "hours": 8,
              "minutes": 11
            },
            "goalAvgPerDay": {
              "hours": 8,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking sleep time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Meals",
            "trackedAvgPerDay": {
              "hours": 1,
              "minutes": 15
            },
            "goalAvgPerDay": {
              "hours": 1,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking meals time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Bio Needs (shower, toilet)",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 27
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 30
            },
            "type": "neutral",
            "description": "Tracking bio needs (shower, toilet) time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Walk",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 15
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 15
            },
            "type": "neutral",
            "description": "Tracking walk time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Sport",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 30
            },
            "type": "neutral",
            "description": "Tracking sport time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Family",
            "trackedAvgPerDay": {
              "hours": 1,
              "minutes": 57
            },
            "goalAvgPerDay": {
              "hours": 1,
              "minutes": 15
            },
            "type": "neutral",
            "description": "Tracking family time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Diverse Responsibilities",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 33
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 30
            },
            "type": "neutral",
            "description": "Tracking diverse responsibilities time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Pauses",
            "trackedAvgPerDay": {
              "hours": 1,
              "minutes": 10
            },
            "goalAvgPerDay": {
              "hours": 1,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking pauses time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Daily Reporting & Activity Analysis",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 33
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 15
            },
            "type": "neutral",
            "description": "Tracking daily reporting & activity analysis time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Mentor",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking mentor time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Direct/Deep Conversations",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 40
            },
            "goalAvgPerDay": {
              "hours": 1,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking direct/deep conversations time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Learning",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 8
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking learning time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Management (calls, logistics, etc.)",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking management (calls, logistics, etc.) time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Strategy",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking strategy time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Vision",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking vision time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Todolist",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking todolist time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Collaboration",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking collaboration time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Tracking App development",
            "trackedAvgPerDay": {
              "hours": 3,
              "minutes": 50
            },
            "goalAvgPerDay": {
              "hours": 4,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking tracking app development time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Prospecting",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking prospecting time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "LinkedIn Strategy",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking linkedin strategy time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Articles Written",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking articles written time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Script Writing",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking script writing time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Reels Recording",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 1,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking reels recording time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "CapCut Editing",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 15
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 45
            },
            "type": "neutral",
            "description": "Tracking capcut editing time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Administrative Tasks",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking administrative tasks time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Phone Calls",
            "trackedAvgPerDay": {
              "hours": 1,
              "minutes": 13
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 20
            },
            "type": "neutral",
            "description": "Tracking phone calls time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Hobbies",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 30
            },
            "type": "neutral",
            "description": "Tracking hobbies time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Unproductive Transport",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 13
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 15
            },
            "type": "productive",
            "description": "Tracking unproductive transport time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Meditation",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 10
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 20
            },
            "type": "neutral",
            "description": "Tracking meditation time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Chill Time",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 8
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 10
            },
            "type": "neutral",
            "description": "Tracking chill time time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Reflection (without writing)",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking reflection (without writing) time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Insomnia",
            "trackedAvgPerDay": {
              "hours": 1,
              "minutes": 30
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 30
            },
            "type": "neutral",
            "description": "Tracking insomnia time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Passive Time (social media, etc.)",
            "trackedAvgPerDay": {
              "hours": 1,
              "minutes": 31
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 25
            },
            "type": "passive",
            "description": "Tracking passive time (social media, etc.) time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Unreported Time",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 10
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking unreported time time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Rate ",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking rate  time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Pro Insta (channel)",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 31
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 30
            },
            "type": "neutral",
            "description": "Tracking pro insta (channel) time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Personal Insta",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 26
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 30
            },
            "type": "neutral",
            "description": "Tracking personal insta time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Code Time",
            "trackedAvgPerDay": {
              "hours": 3,
              "minutes": 50
            },
            "goalAvgPerDay": {
              "hours": 4,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking code time time.",
            "icon": "activity",
            "impressions": []
          }
        ],
        "globalRate": 0.75
      },
      {
        "weekNumber": 6,
        "startDate": "2024-04-05",
        "endDate": "2024-04-11",
        "activities": [
          {
            "name": "nan",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking nan time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Sleep",
            "trackedAvgPerDay": {
              "hours": 7,
              "minutes": 35
            },
            "goalAvgPerDay": {
              "hours": 7,
              "minutes": 30
            },
            "type": "neutral",
            "description": "Tracking sleep time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Meals",
            "trackedAvgPerDay": {
              "hours": 1,
              "minutes": 10
            },
            "goalAvgPerDay": {
              "hours": 1,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking meals time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Bio Needs (shower, toilet)",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 28
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 30
            },
            "type": "neutral",
            "description": "Tracking bio needs (shower, toilet) time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Walk",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 26
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 15
            },
            "type": "neutral",
            "description": "Tracking walk time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Sport",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 30
            },
            "type": "neutral",
            "description": "Tracking sport time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Family",
            "trackedAvgPerDay": {
              "hours": 1,
              "minutes": 30
            },
            "goalAvgPerDay": {
              "hours": 1,
              "minutes": 15
            },
            "type": "neutral",
            "description": "Tracking family time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Diverse Responsibilities",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 43
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 30
            },
            "type": "neutral",
            "description": "Tracking diverse responsibilities time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Pauses",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 49
            },
            "goalAvgPerDay": {
              "hours": 1,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking pauses time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Daily Reporting & Activity Analysis",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 48
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 15
            },
            "type": "neutral",
            "description": "Tracking daily reporting & activity analysis time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Mentor",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking mentor time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Direct/Deep Conversations",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 37
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 30
            },
            "type": "neutral",
            "description": "Tracking direct/deep conversations time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Learning",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 55
            },
            "goalAvgPerDay": {
              "hours": 1,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking learning time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Management (calls, logistics, etc.)",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 58
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 30
            },
            "type": "neutral",
            "description": "Tracking management (calls, logistics, etc.) time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Strategy",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking strategy time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Vision",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking vision time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Todolist",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking todolist time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Collaboration",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking collaboration time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Tracking App development",
            "trackedAvgPerDay": {
              "hours": 2,
              "minutes": 46
            },
            "goalAvgPerDay": {
              "hours": 3,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking tracking app development time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Prospecting",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking prospecting time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "LinkedIn Strategy",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking linkedin strategy time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Articles Written",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking articles written time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Script Writing",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking script writing time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Reels Recording",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 6
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 45
            },
            "type": "neutral",
            "description": "Tracking reels recording time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "CapCut Editing",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 27
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 45
            },
            "type": "neutral",
            "description": "Tracking capcut editing time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Administrative Tasks",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking administrative tasks time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Phone Calls",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 4
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 15
            },
            "type": "neutral",
            "description": "Tracking phone calls time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Hobbies",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 1
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 15
            },
            "type": "neutral",
            "description": "Tracking hobbies time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Unproductive Transport",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 41
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 30
            },
            "type": "productive",
            "description": "Tracking unproductive transport time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Meditation",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 3
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 10
            },
            "type": "neutral",
            "description": "Tracking meditation time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Chill Time",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 33
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 10
            },
            "type": "neutral",
            "description": "Tracking chill time time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Reflection (without writing)",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 10
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 15
            },
            "type": "neutral",
            "description": "Tracking reflection (without writing) time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Insomnia",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 43
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 20
            },
            "type": "neutral",
            "description": "Tracking insomnia time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Passive Time (social media, etc.)",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 46
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 25
            },
            "type": "passive",
            "description": "Tracking passive time (social media, etc.) time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Unreported Time",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 2
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking unreported time time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Rate ",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking rate  time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Pro Insta (channel)",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 39
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 30
            },
            "type": "neutral",
            "description": "Tracking pro insta (channel) time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Personal Insta",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 39
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 30
            },
            "type": "neutral",
            "description": "Tracking personal insta time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Code Time",
            "trackedAvgPerDay": {
              "hours": 2,
              "minutes": 46
            },
            "goalAvgPerDay": {
              "hours": 3,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking code time time.",
            "icon": "activity",
            "impressions": []
          }
        ],
        "globalRate": 0.82
      },
      {
        "weekNumber": 7,
        "startDate": "2024-04-12",
        "endDate": "2024-04-18",
        "activities": [
          {
            "name": "nan",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking nan time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Sleep",
            "trackedAvgPerDay": {
              "hours": 6,
              "minutes": 20
            },
            "goalAvgPerDay": {
              "hours": 6,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking sleep time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Meals",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 58
            },
            "goalAvgPerDay": {
              "hours": 1,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking meals time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Bio Needs (shower, toilet)",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 36
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 30
            },
            "type": "neutral",
            "description": "Tracking bio needs (shower, toilet) time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Walk",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 18
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 15
            },
            "type": "neutral",
            "description": "Tracking walk time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Sport",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 15
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 15
            },
            "type": "neutral",
            "description": "Tracking sport time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Family",
            "trackedAvgPerDay": {
              "hours": 1,
              "minutes": 28
            },
            "goalAvgPerDay": {
              "hours": 1,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking family time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Diverse Responsibilities",
            "trackedAvgPerDay": {
              "hours": 1,
              "minutes": 30
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 20
            },
            "type": "neutral",
            "description": "Tracking diverse responsibilities time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Pauses",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 32
            },
            "goalAvgPerDay": {
              "hours": 1,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking pauses time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Daily Reporting & Activity Analysis",
            "trackedAvgPerDay": {
              "hours": 1,
              "minutes": 5
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 15
            },
            "type": "neutral",
            "description": "Tracking daily reporting & activity analysis time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Mentor",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 27
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 50
            },
            "type": "neutral",
            "description": "Tracking mentor time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Direct/Deep Conversations",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 28
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 30
            },
            "type": "neutral",
            "description": "Tracking direct/deep conversations time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Learning",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 22
            },
            "goalAvgPerDay": {
              "hours": 1,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking learning time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Management (calls, logistics, etc.)",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 24
            },
            "goalAvgPerDay": {
              "hours": 1,
              "minutes": 30
            },
            "type": "neutral",
            "description": "Tracking management (calls, logistics, etc.) time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Strategy",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 32
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 17
            },
            "type": "neutral",
            "description": "Tracking strategy time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Vision",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 5
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 10
            },
            "type": "neutral",
            "description": "Tracking vision time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Todolist",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 4
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 10
            },
            "type": "neutral",
            "description": "Tracking todolist time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Collaboration",
            "trackedAvgPerDay": {
              "hours": 3,
              "minutes": 33
            },
            "goalAvgPerDay": {
              "hours": 2,
              "minutes": 17
            },
            "type": "neutral",
            "description": "Tracking collaboration time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Tracking App development",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 36
            },
            "goalAvgPerDay": {
              "hours": 3,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking tracking app development time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Prospecting",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 2
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 10
            },
            "type": "neutral",
            "description": "Tracking prospecting time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "LinkedIn Strategy",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking linkedin strategy time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Articles Written",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 12
            },
            "type": "neutral",
            "description": "Tracking articles written time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Script Writing",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 10
            },
            "type": "neutral",
            "description": "Tracking script writing time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Reels Recording",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 2
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 25
            },
            "type": "neutral",
            "description": "Tracking reels recording time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "CapCut Editing",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 9
            },
            "goalAvgPerDay": {
              "hours": 1,
              "minutes": 20
            },
            "type": "neutral",
            "description": "Tracking capcut editing time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Administrative Tasks",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 10
            },
            "type": "neutral",
            "description": "Tracking administrative tasks time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Phone Calls",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 44
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 10
            },
            "type": "neutral",
            "description": "Tracking phone calls time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Hobbies",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 4
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 10
            },
            "type": "neutral",
            "description": "Tracking hobbies time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Unproductive Transport",
            "trackedAvgPerDay": {
              "hours": 1,
              "minutes": 43
            },
            "goalAvgPerDay": {
              "hours": 1,
              "minutes": 30
            },
            "type": "productive",
            "description": "Tracking unproductive transport time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Meditation",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 8
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 10
            },
            "type": "neutral",
            "description": "Tracking meditation time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Chill Time",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 23
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 20
            },
            "type": "neutral",
            "description": "Tracking chill time time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Reflection (without writing)",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 15
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 10
            },
            "type": "neutral",
            "description": "Tracking reflection (without writing) time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Insomnia",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 23
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 15
            },
            "type": "neutral",
            "description": "Tracking insomnia time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Passive Time (social media, etc.)",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 9
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 20
            },
            "type": "passive",
            "description": "Tracking passive time (social media, etc.) time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Unreported Time",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 14
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking unreported time time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Rate ",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking rate  time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Pro Insta (channel)",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 33
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 50
            },
            "type": "neutral",
            "description": "Tracking pro insta (channel) time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Personal Insta",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 31
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 50
            },
            "type": "neutral",
            "description": "Tracking personal insta time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Code Time",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 29
            },
            "goalAvgPerDay": {
              "hours": 3,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking code time time.",
            "icon": "activity",
            "impressions": []
          }
        ],
        "globalRate": 0.787
      },
      {
        "weekNumber": 8,
        "startDate": "2024-04-19",
        "endDate": "2024-04-25",
        "activities": [
          {
            "name": "nan",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking nan time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Sleep",
            "trackedAvgPerDay": {
              "hours": 8,
              "minutes": 10
            },
            "goalAvgPerDay": {
              "hours": 7,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking sleep time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Meals",
            "trackedAvgPerDay": {
              "hours": 1,
              "minutes": 4
            },
            "goalAvgPerDay": {
              "hours": 1,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking meals time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Bio Needs (shower, toilet)",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 53
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 30
            },
            "type": "neutral",
            "description": "Tracking bio needs (shower, toilet) time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Walk",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 10
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 10
            },
            "type": "neutral",
            "description": "Tracking walk time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Sport",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking sport time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Family",
            "trackedAvgPerDay": {
              "hours": 1,
              "minutes": 50
            },
            "goalAvgPerDay": {
              "hours": 1,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking family time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Diverse Responsibilities",
            "trackedAvgPerDay": {
              "hours": 1,
              "minutes": 19
            },
            "goalAvgPerDay": {
              "hours": 1,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking diverse responsibilities time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Pauses",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 37
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 45
            },
            "type": "neutral",
            "description": "Tracking pauses time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Daily Reporting & Activity Analysis",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 55
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 30
            },
            "type": "neutral",
            "description": "Tracking daily reporting & activity analysis time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Mentor",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking mentor time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Direct/Deep Conversations",
            "trackedAvgPerDay": {
              "hours": 1,
              "minutes": 42
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 45
            },
            "type": "neutral",
            "description": "Tracking direct/deep conversations time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Learning",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 43
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 45
            },
            "type": "neutral",
            "description": "Tracking learning time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Management (calls, logistics, etc.)",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 24
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 20
            },
            "type": "neutral",
            "description": "Tracking management (calls, logistics, etc.) time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Strategy",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 23
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 20
            },
            "type": "neutral",
            "description": "Tracking strategy time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Vision",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 3
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 10
            },
            "type": "neutral",
            "description": "Tracking vision time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Todolist",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 2
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 10
            },
            "type": "neutral",
            "description": "Tracking todolist time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Collaboration",
            "trackedAvgPerDay": {
              "hours": 2,
              "minutes": 51
            },
            "goalAvgPerDay": {
              "hours": 2,
              "minutes": 30
            },
            "type": "neutral",
            "description": "Tracking collaboration time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Tracking App development",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 36
            },
            "goalAvgPerDay": {
              "hours": 2,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking tracking app development time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Prospecting",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 10
            },
            "type": "neutral",
            "description": "Tracking prospecting time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "LinkedIn Strategy",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 10
            },
            "type": "neutral",
            "description": "Tracking linkedin strategy time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Articles Written",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 21
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 10
            },
            "type": "neutral",
            "description": "Tracking articles written time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Script Writing",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 10
            },
            "type": "neutral",
            "description": "Tracking script writing time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Reels Recording",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 2
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 15
            },
            "type": "neutral",
            "description": "Tracking reels recording time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "CapCut Editing",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 32
            },
            "goalAvgPerDay": {
              "hours": 1,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking capcut editing time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Administrative Tasks",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 10
            },
            "type": "neutral",
            "description": "Tracking administrative tasks time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Phone Calls",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 18
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 10
            },
            "type": "neutral",
            "description": "Tracking phone calls time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Hobbies",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 10
            },
            "type": "neutral",
            "description": "Tracking hobbies time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Unproductive Transport",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 31
            },
            "goalAvgPerDay": {
              "hours": 1,
              "minutes": 30
            },
            "type": "productive",
            "description": "Tracking unproductive transport time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Meditation",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 1
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 10
            },
            "type": "neutral",
            "description": "Tracking meditation time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Chill Time",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 7
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 20
            },
            "type": "neutral",
            "description": "Tracking chill time time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Reflection (without writing)",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 11
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 10
            },
            "type": "neutral",
            "description": "Tracking reflection (without writing) time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Insomnia",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 11
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 15
            },
            "type": "neutral",
            "description": "Tracking insomnia time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Passive Time (social media, etc.)",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 28
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 20
            },
            "type": "passive",
            "description": "Tracking passive time (social media, etc.) time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Unreported Time",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 4
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking unreported time time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Rate ",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking rate  time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Pro Insta (channel)",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 25
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 50
            },
            "type": "neutral",
            "description": "Tracking pro insta (channel) time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Personal Insta",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 42
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 50
            },
            "type": "neutral",
            "description": "Tracking personal insta time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "Code Time",
            "trackedAvgPerDay": {
              "hours": 2,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 2,
              "minutes": 0
            },
            "type": "neutral",
            "description": "Tracking code time time.",
            "icon": "activity",
            "impressions": []
          }
        ],
        "globalRate": 0.711
      }
    ]



  ));