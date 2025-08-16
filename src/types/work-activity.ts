import { Activity, TimeValue } from "./activity";


export type WorkWeeklyInsight = {
  totalWork: TimeValue;
  nbDays: number;                 // nb de jours réellement travaillés
  avgPerDay: TimeValue;           // moyenne par jour travaillé
  byCategory: {
    avg_productive: TimeValue;    // moyenne productive / jour travaillé
    passive: TimeValue;
    blocks: TimeValue;
    ressource: TimeValue;
  };
  productivity_ratio: number;     // pourcentage avec 2 décimales (ex: 65.29)
};

export type DailyInsight = {
  day: string;                    // ex: "mardi 15/07"
  totalWork: TimeValue;
  byCategory: {
    productive: TimeValue;
    passive: TimeValue;
    blocks: TimeValue;
    ressource: TimeValue;
  };
  entry?: string;                 // "HH:MM"
  exit?: string;                  // "HH:MM"
  presence?: TimeValue;
};

export type WorkWeekData = {
  weekNumber: number;
  startDate: string;              // "YYYY-MM-DD"
  endDate: string;                // "YYYY-MM-DD"
  weekly_insights: WorkWeeklyInsight[]; // conforme au JSON fourni
  daily_insights: DailyInsight[];   // conforme au JSON fourni
  activities: Activity[];
  globalRate: number;
};

export type WorkActivityData = WorkWeekData[];
