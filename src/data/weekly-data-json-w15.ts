import { Activity, ActivityType, TimeValue, WeekData } from "../types/activity";


const weekly_data_json =
{
  "weekNumber": 15,
  "startDate": "2025-03-06",
  "endDate": "2025-03-12",
  "activities": [
    {
      "name": "Sleep - ressource",
      "trackedAvgPerDay": {
        "hours": 9,
        "minutes": 43
      },
      "goalAvgPerDay": {
        "hours": 9,
        "minutes": 30
      },
      "type": "ressource",
      "description": "Tracking sleep – ressource time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "Meals - ressource",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 41
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 45
      },
      "type": "ressource",
      "description": "Tracking meals – ressource time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "PrepMeal - blocks",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 13
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 30
      },
      "type": "blocks",
      "description": "Tracking prepmeal – blocks time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "prep ptit dej - blocks",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 27
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 30
      },
      "type": "blocks",
      "description": "Tracking prep ptit dej – blocks time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "Bio Needs (shower, toilet) - ressource",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 37
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 30
      },
      "type": "ressource",
      "description": "Tracking bio needs (shower, toilet) – ressource time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "Walk - ressource",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 8
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 15
      },
      "type": "ressource",
      "description": "Tracking walk – ressource time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "Sport - ressource",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "ressource",
      "description": "Tracking sport – ressource time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "Family - ressource",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 22
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 10
      },
      "type": "ressource",
      "description": "Tracking family – ressource time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "Rangement - blocks",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 20
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 30
      },
      "type": "blocks",
      "description": "Tracking rangement – blocks time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "Courses - blocks",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 10
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 15
      },
      "type": "blocks",
      "description": "Tracking courses – blocks time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "Diverse Responsibilities - blocks",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 22
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 30
      },
      "type": "blocks",
      "description": "Tracking diverse responsibilities – blocks time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "Services - neutral",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 12
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "neutral",
      "description": "Tracking services – neutral time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "Pauses - ressource",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 12
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 30
      },
      "type": "ressource",
      "description": "Tracking pauses – ressource time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "Daily Reporting & Activity Analysis - productive",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 5
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 10
      },
      "type": "productive",
      "description": "Tracking daily reporting & activity analysis – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "Mentor - ressource",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "ressource",
      "description": "Tracking mentor – ressource time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "Direct/Deep Conversations - ressource",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 28
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 30
      },
      "type": "ressource",
      "description": "Tracking direct/deep conversations – ressource time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "Learning - productive",
      "trackedAvgPerDay": {
        "hours": 2,
        "minutes": 34
      },
      "goalAvgPerDay": {
        "hours": 1,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking learning – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "Management (calls, logistics, etc.) - productive",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 8
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 10
      },
      "type": "productive",
      "description": "Tracking management (calls, logistics, etc.) – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "Strategy - productive",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 20
      },
      "type": "productive",
      "description": "Tracking strategy – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "Vision - productive",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 10
      },
      "type": "productive",
      "description": "Tracking vision – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "Todolist - productive",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 10
      },
      "type": "productive",
      "description": "Tracking todolist – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "Collaboration - productive",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 10
      },
      "type": "productive",
      "description": "Tracking collaboration – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "Tracking App development - productive",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 5
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 15
      },
      "type": "productive",
      "description": "Tracking tracking app development – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "ApplyFlow App development - productive",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 20
      },
      "type": "productive",
      "description": "Tracking applyflow app development – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "Argan soul - productive",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 4
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking argan soul – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "Prospecting - productive",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 6
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 30
      },
      "type": "productive",
      "description": "Tracking prospecting – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "LinkedIn Strategy - productive",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 1
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking linkedin strategy – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "Articles Written - productive",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking articles written – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "Script Writing - productive",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking script writing – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "Reels Recording - productive",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking reels recording – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "CapCut Editing - productive",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking capcut editing – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "Administrative Tasks - blocks",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "blocks",
      "description": "Tracking administrative tasks – blocks time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "Phone Calls - passive",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 20
      },
      "type": "passive",
      "description": "Tracking phone calls – passive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "Hobbies - ressource",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 5
      },
      "type": "ressource",
      "description": "Tracking hobbies – ressource time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "Unproductive Transport - passive",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 30
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 15
      },
      "type": "passive",
      "description": "Tracking unproductive transport – passive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "Meditation - ressource",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 10
      },
      "type": "ressource",
      "description": "Tracking meditation – ressource time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "Chill Time - ressource",
      "trackedAvgPerDay": {
        "hours": 3,
        "minutes": 27
      },
      "goalAvgPerDay": {
        "hours": 2,
        "minutes": 30
      },
      "type": "ressource",
      "description": "Tracking chill time – ressource time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "Reflection (without writing) - passive",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 44
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 15
      },
      "type": "passive",
      "description": "Tracking reflection (without writing) – passive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "Insomnia - passive",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 4
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 15
      },
      "type": "passive",
      "description": "Tracking insomnia – passive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "Passive Time (social media, etc.) - passive",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 26
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 15
      },
      "type": "passive",
      "description": "Tracking passive time (social media, etc.) – passive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "Direct message - passive",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 32
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 15
      },
      "type": "passive",
      "description": "Tracking direct message – passive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "Unreported Time - neutral",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "neutral",
      "description": "Tracking unreported time – neutral time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "Pro Insta (channel) - neutral",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "neutral",
      "description": "Tracking pro insta (channel) – neutral time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "Personal Insta - neutral",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "neutral",
      "description": "Tracking personal insta – neutral time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "Code Time - neutral",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "goalAvgPerDay": {
        "hours": 2,
        "minutes": 30
      },
      "type": "neutral",
      "description": "Tracking code time – neutral time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "Money making activity - neutral",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "neutral",
      "description": "Tracking money making activity – neutral time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "cooking - neutral",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "neutral",
      "description": "Tracking cooking – neutral time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "batch cooking - blocks",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 15
      },
      "type": "blocks",
      "description": "Tracking batch cooking – blocks time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "Reading - productive",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 10
      },
      "type": "productive",
      "description": "Tracking reading – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "Temps mort - passive",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 2
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 10
      },
      "type": "passive",
      "description": "Tracking temps mort – passive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "Prise de notes(révision) - productive",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking prise de notes(révision) – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "Networking - productive",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking networking – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "Direct Conversations - ressource",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 40
      },
      "goalAvgPerDay": {
        "hours": 1,
        "minutes": 30
      },
      "type": "ressource",
      "description": "Tracking direct conversations – ressource time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "Petit dej - ressource",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 4
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 25
      },
      "type": "ressource",
      "description": "Tracking petit dej – ressource time.",
      "icon": "activity",
      "impressions": []
    }
  ],
  "globalRate": -1
}
const activities: Activity[] = [];
weekly_data_json.activities.forEach((activity) => {
  activities.push({
    name: activity.name,
    trackedAvgPerDay: activity.trackedAvgPerDay as TimeValue || { hours: 0, minutes: 0 },
    goalAvgPerDay: activity.goalAvgPerDay as TimeValue || { hours: 0, minutes: 0 },
    type: activity.type as ActivityType || 'neutral',
    description: activity.description,
    icon: activity.icon,
    impressions: activity.impressions,
    // tag: activity.tag || '',
  });
});

export const weekly_data_15: WeekData = {
  weekNumber: weekly_data_json.weekNumber,
  startDate: weekly_data_json.startDate,
  endDate: weekly_data_json.endDate,
  activities: activities,
  globalRate: weekly_data_json.globalRate
};