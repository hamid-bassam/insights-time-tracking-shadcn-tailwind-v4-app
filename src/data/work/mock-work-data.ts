import { WorkActivityData } from "../../types/work-activity";

export const mockWorkActivityData: WorkActivityData = JSON.parse(
  JSON.stringify(
    [
      // start week 1 = 33
      {
        "weekNumber": 1,
        "startDate": "2025-07-10",
        "endDate": "2025-07-16",
        "weekly_insights": [
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
        "daily_insights": [
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
      // start week 2 = 34
      {
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
      ,
      // end week 2 = 34 
      // start week 3 = 35 
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
      ,
      // end week 3 = 35 

      // start week 4 = 36 
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
      ,
      // end week 4 = 36 

      // start week 5 = 37 
      {
        "weekNumber": 5,
        "startDate": "2025-08-07",
        "endDate": "2025-08-13",
        "weekly_insights": [
          {
            "totalWork": {
              "hours": 36,
              "minutes": 7
            },
            "nbDays": 5,
            "avgPerDay": {
              "hours": 7,
              "minutes": 13
            },
            "byCategory": {
              "avg_productive": {
                "hours": 6,
                "minutes": 11
              },
              "passive": {
                "hours": 0,
                "minutes": 3
              },
              "blocks": {
                "hours": 0,
                "minutes": 21
              },
              "ressource": {
                "hours": 0,
                "minutes": 38
              }
            },
            "productivity_ratio": 85.6
          }
        ],
        "daily_insights": [
          {
            "day": "jeudi 07/08",
            "totalWork": {
              "hours": 6,
              "minutes": 18
            },
            "byCategory": {
              "productive": {
                "hours": 6,
                "minutes": 18
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
            "entry": "09:00",
            "exit": "18:23",
            "presence": {
              "hours": 9,
              "minutes": 23
            }
          },
          {
            "day": "vendredi 08/08",
            "totalWork": {
              "hours": 4,
              "minutes": 57
            },
            "byCategory": {
              "productive": {
                "hours": 4,
                "minutes": 17
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
                "minutes": 25
              }
            },
            "entry": "09:10",
            "exit": "16:20",
            "presence": {
              "hours": 7,
              "minutes": 10
            }
          },
          {
            "day": "lundi 11/08",
            "totalWork": {
              "hours": 7,
              "minutes": 35
            },
            "byCategory": {
              "productive": {
                "hours": 6,
                "minutes": 13
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
                "minutes": 53
              }
            },
            "entry": "09:50",
            "exit": "17:40",
            "presence": {
              "hours": 7,
              "minutes": 50
            }
          },
          {
            "day": "mar 12/08",
            "totalWork": {
              "hours": 7,
              "minutes": 43
            },
            "byCategory": {
              "productive": {
                "hours": 6,
                "minutes": 35
              },
              "passive": {
                "hours": 0,
                "minutes": 0
              },
              "blocks": {
                "hours": 0,
                "minutes": 21
              },
              "ressource": {
                "hours": 0,
                "minutes": 47
              }
            },
            "entry": "09:50",
            "exit": "17:50",
            "presence": {
              "hours": 8,
              "minutes": 0
            }
          },
          {
            "day": "Merci 13/08",
            "totalWork": {
              "hours": 9,
              "minutes": 34
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
                "minutes": 56
              },
              "ressource": {
                "hours": 1,
                "minutes": 6
              }
            },
            "entry": "09:52",
            "exit": "19:36",
            "presence": {
              "hours": 9,
              "minutes": 44
            }
          }
        ],
        "activities": [
          {
            "name": "analyse",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 20
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "pf #elec-invoice support cap de lancement",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "aq",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 7
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "prep facelec",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "atelier",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 12
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "revueAQ #boss",
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
              "minutes": 30
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "ressource",
            "description": "clope 🚬",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "capex",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 8
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "important",
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
            "description": "sophie",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "docs",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 4
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "process CSI",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "mails",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 7
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
            "name": "meet",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 11
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "travaux-ete #boss",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "off",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 1
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "sophie",
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
            "description": "perso",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "planif",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 4
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
            "description": "meteo",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "resp",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 21
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
            "description": "roadmap été",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "suivi",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 8
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "cd prevue-aq #elecinvoice",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "suivie",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 27
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "cdp #synthese",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "tarmac",
            "trackedAvgPerDay": {
              "hours": 1,
              "minutes": 11
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "ob #athena",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "train",
            "trackedAvgPerDay": {
              "hours": 1,
              "minutes": 10
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "lcb-ft",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "travaux",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 2
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "ete #check one note",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "tw",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 3
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "passive",
            "description": "Tracking tw – passive time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "work",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 4
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "prep",
            "icon": "activity",
            "impressions": []
          }
        ],
        "globalRate": -1
      },
      // end week 5 = 37 
    ]
  ));