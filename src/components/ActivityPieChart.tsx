"use client";
import { CardHeader } from "@/components/ui/card";
import { WeekData } from "@/types/activity";
import { fmtHM, minutesToTime, timeToMinutes } from "@/utils/time";
import { motion } from "framer-motion";
import Image from 'next/image';
import { useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Sector, SectorProps } from "recharts";
import { chronoPresetsPremium } from "../utils/chrono-presets";
import chronoGpt from "./chrono2.png";
import ChronoRingGradient from "./ui/hrono-ring-gradient";
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

  const countedActivities = sortedActivities.filter(act => act.type !== "neutral");
  const total = countedActivities.reduce((sum, act) => sum + act.value, 0);

  const topActivities = countedActivities.slice(0, 5);
  const otherTotal = countedActivities.slice(5).reduce((sum, act) => sum + act.value, 0);

  const pieData = otherTotal > 0
    ? [...topActivities, { name: "Other Activities", value: otherTotal, type: "neutral" }]
    : topActivities;

  // const COLORS = [
  //   "hsl(var(--chart-1))",
  //   "hsl(var(--chart-2))",
  //   "hsl(var(--chart-3))",
  //   "hsl(var(--chart-1))",
  //   "hsl(var(--chart-5))",
  //   "hsl(var(--muted))"
  // ];

  const TYPE_COLORS: Record<string, string> = {
    productive: "hsl(var(--chart-1))",
    passive: "hsl(var(--destructive))",
    ressource: "hsl(260, 45%, 60%)",
    blocks: "hsl(var(--primary))",
    neutral: "hsl(var(--muted))",
  };
  const INNER = 52           // même valeur que ton innerRadius
  const IMG_SCALE = 3.5     // ajuste 1.3–1.9 selon le look

  const p = chronoPresetsPremium.opalMint;
  return (
    // bg-card p-6 rounded-xl shadow-lg border border-gray-700 transition-all
    <motion.div
      className="
    relative overflow-hidden rounded-2xl p-6
    border border-white/10
    bg-[linear-gradient(180deg,#0b0f19,#070a12)]
    shadow-[0_12px_40px_-12px_rgba(0,0,0,0.65)]
    before:content-[''] before:absolute before:inset-0
    before:bg-[radial-gradient(90%_60%_at_15%_0%,rgba(16,185,129,0.10),transparent_55%),radial-gradient(80%_60%_at_85%_-10%,rgba(168,85,247,0.12),transparent_60%)]
    after:content-[''] after:absolute after:inset-0 after:rounded-2xl
    after:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]
    before:pointer-events-none after:pointer-events-none
  "
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onTouchStart={() => setActiveIndex(null)}

    >

      <CardHeader className="text-center">
        <h2 className="text-2xl font-semibold">📊 Activity Distribution</h2>
        <p className="text-muted-foreground text-sm mt-1">Visual representation of time spent per activity.</p>
      </CardHeader>

      <div className="relative h-[250px] flex justify-center items-center"
      >
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            {/* <defs>
              {pieData.map((_, i) => (
                <radialGradient id={`g-${i}`} key={i}>
                  <stop offset="0%" stopColor={COLORS[i % COLORS.length]} stopOpacity="0.85" />
                  <stop offset="100%" stopColor={COLORS[i % COLORS.length]} stopOpacity="1" />
                </radialGradient>
              ))}
              <filter id="innerShadow" x="-50%" y="-50%" width="200%" height="200%">
                <feOffset dy="0.5" />
                <feGaussianBlur stdDeviation="1.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="arithmetic" k2="-1" k3="1" />
              </filter>
            </defs> */}
            <defs>
              {pieData.map((entry, i) => {
                const color = TYPE_COLORS[entry.type] ?? "hsl(var(--muted))";
                return (
                  <radialGradient id={`g-${entry.type}-${i}`} key={i}>
                    <stop offset="0%" stopColor={color} stopOpacity="0.85" />
                    <stop offset="100%" stopColor={color} stopOpacity="1" />
                  </radialGradient>
                );
              })}
              <filter id="innerShadow" x="-50%" y="-50%" width="200%" height="200%">
                <feOffset dy="0.5" />
                <feGaussianBlur stdDeviation="1.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="arithmetic" k2="-1" k3="1" />
              </filter>
            </defs>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={102}
              innerRadius={INNER}
              dataKey="value"
              onMouseEnter={(_, index) => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              onPointerDown={(_, index) => {
                console.log(index);
                setActiveIndex((prev) => (prev === index || index === undefined ? null : index))
              }}


              // +++ 
              paddingAngle={2}
              cornerRadius={8}
              stroke="hsl(var(--background))"
              strokeWidth={2}
              startAngle={90}
              endAngle={-270}
              style={{ filter: "url(#innerShadow)" }}
              activeIndex={activeIndex ?? undefined}
              activeShape={(props: SectorProps) => (
                <Sector
                  {...props}
                  outerRadius={props.outerRadius ? props.outerRadius + 6 : 0}
                  stroke="hsl(var(--foreground)/0.08)"
                  strokeWidth={6}
                />
              )}
              isAnimationActive
              animationDuration={800}
              animationEasing="ease-out"


            >

              {pieData.map((entry, i) => (
                // <Cell
                //   key={`cell-${index}`}
                //   fill={COLORS[index % COLORS.length]}
                //   className="transition-all"
                //   style={{
                //     filter: activeIndex === index ? "brightness(1.2)" : "brightness(0.8)",
                //     transform: activeIndex === index ? "scale(1.1)" : "scale(1)",
                //     transition: "all 0.3s ease-in-out"
                //   }}
                // />
                //   <Cell key={i} fill={`url(#g-${i})`}
                //     begin={i * 30}
                //     //   className="transition-all"
                //     style={{
                //       filter: activeIndex === i ? "brightness(1.2)" : "brightness(0.8)",
                //       transform: activeIndex === i ? "scale(1.1)" : "scale(1)",
                //       transition: "all 0.3s ease-in-out"
                //     }}
                //   />
                // ))}


                <Cell
                  key={i}
                  fill={`url(#g-${entry.type ?? "neutral"}-${i})`}
                  style={{
                    filter: activeIndex === i ? "brightness(1.2)" : "brightness(0.85)",
                    transform: activeIndex === i ? "scale(1.05)" : "scale(1)",
                    transition: "all 0.3s ease-in-out",
                  }}
                />
              ))}


            </Pie>
            {/* <Tooltip formatter={(value: number) => `${Math.round(value / 60)}h`} /> */}
            {/* <Legend /> */}
          </PieChart>
        </ResponsiveContainer>

        {/* Overlay 1 : image chrono dans le trou */}
        <div className="absolute inset-0 grid place-items-center pointer-events-none z-10">
          <Image
            src={chronoGpt.src}              // /public/chrono.png
            alt="Chrono"
            width={INNER * IMG_SCALE}
            height={INNER * IMG_SCALE}
            className="opacity-25"
            draggable={false}
            // sizes optionnel si container responsive :
            sizes="(max-width: 768px) 120px, 160px"
          />
        </div>





        <div className="absolute inset-0 grid place-items-center pointer-events-none z-10"
          style={{ "--inner": `${INNER * 2}px` } as React.CSSProperties}>
          {/* <ChronoRing className="text-sky-200/90 w-[calc(var(--inner)*2.3px)] h-[calc(var(--inner)*2.3px)]
          
    [filter:drop-shadow(0_0_16px_rgba(180,220,255,.35))]" /> */}
          {/* text-sky-200/90 */}
          <ChronoRingGradient
            className="pointer-events-none
             w-[calc(var(--inner)*4.3px)] h-[calc(var(--inner)*4.3px)]
             [mix-blend:screen]"       // aide à ressortir sur dark
            from={p.from}
            by={p.by}
            to={p.to}
            viaAt={p.viaAt}
            glow
          />
        </div>




        {/* Overlay centré */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          {activeIndex != null ? (
            <div className="text-center">
              <div className="text-sm font-semibold text-muted-foreground">{pieData[activeIndex].name}</div>
              <div className="text-2xl font-semibold">{fmtHM(minutesToTime((pieData[activeIndex].value)))}</div>
            </div>
          ) : (
            <div className="text-center">
              <div className="text-xs uppercase text-muted-foreground">Total</div>
              <div className="text-xl font-bold">
                {fmtHM(minutesToTime(total))}
              </div>
            </div>
          )}
        </div>
        {/* {fmtHM(minutesToTime(total))} */}
      </div>

      {/* Legend custom, hors du chart */}
      {/* <div className="mt-4 flex flex-wrap justify-center gap-3">
        {pieData.map((e, i) => (
          <div key={i} className="flex items-center gap-2 text-sm">
            <span className="h-3 w-3 rounded-full" style={{ background: COLORS[i % COLORS.length] }} />
            {e.name}
          </div>
        ))}
      </div> */}
      <div className="mt-4 flex flex-wrap justify-center gap-3">
        {pieData.map((e, i) => (
          <div key={i} className="flex items-center gap-2 text-sm">
            <span
              className="h-3 w-3 rounded-full"
              style={{ background: TYPE_COLORS[e.type] ?? "hsl(var(--muted))" }}
            />
            {e.name}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
