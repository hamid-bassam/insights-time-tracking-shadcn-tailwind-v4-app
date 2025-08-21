
// components/TypeFilterPills.tsx
"use client";
import { cn } from "@/lib/utils";
import { ActivityType } from "../types/activity";

type TypeOpt = {
  value: "all" | ActivityType;
  label: string;
  // classes quand ACTIF (pill remplie)
  activeBg: string;
  activeText: string;
  // dot couleur quand INACTIF
  dotBg: string;
};

const TYPE_OPTIONS: TypeOpt[] = [
  {
    value: "all",
    label: "All",
    activeBg: "bg-secondary",
    activeText: "text-secondary-foreground",
    dotBg: "bg-muted-foreground",
  },
  {
    value: "productive",
    label: "productive",
    activeBg: "bg-[hsl(var(--chart-1))]",
    activeText: "text-background",
    dotBg: "bg-[hsl(var(--chart-1))]",
  },
  {
    value: "passive",
    label: "passive",
    activeBg: "bg-destructive",
    activeText: "text-destructive-foreground",
    dotBg: "bg-destructive",
  },
  {
    value: "ressource",
    label: "ressource",
    activeBg: "bg-[hsl(260,45%,60%)]",
    activeText: "text-background",
    dotBg: "bg-[hsl(260,45%,60%)]",
  },
  {
    value: "blocks",
    label: "blocks",
    activeBg: "bg-primary",
    activeText: "text-primary-foreground",
    dotBg: "bg-primary",
  },
];

export type TypeValue = TypeOpt["value"];

export function TypeFilterPills({
  value,
  onChange,
  className,
}: {
  value: TypeValue;
  onChange: (v: TypeValue) => void;
  className?: string;
}) {
  return (
    <div
      role="radiogroup"
      aria-label="Filter by type"
      className={cn(
        "inline-flex items-center gap-1 rounded-xl border bg-background p-1",
        className
      )}
    >
      {TYPE_OPTIONS.map((opt) => {
        const active = value === opt.value;

        return (
          <button
            key={opt.value}
            role="radio"
            aria-checked={active}
            onClick={() => onChange(opt.value)}
            className={cn(
              "group inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs transition-colors",
              "border",
              active
                ? cn(opt.activeBg, opt.activeText, "border-transparent")
                : "bg-transparent text-muted-foreground hover:bg-muted border-transparent"
            )}
          >
            {/* petit dot de couleur, visible surtout à l'état inactif */}
            <span
              aria-hidden
              className={cn(
                "h-2 w-2 rounded-full",
                active ? "opacity-70" : "",
                opt.dotBg
              )}
            />
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

// // components/TypeFilterPills.tsx
// "use client";
// import { cn } from "@/lib/utils";

// const TYPE_OPTIONS = [
//   { value: "all", label: "All", bg: "bg-primary" },
//   { value: "productive", label: "productive", bg: "bg-chart-1" },
//   { value: "passive", label: "passive", bg: "bg-destructive" },
//   { value: "ressource", label: "ressource", bg: "bg-[hsl(260,45%,60%)]" },
//   { value: "blocks", label: "blocks", bg: "bg-primary" },
// ] as const;

// export type TypeValue = (typeof TYPE_OPTIONS)[number]["value"];

// export function TypeFilterPills({
//   value,
//   onChange,
//   className,
// }: {
//   value: TypeValue;
//   onChange: (v: TypeValue) => void;
//   className?: string;
// }) {
//   return (
//     <div
//       role="radiogroup"
//       aria-label="Filter by type"
//       className={cn(
//         "inline-flex items-center gap-1 rounded-xl border bg-background p-1",
//         className
//       )}
//     >
//       {TYPE_OPTIONS.map((opt) => {
//         const active = value === opt.value;
//         return (
//           <button
//             key={opt.value}
//             role="radio"
//             aria-checked={active}
//             onClick={() => onChange(opt.value)}
//             className={cn(
//               "px-2.5 py-1 text-xs rounded-lg transition-colors",
//               active
//                 ? opt.bg + "text-primary-foreground"
//                 : "hover:bg-muted text-muted-foreground"
//             )}
//           >
//             {opt.label}
//           </button>
//         );
//       })}
//     </div>
//   );
// }
