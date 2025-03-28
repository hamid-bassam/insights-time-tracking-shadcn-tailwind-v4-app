import { ActivityData, ActivityType } from "@/types/activity";
import { Goal } from "../types/goal";
import { mockActivityData } from "./mock-data";



// Fonction pour extraire toutes les activités uniques et générer un objet Goal[]
const generateGoalsFromData = (data: ActivityData): Goal[] => {
  const uniqueActivities = Array.from(
    new Set(data.flatMap((week) => week.activities.map((a) => a.name)))
  );

  return uniqueActivities.map((activity) => ({
    name: activity.split('–')[0] || activity.split('-')[0], // Extraire le vrai nom sans le type
    goalAvgPerDay: { hours: 0, minutes: 0 }, // Valeur par défaut
    type: getType(activity), // Fonction qui déduit le type à partir du nom
    description: "Default description", // Peut être mis à jour selon les besoins
    includedInTotal: activity.split('-').length > 1, // Vérifier si l'activité est incluse dans le total
  }));
};

// Fonction pour détecter le type de l'activité en fonction de son nom
const getType = (activity: string): ActivityType => {
  if (activity.includes("productive")) return "productive";
  if (activity.includes("passive")) return "passive";
  if (activity.includes("ressource")) return "ressource";
  if (activity.includes("blocks")) return "blocks";
  return "neutral";
};

// Exemple d'utilisation
export const mock_goals = generateGoalsFromData(mockActivityData);
