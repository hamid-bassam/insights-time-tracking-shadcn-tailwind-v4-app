import { ActivityType } from "../types/activity";
import { Goal } from "../types/goal";
import { JsonListGoal } from "./goals/zero_objectives";
const goals: Goal[] = [];
JsonListGoal.forEach((goal) => {
  goals.push({
    name: goal.name,
    goalAvgPerDay: goal.goalAvgPerDay || { hours: 0, minutes: 0 },
    type: goal.type as ActivityType || "neutral",
    description: goal.description || "No description available",
    includedInTotal: goal.includedInTotal ?? true,
  });
});
// const jsonString = JSON.stringify(goals, null, 2);
// const blob = new Blob([jsonString], { type: "application/json" });
// const link = document.createElement("a");
// link.href = URL.createObjectURL(blob);
// link.download = "goals.json";
// document.body.appendChild(link);
// link.click(); 
//   });
//
export const goalsList = goals;

