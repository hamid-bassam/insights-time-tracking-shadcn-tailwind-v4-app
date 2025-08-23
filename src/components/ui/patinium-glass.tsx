"use client";
import { motion } from "framer-motion";

export const PlatiniumGlass = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    className="
    relative overflow-hidden rounded-2xl p-6
    border border-white/10
    bg-[linear-gradient(180deg,#0a0d12,#07090d)]
    shadow-[0_12px_40px_-12px_rgba(0,0,0,0.65)]
    before:content-[''] before:absolute before:inset-0
    before:bg-[radial-gradient(100%_70%_at_50%_-20%,rgba(226,232,240,0.06),transparent_60%)]
    after:content-[''] after:absolute after:inset-0 after:rounded-2xl
    after:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]
  "
  >

    {children}
  </motion.div>
);
