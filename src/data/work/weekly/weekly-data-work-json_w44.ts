/* eslint-disable @typescript-eslint/no-explicit-any */
import { Activity, TimeValue } from "../../../types/activity";
import { DailyInsight, WorkActivityData, WorkWeekData, WorkWeeklyInsight } from "../../../types/work-activity";
const weekly_data_work_json = {
  "weekNumber": 12,
  "startDate": "2025-09-25",
  "endDate": "2025-10-01",
  "weekly_insights": [
    {
      "totalWork": {
        "hours": 31,
        "minutes": 23
      },
      "nbDays": 5,
      "avgPerDay": {
        "hours": 6,
        "minutes": 16
      },
      "byCategory": {
        "avg_productive": {
          "hours": 5,
          "minutes": 24
        },
        "passive": {
          "hours": 0,
          "minutes": 8
        },
        "blocks": {
          "hours": 0,
          "minutes": 5
        },
        "ressource": {
          "hours": 0,
          "minutes": 38
        }
      },
      "productivity_ratio": 86.25
    }
  ],
  "daily_insights": [
    {
      "day": "jeu 25/09",
      "totalWork": {
        "hours": 6,
        "minutes": 3
      },
      "byCategory": {
        "productive": {
          "hours": 5,
          "minutes": 0
        },
        "passive": {
          "hours": 0,
          "minutes": 26
        },
        "blocks": {
          "hours": 0,
          "minutes": 6
        },
        "ressource": {
          "hours": 0,
          "minutes": 31
        }
      },
      "entry": "09:20",
      "exit": "16:50",
      "presence": {
        "hours": 7,
        "minutes": 30
      }
    },
    {
      "day": "ven 26/09",
      "totalWork": {
        "hours": 7,
        "minutes": 8
      },
      "byCategory": {
        "productive": {
          "hours": 5,
          "minutes": 37
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
          "hours": 1,
          "minutes": 25
        }
      },
      "entry": "10:00",
      "exit": "18:00",
      "presence": {
        "hours": 8,
        "minutes": 0
      }
    },
    {
      "day": "lun 29/09/25",
      "totalWork": {
        "hours": 8,
        "minutes": 34
      },
      "byCategory": {
        "productive": {
          "hours": 7,
          "minutes": 24
        },
        "passive": {
          "hours": 0,
          "minutes": 0
        },
        "blocks": {
          "hours": 0,
          "minutes": 13
        },
        "ressource": {
          "hours": 0,
          "minutes": 57
        }
      },
      "entry": "09:50",
      "exit": "18:24",
      "presence": {
        "hours": 8,
        "minutes": 34
      }
    },
    {
      "day": "mar 30/09",
      "totalWork": {
        "hours": 1,
        "minutes": 48
      },
      "byCategory": {
        "productive": {
          "hours": 1,
          "minutes": 38
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
          "minutes": 10
        }
      },
      "entry": "10:10",
      "exit": "16:52",
      "presence": {
        "hours": 6,
        "minutes": 42
      }
    },
    {
      "day": "Mer 01/10",
      "totalWork": {
        "hours": 7,
        "minutes": 50
      },
      "byCategory": {
        "productive": {
          "hours": 7,
          "minutes": 25
        },
        "passive": {
          "hours": 0,
          "minutes": 15
        },
        "blocks": {
          "hours": 0,
          "minutes": 0
        },
        "ressource": {
          "hours": 0,
          "minutes": 10
        }
      },
      "entry": "09:00",
      "exit": "18:40",
      "presence": {
        "hours": 9,
        "minutes": 40
      }
    }
  ],
  "activities": [
    {
      "name": "aq",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 21
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "process",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "aqbli",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 3
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "off cmi",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "avisexp",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 8
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking avisexp – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "avisexpert",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 4
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
        "minutes": 6
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
        "minutes": 13
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
        "minutes": 19
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "CSI good feedback",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "cdp",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 2
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "beyram",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "check",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 19
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
      "name": "crcap",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 27
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking crcap – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "daily",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 30
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
        "minutes": 4
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "budget sa",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "livrables",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 15
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
      "name": "meal",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 2
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
        "minutes": 12
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "cagip demandes",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "obcdp",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 26
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Frédéric bottazzo",
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
      "description": "Sophie",
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
      "name": "pepsci",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 10
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "livrables",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "planifcap",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 12
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
      "name": "prep",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 25
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
      "name": "relecture",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 7
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "CAP beyram",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "reqcdp",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 9
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "revue aq pcoi",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "requestcdp",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 5
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
        "minutes": 5
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "blocks",
      "description": "prep",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "revueaq",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 16
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "pcoi",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "tasks",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 10
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "APM",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "tm",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 3
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
      "name": "tw",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 5
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
