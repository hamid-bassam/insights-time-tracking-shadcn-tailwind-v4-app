/* eslint-disable @typescript-eslint/no-explicit-any */
import { Activity, TimeValue } from "../../../types/activity";
import { DailyInsight, WorkActivityData, WorkWeekData, WorkWeeklyInsight } from "../../../types/work-activity";
const weekly_data_work_json = {
  "weekNumber": 10,
  "startDate": "2025-09-11",
  "endDate": "2025-09-17",
  "weekly_insights": [
    {
      "totalWork": {
        "hours": 42,
        "minutes": 4
      },
      "nbDays": 5,
      "avgPerDay": {
        "hours": 8,
        "minutes": 24
      },
      "byCategory": {
        "avg_productive": {
          "hours": 7,
          "minutes": 5
        },
        "passive": {
          "hours": 0,
          "minutes": 11
        },
        "blocks": {
          "hours": 0,
          "minutes": 10
        },
        "ressource": {
          "hours": 0,
          "minutes": 57
        }
      },
      "productivity_ratio": 84.35
    }
  ],
  "daily_insights": [
    {
      "day": "jeu 11/09",
      "totalWork": {
        "hours": 10,
        "minutes": 39
      },
      "byCategory": {
        "productive": {
          "hours": 8,
          "minutes": 55
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
          "hours": 1,
          "minutes": 25
        }
      },
      "entry": "08:24",
      "exit": "19:03",
      "presence": {
        "hours": 10,
        "minutes": 39
      }
    },
    {
      "day": "ven 12/09",
      "totalWork": {
        "hours": 6,
        "minutes": 1
      },
      "byCategory": {
        "productive": {
          "hours": 5,
          "minutes": 18
        },
        "passive": {
          "hours": 0,
          "minutes": 22
        },
        "blocks": {
          "hours": 0,
          "minutes": 0
        },
        "ressource": {
          "hours": 0,
          "minutes": 21
        }
      },
      "entry": "09:45",
      "exit": "17:15",
      "presence": {
        "hours": 7,
        "minutes": 30
      }
    },
    {
      "day": "lun 15/09",
      "totalWork": {
        "hours": 8,
        "minutes": 35
      },
      "byCategory": {
        "productive": {
          "hours": 7,
          "minutes": 18
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
          "hours": 1,
          "minutes": 7
        }
      },
      "entry": "09:25",
      "exit": "18:00",
      "presence": {
        "hours": 8,
        "minutes": 35
      }
    },
    {
      "day": "mar 16/09",
      "totalWork": {
        "hours": 9,
        "minutes": 45
      },
      "byCategory": {
        "productive": {
          "hours": 8,
          "minutes": 16
        },
        "passive": {
          "hours": 0,
          "minutes": 24
        },
        "blocks": {
          "hours": 0,
          "minutes": 0
        },
        "ressource": {
          "hours": 1,
          "minutes": 5
        }
      },
      "entry": "09:10",
      "exit": "18:55",
      "presence": {
        "hours": 9,
        "minutes": 45
      }
    },
    {
      "day": "mer 17/09",
      "totalWork": {
        "hours": 7,
        "minutes": 4
      },
      "byCategory": {
        "productive": {
          "hours": 5,
          "minutes": 42
        },
        "passive": {
          "hours": 0,
          "minutes": 10
        },
        "blocks": {
          "hours": 0,
          "minutes": 21
        },
        "ressource": {
          "hours": 0,
          "minutes": 51
        }
      },
      "entry": "10:10",
      "exit": "18:14",
      "presence": {
        "hours": 8,
        "minutes": 4
      }
    }
  ],
  "activities": [
    {
      "name": "admin",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 1
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "blocks",
      "description": "fact",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "afk",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 4
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "passive",
      "description": "yt",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "apm",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 10
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "atelier marie new CP",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "aq",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 3
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "revues dates",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "avisexpert",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 11
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "+6 avis 25 a chercher",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "bio",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 15
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
        "minutes": 29
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
        "minutes": 33
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "actions post cap",
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
      "description": "request beyram Snapshot",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "check",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 18
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "bof",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "cmi",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 3
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Jerem demande",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "codir",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 8
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "stephane #marie",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "copilcap",
      "trackedAvgPerDay": {
        "hours": 1,
        "minutes": 6
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "check",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "daily",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 28
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
      "description": "fp",
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
      "description": "atelier clôture",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "learn",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 4
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "agile BNP",
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
      "name": "meal",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 9
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
      "name": "nada",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 4
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "ressource",
      "description": "resp",
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
      "description": "Thierry",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "onboardingcdp",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 24
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking onboardingcdp – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "outillage",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 13
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
      "name": "pegase",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 11
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "point off Sophie Lionel rex",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "planifcap",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 1
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
      "name": "pmo",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 5
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "planif échange marie pouzalgue",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "prep",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 23
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
      "name": "process",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 6
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
        "minutes": 2
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking reqcdp – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "request",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 1
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "cdp",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "requestcdp",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 2
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "jira fp",
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
      "description": "setup",
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
      "description": "roadmap octobre sujets imp",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "suivicdp",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 7
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "tarmac",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "suiviecdp",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 11
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "sophie fichier excel",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "tarmac",
      "trackedAvgPerDay": {
        "hours": 1,
        "minutes": 17
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "odj",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "tw",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 7
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "passive",
      "description": "tarmac dispersé",
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
