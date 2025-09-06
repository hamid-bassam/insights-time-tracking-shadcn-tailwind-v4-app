

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Activity, TimeValue } from "../../../types/activity";
import { DailyInsight, WorkActivityData, WorkWeekData, WorkWeeklyInsight } from "../../../types/work-activity";

const weekly_data_work_json = {
  "weekNumber": 7,
  "startDate": "2025-08-21",
  "endDate": "2025-08-27",
  "weekly_insights": [
    {
      "totalWork": {
        "hours": 33,
        "minutes": 16
      },
      "nbDays": 5,
      "avgPerDay": {
        "hours": 6,
        "minutes": 39
      },
      "byCategory": {
        "avg_productive": {
          "hours": 5,
          "minutes": 45
        },
        "passive": {
          "hours": 0,
          "minutes": 0
        },
        "blocks": {
          "hours": 0,
          "minutes": 12
        },
        "ressource": {
          "hours": 0,
          "minutes": 40
        }
      },
      "productivity_ratio": 86.62
    }
  ],
  "daily_insights": [
    {
      "day": "jeudi 21/08",
      "totalWork": {
        "hours": 2,
        "minutes": 58
      },
      "byCategory": {
        "productive": {
          "hours": 2,
          "minutes": 54
        },
        "passive": {
          "hours": 0,
          "minutes": 0
        },
        "blocks": {
          "hours": 0,
          "minutes": 4
        },
        "ressource": {
          "hours": 0,
          "minutes": 0
        }
      },
      "entry": "15:07",
      "exit": "18:05",
      "presence": {
        "hours": 2,
        "minutes": 58
      }
    },
    {
      "day": "vendredi 22/08",
      "totalWork": {
        "hours": 6,
        "minutes": 55
      },
      "byCategory": {
        "productive": {
          "hours": 6,
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
          "minutes": 30
        }
      },
      "entry": "09:31",
      "exit": "18:10",
      "presence": {
        "hours": 8,
        "minutes": 39
      }
    },
    {
      "day": "lun 25/08",
      "totalWork": {
        "hours": 9,
        "minutes": 15
      },
      "byCategory": {
        "productive": {
          "hours": 6,
          "minutes": 58
        },
        "passive": {
          "hours": 0,
          "minutes": 0
        },
        "blocks": {
          "hours": 0,
          "minutes": 40
        },
        "ressource": {
          "hours": 1,
          "minutes": 37
        }
      },
      "entry": "09:32",
      "exit": "18:47",
      "presence": {
        "hours": 9,
        "minutes": 15
      }
    },
    {
      "day": "mardi 26/08",
      "totalWork": {
        "hours": 7,
        "minutes": 41
      },
      "byCategory": {
        "productive": {
          "hours": 6,
          "minutes": 39
        },
        "passive": {
          "hours": 0,
          "minutes": 0
        },
        "blocks": {
          "hours": 0,
          "minutes": 10
        },
        "ressource": {
          "hours": 0,
          "minutes": 52
        }
      },
      "entry": "10:30",
      "exit": "18:22",
      "presence": {
        "hours": 7,
        "minutes": 52
      }
    },
    {
      "day": "Mer 27/08",
      "totalWork": {
        "hours": 6,
        "minutes": 27
      },
      "byCategory": {
        "productive": {
          "hours": 5,
          "minutes": 53
        },
        "passive": {
          "hours": 0,
          "minutes": 3
        },
        "blocks": {
          "hours": 0,
          "minutes": 6
        },
        "ressource": {
          "hours": 0,
          "minutes": 25
        }
      },
      "entry": "09:44",
      "exit": "17:40",
      "presence": {
        "hours": 7,
        "minutes": 56
      }
    }
  ],
  "activities": [
    {
      "name": "afk",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 0
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
      "name": "apm",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 3
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking apm – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "atelier",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 12
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Athena",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "bio",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 2
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
      "name": "cdp",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 54
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "elecinvoice #livrable #risques",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "daily",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 18
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
      "name": "fp",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 8
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "livrables niveau de rattachement",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "log",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 7
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking log – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "meal",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 15
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "ressource",
      "description": "flan",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "off",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 2
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "sophie",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "outillage",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 11
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "aqbli",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "pf",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 11
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "maia + #eleinvoice",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "planif",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 34
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "tradesurveillance #olivier bersot",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "planifcap",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 29
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "gmrc cross border + avis expert",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "prep",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 8
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
      "name": "report",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking report – productive time.",
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
      "name": "reqcdp",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 7
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "support cap passé imad",
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
      "description": "cafe",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "synthese",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 4
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking synthese – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "tarmac",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 58
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "sensi",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "teete",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 9
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "avisExperts",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "todo",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 2
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking todo – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "trete",
      "trackedAvgPerDay": {
        "hours": 1,
        "minutes": 0
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "avisExperts",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "work",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 2
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "resp",
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
