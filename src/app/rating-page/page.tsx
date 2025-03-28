/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { Card, CardContent } from "@/components/ui/card";
import { weekly_data } from "../../data/weekly-data-json-w15";
import { TimeValue } from "../../types/activity";

const report = {
  weekNumber: 12,
  startDate: "2025-02-13",
  endDate: "2025-02-19",
  activities: [
    {
      name: "Bio Needs (shower, toilet) – ressource",
      trackedAvgPerDay: { hours: 0, minutes: 23 },
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
      trackedAvgPerDay: { hours: 0, minutes: 28 },
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

const StarRating = ({ fill }: { fill: number }) => {
  return (
    <div className="relative w-6 h-6">
      <svg viewBox="0 0 24 24" className="absolute text-gray-300 w-full h-full">
        <path
          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.86L12 17.77l-6.18 3.23L7 14.14l-5-4.87 6.91-1.01z"
          fill="currentColor"
        />
      </svg>
      <svg viewBox="0 0 24 24" className="absolute text-yellow-400 w-full h-full">
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
      </svg>
    </div>
  );
};

export default function ActivityReport() {
  return (
    <div className="p-6 flex flex-col gap-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold text-center">Weekly Activity Report</h1>
      <Card className="p-4 bg-card-foreground shadow-lg rounded-2xl">
        <CardContent className="">
          <div className="flex space-x-4">
            <h2 className="flex-[3] text-sm font-semibold text-primary-foreground">Nom de l'activité</h2>
            {/* <p className=" text-xs text-gray-500">{activity.description}</p> */}
            <div className="flex-[3] flex space-x-4">
              <p className=" flex-1 text-sm  text-green-800">Tracked Avg/day </p>
              <p className="flex-1 text-sm  text-purple-600">Goal avg/day</p>
            </div>
            <div className="flex-[3] flex flex-col items-center">
              <div className="relative flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <StarRating key={i} fill={Math.min(Math.max(6 - i, 0), 1)} />
                ))}
              </div>
              <p className="text-sm font-medium text-gray-600">Rate: {(1 * 100).toFixed(1)}%</p>
            </div>
          </div>
        </CardContent>
      </Card>
      {weekly_data.activities.map((activity, index) => {
        const rate = calculateRate(activity.trackedAvgPerDay, activity.goalAvgPerDay);
        const starsFilled = rate * 5;
        return (
          <Card key={index} className="p-4 bg-white shadow-lg rounded-2xl">
            <CardContent className="flex justify-between items-center">
              <div className="flex space-x-4">
                <h2 className="text-sm font-semibold text-primary-foreground">{activity.name}</h2>
                {/* <p className=" text-xs text-gray-500">{activity.description}</p> */}
                <p className="text-muted-foreground">{activity.trackedAvgPerDay.hours}h {activity.trackedAvgPerDay.minutes}m</p>
                <p className="text-gray-700">{activity.goalAvgPerDay.hours}h {activity.goalAvgPerDay.minutes}m</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <StarRating key={i} fill={Math.min(Math.max(starsFilled - i, 0), 1)} />
                  ))}
                </div>
                <p className="text-sm font-medium text-gray-600">Rate: {(rate * 100).toFixed(1)}%</p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
