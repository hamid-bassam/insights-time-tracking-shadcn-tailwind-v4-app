/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
import { ActivityData } from "@/types/activity";
import { formatTime, minutesToTime, timeToMinutes } from "@/utils/time";
import { TrendingDown, TrendingUp } from "lucide-react";
import { useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { cn } from "../lib/utils";
import { thresholds, ThresholdSet } from "../utils/threshold";
import { TypeFilterPills } from "./TypedFilterPills";
import { SearchBar } from "./ui/search-bar";

interface GlobalEvolutionProps {
  data: ActivityData;
}

type ChartDataType = {
  week: string;
  date: string;
  globalRate: number;
  [key: string]: string | number;
};

const getType = (activity: string) => {
  // const split = activity.split('–');
  const split_ = activity.split('-');
  let type = "neutral";
  // if (split.length > 1) {
  //   type = split[1].trim().includes("productive") ? "productive" : split[1].trim().includes("passive") ? "passive" : split[1].trim().includes("ressource") ? "ressource" : split[1].trim().includes("blocks") ? "blocks" : "neutral";
  // } else 
  if (split_.length > 1) {
    type = split_[1].trim().includes("productive") ? "productive" : split_[1].trim().includes("passive") ? "passive" : split_[1].trim().includes("ressource") ? "ressource" : split_[1].trim().includes("blocks") ? "blocks" : "neutral";
  }
  else {
    type = "neutral";
  }
  return type;
}


// reference line 

// GlobalEvolution.tsx


// ...

// util: extraire le "base label" avant le séparateur
const baseLabel = (name: string) => {
  const parts = name.split("–");
  const p = (parts[0] ?? name).split("-")[0];
  return p.trim().toLowerCase();
};

// couleurs et styles (simples et lisibles)
const LINE_COLORS = {
  min: "hsl(32, 70%, 65%)",    // amber légèrement atténué
  ok: "hsl(142, 40%, 70%)",    // vert désaturé (pastel)
  max: "hsl(0, 65%, 80%)",     // rouge doux
  default: "hsl(var(--muted-foreground))",
} as const;

const LINE_DASH = {
  min: "4 2",
  ok: "8 2",        // plein
  max: "6 2",
} as const;

// résout le set de seuils à utiliser
function resolveThresholds(
  selectedActivity: string,
  typedActivity: string
): ThresholdSet {
  // 1) si une activité précise est sélectionnée, on tente un match
  if (selectedActivity !== "all") {
    const key = baseLabel(selectedActivity);
    const byActivity = thresholds.activities[key];
    if (byActivity) return byActivity;
  }

  // 2) sinon si un thème est filtré
  if (typedActivity !== "all") {
    const byTheme = thresholds.themes[typedActivity as keyof typeof thresholds.themes];
    if (byTheme) return byTheme;
  }

  // 3) défaut
  return thresholds.default;
}

// util pour créer les <ReferenceLine /> depuis un ThresholdSet
function buildReferenceLines(ts: ThresholdSet) {
  const items: Array<{ kind: "min" | "ok" | "max"; y: number; label: string }> = [];
  if (typeof ts.min === "number") items.push({ kind: "min", y: ts.min, label: ts.labels?.min ?? "min" });
  if (typeof ts.ok === "number") items.push({ kind: "ok", y: ts.ok, label: ts.labels?.ok ?? "ok" });
  if (typeof ts.max === "number") items.push({ kind: "max", y: ts.max, label: ts.labels?.max ?? "max" });

  return items.map(({ kind, y, label }) => (
    <ReferenceLine
      key={`${kind}-${y}`}
      y={y}
      stroke={LINE_COLORS[kind]}
      strokeWidth={2} // <--- épaisseur de la ligne
      strokeDasharray={LINE_DASH[kind]}
      label={{
        value: label,
        position: "left",
        fill: LINE_COLORS[kind],
        fontSize: 12,
        dx: -60,
      }}
    />
  ));
}


export default function GlobalEvolution({ data }: GlobalEvolutionProps) {
  const [selectedActivity, setSelectedActivity] = useState<string>("all");
  const [typedActivity, setTypedActivity] = useState<string>("all");
  const [stack, setStack] = useState<boolean>(true);
  const [displayGoal, setDisplayGoal] = useState<boolean>(false);
  const [counting24h, setCounting24h] = useState<boolean>(true);

  const switchStack = () => {
    setStack(prev => !prev);
  }

  const switchDisplayGoal = () => {
    setDisplayGoal(prev => !prev);
  }
  const switchCounting24h = () => {
    setCounting24h(prev => !prev);
  }

  const allActivitiesSet = new Set<string>();

  // Parcourir toutes les semaines pour collecter tous les noms d'activités
  data.forEach((week) => {
    week.activities.forEach((activity) => {
      allActivitiesSet.add(activity.name);
    });
  });
  // console.log("*********************** SET ****************", allActivitiesSet)
  const allActivities = Array.from(allActivitiesSet).filter(activity => {
    if (counting24h) return activity.includes("ressource") || activity.includes("productive") || activity.includes("passive") || activity.includes("blocks");
    else return activity
  });

  // .filter(activity => activity.includes("ressource") || activity.includes("productive") || activity.includes("passive") || activity.includes("blocks"));

  // .filter(activity => !activity.includes("neutral"));  mettre que les 24 h 


  data.forEach((week) => {
    // Créons un Set des activités présentes dans cette semaine
    const weekActivitySet = new Set(week.activities.map((a) => a.name));

    // Vérifions quelles activités manquent et les ajoutons avec des valeurs par défaut
    allActivities.forEach((activityName) => {
      if (!weekActivitySet.has(activityName)) {
        week.activities.push({
          name: activityName,
          trackedAvgPerDay: { hours: 0, minutes: 0 },
          goalAvgPerDay: { hours: 0, minutes: 0 },
          type: "neutral", // Tu peux modifier cela selon ton besoin
          description: `Tracking ${activityName.toLowerCase()} – neutral time.`,
          icon: "activity",
          impressions: [],
          tag: "@unknown", // Ajoute un tag neutre
        });
      }
    });
  });

  // const allActivities = Array.from(
  //   new Set(data.flatMap((week) => week.activities.map((a) => a.name)))
  // );

  // const allActivities = Array.from(
  //   new Set(data.flatMap((week) => week.activities.map((a) => a.name.trim())))
  // );

  const chartData: ChartDataType[] = data.map((week) => {
    const weekData: ChartDataType = {
      week: `S-${week.weekNumber}`, // Week
      date: new Date(week.startDate).toLocaleDateString(),
      globalRate: Math.round(week.globalRate * 100),
    };

    week.activities.forEach((activity) => {
      // console.log(week.weekNumber, activity.name);
      weekData[activity.name] = typeof activity.trackedAvgPerDay === "object"
        ? timeToMinutes(activity.trackedAvgPerDay)
        : typeof activity.trackedAvgPerDay === "number" && activity.trackedAvgPerDay !== -1
          ? activity.trackedAvgPerDay
          : 0;

      weekData[`${activity.name}_goalAvg`] = typeof activity.goalAvgPerDay === "object"
        ? timeToMinutes(activity.goalAvgPerDay)
        : 0;
    });

    return weekData;
  });

  const getGlobalTrend = () => {
    if (data.length < 2) return 0;
    const lastWeek = data[data.length - 1].globalRate;
    const previousWeek = data[data.length - 2].globalRate;
    return ((lastWeek - previousWeek) / previousWeek) * 100;
  };

  const trend = getGlobalTrend();

  const chartConfig = allActivities.reduce((acc, activity, index) => {
    const colors = [
      "hsl(var(--chart-1))",
      "hsl(var(--chart-2))",
      "hsl(var(--chart-3))",
      "hsl(var(--chart-4))",
      "hsl(var(--chart-5))",
    ];
    // const split = activity.split('–');
    const split_ = activity.split('-');
    let type = "neutral";
    // if (split.length > 1) {
    //   type = split[1].trim().includes("productive") ? "productive" : split[1].trim().includes("passive") ? "passive" : split[1].trim().includes("ressource") ? "ressource" : split[1].trim().includes("blocks") ? "blocks" : "neutral";
    if (split_.length > 1) {
      type = split_[1].trim().includes("productive") ? "productive" : split_[1].trim().includes("passive") ? "passive" : split_[1].trim().includes("ressource") ? "ressource" : split_[1].trim().includes("blocks") ? "blocks" : "neutral";
    }
    else {
      type = "neutral";
    }

    // const type = activity.split('-')[1].includes("productive") ? "productive" : "distracting";
    acc[activity] = {
      label: activity.split('–')[0] || activity.split('-')[0],
      color: type === "productive" ? "hsl(var(--chart-1))" : type === "passive" ? "hsl(var(--destructive))" : type === "ressource" ?
        // "hsl(var(--chart-3))" 
        "hsl(260, 45%, 60%)"
        : type === "blocks" ? "hsl(var(--primary))" : "hsl(var(--chart-4))",
      // color: colors[index % colors.length],
    };
    return acc;
  }, {} as ChartConfig);
  // const filteredActivities = allActivities.filter((activity) => activity.includes(typedActivity));

  const typedActivities = typedActivity === "all" ? allActivities : allActivities.filter((activity) => getType(activity) === typedActivity);


  const filteredActivities = selectedActivity === "all" ? allActivities : [selectedActivity];

  const displayedActivities = typedActivities.filter((activity) => filteredActivities.includes(activity));
  const displayedGoalActivities = displayedActivities.map((activity) => `${activity}_goalAvg`);



  return (
    <Card className="h-full">

      <CardHeader className="border-b p-4">
        <div className="flex items-center justify-between gap-3">
          {/* Left: Search */}
          <div className="flex items-center gap-2">
            <SearchBar
              className="w-48"
              options={["all", ...allActivities]}
              onSelect={(v) => { setSelectedActivity(v); setTypedActivity("all") }}
            />
          </div>

          {/* Center: title + typed filter */}
          <div className="flex flex-col items-center text-center gap-2">
            <CardTitle className="leading-tight">
              {(() => {
                const typeLabel = typedActivity === "all" ? "All types" : typedActivity;
                const actLabel = selectedActivity === "all"
                  ? "All activities"
                  : selectedActivity.split("–")[0].split("-")[0];
                return `${actLabel} · ${typeLabel}`;
              })()}
            </CardTitle>
            <CardDescription>Activity tracking progress over time</CardDescription>

            {/* <-- le filtre typedActivity revient ici */}
            <TypeFilterPills
              value={typedActivity as any}
              onChange={(v) => { setSelectedActivity("all"); setTypedActivity(v) }}
            />
          </div>

          {/* Right: toggles */}
          <div className="flex items-center gap-1">
            <div className="inline-flex rounded-lg border bg-background p-1">
              <button
                className={cn(
                  "px-2 py-1 text-xs rounded-md",
                  stack ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                )}
                onClick={switchStack}
              >
                Stack
              </button>
              <button
                className={cn(
                  "px-2 py-1 text-xs rounded-md",
                  displayGoal ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                )}
                onClick={switchDisplayGoal}
              >
                Goal
              </button>
              <button
                className={cn(
                  "px-2 py-1 text-xs rounded-md",
                  counting24h ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                )}
                onClick={switchCounting24h}
              >
                24h
              </button>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={"60vh"} minHeight={300} maxHeight={500}>
            <AreaChart data={chartData} >
              <defs>
                {displayedActivities.map((a) => {
                  const color = chartConfig[a].color;              // ex: "hsl(var(--chart-1))"
                  const id = `grad-${a.replace(/\W+/g, "_")}`;     // id unique, safe
                  return (
                    <linearGradient key={id} id={id} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={color} stopOpacity={0.99} />
                      <stop offset="100%" stopColor={color} stopOpacity={0.16} />
                    </linearGradient>
                  );
                })}
              </defs>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="week" tickLine={false} axisLine={false} tickMargin={8} angle={45} />
              <YAxis tickMargin={8} tickFormatter={(value) => formatTime(minutesToTime(value))} />


              {buildReferenceLines(resolveThresholds(selectedActivity, typedActivity))}
              <ChartTooltip

                content={< ChartTooltipContent
                  formatTimeValue
                  indicator="dot" />}
              />

              {displayedActivities.map((activity) => {
                const gradId = `grad-${activity.replace(/\W+/g, "_")}`;
                return (
                  <Area
                    key={activity}
                    dataKey={activity}
                    type="monotone"
                    stroke={chartConfig[activity].color}
                    // fill={chartConfig[activity].color}
                    fill={`url(#${gradId})`}
                    stackId={stack ? "activities" : undefined}
                    fillOpacity={0.4}
                  />
                )
              })}

              {displayGoal && displayedGoalActivities.map((goalActivity) => {
                const baseActivity = goalActivity.replace("_goalAvg", "");
                return (
                  <Area
                    key={goalActivity}
                    dataKey={goalActivity}
                    type="monotone"
                    stroke={chartConfig[baseActivity].color}
                    // fill={chartConfig[baseActivity].color}
                    fill="none" // No fill for goal lines
                    strokeDasharray="4 4" // Dashed line to distinguish goals
                    fillOpacity={0.2} // Lighter fill for goal lines
                    stackId={stack ? "goals" : undefined}
                  />
                );
              })}
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              {trend > 0 ? (
                <>
                  Trending up by {trend.toFixed(1)}% <TrendingUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  Trending down by {Math.abs(trend).toFixed(1)}% <TrendingDown className="h-4 w-4" />
                </>
              )}
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              {new Date(data[0].startDate).toLocaleDateString()} - {new Date(data[data.length - 1].endDate).toLocaleDateString()}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card >
  );
}





{/* badges legend */ }
// <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
//   <span className="text-xs text-muted-foreground">Legend:</span>
//   <span className="inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs"
//     style={{ borderColor: "hsl(var(--chart-1))", color: "hsl(var(--chart-1))" }}>
//     ● productive
//   </span>
//   <span className="inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs"
//     style={{ borderColor: "hsl(var(--destructive))", color: "hsl(var(--destructive))" }}>
//     ● passive
//   </span>
//   <span className="inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs"
//     style={{ borderColor: "hsl(260,45%,60%)", color: "hsl(260,45%,60%)" }}>
//     ● ressource
//   </span>
//   <span className="inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs"
//     style={{ borderColor: "hsl(var(--primary))", color: "hsl(var(--primary))" }}>
//     ● blocks
//   </span>
// </div>


{/* <CardHeader>
        <div className="flex justify-between items-center ">

          <div>
            <CardTitle>Global Evolution</CardTitle>
            <CardDescription>Activity tracking progress over time</CardDescription>
          </div>

          <div className="flex flex-col gap-2">
            <Select defaultValue="all" onValueChange={setTypedActivity}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Activities</SelectItem>

                <SelectItem key={"productive"} value={"productive"}>
                  productive
                </SelectItem>
                <SelectItem key={"passive"} value={"passive"}>
                  passive
                </SelectItem>
                <SelectItem key={"ressource"} value={"ressource"}>
                  ressource
                </SelectItem>
                <SelectItem key={"blocks"} value={"blocks"}>
                  blocks
                </SelectItem>

              </SelectContent>
            </Select>
            <SearchBar
              className="w-32"
              options={["all", ...allActivities]}
              onSelect={setSelectedActivity}
            /> */}
{/* <Select defaultValue="all" onValueChange={setSelectedActivity}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Select activity" />
              </SelectTrigger>
              <SelectContent>

                <SelectItem value="all">All Activities</SelectItem>
                {allActivities.map((activity) => (
                  <SelectItem key={activity} value={activity}>
                    {activity}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select> */}
{/* <SimpleSearchSelect
              value={selectedActivity}
              onChange={setSelectedActivity}
              options={["all", ...allActivities]} // tu gardes ta source de vérité
              placeholder="Select activity"
              className="w-56"
            /> */}
{/* <div className="flex items-center space-x-2">
              <Switch id="airplane-mode" checked={stack} onCheckedChange={() => { switchStack(); console.log(stack) }} />
              <Label htmlFor="airplane-mode">Stack Charts</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="airplane-mode" checked={displayGoal} onCheckedChange={switchDisplayGoal} />
              <Label htmlFor="airplane-mode">Display Goal</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="airplane-mode" checked={counting24h} onCheckedChange={switchCounting24h} />
              <Label htmlFor="airplane-mode">24h</Label>
            </div>
          </div>
        </div>
      </CardHeader> */}