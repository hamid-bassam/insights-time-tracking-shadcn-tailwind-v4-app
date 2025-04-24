import { Activity, ActivityType, TimeValue, WeekData } from "../../types/activity";

const weekly_data_json =
{
  "weekNumber": 12,
  "startDate": "2025-02-13",
  "endDate": "2025-02-19",
  "activities": [
    {
      "name": "Bio Needs (shower, toilet)",
      "trackedAvgPerDay": {
        "hours": 1,
        "minutes": 5
      },
      "goalAvgPerDay": {
        "hours": 1,
        "minutes": 0
      },
      "type": "ressource",
      "description": "Tracking bio needs (shower, toilet) – ressource time.",
      "icon": "activity",
      "tag": "@bio",
      "impressions": []
    },
    {
      "name": "Chill Time",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 24
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 30
      },
      "type": "ressource",
      "description": "Tracking chill time – ressource time.",
      "icon": "activity",
      "tag": "@chill",
      "impressions": []
    },
    {
      "name": "Collaboration",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 8
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 20
      },
      "type": "productive",
      "description": "Tracking collaboration – productive time.",
      "icon": "activity",
      "tag": "@collab",
      "impressions": []
    },
    {
      "name": "Daily Reporting & Activity Analysis",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 34
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 30
      },
      "type": "productive",
      "description": "Tracking daily reporting & activity analysis – productive time.",
      "icon": "activity",
      "tag": "@report",
      "impressions": []
    },
    {
      "name": "Direct Conversations",
      "trackedAvgPerDay": {
        "hours": 1,
        "minutes": 35
      },
      "goalAvgPerDay": {
        "hours": 1,
        "minutes": 30
      },
      "type": "ressource",
      "description": "Tracking direct conversations – ressource time.",
      "icon": "activity",
      "tag": "@direct",
      "impressions": []
    },
    {
      "name": "Direct/Deep Conversations",
      "trackedAvgPerDay": {
        "hours": 2,
        "minutes": 48
      },
      "goalAvgPerDay": {
        "hours": 1,
        "minutes": 30
      },
      "type": "ressource",
      "description": "Tracking direct/deep conversations – ressource time.",
      "icon": "activity",
      "tag": "@deep",
      "impressions": []
    },
    {
      "name": "Diverse Responsibilities",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 39
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 30
      },
      "type": "blocks",
      "description": "Tracking diverse responsibilities – blocks time.",
      "icon": "activity",
      "tag": "@resp",
      "impressions": []
    },
    {
      "name": "Family",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 7
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 10
      },
      "type": "ressource",
      "description": "Tracking family – ressource time.",
      "icon": "activity",
      "tag": "@fam",
      "impressions": []
    },
    {
      "name": "Hobbies",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 27
      },
      "goalAvgPerDay": {
        "hours": 1,
        "minutes": 0
      },
      "type": "ressource",
      "description": "Tracking hobbies – ressource time.",
      "icon": "activity",
      "tag": "@hobby",
      "impressions": []
    },
    {
      "name": "Insomnia",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 30
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 15
      },
      "type": "passive",
      "description": "Tracking insomnia – passive time.",
      "icon": "activity",
      "tag": "@inso",
      "impressions": []
    },
    {
      "name": "Learning",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 7
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 30
      },
      "type": "productive",
      "description": "Tracking learning – productive time.",
      "icon": "activity",
      "tag": "@learn",
      "impressions": []
    },
    {
      "name": "Management (calls, logistics, etc.)",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 59
      },
      "goalAvgPerDay": {
        "hours": 1,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking management (calls, logistics, etc.) – productive time.",
      "icon": "activity",
      "tag": "@manager",
      "impressions": []
    },
    {
      "name": "Meals",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 34
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 45
      },
      "type": "ressource",
      "description": "Tracking meals – ressource time.",
      "icon": "activity",
      "tag": "@meal",
      "impressions": []
    },
    {
      "name": "Meditation",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 5
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 10
      },
      "type": "ressource",
      "description": "Tracking meditation – ressource time.",
      "icon": "activity",
      "tag": "@nada",
      "impressions": []
    },
    {
      "name": "Mentor",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 43
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 20
      },
      "type": "ressource",
      "description": "Tracking mentor – ressource time.",
      "icon": "activity",
      "tag": "@mentor",
      "impressions": []
    },
    {
      "name": "Networking",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 14
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 10
      },
      "type": "productive",
      "description": "Tracking networking – productive time.",
      "icon": "activity",
      "tag": "@networking",
      "impressions": []
    },
    {
      "name": "Passive Time (social media, etc.)",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 15
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 15
      },
      "type": "passive",
      "description": "Tracking passive time (social media, etc.) – passive time.",
      "icon": "activity",
      "tag": "@afk",
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
      "type": "ressource",
      "description": "Tracking pauses – ressource time.",
      "icon": "activity",
      "tag": "@br",
      "impressions": []
    },
    {
      "name": "Petit dej",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 9
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 15
      },
      "type": "ressource",
      "description": "Tracking petit dej – ressource time.",
      "icon": "activity",
      "tag": "@pd",
      "impressions": []
    },
    {
      "name": "Phone Calls",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 23
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 20
      },
      "type": "passive",
      "description": "Tracking phone calls – passive time.",
      "icon": "activity",
      "tag": "@call",
      "impressions": []
    },
    {
      "name": "PrepMeal",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 8
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 30
      },
      "type": "blocks",
      "description": "Tracking prepmeal – blocks time.",
      "icon": "activity",
      "tag": "@pm",
      "impressions": []
    },
    {
      "name": "Prise de notes - révision",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 1
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 1
      },
      "type": "productive",
      "description": "Tracking prise de notes - révision – productive time.",
      "icon": "activity",
      "tag": "@notes",
      "impressions": []
    },
    {
      "name": "Prospecting",
      "trackedAvgPerDay": {
        "hours": 1,
        "minutes": 2
      },
      "goalAvgPerDay": {
        "hours": 1,
        "minutes": 30
      },
      "type": "productive",
      "description": "Tracking prospecting – productive time.",
      "icon": "activity",
      "tag": "@prosp",
      "impressions": []
    },
    {
      "name": "Rangement",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 9
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 24
      },
      "type": "blocks",
      "description": "Tracking rangement – blocks time.",
      "icon": "activity",
      "tag": "@rg",
      "impressions": []
    },
    {
      "name": "Reading",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 30
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 30
      },
      "type": "productive",
      "description": "Tracking reading – productive time.",
      "icon": "activity",
      "tag": "@lecture",
      "impressions": []
    },
    {
      "name": "Reflection (without writing)",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 40
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 15
      },
      "type": "passive",
      "description": "Tracking reflection (without writing) – passive time.",
      "icon": "activity",
      "tag": "@tw",
      "impressions": []
    },
    {
      "name": "Sleep",
      "trackedAvgPerDay": {
        "hours": 6,
        "minutes": 42
      },
      "goalAvgPerDay": {
        "hours": 6,
        "minutes": 0
      },
      "type": "ressource",
      "description": "Tracking sleep – ressource time.",
      "icon": "activity",
      "tag": "@sleep",
      "impressions": []
    },
    {
      "name": "Sport",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 19
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 15
      },
      "type": "ressource",
      "description": "Tracking sport – ressource time.",
      "icon": "activity",
      "tag": "@sport",
      "impressions": []
    },
    {
      "name": "Strategy",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 12
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 40
      },
      "type": "productive",
      "description": "Tracking strategy – productive time.",
      "icon": "activity",
      "tag": "@strat",
      "impressions": []
    },
    {
      "name": "Temps mort",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 4
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 5
      },
      "type": "passive",
      "description": "Tracking temps mort – passive time.",
      "icon": "activity",
      "tag": "@attente",
      "impressions": []
    },
    {
      "name": "Todolist",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 1
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 10
      },
      "type": "productive",
      "description": "Tracking todolist – productive time.",
      "icon": "activity",
      "tag": "@todo",
      "impressions": []
    },
    {
      "name": "Tracking App development",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 8
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 30
      },
      "type": "productive",
      "description": "Tracking tracking app development – productive time.",
      "icon": "activity",
      "tag": "@tfa",
      "impressions": []
    },
    {
      "name": "Unproductive Transport",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 47
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 30
      },
      "type": "productive",
      "description": "Tracking unproductive transport – productive time.",
      "icon": "activity",
      "tag": "@tp",
      "impressions": []
    },
    {
      "name": "Walk",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 39
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 30
      },
      "type": "ressource",
      "description": "Tracking walk – ressource time.",
      "icon": "activity",
      "tag": "@marche",
      "impressions": []
    },
    {
      "name": "batch cooking",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 2
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 15
      },
      "type": "blocks",
      "description": "Tracking batch cooking – blocks time.",
      "icon": "activity",
      "tag": "@batch",
      "impressions": []
    },
    {
      "name": "prep ptit dej",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 18
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 15
      },
      "type": "blocks",
      "description": "Tracking prep ptit dej – blocks time.",
      "icon": "activity",
      "tag": "@ppd",
      "impressions": []
    }
  ],
  "globalRate": -1
}
  ;


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
    tag: activity.tag || '',
  });
});

export const weekly_data: WeekData = {
  weekNumber: weekly_data_json.weekNumber,
  startDate: weekly_data_json.startDate,
  endDate: weekly_data_json.endDate,
  activities: activities,
  globalRate: weekly_data_json.globalRate
};