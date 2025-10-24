/* eslint-disable @typescript-eslint/no-explicit-any */
import { Activity, TimeValue } from "../../../types/activity";
import { DailyInsight, WorkActivityData, WorkWeekData, WorkWeeklyInsight } from "../../../types/work-activity";
const weekly_data_work_json = {
  "weekNumber": 15,
  "startDate": "2025-10-16",
  "endDate": "2025-10-22",
  "weekly_insights": [
    {
      "totalWork": {
        "hours": 36,
        "minutes": 23
      },
      "nbDays": 5,
      "avgPerDay": {
        "hours": 7,
        "minutes": 16
      },
      "byCategory": {
        "avg_productive": {
          "hours": 7,
          "minutes": 3
        },
        "passive": {
          "hours": 0,
          "minutes": 1
        },
        "blocks": {
          "hours": 0,
          "minutes": 2
        },
        "ressource": {
          "hours": 0,
          "minutes": 9
        }
      },
      "productivity_ratio": 96.93
    }
  ],
  "daily_insights": [
    {
      "day": "jeu 16/10",
      "totalWork": {
        "hours": 6,
        "minutes": 27
      },
      "byCategory": {
        "productive": {
          "hours": 6,
          "minutes": 22
        },
        "passive": {
          "hours": 0,
          "minutes": 0
        },
        "blocks": {
          "hours": 0,
          "minutes": 5
        },
        "ressource": {
          "hours": 0,
          "minutes": 0
        }
      },
      "entry": "10:30",
      "exit": "00:13",
      "presence": {
        "hours": 13,
        "minutes": 43
      }
    },
    {
      "day": "ven 17/10",
      "totalWork": {
        "hours": 10,
        "minutes": 6
      },
      "byCategory": {
        "productive": {
          "hours": 10,
          "minutes": 1
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
      "entry": "07:38",
      "exit": "21:08",
      "presence": {
        "hours": 13,
        "minutes": 30
      }
    },
    {
      "day": "lun 20/10",
      "totalWork": {
        "hours": 8,
        "minutes": 55
      },
      "byCategory": {
        "productive": {
          "hours": 8,
          "minutes": 25
        },
        "passive": {
          "hours": 0,
          "minutes": 0
        },
        "blocks": {
          "hours": 0,
          "minutes": 7
        },
        "ressource": {
          "hours": 0,
          "minutes": 23
        }
      },
      "entry": "10:00",
      "exit": "20:35",
      "presence": {
        "hours": 10,
        "minutes": 35
      }
    },
    {
      "day": "mar 21/10",
      "totalWork": {
        "hours": 5,
        "minutes": 47
      },
      "byCategory": {
        "productive": {
          "hours": 5,
          "minutes": 20
        },
        "passive": {
          "hours": 0,
          "minutes": 7
        },
        "blocks": {
          "hours": 0,
          "minutes": 0
        },
        "ressource": {
          "hours": 0,
          "minutes": 20
        }
      },
      "entry": "10:15",
      "exit": "18:15",
      "presence": {
        "hours": 8,
        "minutes": 0
      }
    },
    {
      "day": "mer 22/10",
      "totalWork": {
        "hours": 5,
        "minutes": 8
      },
      "byCategory": {
        "productive": {
          "hours": 5,
          "minutes": 8
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
          "minutes": 0
        }
      },
      "entry": "09:50",
      "exit": "17:35",
      "presence": {
        "hours": 7,
        "minutes": 45
      }
    }
  ],
  "activities": [
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
      "name": "bio",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 0
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
        "minutes": 9
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
      "description": "instance",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "check",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 15
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
      "name": "codir",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 6
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking codir – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "copilap",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 6
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "instance",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "copilcap",
      "trackedAvgPerDay": {
        "hours": 1,
        "minutes": 38
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking copilcap – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "crcap",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 53
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "thierry",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "daily",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 27
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
      "name": "obcdp",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 27
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "synthese",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "off",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 18
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking off – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "outillage",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 15
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
      "name": "pegase",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 21
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "kpi",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "planifcap",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 26
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking planifcap – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "rdvcsi",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 12
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking rdvcsi – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "reportime",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking reportime – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "requestboss",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 9
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking requestboss – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "requestcdp",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 6
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking requestcdp – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "resp",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 2
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "blocks",
      "description": "rg go",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "suiviaction",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 7
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking suiviaction – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "work",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 57
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "a refaire",
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
