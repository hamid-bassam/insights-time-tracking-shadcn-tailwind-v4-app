import { Activity, TimeValue } from "../../../types/activity";
import { DailyInsight, WorkActivityData, WorkWeekData, WorkWeeklyInsight } from "../../../types/work-activity";

const weekly_data_work_json =
{
  "weekNumber": 3,
  "startDate": "2025-07-24",
  "endDate": "2025-07-30",
  "weekly_insights": [
    {
      "totalWork": {
        "hours": 42,
        "minutes": 9
      },
      "nbDays": 5,
      "avgPerDay": {
        "hours": 8,
        "minutes": 25
      },
      "byCategory": {
        "avg_productive": {
          "hours": 7,
          "minutes": 48
        },
        "passive": {
          "hours": 0,
          "minutes": 3
        },
        "blocks": {
          "hours": 0,
          "minutes": 10
        },
        "ressource": {
          "hours": 0,
          "minutes": 23
        }
      },
      "productivity_ratio": 92.65
    }
  ],
  "daily_insights": [
    {
      "day": "jeudi 24/07",
      "totalWork": {
        "hours": 7,
        "minutes": 37
      },
      "byCategory": {
        "productive": {
          "hours": 6,
          "minutes": 42
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
          "minutes": 55
        }
      },
      "entry": "09:15",
      "exit": "17:50",
      "presence": {
        "hours": 8,
        "minutes": 35
      }
    },
    {
      "day": "vendredi 25/07",
      "totalWork": {
        "hours": 7,
        "minutes": 48
      },
      "byCategory": {
        "productive": {
          "hours": 7,
          "minutes": 8
        },
        "passive": {
          "hours": 0,
          "minutes": 16
        },
        "blocks": {
          "hours": 0,
          "minutes": 6
        },
        "ressource": {
          "hours": 0,
          "minutes": 18
        }
      },
      "entry": "09:15",
      "exit": "19:09",
      "presence": {
        "hours": 9,
        "minutes": 54
      }
    },
    {
      "day": "lundi 28/07",
      "totalWork": {
        "hours": 8,
        "minutes": 37
      },
      "byCategory": {
        "productive": {
          "hours": 7,
          "minutes": 46
        },
        "passive": {
          "hours": 0,
          "minutes": 0
        },
        "blocks": {
          "hours": 0,
          "minutes": 34
        },
        "ressource": {
          "hours": 0,
          "minutes": 17
        }
      },
      "entry": "09:25",
      "exit": "18:36",
      "presence": {
        "hours": 9,
        "minutes": 11
      }
    },
    {
      "day": "mardi 29/07",
      "totalWork": {
        "hours": 9,
        "minutes": 22
      },
      "byCategory": {
        "productive": {
          "hours": 9,
          "minutes": 7
        },
        "passive": {
          "hours": 0,
          "minutes": 0
        },
        "blocks": {
          "hours": 0,
          "minutes": 6
        },
        "ressource": {
          "hours": 0,
          "minutes": 9
        }
      },
      "entry": "09:25",
      "exit": "18:47",
      "presence": {
        "hours": 9,
        "minutes": 22
      }
    },
    {
      "day": "mercredi 30/07",
      "totalWork": {
        "hours": 8,
        "minutes": 45
      },
      "byCategory": {
        "productive": {
          "hours": 8,
          "minutes": 20
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
          "minutes": 20
        }
      },
      "entry": "09:55",
      "exit": "18:40",
      "presence": {
        "hours": 8,
        "minutes": 45
      }
    }
  ],
  "activities": [
    {
      "name": "agenda",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 3
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking agenda – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "ano",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 9
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "dossier partagé",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "bilan",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 10
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "semaine temps",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "br",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 22
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "ressource",
      "description": "🚬 ☕",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "call",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 2
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "passive",
      "description": "sophie",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "cap",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 33
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "CSI",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "cdp",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 3
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "convoc kali",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "check",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 8
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
        "minutes": 15
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "meet",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "daily",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 21
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "team",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "diana",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 6
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking diana – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "digestion",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 14
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking digestion – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "doc",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 4
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Quick start cdp CSI",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "mail",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 4
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking mail – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "mails",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 6
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking mails – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "matrice",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 43
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "agile #meet",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "mealpro",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 18
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking mealpro – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "meer",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 6
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "philippe focus",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "meet",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 19
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "retour XP #jeremy",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "nada",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 1
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "ressource",
      "description": "Tracking nada – ressource time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "notes",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 2
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking notes – productive time.",
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
      "description": "Philippe",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "organigramme",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 3
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking organigramme – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "outillage",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 12
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "fp",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "passation",
      "trackedAvgPerDay": {
        "hours": 1,
        "minutes": 44
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "fin",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "pegase",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 12
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "team #vincent",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "planif",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 13
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking planif – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "prep",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 19
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "q&a Philippe",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "report",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 1
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
      "name": "resp",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 9
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "blocks",
      "description": "go",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "rg",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 1
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "blocks",
      "description": "Tracking rg – blocks time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "roadmap",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 32
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "retro complète ✓",
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
      "name": "te",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 12
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "thierry #philippe travaux été",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "tm",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 1
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "passive",
      "description": "Tracking tm – passive time.",
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
      "name": "work",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "bio",
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
