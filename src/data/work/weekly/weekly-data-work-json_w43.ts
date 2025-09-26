/* eslint-disable @typescript-eslint/no-explicit-any */
import { Activity, TimeValue } from "../../../types/activity";
import { DailyInsight, WorkActivityData, WorkWeekData, WorkWeeklyInsight } from "../../../types/work-activity";
const weekly_data_work_json = {
  "weekNumber": 11,
  "startDate": "2025-09-18",
  "endDate": "2025-09-24",
  "weekly_insights": [
    {
      "totalWork": {
        "hours": 33,
        "minutes": 59
      },
      "nbDays": 5,
      "avgPerDay": {
        "hours": 6,
        "minutes": 47
      },
      "byCategory": {
        "avg_productive": {
          "hours": 5,
          "minutes": 25
        },
        "passive": {
          "hours": 0,
          "minutes": 6
        },
        "blocks": {
          "hours": 0,
          "minutes": 17
        },
        "ressource": {
          "hours": 0,
          "minutes": 59
        }
      },
      "productivity_ratio": 79.84
    }
  ],
  "daily_insights": [
    {
      "day": "jeu 18/09",
      "totalWork": {
        "hours": 4,
        "minutes": 41
      },
      "byCategory": {
        "productive": {
          "hours": 4,
          "minutes": 12
        },
        "passive": {
          "hours": 0,
          "minutes": 18
        },
        "blocks": {
          "hours": 0,
          "minutes": 0
        },
        "ressource": {
          "hours": 0,
          "minutes": 11
        }
      },
      "entry": "09:27",
      "exit": "18:18",
      "presence": {
        "hours": 8,
        "minutes": 51
      }
    },
    {
      "day": "ven 19/09",
      "totalWork": {
        "hours": 5,
        "minutes": 1
      },
      "byCategory": {
        "productive": {
          "hours": 4,
          "minutes": 34
        },
        "passive": {
          "hours": 0,
          "minutes": 13
        },
        "blocks": {
          "hours": 0,
          "minutes": 3
        },
        "ressource": {
          "hours": 0,
          "minutes": 11
        }
      },
      "entry": "09:29",
      "exit": "17:17",
      "presence": {
        "hours": 7,
        "minutes": 48
      }
    },
    {
      "day": "lun 22/09",
      "totalWork": {
        "hours": 7,
        "minutes": 56
      },
      "byCategory": {
        "productive": {
          "hours": 4,
          "minutes": 49
        },
        "passive": {
          "hours": 0,
          "minutes": 0
        },
        "blocks": {
          "hours": 0,
          "minutes": 20
        },
        "ressource": {
          "hours": 2,
          "minutes": 47
        }
      },
      "entry": "09:30",
      "exit": "17:26",
      "presence": {
        "hours": 7,
        "minutes": 56
      }
    },
    {
      "day": "mar 23/09",
      "totalWork": {
        "hours": 7,
        "minutes": 30
      },
      "byCategory": {
        "productive": {
          "hours": 6,
          "minutes": 17
        },
        "passive": {
          "hours": 0,
          "minutes": 0
        },
        "blocks": {
          "hours": 0,
          "minutes": 17
        },
        "ressource": {
          "hours": 0,
          "minutes": 56
        }
      },
      "entry": "09:36",
      "exit": "17:06",
      "presence": {
        "hours": 7,
        "minutes": 30
      }
    },
    {
      "day": "Merc 24/09",
      "totalWork": {
        "hours": 8,
        "minutes": 51
      },
      "byCategory": {
        "productive": {
          "hours": 7,
          "minutes": 16
        },
        "passive": {
          "hours": 0,
          "minutes": 0
        },
        "blocks": {
          "hours": 0,
          "minutes": 45
        },
        "ressource": {
          "hours": 0,
          "minutes": 50
        }
      },
      "entry": "09:20",
      "exit": "18:11",
      "presence": {
        "hours": 8,
        "minutes": 51
      }
    }
  ],
  "activities": [
    {
      "name": "acccap",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 17
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "review pcoi",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "acccdp",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 3
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "cap fresh",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "afk",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 2
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
        "minutes": 46
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "synthèse",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "avisexpert",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 1
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking avisexpert – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "avisexperts",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 9
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking avisexperts – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "bio",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 5
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
        "minutes": 18
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "ressource",
      "description": "clope 🚬 ☕",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "cap",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 30
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "evolution support",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "cdp",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 11
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "suivi",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "check",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 6
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
      "name": "chill",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 5
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "ressource",
      "description": "team #vincent",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "cp",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 6
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "limon cdp métier",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "crcap",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 55
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "fresh obso",
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
      "name": "direct",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 16
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "ressource",
      "description": "sylvain #team #samuel",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "documents",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 12
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "marie #sophie",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "fp",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 12
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "AQSP",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "meal",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 13
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
      "name": "meet",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 10
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "xray test management",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "obcdp",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 16
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking obcdp – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "off",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 12
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "debrief Thierry",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "outillage",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 14
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "atelier",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "prep",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 6
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "outillage",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "process",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 3
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking process – productive time.",
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
      "description": "jack invit cap dark",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "resp",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 17
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
        "minutes": 13
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "synthèse",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "strat",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 3
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "retro data time",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "tw",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 3
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "passive",
      "description": "Tracking tw – passive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "work",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 1
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "$br clope",
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
