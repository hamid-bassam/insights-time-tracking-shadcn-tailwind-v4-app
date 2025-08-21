/* eslint-disable @typescript-eslint/no-explicit-any */
import { Activity, TimeValue } from "../../../types/activity";
import { DailyInsight, WorkActivityData, WorkWeekData, WorkWeeklyInsight } from "../../../types/work-activity";

const weekly_data_work_json = {
  "weekNumber": 2,
  "startDate": "2025-07-17",
  "endDate": "2025-07-23",
  "weekly_insights": [
    {
      "totalWork": {
        "hours": 47,
        "minutes": 54
      },
      "nbDays": 5,
      "avgPerDay": {
        "hours": 9,
        "minutes": 34
      },
      "byCategory": {
        "avg_productive": {
          "hours": 7,
          "minutes": 50
        },
        "passive": {
          "hours": 0,
          "minutes": 1
        },
        "blocks": {
          "hours": 0,
          "minutes": 52
        },
        "ressource": {
          "hours": 0,
          "minutes": 51
        }
      },
      "productivity_ratio": 81.77
    }
  ],
  "daily_insights": [
    {
      "day": "jeudi 17/07/25",
      "totalWork": {
        "hours": 11,
        "minutes": 14
      },
      "byCategory": {
        "productive": {
          "hours": 7,
          "minutes": 1
        },
        "passive": {
          "hours": 0,
          "minutes": 5
        },
        "blocks": {
          "hours": 2,
          "minutes": 43
        },
        "ressource": {
          "hours": 1,
          "minutes": 25
        }
      },
      "entry": "09:00",
      "exit": "20:14",
      "presence": {
        "hours": 11,
        "minutes": 14
      }
    },
    {
      "day": "ven 18/07",
      "totalWork": {
        "hours": 9,
        "minutes": 57
      },
      "byCategory": {
        "productive": {
          "hours": 8,
          "minutes": 33
        },
        "passive": {
          "hours": 0,
          "minutes": 0
        },
        "blocks": {
          "hours": 0,
          "minutes": 24
        },
        "ressource": {
          "hours": 1,
          "minutes": 0
        }
      },
      "entry": "08:04",
      "exit": "19:41",
      "presence": {
        "hours": 11,
        "minutes": 37
      }
    },
    {
      "day": "lun 21/07",
      "totalWork": {
        "hours": 7,
        "minutes": 52
      },
      "byCategory": {
        "productive": {
          "hours": 6,
          "minutes": 52
        },
        "passive": {
          "hours": 0,
          "minutes": 0
        },
        "blocks": {
          "hours": 0,
          "minutes": 18
        },
        "ressource": {
          "hours": 0,
          "minutes": 42
        }
      },
      "entry": "10:00",
      "exit": "19:37",
      "presence": {
        "hours": 9,
        "minutes": 37
      }
    },
    {
      "day": "mar 22/11",
      "totalWork": {
        "hours": 9,
        "minutes": 0
      },
      "byCategory": {
        "productive": {
          "hours": 8,
          "minutes": 7
        },
        "passive": {
          "hours": 0,
          "minutes": 0
        },
        "blocks": {
          "hours": 0,
          "minutes": 27
        },
        "ressource": {
          "hours": 0,
          "minutes": 26
        }
      },
      "entry": "08:26",
      "exit": "19:00",
      "presence": {
        "hours": 10,
        "minutes": 34
      }
    },
    {
      "day": "mer 23/07",
      "totalWork": {
        "hours": 9,
        "minutes": 51
      },
      "byCategory": {
        "productive": {
          "hours": 8,
          "minutes": 37
        },
        "passive": {
          "hours": 0,
          "minutes": 0
        },
        "blocks": {
          "hours": 0,
          "minutes": 28
        },
        "ressource": {
          "hours": 0,
          "minutes": 46
        }
      },
      "entry": "09:25",
      "exit": "19:16",
      "presence": {
        "hours": 9,
        "minutes": 51
      }
    }
  ],
  "activities": [
    {
      "name": "access",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 6
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "traitement teams ok",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "admin",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 19
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "blocks",
      "description": "accès pulse ivanti ko",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "anomalie",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 7
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "tasks hd",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "atelier",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 24
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "outils #bli's",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "bio",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 8
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
        "minutes": 30
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
        "minutes": 37
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "notes Philippe passation",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "copil",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 16
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "cap analyse métriques",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "daily",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 42
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
      "name": "digestion",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 12
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "tao Philippe",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "dr",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking dr – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "file",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 2
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "café",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "fp",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 53
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "roadmap",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "hd",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 3
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "help desk teams NOK",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "helpdesk",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 5
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking helpdesk – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "learn",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 1
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "fp filière projet",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "mail",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 15
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "accès SharePoint",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "mails",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 11
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "🥊",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "marche",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 3
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "ressource",
      "description": "go",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "meal",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 6
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "ressource",
      "description": "thierry",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "meditation",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 3
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "ressource",
      "description": "Tracking meditation – ressource time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "meet",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 28
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "thierry bilan s0",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "mindmap",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 27
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "tap part 2",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "notes",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 4
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "et orga",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "off",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 10
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
      "name": "orga",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 1
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "docs",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "passation",
      "trackedAvgPerDay": {
        "hours": 1,
        "minutes": 3
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "philippe",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "pegase",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 7
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "réflexion",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "point",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 3
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
      "name": "prep",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 2
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking prep – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "report",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 2
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
        "minutes": 33
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
      "name": "strat",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 6
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "digestion roadmap",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "synthes",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 8
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "pégase cible",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "synthese",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 11
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "présentation",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "task",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 17
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "anomalies onboarding",
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
      "description": "café",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "work",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 38
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "meets a préciser",
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
