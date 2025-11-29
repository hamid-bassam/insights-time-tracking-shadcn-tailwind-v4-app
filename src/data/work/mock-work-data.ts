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
      // start week 6 = 38 
      {
        "weekNumber": 6,
        "startDate": "2025-08-14",
        "endDate": "2025-08-20",
        "weekly_insights": [
          {
            "totalWork": {
              "hours": 22,
              "minutes": 51
            },
            "nbDays": 3,
            "avgPerDay": {
              "hours": 7,
              "minutes": 37
            },
            "byCategory": {
              "avg_productive": {
                "hours": 6,
                "minutes": 21
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
                "hours": 0,
                "minutes": 50
              }
            },
            "productivity_ratio": 83.52
          }
        ],
        "daily_insights": [
          {
            "day": "lundi 18/08",
            "totalWork": {
              "hours": 9,
              "minutes": 11
            },
            "byCategory": {
              "productive": {
                "hours": 7,
                "minutes": 50
              },
              "passive": {
                "hours": 0,
                "minutes": 0
              },
              "blocks": {
                "hours": 0,
                "minutes": 30
              },
              "ressource": {
                "hours": 0,
                "minutes": 51
              }
            },
            "entry": "09:30",
            "exit": "18:41",
            "presence": {
              "hours": 9,
              "minutes": 11
            }
          },
          {
            "day": "mardi 19/08",
            "totalWork": {
              "hours": 3,
              "minutes": 19
            },
            "byCategory": {
              "productive": {
                "hours": 3,
                "minutes": 1
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
                "minutes": 18
              }
            },
            "entry": "10:21",
            "exit": "17:26",
            "presence": {
              "hours": 7,
              "minutes": 5
            }
          },
          {
            "day": "mercredi 20/08",
            "totalWork": {
              "hours": 10,
              "minutes": 21
            },
            "byCategory": {
              "productive": {
                "hours": 8,
                "minutes": 14
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
                "hours": 1,
                "minutes": 23
              }
            },
            "entry": "09:20",
            "exit": "19:41",
            "presence": {
              "hours": 10,
              "minutes": 21
            }
          }
        ],
        "activities": [
          {
            "name": "bio",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 7
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
              "minutes": 28
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
            "description": "todo",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "copil",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 30
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "cap #blanc slide 4",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "fp",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 46
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "atelier #samuel",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "log",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 26
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "todo",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "marche",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 5
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "ressource",
            "description": "Tracking marche – ressource time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "meal",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 7
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "ressource",
            "description": "flan",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "nada",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 2
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
              "minutes": 20
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "gilles esg archi technique",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "pf",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 52
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
            "name": "planif",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 53
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "cap ...",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "resp",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 24
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
              "minutes": 8
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "todo",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "suivie",
            "trackedAvgPerDay": {
              "hours": 1,
              "minutes": 4
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
            "name": "tarmac",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 11
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "ob",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "tr",
            "trackedAvgPerDay": {
              "hours": 1,
              "minutes": 5
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "ete #pf #maia #trade-surveillance",
            "icon": "activity",
            "impressions": []
          }
        ],
        "globalRate": -1
      },
      // end week 6 = 38 
      //start week 7 = 39 
      {
        "weekNumber": 7,
        "startDate": "2025-08-21",
        "endDate": "2025-08-27",
        "weekly_insights": [
          {
            "totalWork": {
              "hours": 33,
              "minutes": 16
            },
            "nbDays": 5,
            "avgPerDay": {
              "hours": 6,
              "minutes": 39
            },
            "byCategory": {
              "avg_productive": {
                "hours": 5,
                "minutes": 45
              },
              "passive": {
                "hours": 0,
                "minutes": 0
              },
              "blocks": {
                "hours": 0,
                "minutes": 12
              },
              "ressource": {
                "hours": 0,
                "minutes": 40
              }
            },
            "productivity_ratio": 86.62
          }
        ],
        "daily_insights": [
          {
            "day": "jeudi 21/08",
            "totalWork": {
              "hours": 2,
              "minutes": 58
            },
            "byCategory": {
              "productive": {
                "hours": 2,
                "minutes": 54
              },
              "passive": {
                "hours": 0,
                "minutes": 0
              },
              "blocks": {
                "hours": 0,
                "minutes": 4
              },
              "ressource": {
                "hours": 0,
                "minutes": 0
              }
            },
            "entry": "15:07",
            "exit": "18:05",
            "presence": {
              "hours": 2,
              "minutes": 58
            }
          },
          {
            "day": "vendredi 22/08",
            "totalWork": {
              "hours": 6,
              "minutes": 55
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
                "hours": 0,
                "minutes": 0
              },
              "ressource": {
                "hours": 0,
                "minutes": 30
              }
            },
            "entry": "09:31",
            "exit": "18:10",
            "presence": {
              "hours": 8,
              "minutes": 39
            }
          },
          {
            "day": "lun 25/08",
            "totalWork": {
              "hours": 9,
              "minutes": 15
            },
            "byCategory": {
              "productive": {
                "hours": 6,
                "minutes": 58
              },
              "passive": {
                "hours": 0,
                "minutes": 0
              },
              "blocks": {
                "hours": 0,
                "minutes": 40
              },
              "ressource": {
                "hours": 1,
                "minutes": 37
              }
            },
            "entry": "09:32",
            "exit": "18:47",
            "presence": {
              "hours": 9,
              "minutes": 15
            }
          },
          {
            "day": "mardi 26/08",
            "totalWork": {
              "hours": 7,
              "minutes": 41
            },
            "byCategory": {
              "productive": {
                "hours": 6,
                "minutes": 39
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
                "minutes": 52
              }
            },
            "entry": "10:30",
            "exit": "18:22",
            "presence": {
              "hours": 7,
              "minutes": 52
            }
          },
          {
            "day": "Mer 27/08",
            "totalWork": {
              "hours": 6,
              "minutes": 27
            },
            "byCategory": {
              "productive": {
                "hours": 5,
                "minutes": 53
              },
              "passive": {
                "hours": 0,
                "minutes": 3
              },
              "blocks": {
                "hours": 0,
                "minutes": 6
              },
              "ressource": {
                "hours": 0,
                "minutes": 25
              }
            },
            "entry": "09:44",
            "exit": "17:40",
            "presence": {
              "hours": 7,
              "minutes": 56
            }
          }
        ],
        "activities": [
          {
            "name": "afk",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "passive",
            "description": "Tracking afk – passive time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "apm",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 3
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "Tracking apm – productive time.",
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
            "description": "Athena",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "bio",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 2
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
            "name": "cdp",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 54
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "elecinvoice #livrable #risques",
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
            "name": "fp",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 8
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "livrables niveau de rattachement",
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
            "description": "Tracking log – productive time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "meal",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 15
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "ressource",
            "description": "flan",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "off",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 2
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
            "name": "outillage",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 11
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
              "minutes": 11
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "maia + #eleinvoice",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "planif",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 34
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "tradesurveillance #olivier bersot",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "planifcap",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 29
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "gmrc cross border + avis expert",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "prep",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 8
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
              "minutes": 7
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "support cap passé imad",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "resp",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 12
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "blocks",
            "description": "cafe",
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
            "name": "tarmac",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 58
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "sensi",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "teete",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 9
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "avisExperts",
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
            "name": "trete",
            "trackedAvgPerDay": {
              "hours": 1,
              "minutes": 0
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "avisExperts",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "work",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 2
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "resp",
            "icon": "activity",
            "impressions": []
          }
        ],
        "globalRate": -1
      }
      ,
      // end week 7 = 39
      // start week 8 = 40 
      {
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
      // end week 8 = 40 
      ,
      // start week 9 = 41 
      {
        "weekNumber": 9,
        "startDate": "2025-09-04",
        "endDate": "2025-09-10",
        "weekly_insights": [
          {
            "totalWork": {
              "hours": 44,
              "minutes": 12
            },
            "nbDays": 5,
            "avgPerDay": {
              "hours": 8,
              "minutes": 50
            },
            "byCategory": {
              "avg_productive": {
                "hours": 7,
                "minutes": 49
              },
              "passive": {
                "hours": 0,
                "minutes": 6
              },
              "blocks": {
                "hours": 0,
                "minutes": 11
              },
              "ressource": {
                "hours": 0,
                "minutes": 44
              }
            },
            "productivity_ratio": 88.42
          }
        ],
        "daily_insights": [
          {
            "day": "jeu 04/09",
            "totalWork": {
              "hours": 7,
              "minutes": 48
            },
            "byCategory": {
              "productive": {
                "hours": 7,
                "minutes": 14
              },
              "passive": {
                "hours": 0,
                "minutes": 7
              },
              "blocks": {
                "hours": 0,
                "minutes": 0
              },
              "ressource": {
                "hours": 0,
                "minutes": 27
              }
            },
            "entry": "09:40",
            "exit": "19:55",
            "presence": {
              "hours": 10,
              "minutes": 15
            }
          },
          {
            "day": "ven 05/09",
            "totalWork": {
              "hours": 6,
              "minutes": 46
            },
            "byCategory": {
              "productive": {
                "hours": 5,
                "minutes": 57
              },
              "passive": {
                "hours": 0,
                "minutes": 23
              },
              "blocks": {
                "hours": 0,
                "minutes": 0
              },
              "ressource": {
                "hours": 0,
                "minutes": 26
              }
            },
            "entry": "09:56",
            "exit": "18:46",
            "presence": {
              "hours": 8,
              "minutes": 50
            }
          },
          {
            "day": "lun 08/09",
            "totalWork": {
              "hours": 8,
              "minutes": 29
            },
            "byCategory": {
              "productive": {
                "hours": 6,
                "minutes": 37
              },
              "passive": {
                "hours": 0,
                "minutes": 0
              },
              "blocks": {
                "hours": 0,
                "minutes": 20
              },
              "ressource": {
                "hours": 1,
                "minutes": 32
              }
            },
            "entry": "09:50",
            "exit": "18:19",
            "presence": {
              "hours": 8,
              "minutes": 29
            }
          },
          {
            "day": "mar 09/09",
            "totalWork": {
              "hours": 7,
              "minutes": 54
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
                "minutes": 11
              },
              "ressource": {
                "hours": 0,
                "minutes": 31
              }
            },
            "entry": "10:10",
            "exit": "18:13",
            "presence": {
              "hours": 8,
              "minutes": 3
            }
          },
          {
            "day": "mer 10/09",
            "totalWork": {
              "hours": 13,
              "minutes": 15
            },
            "byCategory": {
              "productive": {
                "hours": 12,
                "minutes": 5
              },
              "passive": {
                "hours": 0,
                "minutes": 0
              },
              "blocks": {
                "hours": 0,
                "minutes": 25
              },
              "ressource": {
                "hours": 0,
                "minutes": 45
              }
            },
            "entry": "08:45",
            "exit": "22:00",
            "presence": {
              "hours": 13,
              "minutes": 15
            }
          }
        ],
        "activities": [
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
            "description": "Tracking afk – passive time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "apm",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 1
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "com",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "avisexp",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 15
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "collecte de commentaires",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "avisexpert",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 6
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
              "minutes": 25
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
              "minutes": 5
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
              "minutes": 26
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
              "minutes": 47
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
              "hours": 1,
              "minutes": 13
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "ano docs",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "daily",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 39
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
              "minutes": 10
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "ressource",
            "description": "Tracking direct – ressource time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "draft",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 8
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "com",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "fp",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 50
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "tao",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "log",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 2
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
              "minutes": 5
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "Thierry #pegase",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "outillage",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 11
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "fp #aqbli",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "pegase",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 48
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "samuel transfo",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "pepsci",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 3
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "maj",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "pf",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 20
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "hrone",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "planif",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 22
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "fichier cycle",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "planifcap",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 26
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "thierry atelier",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "planifperso",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 2
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
              "minutes": 11
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
            "name": "presentaion",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 10
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "accessibilitéNum",
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
            "name": "request",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 4
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "cio office",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "requestcdp",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 3
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
              "minutes": 11
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "blocks",
            "description": "rg",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "strat",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 17
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "synthese",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "tarmac",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 3
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "Mika",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "tarmacob",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 6
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "Tracking tarmacob – productive time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "tw",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 2
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
      // end week 9 = 41 
      ,
      // start week 10 = 42 
      {
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
              "minutes": 18
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "tarmac sophie fichier excel",
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
      // end week 10 = 42
      ,
      // start week 11 = 43 
      {
        "weekNumber": 11,
        "startDate": "2025-09-18",
        "endDate": "2025-09-24",
        "weekly_insights": [
          {
            "totalWork": {
              "hours": 33,
              "minutes": 59
            },
            "nbDays": 5,
            "avgPerDay": {
              "hours": 6,
              "minutes": 47
            },
            "byCategory": {
              "avg_productive": {
                "hours": 5,
                "minutes": 25
              },
              "passive": {
                "hours": 0,
                "minutes": 6
              },
              "blocks": {
                "hours": 0,
                "minutes": 17
              },
              "ressource": {
                "hours": 0,
                "minutes": 59
              }
            },
            "productivity_ratio": 79.84
          }
        ],
        "daily_insights": [
          {
            "day": "jeu 18/09",
            "totalWork": {
              "hours": 4,
              "minutes": 41
            },
            "byCategory": {
              "productive": {
                "hours": 4,
                "minutes": 12
              },
              "passive": {
                "hours": 0,
                "minutes": 18
              },
              "blocks": {
                "hours": 0,
                "minutes": 0
              },
              "ressource": {
                "hours": 0,
                "minutes": 11
              }
            },
            "entry": "09:27",
            "exit": "18:18",
            "presence": {
              "hours": 8,
              "minutes": 51
            }
          },
          {
            "day": "ven 19/09",
            "totalWork": {
              "hours": 5,
              "minutes": 1
            },
            "byCategory": {
              "productive": {
                "hours": 4,
                "minutes": 34
              },
              "passive": {
                "hours": 0,
                "minutes": 13
              },
              "blocks": {
                "hours": 0,
                "minutes": 3
              },
              "ressource": {
                "hours": 0,
                "minutes": 11
              }
            },
            "entry": "09:29",
            "exit": "17:17",
            "presence": {
              "hours": 7,
              "minutes": 48
            }
          },
          {
            "day": "lun 22/09",
            "totalWork": {
              "hours": 7,
              "minutes": 56
            },
            "byCategory": {
              "productive": {
                "hours": 4,
                "minutes": 49
              },
              "passive": {
                "hours": 0,
                "minutes": 0
              },
              "blocks": {
                "hours": 0,
                "minutes": 20
              },
              "ressource": {
                "hours": 2,
                "minutes": 47
              }
            },
            "entry": "09:30",
            "exit": "17:26",
            "presence": {
              "hours": 7,
              "minutes": 56
            }
          },
          {
            "day": "mar 23/09",
            "totalWork": {
              "hours": 7,
              "minutes": 30
            },
            "byCategory": {
              "productive": {
                "hours": 6,
                "minutes": 17
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
                "hours": 0,
                "minutes": 56
              }
            },
            "entry": "09:36",
            "exit": "17:06",
            "presence": {
              "hours": 7,
              "minutes": 30
            }
          },
          {
            "day": "Merc 24/09",
            "totalWork": {
              "hours": 8,
              "minutes": 51
            },
            "byCategory": {
              "productive": {
                "hours": 7,
                "minutes": 16
              },
              "passive": {
                "hours": 0,
                "minutes": 0
              },
              "blocks": {
                "hours": 0,
                "minutes": 45
              },
              "ressource": {
                "hours": 0,
                "minutes": 50
              }
            },
            "entry": "09:20",
            "exit": "18:11",
            "presence": {
              "hours": 8,
              "minutes": 51
            }
          }
        ],
        "activities": [
          {
            "name": "acccap",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 17
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "review pcoi",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "acccdp",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 3
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "cap fresh",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "afk",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 2
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "passive",
            "description": "Tracking afk – passive time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "aq",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 46
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "synthèse",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "avisexpert",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 1
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
              "minutes": 9
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
              "minutes": 5
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
              "minutes": 18
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "ressource",
            "description": "clope 🚬 ☕",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "cap",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 30
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "evolution support",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "cdp",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 11
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "suivi",
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
            "name": "chill",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 5
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "ressource",
            "description": "team #vincent",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "cp",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 6
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "limon cdp métier",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "crcap",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 55
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "fresh obso",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "daily",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 27
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
              "minutes": 16
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "ressource",
            "description": "sylvain #team #samuel",
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
            "description": "marie #sophie",
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
            "description": "AQSP",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "meal",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 13
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
              "minutes": 10
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "xray test management",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "obcdp",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 16
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "Tracking obcdp – productive time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "off",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 12
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "debrief Thierry",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "outillage",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 14
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "atelier",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "prep",
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
            "name": "process",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 3
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
            "name": "requestcdp",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 6
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "jack invit cap dark",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "resp",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 17
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
            "description": "synthèse",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "strat",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 3
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "retro data time",
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
              "minutes": 1
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "$br clope",
            "icon": "activity",
            "impressions": []
          }
        ],
        "globalRate": -1
      }
      // end week 11 = 43 
      ,
      // start week 12 = 44 
      {
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
      // end week 12 = 44 
      ,
      // start week 13 = 45 
      {
        "weekNumber": 13,
        "startDate": "2025-10-02",
        "endDate": "2025-10-08",
        "weekly_insights": [
          {
            "totalWork": {
              "hours": 26,
              "minutes": 27
            },
            "nbDays": 5,
            "avgPerDay": {
              "hours": 5,
              "minutes": 17
            },
            "byCategory": {
              "avg_productive": {
                "hours": 4,
                "minutes": 58
              },
              "passive": {
                "hours": 0,
                "minutes": 2
              },
              "blocks": {
                "hours": 0,
                "minutes": 0
              },
              "ressource": {
                "hours": 0,
                "minutes": 16
              }
            },
            "productivity_ratio": 93.95
          }
        ],
        "daily_insights": [
          {
            "day": "jeu 02/10",
            "totalWork": {
              "hours": 5,
              "minutes": 5
            },
            "byCategory": {
              "productive": {
                "hours": 4,
                "minutes": 11
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
                "minutes": 54
              }
            },
            "entry": "09:15",
            "exit": "16:00",
            "presence": {
              "hours": 6,
              "minutes": 45
            }
          },
          {
            "day": "ven 03/10",
            "totalWork": {
              "hours": 8,
              "minutes": 37
            },
            "byCategory": {
              "productive": {
                "hours": 8,
                "minutes": 21
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
                "minutes": 16
              }
            },
            "entry": "09:35",
            "exit": "18:43",
            "presence": {
              "hours": 9,
              "minutes": 8
            }
          },
          {
            "day": "lun 06/10",
            "totalWork": {
              "hours": 6,
              "minutes": 44
            },
            "byCategory": {
              "productive": {
                "hours": 6,
                "minutes": 18
              },
              "passive": {
                "hours": 0,
                "minutes": 14
              },
              "blocks": {
                "hours": 0,
                "minutes": 0
              },
              "ressource": {
                "hours": 0,
                "minutes": 12
              }
            },
            "entry": "09:50",
            "exit": "19:06",
            "presence": {
              "hours": 9,
              "minutes": 16
            }
          },
          {
            "day": "mar 07/10",
            "totalWork": {
              "hours": 3,
              "minutes": 20
            },
            "byCategory": {
              "productive": {
                "hours": 3,
                "minutes": 20
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
            "entry": "10:00",
            "exit": "14:05",
            "presence": {
              "hours": 4,
              "minutes": 5
            }
          },
          {
            "day": "Merc 08/10",
            "totalWork": {
              "hours": 2,
              "minutes": 41
            },
            "byCategory": {
              "productive": {
                "hours": 2,
                "minutes": 41
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
            "entry": "14:14",
            "exit": "17:15",
            "presence": {
              "hours": 3,
              "minutes": 1
            }
          }
        ],
        "activities": [
          {
            "name": "avisexpert",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 2
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
            "name": "br",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 16
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
            "name": "check",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 12
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
              "hours": 1,
              "minutes": 48
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
              "minutes": 10
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
            "description": "Tracking dm – passive time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "outillage",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 6
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
              "hours": 0,
              "minutes": 21
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "feedback sophie",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "planif",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 16
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
            "name": "planifcap",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 36
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
              "minutes": 4
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "revue gmrc",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "prepcap",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 7
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
            "name": "request",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 24
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "boss Snapshots",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "requestcdp",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 3
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
            "name": "requests",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 16
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "Tracking requests – productive time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "revueaq",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 7
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
            "name": "snapshots",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 18
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "request boss",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "tasks",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 2
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
            "description": ".",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "tw",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
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
      // end week 13 = 45 
      ,
      // start week 14 = 46 
      {
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
      // end week 14 = 46 
      ,
      // start week 15 = 47 
      {
        "weekNumber": 15,
        "startDate": "2025-10-16",
        "endDate": "2025-10-22",
        "weekly_insights": [
          {
            "totalWork": {
              "hours": 36,
              "minutes": 23
            },
            "nbDays": 5,
            "avgPerDay": {
              "hours": 7,
              "minutes": 16
            },
            "byCategory": {
              "avg_productive": {
                "hours": 7,
                "minutes": 3
              },
              "passive": {
                "hours": 0,
                "minutes": 1
              },
              "blocks": {
                "hours": 0,
                "minutes": 2
              },
              "ressource": {
                "hours": 0,
                "minutes": 9
              }
            },
            "productivity_ratio": 96.93
          }
        ],
        "daily_insights": [
          {
            "day": "jeu 16/10",
            "totalWork": {
              "hours": 6,
              "minutes": 27
            },
            "byCategory": {
              "productive": {
                "hours": 6,
                "minutes": 22
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
            "entry": "10:30",
            "exit": "00:13",
            "presence": {
              "hours": 13,
              "minutes": 43
            }
          },
          {
            "day": "ven 17/10",
            "totalWork": {
              "hours": 10,
              "minutes": 6
            },
            "byCategory": {
              "productive": {
                "hours": 10,
                "minutes": 1
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
                "minutes": 5
              }
            },
            "entry": "07:38",
            "exit": "21:08",
            "presence": {
              "hours": 13,
              "minutes": 30
            }
          },
          {
            "day": "lun 20/10",
            "totalWork": {
              "hours": 8,
              "minutes": 55
            },
            "byCategory": {
              "productive": {
                "hours": 8,
                "minutes": 25
              },
              "passive": {
                "hours": 0,
                "minutes": 0
              },
              "blocks": {
                "hours": 0,
                "minutes": 7
              },
              "ressource": {
                "hours": 0,
                "minutes": 23
              }
            },
            "entry": "10:00",
            "exit": "20:35",
            "presence": {
              "hours": 10,
              "minutes": 35
            }
          },
          {
            "day": "mar 21/10",
            "totalWork": {
              "hours": 5,
              "minutes": 47
            },
            "byCategory": {
              "productive": {
                "hours": 5,
                "minutes": 20
              },
              "passive": {
                "hours": 0,
                "minutes": 7
              },
              "blocks": {
                "hours": 0,
                "minutes": 0
              },
              "ressource": {
                "hours": 0,
                "minutes": 20
              }
            },
            "entry": "10:15",
            "exit": "18:15",
            "presence": {
              "hours": 8,
              "minutes": 0
            }
          },
          {
            "day": "mer 22/10",
            "totalWork": {
              "hours": 5,
              "minutes": 8
            },
            "byCategory": {
              "productive": {
                "hours": 5,
                "minutes": 8
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
            "entry": "09:50",
            "exit": "17:35",
            "presence": {
              "hours": 7,
              "minutes": 45
            }
          }
        ],
        "activities": [
          {
            "name": "afk",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 1
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "passive",
            "description": "Tracking afk – passive time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "bio",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 0
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
            "name": "cap",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 18
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "instance",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "check",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 20
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
            "name": "codir",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 6
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "Tracking codir – productive time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "copilap",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 6
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "instance",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "copilcap",
            "trackedAvgPerDay": {
              "hours": 2,
              "minutes": 14
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
              "minutes": 53
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
            "name": "daily",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 36
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
            "name": "obcdp",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 27
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "synthese",
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
            "description": "Tracking off – productive time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "outillage",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 15
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
              "hours": 0,
              "minutes": 21
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "kpi",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "planifcap",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 26
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
            "name": "rdvcsi",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 12
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "Tracking rdvcsi – productive time.",
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
            "name": "requestboss",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 9
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "Tracking requestboss – productive time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "requestcdp",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 6
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
              "minutes": 2
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "blocks",
            "description": "rg go",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "revueaq",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 7
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "elec",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "suiviaction",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 7
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "Tracking suiviaction – productive time.",
            "icon": "activity",
            "impressions": []
          }
        ],
        "globalRate": -1
      }
      // end week 15 = 47 
      ,
      // start week 16 = 48 
      {
        "weekNumber": 16,
        "startDate": "2025-10-23",
        "endDate": "2025-10-29",
        "weekly_insights": [
          {
            "totalWork": {
              "hours": 32,
              "minutes": 26
            },
            "nbDays": 5,
            "avgPerDay": {
              "hours": 6,
              "minutes": 29
            },
            "byCategory": {
              "avg_productive": {
                "hours": 3,
                "minutes": 51
              },
              "passive": {
                "hours": 0,
                "minutes": 27
              },
              "blocks": {
                "hours": 2,
                "minutes": 0
              },
              "ressource": {
                "hours": 0,
                "minutes": 10
              }
            },
            "productivity_ratio": 59.46
          }
        ],
        "daily_insights": [
          {
            "day": "jeudi 23/10",
            "totalWork": {
              "hours": 3,
              "minutes": 5
            },
            "byCategory": {
              "productive": {
                "hours": 3,
                "minutes": 5
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
            "entry": "09:45",
            "exit": "16:15",
            "presence": {
              "hours": 6,
              "minutes": 30
            }
          },
          {
            "day": "ven 24/10",
            "totalWork": {
              "hours": 2,
              "minutes": 20
            },
            "byCategory": {
              "productive": {
                "hours": 2,
                "minutes": 10
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
                "minutes": 5
              }
            },
            "entry": "10:00",
            "exit": "15:15",
            "presence": {
              "hours": 5,
              "minutes": 15
            }
          },
          {
            "day": "dim",
            "totalWork": {
              "hours": 16,
              "minutes": 9
            },
            "byCategory": {
              "productive": {
                "hours": 3,
                "minutes": 55
              },
              "passive": {
                "hours": 2,
                "minutes": 17
              },
              "blocks": {
                "hours": 9,
                "minutes": 52
              },
              "ressource": {
                "hours": 0,
                "minutes": 5
              }
            },
            "entry": "00:50",
            "exit": "18:00",
            "presence": {
              "hours": 17,
              "minutes": 10
            }
          },
          {
            "day": "mar 28/10",
            "totalWork": {
              "hours": 5,
              "minutes": 2
            },
            "byCategory": {
              "productive": {
                "hours": 4,
                "minutes": 22
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
                "minutes": 40
              }
            },
            "entry": "09:20",
            "exit": "18:40",
            "presence": {
              "hours": 9,
              "minutes": 20
            }
          },
          {
            "day": "mer 29/10",
            "totalWork": {
              "hours": 5,
              "minutes": 50
            },
            "byCategory": {
              "productive": {
                "hours": 5,
                "minutes": 45
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
            "entry": "09:50",
            "exit": "18:35",
            "presence": {
              "hours": 8,
              "minutes": 45
            }
          }
        ],
        "activities": [
          {
            "name": "acccdp",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 6
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "Christine + nourhan",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "avisexpert",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 27
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
              "minutes": 30
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
            "name": "br",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 2
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "ressource",
            "description": "café",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "check",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 29
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
              "minutes": 12
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
            "name": "debrief",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 4
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
            "name": "direct",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 8
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "ressource",
            "description": "gilles",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "manager",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 5
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "Tracking manager – productive time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "off",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 11
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
            "name": "orgadocs",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 6
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "Tracking orgadocs – productive time.",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "pegase",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 24
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "kpi #team",
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
              "minutes": 6
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "dark #jacques",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "resp",
            "trackedAvgPerDay": {
              "hours": 2,
              "minutes": 0
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
            "description": "thierry",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "strat",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 47
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "process #boss",
            "icon": "activity",
            "impressions": []
          },
          {
            "name": "tw",
            "trackedAvgPerDay": {
              "hours": 0,
              "minutes": 27
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
              "minutes": 9
            },
            "goalAvgPerDay": {
              "hours": 0,
              "minutes": 0
            },
            "type": "productive",
            "description": "$",
            "icon": "activity",
            "impressions": []
          }
        ],
        "globalRate": -1
      }
      // end week 16 = 48 
      ,
      // start week 17 = 49 
      {
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
      // end week 17 = 49 
      ,
    ]
  ));