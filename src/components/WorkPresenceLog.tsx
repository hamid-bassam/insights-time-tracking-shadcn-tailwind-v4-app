/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CalendarDays, Clock, LogIn, LogOut } from "lucide-react";
import { TimeValue } from "../types/activity";
import { DailyInsight } from "../types/work-activity";

interface WorkPresenceLogProps {
  dailyInsights: DailyInsight[];
}

const fmtHM = (t?: TimeValue | null) =>
  !t ? "—" : `${Math.floor((t.hours ?? 0))}h${String(t.minutes ?? 0).padStart(2, "0")}`;

export const WorkPresenceLog = ({ dailyInsights }: WorkPresenceLogProps) => {
  const rows = dailyInsights ?? [];

  // agrégats simples (optionnels)
  const workedDays = rows.filter(r => (r.presence?.hours ?? 0) > 0 || (r.presence?.minutes ?? 0) > 0);
  const totalPresenceMin = workedDays.reduce(
    (acc, r) => acc + ((r.presence?.hours ?? 0) * 60 + (r.presence?.minutes ?? 0)),
    0
  );

  const avgPresenceMin = workedDays.length ? Math.round(totalPresenceMin / workedDays.length) : 0;
  const avgPresence: TimeValue = { hours: Math.floor(avgPresenceMin / 60), minutes: avgPresenceMin % 60 };


  const totalProdPresenceMin = workedDays.reduce(
    (acc, r) => acc + ((r.byCategory.productive?.hours ?? 0) * 60 + (r.byCategory.productive?.minutes ?? 0)),
    0
  );
  const avgProdPresenceMin = workedDays.length ? Math.round(totalProdPresenceMin / workedDays.length) : 0;
  const avgProdPresence: TimeValue = { hours: Math.floor(avgProdPresenceMin / 60), minutes: avgProdPresenceMin % 60 };


  return (
    <motion.div
      className="bg-card p-6 rounded-xl shadow-lg border border-gray-700"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.25 }}
    >
      <CardHeader className="text-center">
        <h2 className="text-2xl font-semibold">🏢 Entry • Exit • Presence</h2>
        <p className="text-muted-foreground text-sm mt-1">
          Log quotidien des heures d’entrée, sortie et temps de présence.
        </p>
      </CardHeader>

      {/* Header ligne */}
      <div className="mt-4 grid grid-cols-4 gap-2 px-2 text-xs uppercase text-muted-foreground">
        <div className="flex items-center gap-1"><CalendarDays className="w-4 h-4" /> Jour</div>
        <div className="flex items-center gap-1"><LogIn className="w-4 h-4" /> Entrée</div>
        <div className="flex items-center gap-1"><LogOut className="w-4 h-4" /> Sortie</div>
        <div className="flex items-center gap-1"><Clock className="w-4 h-4" /> Présence</div>
      </div>

      {/* Lignes */}
      <div className="mt-2 divide-y divide-border">
        {rows.map((d) => (
          <div key={d.day} className="grid grid-cols-4 gap-2 py-2 px-2 text-sm">
            <div className="truncate">{d.day}</div>
            <div>{d.entry ?? "—"}</div>
            <div>{d.exit ?? "—"}</div>
            <div className="font-medium">{fmtHM(d.presence)}</div>
          </div>
        ))}

        {/* Footer / Moyenne */}
        <div className="grid grid-cols-4 gap-2 py-3 px-2 text-sm bg-muted/50 rounded-md mt-3">
          <div className="font-medium">Moyenne (jours travaillés)</div>
          <div>—</div>
          <div>—</div>
          <div className="font-semibold">{fmtHM(avgPresence)}</div>
        </div>
        <div className="grid grid-cols-4 gap-2 py-3 px-2 text-sm bg-muted/50 rounded-md mt-3">
          <div className="font-medium text-chart-success">Moyenne Productive(jours travaillés)</div>
          <div>—</div>
          <div>—</div>
          <div className="font-semibold text-chart-success-dark">{fmtHM(avgProdPresence)}</div>
        </div>
      </div>
    </motion.div>
  );
};
