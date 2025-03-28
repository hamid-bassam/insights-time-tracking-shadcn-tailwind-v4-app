'use client'
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { TimeValue } from "../../types/activity";

const report = {
  weekNumber: 12,
  startDate: "2025-02-13",
  endDate: "2025-02-19",
  activities: [
    {
      name: "Bio Needs (shower, toilet) – ressource",
      trackedAvgPerDay: { hours: 1, minutes: 5 },
      goalAvgPerDay: { hours: 1, minutes: 0 },
      type: "ressource",
      description: "Tracking bio needs",
      icon: "activity",
      impressions: []
    },
    {
      name: "Chill Time – ressource",
      trackedAvgPerDay: { hours: 0, minutes: 24 },
      goalAvgPerDay: { hours: 0, minutes: 30 },
      type: "ressource",
      description: "Tracking chill time",
      icon: "activity",
      impressions: []
    },
    {
      name: "Learning – productive",
      trackedAvgPerDay: { hours: 0, minutes: 7 },
      goalAvgPerDay: { hours: 0, minutes: 30 },
      type: "productive",
      description: "Tracking learning time",
      icon: "activity",
      impressions: []
    }
  ]
};

const calculateRate = (tracked: TimeValue, goal: TimeValue) => {
  const trackedMinutes = tracked.hours * 60 + tracked.minutes;
  const goalMinutes = goal.hours * 60 + goal.minutes;
  return goalMinutes > 0 ? Math.min(trackedMinutes / goalMinutes, 1) : 0;
};

const StarRating = ({ fill, delay }: { fill: number; delay: number }) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, delay }}
      className="relative w-7 h-7"
    >
      <svg viewBox="0 0 24 24" className="absolute text-gray-300 w-full h-full">
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
    <div className="p-6 flex flex-col gap-8 max-w-5xl mx-auto text-gray-900">
      <h1 className="text-3xl font-bold text-center text-primary">📊 Weekly Performance Overview</h1>
      {report.activities.map((activity, index) => {
        const rate = calculateRate(activity.trackedAvgPerDay, activity.goalAvgPerDay);
        const starsFilled = rate * 5;
        return (
          <Card key={index} className="p-5 bg-gradient-to-r from-gray-100 to-white shadow-lg rounded-2xl transition-transform hover:scale-105">
            <CardContent className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-6 sm:space-y-0">
              <div className="w-full sm:w-1/3">
                <h2 className="text-xl font-semibold text-gray-900">{activity.name}</h2>
                <p className="text-gray-500 text-sm italic">{activity.description}</p>
              </div>
              <div className="flex flex-col items-center sm:w-1/3 text-center">
                <p className="text-lg font-semibold text-green-600">{activity.trackedAvgPerDay.hours}h {activity.trackedAvgPerDay.minutes}m</p>
                <p className="text-lg font-semibold text-purple-600">{activity.goalAvgPerDay.hours}h {activity.goalAvgPerDay.minutes}m</p>
              </div>
              <div className="flex flex-col items-center sm:w-1/3">
                <div className="relative flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <StarRating key={i} fill={Math.min(Math.max(starsFilled - i, 0), 1)} delay={i * 0.1} />
                  ))}
                </div>
                <p className="text-lg font-bold text-gray-700 mt-1">🔥 {Math.round(rate * 100)}%</p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
