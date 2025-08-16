import { WorkActivityData } from "../../types/work-activity";

export const mockActivityData: WorkActivityData = JSON.parse(
  JSON.stringify(
    [
      // start week 1 = 33
      {
        "weekNumber": 1,
        "startDate": "2025-07-10",
        "endDate": "2025-07-16",
        "weekly insights": [
          {
            "totalWork": {
              "hours": 18,
              "minutes": 6
            },
            "nbDays": 2,
            "avgPerDay": {
              "hours": 9,
              "minutes": 3
            },
            "byCategory": {
              "avg_productive": {
                "hours": 5,
                "minutes": 54
              },
              "passive": {
                "hours": 0,
                "minutes": 0
              },
              "blocks": {
                "hours": 1,
                "minutes": 24
              },
              "ressource": {
                "hours": 1,
                "minutes": 44
              }
            },
            "productivity_ratio": 65.29
          }
        ],
        "daily insights": [
          {
            "day": "mardi 15/07",
            "totalWork": {
              "hours": 8,
              "minutes": 37
            },
            "byCategory": {
              "productive": {
                "hours": 5,
                "minutes": 23
              },
              "passive": {
                "hours": 0,
                "minutes": 0
              },
              "blocks": {
                "hours": 0,
                "minutes": 42
              },
              "ressource": {
                "hours": 2,
                "minutes": 32
              }
            },
            "entry": "10:00",
            "exit": "18:37",
            "presence": {
              "hours": 8,
              "minutes": 37
            }
          },
          {
            "day": "mer 16/07",
            "totalWork": {
              "hours": 9,
              "minutes": 29
            },
            "byCategory": {
              "productive": {
                "hours": 6,
                "minutes": 26
              },
              "passive": {
                "hours": 0,
                "minutes": 0
              },
              "blocks": {
                "hours": 2,
                "minutes": 6
              },
              "ressource": {
                "hours": 0,
                "minutes": 57
              }
            },
            "entry": "09:10",
            "exit": "18:39",
            "presence": {
              "hours": 9,
              "minutes": 29
            }
          }
        ],
        "activities": [
          {
            "name": "admin",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 22
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "blocks",
            "description": "AD post",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "bio",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 6
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
            "description": "🚬",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "daily",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 32
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
            "name": "direct",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 46
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "ressource",
            "description": "boss #sophie ☕",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "mail",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 21
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
              "minutes": 30
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "ressource",
            "description": "sophie #thierry",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "meet",
            "trackedAvgPerDay": {
              "hours": 2,
              "minutes": 38
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "cap #philippe",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "notes",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 47
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
            "name": "passation",
            "trackedAvgPerDay": {
              "hours": 1,
              "minutes": 9
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "phillipe Athena et SharePoints",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "point",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 2
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
            "name": "reportime",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 3
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
            "name": "resp",
            "trackedAvgPerDay": {
              "hours": 1,
              "minutes": 1
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "blocks",
            "description": "desetup",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "strat",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 19
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "roadmap",
            "icon": "activity",
            "impressions": []
          }
        ],
        "globalRate": -1
      },
      // end week 1 = 33
    ]
  ));