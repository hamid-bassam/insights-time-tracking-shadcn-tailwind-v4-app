"use client"
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Target, Timer } from "lucide-react";
import { weekly_data } from "../../data/weekly-data-json-w15";
import { TimeValue } from "../../types/activity";



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
    <div className="p-6 flex flex-col gap-10 max-w-7xl mx-auto text-gray-100 bg-gradient-to-br from-gray-900 to-black min-h-screen">
      <h1 className="text-4xl font-bold text-center text-yellow-400 tracking-wide">🚀 Weekly Performance Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {weekly_data.activities.map((activity, index) => {
          const rate = calculateRate(activity.trackedAvgPerDay, activity.goalAvgPerDay);
          const starsFilled = rate * 5;
          return (
            <Card key={index} className="p-6 bg-gray-800 shadow-lg rounded-2xl transition-transform hover:scale-105 border border-gray-700">
              <CardContent className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-6 sm:space-y-0">
                <div className="w-full sm:w-1/3">
                  <h2 className="text-xl font-semibold text-white">{activity.name}</h2>
                  <p className="text-gray-400 text-sm italic">{activity.description}</p>
                </div>
                <div className="flex flex-col items-center sm:w-1/3 text-center">
                  <p className="text-lg font-semibold text-blue-400 flex items-center gap-2">
                    <Timer className="text-white" /> {activity.trackedAvgPerDay.hours}h {activity.trackedAvgPerDay.minutes}m
                  </p>
                  <p className="text-lg font-semibold text-orange-400 flex items-center gap-2">
                    <Target className="text-white" /> {activity.goalAvgPerDay.hours}h {activity.goalAvgPerDay.minutes}m
                  </p>
                </div>
                <div className="flex flex-col items-center sm:w-1/3">
                  <div className="relative flex gap-2">
                    {[...Array(5)].map((_, i) => (
                      <StarRating key={i} fill={Math.min(Math.max(starsFilled - i, 0), 1)} delay={i * 0.1} />
                    ))}
                  </div>
                  <p className="text-lg font-bold text-yellow-400 mt-1">🔥 {Math.round(rate * 100)}%</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
