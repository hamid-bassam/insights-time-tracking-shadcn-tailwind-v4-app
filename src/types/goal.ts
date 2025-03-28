import { ActivityType, TimeValue } from "./activity";

export type Goal =
  {
    name: string;
    goalAvgPerDay: TimeValue;
    type: ActivityType;
    description?: string;
    includedInTotal: boolean;
  }