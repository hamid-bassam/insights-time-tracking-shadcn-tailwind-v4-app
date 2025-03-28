'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { goalsList } from "../../data/generate-goals-from-json";
import { Goal } from "../../types/goal";
import { minutesToTime } from "../../utils/time";

export default function ObjectivesPage() {
  // const [objectives, setObjectives] = useState(Object.values(mockObjectives));
  // const [objectives, setObjectives] = useState(Object.values(mock_goals));
  const [objectives, setObjectives] = useState(goalsList);

  const [errors, setErrors] = useState<string[]>([]);
  const [totalMinutes, setTotalMinutes] = useState<number>(0);

  useEffect(() => {
    let total = 0;
    const newErrors: string[] = [];

    objectives.forEach((activity) => {
      if (activity.includedInTotal) {
        if (!activity.goalAvgPerDay) {
          newErrors.push(`⚠️ Erreur: L'activité "${activity.name}" n'a pas de goalAvgPerDay`);
          return;
        }
        const minutes = activity.goalAvgPerDay.hours * 60 + activity.goalAvgPerDay.minutes;
        total += minutes;
      }
    });

    if (total > 1440) {
      newErrors.push(`⏳ Total time exceeds 24 hours (${minutesToTime(total).hours}h${minutesToTime(total).minutes}m).`);
    }

    setErrors(newErrors);
    setTotalMinutes(total);
  }, [objectives]);

  const updateTime = (index: number, value: string) => {
    const updatedObjectives = [...objectives];

    const [hours, minutes] = value.split(":").map(Number);
    updatedObjectives[index].goalAvgPerDay = { hours, minutes };

    setObjectives(updatedObjectives);
  };


  // Fonction pour générer le fichier JSON et le télécharger 📂
  const generateAndDownloadJSON = () => {
    const goals: Goal[] = objectives.map((activity) => ({
      name: activity.name,
      goalAvgPerDay: activity.goalAvgPerDay || { hours: 0, minutes: 0 },
      type: activity.type || "neutral",
      description: activity.description || "No description available",
      includedInTotal: activity.includedInTotal ?? true,
    }));

    const jsonString = JSON.stringify(goals, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "goals.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <div className="relative min-h-screen">
      {/* 🔥 HEADER FIXE */}
      <header id="Header" className="sticky top-0 p-4 z-10 backdrop-filter backdrop-blur-sm rounded-sm  border-b">
        <div className="flex justify-between items-center">

          <h1 className="text-lg font-semibold">Objective Time Allocation</h1>
          <h2 className={`text-md font-medium ${totalMinutes > 1440 ? "text-red-600" : "text-green-600"}`}>
            ⏳ Total: {minutesToTime(totalMinutes).hours}h {minutesToTime(totalMinutes).minutes}m
          </h2>
        </div>


      </header>

      {errors.length > 0 && (
        <div className="bg-red-200 p-2 m-4 text-red-700 rounded">
          {errors.map((err, idx) => (
            <p key={idx}>{err}</p>
          ))}
        </div>
      )}

      {/* 💎 GRID ADAPTATIVE */}
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {objectives.map((activity, index) => (
          <Card key={index} className="shadow-sm border border-gray-300 rounded-lg">
            <CardContent className="p-3 flex flex-col items-center">
              <span className="text-sm font-medium text-center">{activity.name}</span>
              <Input
                type="time"
                className="w-full border border-gray-300 rounded-md px-2 py-1 text-center mt-2"
                value={`${String(activity.goalAvgPerDay.hours).padStart(2, "0")}:${String(activity.goalAvgPerDay.minutes).padStart(2, "0")}`}
                onChange={(e) => updateTime(index, e.target.value)}
              />
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-center mt-6 sticky bottom-0 p-4 z-10 backdrop-filter backdrop-blur-sm rounded-sm  border-b">
        <div className="flex-1 max-sm:hidden" />
        <div className="flex md:flex-1 max-sm:w-full justify-between items-center ">
          <Button onClick={() => console.log("Validation complete!")} className="px-5 py-2 text-sm">Validate</Button>

          {/* 📂 BOUTON DE GÉNÉRATION DU JSON */}
          <Button onClick={generateAndDownloadJSON} className="px-5 py-2 text-sm">
            📥 Generate JSON
          </Button>
        </div>
        <div className="flex-1 max-sm:hidden" />
      </div>
    </div>
  );
}
