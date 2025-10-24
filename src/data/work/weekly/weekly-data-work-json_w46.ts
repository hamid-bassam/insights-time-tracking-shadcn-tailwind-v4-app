/* eslint-disable @typescript-eslint/no-explicit-any */
import { Activity, TimeValue } from "../../../types/activity";
import { DailyInsight, WorkActivityData, WorkWeekData, WorkWeeklyInsight } from "../../../types/work-activity";
const weekly_data_work_json = {
  "weekNumber": 14,
  "startDate": "2025-10-09",
  "endDate": "2025-10-15",
  "weekly_insights": [
    {
      "totalWork": {
        "hours": 34,
        "minutes": 18
      },
      "nbDays": 5,
      "avgPerDay": {
        "hours": 6,
        "minutes": 51
      },
      "byCategory": {
        "avg_productive": {
          "hours": 6,
          "minutes": 28
        },
        "passive": {
          "hours": 0,
          "minutes": 2
        },
        "blocks": {
          "hours": 0,
          "minutes": 5
        },
        "ressource": {
          "hours": 0,
          "minutes": 15
        }
      },
      "productivity_ratio": 94.36
    }
  ],
  "daily_insights": [
    {
      "day": "jeu 09/10",
      "totalWork": {
        "hours": 4,
        "minutes": 39
      },
      "byCategory": {
        "productive": {
          "hours": 4,
          "minutes": 31
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
          "minutes": 8
        }
      },
      "entry": "10:00",
      "exit": "18:24",
      "presence": {
        "hours": 8,
        "minutes": 24
      }
    },
    {
      "day": "ven 10/10",
      "totalWork": {
        "hours": 4,
        "minutes": 58
      },
      "byCategory": {
        "productive": {
          "hours": 4,
          "minutes": 38
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
          "minutes": 15
        }
      },
      "entry": "09:57",
      "exit": "16:35",
      "presence": {
        "hours": 6,
        "minutes": 38
      }
    },
    {
      "day": "Lun 13/10",
      "totalWork": {
        "hours": 8,
        "minutes": 10
      },
      "byCategory": {
        "productive": {
          "hours": 7,
          "minutes": 27
        },
        "passive": {
          "hours": 0,
          "minutes": 0
        },
        "blocks": {
          "hours": 0,
          "minutes": 3
        },
        "ressource": {
          "hours": 0,
          "minutes": 40
        }
      },
      "entry": "10:30",
      "exit": "18:40",
      "presence": {
        "hours": 8,
        "minutes": 10
      }
    },
    {
      "day": "mar 14/10",
      "totalWork": {
        "hours": 7,
        "minutes": 25
      },
      "byCategory": {
        "productive": {
          "hours": 7,
          "minutes": 10
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
          "minutes": 5
        }
      },
      "entry": "09:30",
      "exit": "18:35",
      "presence": {
        "hours": 9,
        "minutes": 5
      }
    },
    {
      "day": "mer 15/10",
      "totalWork": {
        "hours": 9,
        "minutes": 6
      },
      "byCategory": {
        "productive": {
          "hours": 8,
          "minutes": 36
        },
        "passive": {
          "hours": 0,
          "minutes": 10
        },
        "blocks": {
          "hours": 0,
          "minutes": 10
        },
        "ressource": {
          "hours": 0,
          "minutes": 10
        }
      },
      "entry": "09:10",
      "exit": "20:26",
      "presence": {
        "hours": 11,
        "minutes": 16
      }
    }
  ],
  "activities": [
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
      "description": "o/o seb cox",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "avisexperts",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 36
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "non stop",
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
      "description": "out",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "br",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 14
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
      "description": "Mehdi",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "cap",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 6
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "squid ai news",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "check",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 1
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
        "minutes": 47
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "batterie 🔋 faible",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "daily",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 38
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
      "name": "data",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 15
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking data – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "mails",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 4
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
      "name": "off",
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
      "description": "Tracking outillage – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "pegase",
      "trackedAvgPerDay": {
        "hours": 1,
        "minutes": 19
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
      "name": "planif",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 6
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
      "name": "planifcap",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 38
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "aude",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "prep",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 17
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "relecture",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "prepcap",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 35
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "remarques dafne ..",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "requestcdp",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 7
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
      "description": "café",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "rg",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 0
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
      "name": "todos",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 17
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking todos – productive time.",
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
