
// ChronoRingGradient.tsx
import { useId } from "react";

type Props = React.SVGProps<SVGSVGElement> & {
  from?: string;        // couleur en haut
  to?: string;          // couleur en bas
  via?: string;         // couleur intermédiaire (optionnel)
  by?: string;          // alias de via
  viaAt?: number;       // position de la couleur intermédiaire (0–100), défaut 50
  glow?: boolean;       // halo pour fond dark
};

export default function ChronoRingGradient({
  from = "hsl(210 100% 86%)",
  to = "hsl(265 90% 78%)",
  via,
  by,
  viaAt = 50,
  glow = true,
  ...props
}: Props) {
  const id = useId();
  const gradId = `grad-${id}`;
  const glowId = `glow-${id}`;

  const mid = via ?? by;                                  // supporte via OU by
  const midOffset = Math.min(100, Math.max(0, viaAt));    // clamp 0..100

  return (
    <svg viewBox="0 0 256 256" fill="none" width={256} height={256} {...props}>
      <defs>
        <linearGradient id={gradId} x1="128" y1="24" x2="128" y2="232" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={from} />
          {mid && <stop offset={`${midOffset}%`} stopColor={mid} />}
          <stop offset="100%" stopColor={to} />
        </linearGradient>

        {glow && (
          <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor={from} floodOpacity="0.35" />
            <feDropShadow dx="0" dy="0" stdDeviation="9" floodColor={to} floodOpacity="0.25" />
          </filter>
        )}
      </defs>

      <g filter={glow ? `url(#${glowId})` : undefined} strokeLinecap="round" strokeLinejoin="round">
        {/* anneau principal (centre 128,128) */}
        <circle cx="128" cy="128" r="98" stroke={`url(#${gradId})`} strokeWidth="10" />
        {/* cerne intérieur subtil */}
        <circle cx="128" cy="128" r="84" stroke={`url(#${gradId})`} strokeWidth="2" opacity=".22" />
        {/* tige + bouton top */}
        <path d="M128 40v18" stroke={`url(#${gradId})`} strokeWidth="8" />
        <rect x="92" y="4" width="72" height="18" rx="9" fill={`url(#${gradId})`} opacity=".65" />
        {/* ergots NE / NW */}
        <rect x="120" y="24" width="16" height="8" rx="4"
          transform="rotate(50 128 128) translate(0,16)"
          fill={`url(#${gradId})`} opacity=".7" />
        <rect x="120" y="24" width="16" height="8" rx="4"
          transform="rotate(-50 128 128) translate(0,16)"
          fill={`url(#${gradId})`} opacity=".7" />
      </g>
    </svg>
  );
}


// // ChronoRingGradient.tsx
// import { useId } from "react";

// type Props = React.SVGProps<SVGSVGElement> & {
//   from?: string; // couleur haut
//   via?: string;
//   viaAt?: number;
//   to?: string;   // couleur bas
//   glow?: boolean;
// };

// export default function ChronoRingGradient({
//   from = "hsl(210 100% 86%)",
//   via = "hsl(210 100% 86%)",
//   viaAt = 50,  // bleu-glacier clair (dark-friendly)
//   to = "hsl(265 90% 78%)",   // violet pastel
//   glow = true,
//   ...props
// }: Props) {
//   const id = useId();
//   const gradId = `grad-${id}`;
//   const glowId = `glow-${id}`;
//   const midOffset = Math.min(100, Math.max(0, viaAt));
//   return (
//     <svg viewBox="0 0 256 256" fill="none" width={256} height={256} {...props}>
//       <defs>
//         <linearGradient id={gradId} x1="128" y1="24" x2="128" y2="232" gradientUnits="userSpaceOnUse">
//           <stop offset="0%" stopColor={from} />
//           {via && <stop offset={`${midOffset}%`} stopColor={via} />}
//           <stop offset="100%" stopColor={to} />
//         </linearGradient>

//         {/* halo doux pour ressortir sur dark */}
//         <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
//           <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor={from} floodOpacity="0.35" />
//           <feDropShadow dx="0" dy="0" stdDeviation="9" floodColor={to} floodOpacity="0.25" />
//         </filter>
//       </defs>

//       <g filter={glow ? `url(#${glowId})` : undefined} strokeLinecap="round" strokeLinejoin="round">
//         {/* anneau principal — centre (128,128) */}
//         <circle cx="128" cy="128" r="88" stroke={`url(#${gradId})`} strokeWidth="10" />

//         {/* cerne intérieur subtil (effet horloger) */}
//         <circle cx="128" cy="128" r="74" stroke={`url(#${gradId})`} strokeWidth="2" opacity=".22" />

//         {/* tige + bouton top */}
//         <path d="M128 58v18" stroke={`url(#${gradId})`} strokeWidth="8" />
//         <rect x="92" y="4" width="72" height="18" rx="9" fill={`url(#${gradId})`} opacity=".65" />

//         {/* petits bouts NE & NW */}
//         <rect x="120" y="24" width="16" height="8" rx="4"
//           transform="rotate(30 128 128) translate(0,16)"
//           fill={`url(#${gradId})`} opacity=".7" />
//         <rect x="120" y="24" width="16" height="8" rx="4"
//           transform="rotate(-30 128 128) translate(0,16)"
//           fill={`url(#${gradId})`} opacity=".7" />
//       </g>
//     </svg>
//   );
// }
