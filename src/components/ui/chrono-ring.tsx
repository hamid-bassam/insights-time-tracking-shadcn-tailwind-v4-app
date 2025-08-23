// ChronoRing.tsx
export default function ChronoRing(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 256 256"
      width={256}
      height={256}
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        {/* Glow doux pour contraste sur dark */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3.5" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter="url(#glow)" strokeLinecap="round">
        {/* Anneau principal (centre = 128,128) */}
        <circle cx="128" cy="128" r="88" strokeWidth="10" />

        {/* Cerne intérieur très subtil (effet horloger) */}
        <circle cx="128" cy="128" r="74" strokeWidth="2" opacity="0.22" />

        {/* Tige + bouton top */}
        <path d="M128 58v18" strokeWidth="8" />
        <rect x="92" y="4" rx="8" ry="8" width="72" height="18" fill="currentColor" opacity="0.55" stroke="none" />

        {/* Nubs NE / NW (petits bouts) */}
        <rect
          x={120} y={24} width={16} height={8} rx={4}
          transform="rotate(30 128 128) translate(0,16)"
          fill="currentColor" opacity="0.48" stroke="none"
        />
        <rect
          x={120} y={24} width={16} height={8} rx={4}
          transform="rotate(-30 128 128) translate(0,16)"
          fill="currentColor" opacity="0.48" stroke="none"
        />
      </g>
    </svg>
  );
}
