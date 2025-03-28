"use client";

import { CardHeader } from "@/components/ui/card";
import { WeekData } from "@/types/activity";
import { timeToMinutes } from "@/utils/time";
import { motion } from "framer-motion";
import { useState } from "react";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

interface ActivityPieChartProps {
  weekData: WeekData;
}

export default function ActivityPieChart({ weekData }: ActivityPieChartProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Trier les activités et garder les 5 plus importantes, fusionner le reste en "Other Activities"
  const sortedActivities = [...weekData.activities]
    .map(activity => ({
      name: activity.name,
      value: timeToMinutes(activity.trackedAvgPerDay),
      type: activity.type
    }))
    .sort((a, b) => b.value - a.value);

  const topActivities = sortedActivities.slice(0, 5);
  const otherTotal = sortedActivities.slice(5).reduce((sum, act) => sum + act.value, 0);

  const pieData = otherTotal > 0
    ? [...topActivities, { name: "Other Activities", value: otherTotal, type: "neutral" }]
    : topActivities;

  const COLORS = [
    "hsl(var(--chart-1))",
    "hsl(var(--chart-2))",
    "hsl(var(--chart-3))",
    "hsl(var(--chart-4))",
    "hsl(var(--chart-5))",
    "hsl(var(--muted))"
  ];

  return (
    <motion.div
      className="bg-card p-6 rounded-xl shadow-lg border border-gray-700 transition-all"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <CardHeader className="text-center">
        <h2 className="text-2xl font-semibold">📊 Activity Distribution</h2>
        <p className="text-muted-foreground text-sm mt-1">Visual representation of time spent per activity.</p>
      </CardHeader>

      <div className="h-[480px] flex justify-center items-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={140}
              innerRadius={70}
              dataKey="value"
              onMouseEnter={(_, index) => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  className="transition-all"
                  style={{
                    filter: activeIndex === index ? "brightness(1.2)" : "brightness(0.8)",
                    transform: activeIndex === index ? "scale(1.1)" : "scale(1)",
                    transition: "all 0.3s ease-in-out"
                  }}
                />
              ))}
            </Pie>
            <Tooltip formatter={(value: number) => `${Math.round(value / 60)}h`} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
