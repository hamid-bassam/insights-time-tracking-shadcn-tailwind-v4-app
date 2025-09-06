

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Activity, TimeValue } from "../../../types/activity";
import { DailyInsight, WorkActivityData, WorkWeekData, WorkWeeklyInsight } from "../../../types/work-activity";

const weekly_data_work_json = {
  "weekNumber": 8,
  "startDate": "2025-08-28",
  "endDate": "2025-09-03",
  "weekly_insights": [
    {
      "totalWork": {
        "hours": 35,
        "minutes": 47
      },
      "nbDays": 5,
      "avgPerDay": {
        "hours": 7,
        "minutes": 9
      },
      "byCategory": {
        "avg_productive": {
          "hours": 5,
          "minutes": 22
        },
        "passive": {
          "hours": 0,
          "minutes": 29
        },
        "blocks": {
          "hours": 0,
          "minutes": 25
        },
        "ressource": {
          "hours": 0,
          "minutes": 52
        }
      },
      "productivity_ratio": 75.08
    }
  ],
  "daily_insights": [
    {
      "day": "jeu 28/08",
      "totalWork": {
        "hours": 6,
        "minutes": 3
      },
      "byCategory": {
        "productive": {
          "hours": 2,
          "minutes": 20
        },
        "passive": {
          "hours": 2,
          "minutes": 27
        },
        "blocks": {
          "hours": 0,
          "minutes": 0
        },
        "ressource": {
          "hours": 1,
          "minutes": 16
        }
      },
      "entry": "09:00",
      "exit": "16:07",
      "presence": {
        "hours": 7,
        "minutes": 7
      }
    },
    {
      "day": "ven 29/08",
      "totalWork": {
        "hours": 3,
        "minutes": 16
      },
      "byCategory": {
        "productive": {
          "hours": 2,
          "minutes": 1
        },
        "passive": {
          "hours": 0,
          "minutes": 0
        },
        "blocks": {
          "hours": 0,
          "minutes": 29
        },
        "ressource": {
          "hours": 0,
          "minutes": 46
        }
      },
      "entry": "09:55",
      "exit": "15:15",
      "presence": {
        "hours": 5,
        "minutes": 20
      }
    },
    {
      "day": "lundi 01/09",
      "totalWork": {
        "hours": 9,
        "minutes": 15
      },
      "byCategory": {
        "productive": {
          "hours": 8,
          "minutes": 4
        },
        "passive": {
          "hours": 0,
          "minutes": 0
        },
        "blocks": {
          "hours": 0,
          "minutes": 26
        },
        "ressource": {
          "hours": 0,
          "minutes": 45
        }
      },
      "entry": "09:30",
      "exit": "18:45",
      "presence": {
        "hours": 9,
        "minutes": 15
      }
    },
    {
      "day": "mar 02/09",
      "totalWork": {
        "hours": 8,
        "minutes": 36
      },
      "byCategory": {
        "productive": {
          "hours": 7,
          "minutes": 32
        },
        "passive": {
          "hours": 0,
          "minutes": 0
        },
        "blocks": {
          "hours": 0,
          "minutes": 44
        },
        "ressource": {
          "hours": 0,
          "minutes": 20
        }
      },
      "entry": "10:10",
      "exit": "18:46",
      "presence": {
        "hours": 8,
        "minutes": 36
      }
    },
    {
      "day": "merc 03/09",
      "totalWork": {
        "hours": 8,
        "minutes": 37
      },
      "byCategory": {
        "productive": {
          "hours": 6,
          "minutes": 55
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
          "hours": 1,
          "minutes": 15
        }
      },
      "entry": "10:09",
      "exit": "18:46",
      "presence": {
        "hours": 8,
        "minutes": 37
      }
    }
  ],
  "activities": [
    {
      "name": "acccdp",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 5
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "sandrino",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "afk",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 11
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "passive",
      "description": "prq pas motivé ?",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "bio",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 10
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
        "minutes": 33
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
        "minutes": 10
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "demandes",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "check",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 3
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
      "name": "copilcap",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 10
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "orga docs",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "daily",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 26
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Sophie",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "fp",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 19
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "atelier divers",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "log",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 5
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
      "name": "mail",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 0
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
      "name": "meal",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 8
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
      "name": "off",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 4
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
        "minutes": 9
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
        "minutes": 34
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
      "name": "planif",
      "trackedAvgPerDay": {
        "hours": 1,
        "minutes": 26
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "cap",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "planifperso",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 3
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
        "minutes": 21
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
      "name": "resp",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 25
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "blocks",
      "description": "cafet",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "strat",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 1
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking strat – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "synthese",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 19
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
      "name": "synthèse",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 16
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
      "name": "tarmac",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 40
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "suivi+ com",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "trete",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 7
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "avisExpert Payet",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "tw",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 18
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "passive",
      "description": "Tracking tw – passive time.",
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
