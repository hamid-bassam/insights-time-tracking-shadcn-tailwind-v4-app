"use client"
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Target, Timer } from "lucide-react";
import { NewBadgeTag } from "../../components/NewBadgeTag";
import { tagList } from "../../data/map";
import { weekly_data } from "../../data/weekly-data-json";
import { cn } from "../../lib/utils";
import { ActivityType, TimeValue } from "../../types/activity";


// Sort activities by tag order
const sortedActivities = weekly_data.activities.sort((a, b) => {
  const indexA = tagList.indexOf(a.tag || '') !== -1 ? tagList.indexOf(a.tag || '') : 99;
  const indexB = tagList.indexOf(b.tag || '') !== -1 ? tagList.indexOf(b.tag || '') : 99;
  return indexA - indexB;
});



const calculateRate = (tracked: TimeValue, goal: TimeValue, type: ActivityType) => {
  const trackedMinutes = tracked.hours * 60 + tracked.minutes;
  const goalMinutes = goal.hours * 60 + goal.minutes;
  if (goalMinutes === 0) return { computed: 0, rate: 0 };

  const computed = trackedMinutes / goalMinutes;
  let rate;

  switch (type) {
    case "productive":
      rate = Math.min(computed, 1);
      break;
    case "passive":
      if (computed > 1) {
        rate = (1 / computed);
      }
      else {
        rate = computed;
      }
      break;
    case "ressource":
      if (computed > 1) {
        rate = (1 / computed);
      }
      else {
        rate = computed;
      }
      break;
    case "blocks":
      if (computed > 1) {
        rate = (1 / computed);
      }
      else {
        rate = computed;
      }
      break;
    default:
      rate = Math.min(computed, 1);
  }

  return { computed, rate };
};

const getPerformanceMessage = (computed: number, type: ActivityType) => {
  if (type === "productive") {
    if (computed >= 1.25) return { message: "🚀 Exceptionnel ! Tu dépasses tes limites !", className: 'text-chart-success' };
    if (computed >= 1) return { message: "🔥 Objectif atteint, super boulot !", className: 'text-chart-success' };
    if (computed >= 0.8) return { message: "👍 Proche de l'objectif, continue comme ça !", className: 'text-chart-violet' };
    return { message: "⚠️ Besoin d'amélioration, ajuste tes priorités !", className: 'text-chart-warning' };
  }

  if (type === "passive") {
    if (computed > 1) return { message: "⏳ Trop de temps perdu, optimise ton planning !", className: 'text-chart-warning' };
    if (computed >= 0.7) return { message: "✅ Bien géré, peu de perte de temps.", className: 'text-chart-success' };
    return { message: "🏆 Excellent, aucune perte inutile !", className: 'text-chart-success' };
  }

  if (type === "ressource") {
    if (computed > 1.25) return { message: "🛑 Attention, trop de temps alloué !", className: 'text-chart-error' };
    if (computed >= 0.8) return { message: "🥇 Parfait équilibre !", className: 'text-chart-success' };
    if (computed >= 0.7) return { message: "👌 Usage raisonnable du temps.", className: 'text-chart-success' }
    if (computed >= 0.5) return { message: "🔍 Peut-être plus de temps nécessaire.", className: 'text-chart-warning' }
    return { message: "🚨 Attention, manque de temps alloué !", className: 'text-chart-warning' };
  }

  if (type === "blocks") {
    if (computed >= 1) return { message: "🎯 Tâche accomplie efficacement !", className: 'text-chart-success' };
    if (computed >= 0.8) return { message: "🔄 Presque, encore un petit effort.", className: 'text-chart-neutral' };
    return { message: "📉 Manque d'efficacité, optimise tes blocs de travail.", className: 'text-chart-warning' };
  }

  return { message: "⚡ Suivi en cours...", className: 'text-chart-neutral' };
};

const StarRating = ({ fill, delay }: { fill: number; delay: number }) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, delay }}
      className="relative w-7 h-7"
    >
      <svg viewBox="0 0 24 24" className="absolute text-gray-600 w-full h-full">
        <path
          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.86L12 17.77l-6.18 3.23L7 14.14l-5-4.87 6.91-1.01z"
          fill="currentColor"
        />
      </svg>
      <motion.svg
        viewBox="0 0 24 24"
        className="absolute text-yellow-400 w-full h-full"
        initial={{ width: "0%" }}
        animate={{ width: `${fill * 100}%` }}
        transition={{ duration: 0.5, delay, ease: "easeOut" }}
      >
        <defs>
          <clipPath id={`clip-${fill}`}>
            <rect x="0" y="0" width={`${fill * 24}`} height="24" />
          </clipPath>
        </defs>
        <path
          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.86L12 17.77l-6.18 3.23L7 14.14l-5-4.87 6.91-1.01z"
          fill="currentColor"
          clipPath={`url(#clip-${fill})`}
        />
      </motion.svg>
    </motion.div>
  );
};

export default function ActivityReport() {
  return (
    <div className="p-6 flex flex-col gap-10 max-w-full mx-auto text-gray-100 bg-gradient-to-br from-gray-900 to-black min-h-screen">
      <h1 className="text-4xl font-bold text-center text-yellow-400 tracking-wide">🚀 Weekly Performance Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedActivities.map((activity, index) => {
          // const rate = calculateRate(activity.trackedAvgPerDay, activity.goalAvgPerDay, activity.type);
          const { computed, rate } = calculateRate(activity.trackedAvgPerDay, activity.goalAvgPerDay, activity.type);
          const starsFilled = rate * 5;
          return (
            <Card key={index} className="p-6 bg-gray-800 shadow-lg rounded-2xl transition-transform hover:scale-105 border border-gray-700">
              <CardContent className="flex flex-col gap-4 py-0">
                <div className="flex items-center justify-between">

                  <h2 className="text-sm md:min-h-5 font-semibold text-white">{activity.name}</h2>
                  <NewBadgeTag
                    type={activity.type}
                  />
                </div>
                <p className="text-gray-400 text-xs italic">{activity.description}</p>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold text-chart-blue flex items-center gap-2">
                    {/* text-blue-40 */}
                    <Timer className="text-white" /> {activity.trackedAvgPerDay.hours}h {activity.trackedAvgPerDay.minutes}m
                  </p>
                  <p className="text-lg font-semibold text-chart-violet flex items-center gap-2">
                    {/* text-orange-400 */}
                    <Target className="text-white" /> {activity.goalAvgPerDay.hours}h {activity.goalAvgPerDay.minutes}m
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="relative flex gap-2">
                    {[...Array(5)].map((_, i) => (
                      <StarRating key={i} fill={Math.min(Math.max(starsFilled - i, 0), 1)} delay={i * 0.1} />
                    ))}
                  </div>
                  <p className="text-lg font-bold text-yellow-400 mt-1">{rate.toFixed(2)}</p>

                  <p className={cn("text-xs font-bold text-yellow-400 mt-1", getPerformanceMessage(computed, activity.type).className)}>{getPerformanceMessage(computed, activity.type).message}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
