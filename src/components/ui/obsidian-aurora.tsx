"use client";
import { motion } from "framer-motion";

export const ObsidianAurora = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    className="
    relative overflow-hidden rounded-2xl p-6
    border border-white/10
    bg-[linear-gradient(180deg,#0b0f19,#070a12)]
    shadow-[0_12px_40px_-12px_rgba(0,0,0,0.65)]
    before:content-[''] before:absolute before:inset-0
    before:bg-[radial-gradient(120%_80%_at_25%_-10%,rgba(120,202,255,0.10),transparent_60%),radial-gradient(120%_80%_at_75%_-10%,rgba(197,181,255,0.12),transparent_60%)]
    after:content-[''] after:absolute after:inset-0 after:rounded-2xl
    after:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]
  "
  >
    {children}
  </motion.div>
);
