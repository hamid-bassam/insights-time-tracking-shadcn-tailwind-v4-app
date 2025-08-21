import { Activity, TimeValue } from "../../../types/activity";
import { DailyInsight, WorkActivityData, WorkWeekData, WorkWeeklyInsight } from "../../../types/work-activity";

const weekly_data_work_json =
{
  "weekNumber": 4,
  "startDate": "2025-07-31",
  "endDate": "2025-08-06",
  "weekly_insights": [
    {
      "totalWork": {
        "hours": 41,
        "minutes": 47
      },
      "nbDays": 5,
      "avgPerDay": {
        "hours": 8,
        "minutes": 21
      },
      "byCategory": {
        "avg_productive": {
          "hours": 6,
          "minutes": 59
        },
        "passive": {
          "hours": 0,
          "minutes": 2
        },
        "blocks": {
          "hours": 0,
          "minutes": 41
        },
        "ressource": {
          "hours": 0,
          "minutes": 38
        }
      },
      "productivity_ratio": 83.69
    }
  ],
  "daily_insights": [
    {
      "day": "jeudi 31/07",
      "totalWork": {
        "hours": 8,
        "minutes": 24
      },
      "byCategory": {
        "productive": {
          "hours": 7,
          "minutes": 49
        },
        "passive": {
          "hours": 0,
          "minutes": 0
        },
        "blocks": {
          "hours": 0,
          "minutes": 35
        },
        "ressource": {
          "hours": 0,
          "minutes": 0
        }
      },
      "entry": "08:25",
      "exit": "00:00",
      "presence": {
        "hours": 15,
        "minutes": 35
      }
    },
    {
      "day": "ven 01/08",
      "totalWork": {
        "hours": 5,
        "minutes": 14
      },
      "byCategory": {
        "productive": {
          "hours": 5,
          "minutes": 9
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
      "entry": "09:58",
      "exit": "17:35",
      "presence": {
        "hours": 7,
        "minutes": 37
      }
    },
    {
      "day": "lun 04/08",
      "totalWork": {
        "hours": 8,
        "minutes": 42
      },
      "byCategory": {
        "productive": {
          "hours": 7,
          "minutes": 40
        },
        "passive": {
          "hours": 0,
          "minutes": 10
        },
        "blocks": {
          "hours": 0,
          "minutes": 27
        },
        "ressource": {
          "hours": 0,
          "minutes": 25
        }
      },
      "entry": "09:15",
      "exit": "18:34",
      "presence": {
        "hours": 9,
        "minutes": 19
      }
    },
    {
      "day": "mar 05/08",
      "totalWork": {
        "hours": 9,
        "minutes": 38
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
          "hours": 1,
          "minutes": 26
        },
        "ressource": {
          "hours": 1,
          "minutes": 47
        }
      },
      "entry": "09:20",
      "exit": "18:58",
      "presence": {
        "hours": 9,
        "minutes": 38
      }
    },
    {
      "day": "mercredi",
      "totalWork": {
        "hours": 9,
        "minutes": 49
      },
      "byCategory": {
        "productive": {
          "hours": 7,
          "minutes": 55
        },
        "passive": {
          "hours": 0,
          "minutes": 0
        },
        "blocks": {
          "hours": 0,
          "minutes": 55
        },
        "ressource": {
          "hours": 0,
          "minutes": 59
        }
      },
      "entry": "09:50",
      "exit": "19:51",
      "presence": {
        "hours": 10,
        "minutes": 1
      }
    }
  ],
  "activities": [
    {
      "name": "acc",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 5
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "cdp Sihem boudjakji ELEC invoice",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "admin",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 14
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "blocks",
      "description": "hd klaxoon",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "analyse",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 10
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "pf-livrables",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "apm",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 18
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "capex",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "atelier",
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
      "name": "athena",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 10
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "point projet élec invoice",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "avis",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 12
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "exp",
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
        "minutes": 22
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
        "minutes": 3
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "suivi-projets report utl..",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "capa",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 13
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Apm",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "check",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 17
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "tasks",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "contact",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 4
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "fresh passage CRP le 26/01/26",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "daily",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 49
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "+ $capex pégase",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "dmt",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 1
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "dm teams",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "kt",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 4
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
      "name": "learn",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 5
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "m",
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
      "description": "actions",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "mails",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 24
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "check orga",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "matrice",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 22
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "agile #fp #antoineabouchacra #team collaboration - compréhension",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "meal",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 11
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "ressource",
      "description": "team #jc #fatou #celine",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "meer",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 13
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "sylvain partage XP",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "myloc",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 2
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking myloc – productive time.",
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
      "description": "boss #vincent",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "orga",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 4
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "$planif-perso",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "outils",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 26
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "one",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "outlook",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 6
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "regle",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "pd",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 1
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "ressource",
      "description": "Tracking pd – ressource time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "pegase",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 3
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "cible",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "planif",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 25
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "perso",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "portefeuille",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 23
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "analyse livrable élec",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "prep",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 12
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "capex",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "project",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 3
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "academy #intro",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "resp",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 27
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "blocks",
      "description": "out",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "task",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 4
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "Tracking task – productive time.",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "tasks",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 5
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "demande Wesley accès",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "tm",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 2
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
      "name": "train",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 24
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "cyber",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "training",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 10
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "sanctions-inter",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "travaux",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 16
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "ete",
      "icon": "activity",
      "impressions": []
    },
    {
      "name": "work",
      "trackedAvgPerDay": {
        "hours": 0,
        "minutes": 16
      },
      "goalAvgPerDay": {
        "hours": 0,
        "minutes": 0
      },
      "type": "productive",
      "description": "setup",
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
