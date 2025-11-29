
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Activity, TimeValue } from "../../../types/activity";
import { DailyInsight, WorkActivityData, WorkWeekData, WorkWeeklyInsight } from "../../../types/work-activity";
const weekly_data_work_json = {
  "weekNumber": 20,
  "startDate": "2025-11-20",
  "endDate": "2025-11-26",
  "weekly_insights": [
    {
      "totalWork": {
        "hours": 38,
        "minutes": 30
      },
      "nbDays": 5,
      "avgPerDay": {
        "hours": 7,
        "minutes": 42
      },
      "byCategory": {
        "avg_productive": {
          "hours": 6,
          "minutes": 52
        },
        "passive": {
          "hours": 0,
          "minutes": 1
        },
        "blocks": {
          "hours": 0,
          "minutes": 23
        },
        "ressource": {
          "hours": 0,
          "minutes": 25
        }
      },
      "productivity_ratio": 89.18
    }
  ],
  "daily_insights": [
    {
      "day": "Jeu 20/11",
      "totalWork": {
        "hours": 6,
        "minutes": 30
      },
      "byCategory": {
        "productive": {
          "hours": 6,
          "minutes": 20
        },
        "passive": {
          "hours": 0,
          "minutes": 5
        },
        "blocks": {
          "hours": 0,
          "minutes": 0
        },
        "ressource": {
          "hours": 0,
          "minutes": 5
        }
      },
      "entry": "09:25",
      "exit": "18:37",
      "presence": {
        "hours": 9,
        "minutes": 12
      }
    },
    {
      "day": "ven 21/11",
      "totalWork": {
        "hours": 5,
        "minutes": 30
      },
      "byCategory": {
        "productive": {
          "hours": 5,
          "minutes": 25
        },
        "passive": {
          "hours": 0,
          "minutes": 0
        },
        "blocks": {
          "hours": 0,
          "minutes": 0
        },
        "ressource": {
          "hours": 0,
          "minutes": 5
        }
      },
      "entry": "10:20",
      "exit": "19:42",
      "presence": {
        "hours": 9,
        "minutes": 22
      }
    },
    {
      "day": "lun 24/11",
      "totalWork": {
        "hours": 7,
        "minutes": 26
      },
      "byCategory": {
        "productive": {
          "hours": 5,
          "minutes": 40
        },
        "passive": {
          "hours": 0,
          "minutes": 0
        },
        "blocks": {
          "hours": 1,
          "minutes": 6
        },
        "ressource": {
          "hours": 0,
          "minutes": 40
        }
      },
      "entry": "10:10",
      "exit": "19:20",
      "presence": {
        "hours": 9,
        "minutes": 10
      }
    },
    {
      "day": "mardi 25/11",
      "totalWork": {
        "hours": 9,
        "minutes": 14
      },
      "byCategory": {
        "productive": {
          "hours": 8,
          "minutes": 16
        },
        "passive": {
          "hours": 0,
          "minutes": 0
        },
        "blocks": {
          "hours": 0,
          "minutes": 19
        },
        "ressource": {
          "hours": 0,
          "minutes": 39
        }
      },
      "entry": "08:50",
      "exit": "22:13",
      "presence": {
        "hours": 13,
        "minutes": 23
      }
    },
    {
      "day": "mer 26/11",
      "totalWork": {
        "hours": 9,
        "minutes": 50
      },
      "byCategory": {
        "productive": {
          "hours": 8,
          "minutes": 39
        },
        "passive": {
          "hours": 0,
          "minutes": 0
        },
        "blocks": {
          "hours": 0,
          "minutes": 32
        },
        "ressource": {
          "hours": 0,
          "minutes": 39
        }
      },
      "entry": "09:00",
      "exit": "20:05",
      "presence": {
        "hours": 11,
        "minutes": 5
      }
    }
  ],
  "activities": [
    {
      "name": "acccdp",
      "trackedAvgPerDay": {
        "hours": 1,
        "minutes": 26
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "métier",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "admin",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 11
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "blocks",
      "description": "migration",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "afk",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 1
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "passive",
      "description": "Tracking afk – passive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "aq",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 12
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "check complai",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "autoagile",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 25
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking autoagile – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "bio",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 1
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "ressource",
      "description": "Tracking bio – ressource time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "br",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 23
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "ressource",
      "description": "clope",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "cap",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 18
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking cap – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "check",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 5
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking check – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "cloture",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 19
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking cloture – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "crcap",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 46
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "cpl data u",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "daily",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 23
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking daily – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "docs",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 51
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "+ agile auto",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "esg",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 13
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking esg – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "meal",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 1
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "ressource",
      "description": "Tracking meal – ressource time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "ob",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 8
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "prep",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "off",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 25
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Thierry",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "outillage",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 8
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking outillage – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "pf",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 28
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "cci",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "planifperso",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 10
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking planifperso – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "prep",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 3
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "daily",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "requestboss",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 7
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "movis",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "resp",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 12
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "blocks",
      "description": "setup",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "revueaq",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 8
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "pure",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "suiviecdp",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 6
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "pure",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "todo",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 6
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking todo – productive time.",
      "icon": "activity",
      "impressions": []
    }
  ],
  "globalRate": -1
}



// ---- Activities -------------------------------------------------------------
const activities: Activity[] = (weekly_data_work_json.activities ?? []).map((activity: any) => ({
  name: activity.name,
  trackedAvgPerDay: activity.trackedAvgPerDay as TimeValue,
  goalAvgPerDay: activity.goalAvgPerDay as TimeValue,
  type: activity.type,
  description: activity.description,
  icon: activity.icon,
  impressions: activity.impressions,
}));

// ---- Weekly insights --------------------------------------------------------
const weeklyInsights: WorkWeeklyInsight[] = (weekly_data_work_json["weekly_insights"] ?? []).map((w: any) => ({
  totalWork: w.totalWork as TimeValue,
  nbDays: w.nbDays,
  avgPerDay: w.avgPerDay as TimeValue,
  byCategory: {
    avg_productive: w.byCategory.avg_productive as TimeValue,
    passive: w.byCategory.passive as TimeValue,
    blocks: w.byCategory.blocks as TimeValue,
    ressource: w.byCategory.ressource as TimeValue,
  },
  productivity_ratio: Number(w.productivity_ratio.toFixed(2)),
}));

// ---- Daily insights ---------------------------------------------------------
const dailyInsights: DailyInsight[] = (weekly_data_work_json["daily_insights"] ?? []).map((d: any) => ({
  day: d.day,
  totalWork: d.totalWork as TimeValue,
  byCategory: {
    productive: d.byCategory.productive as TimeValue,
    passive: d.byCategory.passive as TimeValue,
    blocks: d.byCategory.blocks as TimeValue,
    ressource: d.byCategory.ressource as TimeValue,
  },
  entry: d.entry,
  exit: d.exit,
  presence: d.presence as TimeValue,
}));

// ---- Export final -----------------------------------------------------------
export const weekly_work_data: WorkWeekData = {
  weekNumber: weekly_data_work_json.weekNumber,
  startDate: weekly_data_work_json.startDate,
  endDate: weekly_data_work_json.endDate,
  weekly_insights: weeklyInsights,
  daily_insights: dailyInsights,
  activities,
  globalRate: weekly_data_work_json.globalRate,
};

// Optionnel : si tu veux un tableau de semaines
export const weekly_work_dataset: WorkActivityData = [weekly_work_data];
