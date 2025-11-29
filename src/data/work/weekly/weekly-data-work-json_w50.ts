
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Activity, TimeValue } from "../../../types/activity";
import { DailyInsight, WorkActivityData, WorkWeekData, WorkWeeklyInsight } from "../../../types/work-activity";
const weekly_data_work_json = {
  "weekNumber": 18,
  "startDate": "2025-11-06",
  "endDate": "2025-11-12",
  "weekly_insights": [
    {
      "totalWork": {
        "hours": 27,
        "minutes": 9
      },
      "nbDays": 4,
      "avgPerDay": {
        "hours": 6,
        "minutes": 47
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
          "minutes": 7
        },
        "ressource": {
          "hours": 0,
          "minutes": 9
        }
      },
      "productivity_ratio": 95.46
    }
  ],
  "daily_insights": [
    {
      "day": "jeu 06/11",
      "totalWork": {
        "hours": 6,
        "minutes": 21
      },
      "byCategory": {
        "productive": {
          "hours": 5,
          "minutes": 53
        },
        "passive": {
          "hours": 0,
          "minutes": 8
        },
        "blocks": {
          "hours": 0,
          "minutes": 20
        },
        "ressource": {
          "hours": 0,
          "minutes": 0
        }
      },
      "entry": "09:30",
      "exit": "17:35",
      "presence": {
        "hours": 8,
        "minutes": 5
      }
    },
    {
      "day": "ven 07/11",
      "totalWork": {
        "hours": 7,
        "minutes": 0
      },
      "byCategory": {
        "productive": {
          "hours": 7,
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
      "entry": "11:00",
      "exit": "19:30",
      "presence": {
        "hours": 8,
        "minutes": 30
      }
    },
    {
      "day": "lun 10/11",
      "totalWork": {
        "hours": 6,
        "minutes": 0
      },
      "byCategory": {
        "productive": {
          "hours": 5,
          "minutes": 50
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
      "entry": "10:00",
      "exit": "16:00",
      "presence": {
        "hours": 6,
        "minutes": 0
      }
    },
    {
      "day": "merc 12/11",
      "totalWork": {
        "hours": 7,
        "minutes": 48
      },
      "byCategory": {
        "productive": {
          "hours": 7,
          "minutes": 12
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
          "minutes": 26
        }
      },
      "entry": "11:00",
      "exit": "18:48",
      "presence": {
        "hours": 7,
        "minutes": 48
      }
    }
  ],
  "activities": [
    {
      "name": "acccdp",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 53
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "fabien squid ai",
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
      "description": "Tracking bio – ressource time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "br",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 8
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
        "minutes": 17
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking budget – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "cap",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 15
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "maia crew",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "check",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 43
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
        "minutes": 23
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "relance + suivicdp",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "crcap",
      "trackedAvgPerDay": {
        "hours": 1,
        "minutes": 25
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
      "name": "daily",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 25
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
      "name": "dm",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 2
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "passive",
      "description": "sylvain 🙏",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "docobligatoire",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 10
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "hrone check-list",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "docs",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 22
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
      "description": "Sophie",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "postcap",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 7
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking postcap – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "prep",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 15
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
        "minutes": 32
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking prepcap – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "processcap",
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
      "name": "requestcdp",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 4
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
        "minutes": 7
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
      "name": "todo",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 3
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
        "minutes": 11
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "planifcap",
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
