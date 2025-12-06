import { ActivityData, Phase, ActivityType } from "@/types/activity";
import { timeToMinutes } from "./time";

// Exclude sleep and neutral type activities
const isExcluded = (activity: { name: string; type: ActivityType }): boolean => {
  const lower = activity.name.toLowerCase();
  return lower.includes("sleep") || activity.type === "neutral";
};

// Get top 5 activities for a period (excluding sleep and neutral)
const getTopActivities = (weekData: ActivityData): { name: string; minutes: number; type: ActivityType }[] => {
  const activityMinutes = new Map<string, { minutes: number; type: ActivityType }>();

  weekData.forEach(week => {
    week.activities.forEach(activity => {
      if (!isExcluded(activity)) {
        const minutes = typeof activity.trackedAvgPerDay === "object"
          ? timeToMinutes(activity.trackedAvgPerDay)
          : typeof activity.trackedAvgPerDay === "number" && activity.trackedAvgPerDay !== -1
            ? activity.trackedAvgPerDay
            : 0;

        const cleanName = activity.name.split('–')[0]?.split('-')[0]?.trim() || activity.name;
        const current = activityMinutes.get(cleanName);

        if (current) {
          current.minutes += minutes;
        } else {
          activityMinutes.set(cleanName, { minutes, type: activity.type });
        }
      }
    });
  });

  return Array.from(activityMinutes.entries())
    .sort((a, b) => b[1].minutes - a[1].minutes)
    .slice(0, 5)
    .map(([name, data]) => ({ name, minutes: data.minutes, type: data.type }));
};

// Get color for the dominant activity type in top 5
const getPhaseColor = (topActivities: { type: ActivityType }[]): string => {
  const TYPE_COLORS: Record<ActivityType, string> = {
    productive: "hsl(142, 70%, 45%)",
    passive: "hsl(0, 70%, 50%)",
    ressource: "hsl(260, 60%, 55%)",
    blocks: "hsl(220, 70%, 50%)",
    neutral: "hsl(var(--muted-foreground))"
  };

  // Count types in top 5
  const typeCounts: Record<ActivityType, number> = {
    productive: 0,
    passive: 0,
    ressource: 0,
    blocks: 0,
    neutral: 0
  };

  topActivities.forEach(act => {
    if (act.type !== "neutral") {
      typeCounts[act.type]++;
    }
  });

  // Find most common type
  let dominantType: ActivityType = "productive";
  let maxCount = 0;

  (["productive", "passive", "ressource", "blocks"] as ActivityType[]).forEach(type => {
    if (typeCounts[type] > maxCount) {
      maxCount = typeCounts[type];
      dominantType = type;
    }
  });

  return TYPE_COLORS[dominantType];
};

// Detect phases automatically from activity data - simple approach based on top 5 activities
export const detectPhases = (data: ActivityData, minWeeks = 2, maxWeeks = 6): Phase[] => {
  if (data.length === 0) return [];

  const phases: Phase[] = [];
  let currentPhaseStart = 0;

  // Simple sliding window - create phases at regular intervals
  for (let i = 0; i < data.length; i += minWeeks) {
    const endIdx = Math.min(i + maxWeeks, data.length);
    const phaseData = data.slice(i, endIdx);

    if (phaseData.length === 0) continue;

    const topActivities = getTopActivities(phaseData);

    if (topActivities.length === 0) continue;

    const startWeek = phaseData[0].weekNumber;
    const endWeek = phaseData[phaseData.length - 1].weekNumber;
    const color = getPhaseColor(topActivities);

    // Create phase name from top activity
    const phaseName = topActivities[0].name;
    const focusActivities = topActivities.slice(0, 3).map(a => a.name).join(", ");

    phases.push({
      id: `phase-${phases.length + 1}`,
      name: `${phaseName} Focus`,
      focus: focusActivities,
      startWeek,
      endWeek,
      color,
      description: `Top 5 activities: ${topActivities.map(a => a.name).join(", ")}`,
      goals: topActivities.map(act => act.name)
    });
  }

  return phases;
};

// Calculate phase statistics - returns top 5 activities with their stats
export const getPhaseStats = (phase: Phase, data: ActivityData) => {
  const phaseData = data.filter(
    week => week.weekNumber >= phase.startWeek && week.weekNumber <= phase.endWeek
  );

  const topActivities = getTopActivities(phaseData);

  let totalMinutes = 0;
  topActivities.forEach(act => {
    totalMinutes += act.minutes;
  });

  const numWeeks = phaseData.length || 1;

  return {
    duration: phase.endWeek - phase.startWeek + 1,
    avgPerDay: totalMinutes / numWeeks,
    topActivities: topActivities.map(act => ({
      name: act.name,
      type: act.type,
      avgPerDay: act.minutes / numWeeks,
      percentage: totalMinutes > 0 ? (act.minutes / totalMinutes) * 100 : 0
    }))
  };
};
