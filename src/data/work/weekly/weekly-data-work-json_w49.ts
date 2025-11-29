
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Activity, TimeValue } from "../../../types/activity";
import { DailyInsight, WorkActivityData, WorkWeekData, WorkWeeklyInsight } from "../../../types/work-activity";
const weekly_data_work_json = {
  "weekNumber": 17,
  "startDate": "2025-10-30",
  "endDate": "2025-11-05",
  "weekly_insights": [
    {
      "totalWork": {
        "hours": 34,
        "minutes": 39
      },
      "nbDays": 5,
      "avgPerDay": {
        "hours": 6,
        "minutes": 55
      },
      "byCategory": {
        "avg_productive": {
          "hours": 6,
          "minutes": 6
        },
        "passive": {
          "hours": 0,
          "minutes": 8
        },
        "blocks": {
          "hours": 0,
          "minutes": 9
        },
        "ressource": {
          "hours": 0,
          "minutes": 31
        }
      },
      "productivity_ratio": 88.07
    }
  ],
  "daily_insights": [
    {
      "day": "jeu 30/10",
      "totalWork": {
        "hours": 5,
        "minutes": 0
      },
      "byCategory": {
        "productive": {
          "hours": 5,
          "minutes": 0
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
      "entry": "09:30",
      "exit": "17:00",
      "presence": {
        "hours": 7,
        "minutes": 30
      }
    },
    {
      "day": "ven 31/10",
      "totalWork": {
        "hours": 5,
        "minutes": 10
      },
      "byCategory": {
        "productive": {
          "hours": 4,
          "minutes": 30
        },
        "passive": {
          "hours": 0,
          "minutes": 40
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
      "entry": "10:00",
      "exit": "19:40",
      "presence": {
        "hours": 9,
        "minutes": 40
      }
    },
    {
      "day": "lundi 03/11",
      "totalWork": {
        "hours": 8,
        "minutes": 23
      },
      "byCategory": {
        "productive": {
          "hours": 6,
          "minutes": 23
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
          "hours": 1,
          "minutes": 43
        }
      },
      "entry": "09:00",
      "exit": "19:38",
      "presence": {
        "hours": 10,
        "minutes": 38
      }
    },
    {
      "day": "mar 04/11",
      "totalWork": {
        "hours": 11,
        "minutes": 13
      },
      "byCategory": {
        "productive": {
          "hours": 9,
          "minutes": 50
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
          "minutes": 56
        }
      },
      "entry": "08:50",
      "exit": "20:42",
      "presence": {
        "hours": 11,
        "minutes": 52
      }
    },
    {
      "day": "mer 05/11",
      "totalWork": {
        "hours": 4,
        "minutes": 53
      },
      "byCategory": {
        "productive": {
          "hours": 4,
          "minutes": 48
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
      "entry": "10:10",
      "exit": "17:30",
      "presence": {
        "hours": 7,
        "minutes": 20
      }
    }
  ],
  "activities": [
    {
      "name": "aqsp",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 12
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking aqsp – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "avisexperts",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 18
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "run",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "bio",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 3
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
      "name": "budget",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 23
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "guillaume",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "cap",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 27
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
      "name": "cloture",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 24
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "requestboss",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "copilcap",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 3
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
        "minutes": 37
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "a247",
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
      "name": "direct",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 18
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "ressource",
      "description": "dej sylvain",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "docs",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 8
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking docs – productive time.",
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
      "name": "off",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 3
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "fabien",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "pepcsi",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 37
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
        "minutes": 14
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
        "minutes": 5
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
      "name": "prepcap",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 18
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "maia",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "reportime",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 1
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
        "minutes": 35
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "fp avis expert younes",
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
      "description": "café",
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
      "description": "bilan maj",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "roadmap",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 8
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "actions",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "strat",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 48
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "team trajectoire APM",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "tasks",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 4
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking tasks – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "tm",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 8
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "passive",
      "description": "Tracking tm – passive time.",
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
