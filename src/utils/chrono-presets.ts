// chronoPresets.ts
export type ChronoPreset = {
  from: string; to: string; by?: string; viaAt?: number;
};

export const chronoPresets: Record<string, ChronoPreset> = {
  ice: { from: "hsl(210 100% 92%)", by: "hsl(255 90% 88%)", to: "hsl(275 85% 86%)", viaAt: 42 },
  mint: { from: "hsl(172 80% 85%)", by: "hsl(160 70% 78%)", to: "hsl(190 80% 88%)", viaAt: 38 },
  aurora: { from: "hsl(195 90% 85%)", by: "hsl(275 85% 84%)", to: "hsl(320 70% 86%)", viaAt: 55 },
  sunset: { from: "hsl(26 95% 86%)", by: "hsl(340 85% 80%)", to: "hsl(280 70% 82%)", viaAt: 48 },
  gold: { from: "hsl(46 95% 80%)", by: "hsl(38 85% 74%)", to: "hsl(50 90% 88%)", viaAt: 50 },
  steel: { from: "hsl(210 14% 78%)", by: "hsl(215 16% 70%)", to: "hsl(210 12% 85%)", viaAt: 60 }, // monochrome chic
  neonCyan: { from: "hsl(190 100% 80%)", by: "hsl(188 100% 70%)", to: "hsl(190 100% 90%)", viaAt: 40 },
  orchid: { from: "hsl(275 90% 86%)", by: "hsl(300 80% 84%)", to: "hsl(260 90% 88%)", viaAt: 50 },
};

export const chronoPresetsPremium = {
  // froid, techno, très lisible
  iceQuartz: { from: "hsl(210 100% 92%)", by: "hsl(235 90% 88%)", to: "hsl(260 85% 86%)", viaAt: 42 },

  // mint/cyan haut de gamme, matche bien avec tes verts du pie
  opalMint: { from: "hsl(188 85% 88%)", by: "hsl(170 70% 82%)", to: "hsl(200 90% 90%)", viaAt: 38 },

  // violet feutré (pas fluo), look “améthyste”
  amethyst: { from: "hsl(268 85% 88%)", by: "hsl(255 70% 86%)", to: "hsl(230 65% 90%)", viaAt: 48 },

  // neutre chic “acier clair”, très pro si tu veux éviter la couleur
  platinum: { from: "hsl(220 12% 88%)", by: "hsl(220 14% 82%)", to: "hsl(210 12% 92%)", viaAt: 55 },

  // cyan nordique + pointe lavande (léger contraste)
  auroraMist: { from: "hsl(195 95% 88%)", by: "hsl(255 80% 86%)", to: "hsl(210 100% 92%)", viaAt: 52 },

  // “champagne froid” (chaud mais subtil, pas saumon)
  champagne: { from: "hsl(40 70% 86%)", by: "hsl(28 55% 80%)", to: "hsl(48 75% 88%)", viaAt: 50 },
} as const;
