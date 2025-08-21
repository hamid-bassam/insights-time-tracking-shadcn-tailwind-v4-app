// thresholds.ts
export type ThresholdSet = {
  min?: number;   // ligne "minimum acceptable"
  ok?: number;    // cible (ligne verte)
  max?: number;   // au-delà = trop (ligne rouge)
  labels?: Partial<Record<"min" | "ok" | "max", string>>;
};

export const thresholds = {
  default: { ok: 1440, labels: { ok: "24h" } } satisfies ThresholdSet,

  // par activité précise (clé = label avant le séparateur)
  activities: {
    // Sleep : min 5h, ok 7h30, max 9h
    sleep: {
      min: 5 * 60,
      ok: 7 * 60 + 30,
      max: 9 * 60,
      labels: { min: "min 5h", ok: "ok 7h30", max: "max 9h" },
    },
    // ajoute ici d'autres activités si besoin...
  } as Record<string, ThresholdSet>,

  // par thème
  themes: {
    // productif : min 5h, ok 7h (pas de max demandé)
    productive: {
      min: 5 * 60,
      ok: 7 * 60,
      labels: { min: "min 5h", ok: "ok 7h" },
    },
    // passif : min 15 min (vert), ok 1h (vert), max 2h (rouge)
    passive: {
      max: 90,
      ok: 60,
      // min: 15,
      // min: "min 15min",
      labels: { ok: "ok 1h", max: "max 1h30" },
    },
    // blocks : min 30 min, max 2h
    blocks: {
      min: 30,
      max: 120,
      labels: { min: "min 30min", max: "max 2h" },
    },
    // ressource : max 14h
    ressource: {
      max: 14 * 60,
      ok: 12 * 60,
      labels: { max: "max 14h", ok: "cool 12h" },
    },
  } as Record<string, ThresholdSet>,
};

export const workThresholds = {
  default: { ok: 8 * 60, labels: { ok: "8h" } } satisfies ThresholdSet,

  // par activité précise (clé = label avant le séparateur)
  // activities: {
  //   // Sleep : min 5h, ok 7h30, max 9h
  //   sleep: {
  //     min: 5 * 60,
  //     ok: 7 * 60 + 30,
  //     max: 9 * 60,
  //     labels: { min: "min 5h", ok: "ok 7h30", max: "max 9h" },
  //   },
  //   // ajoute ici d'autres activités si besoin...
  // } as Record<string, ThresholdSet>,

  // par thème
  themes: {
    // productif : min 5h, ok 7h (pas de max demandé)
    productive: {
      min: 5 * 60,
      ok: 7 * 60,
      labels: { min: "min 5h", ok: "ok 7h" },
    },
    // passif : min 15 min (vert), ok 1h (vert), max 2h (rouge)
    passive: {
      max: 30,
      ok: 15,
      // min: 15,
      // min: "min 15min",
      labels: { ok: "ok 15min", max: "max 30min" },
    },
    // blocks : min 30 min, max 2h
    blocks: {
      ok: 30,
      max: 60,
      labels: { ok: "min 30min", max: "max 1h" },
    },
    // ressource : max 14h
    ressource: {
      min: 15,
      max: 120,
      ok: 30,
      labels: { max: "max 2h", ok: "cool 30min", min: "min 15min" },
    },
  } as Record<string, ThresholdSet>,
};
