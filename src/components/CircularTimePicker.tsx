/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

const RADIUS = 90; // Rayon du cercle
const CIRCLE_SIZE = RADIUS * 2; // Diamètre
const FULL_ROTATION = 360; // Rotation complète
const STEPS = 16; // 12 heures * 4 (incréments de 15 min)

export default function CircularTimePicker({
  value,
  onChange,
}: {
  value: { hours: number; minutes: number };
  onChange: (newValue: { hours: number; minutes: number }) => void;
}) {
  const [open, setOpen] = useState(false);
  const rotation = useMotionValue(0);

  const angleToTime = (angle: number) => {
    const adjustedAngle = (angle + FULL_ROTATION) % FULL_ROTATION;
    const step = Math.round((adjustedAngle / FULL_ROTATION) * STEPS);
    const newHours = Math.floor(step / 4);
    const newMinutes = (step % 4) * 15;
    return { hours: newHours, minutes: newMinutes };
  };

  const handleDrag = (event: any, info: any) => {
    const { offsetX, offsetY } = info.point;
    const angle = Math.atan2(offsetY - RADIUS, offsetX - RADIUS) * (180 / Math.PI);
    const newAngle = (angle + 360) % 360;
    rotation.set(newAngle);
    onChange(angleToTime(newAngle));
  };

  const progressPercentage = ((value.hours * 60 + value.minutes) / 1440) * 100;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-full px-4 py-2 flex justify-between items-center">
          <span className="text-lg font-semibold">
            {String(value.hours).padStart(2, "0")}h {String(value.minutes).padStart(2, "0")}m
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] flex flex-col items-center">
        <div className="relative w-[200px] h-[200px] flex items-center justify-center">
          {/* Circular Progress */}
          <svg width={CIRCLE_SIZE} height={CIRCLE_SIZE} viewBox="0 0 200 200" className="absolute">
            <circle
              cx="100"
              cy="100"
              r="80"
              stroke="gray"
              strokeWidth="10"
              fill="transparent"
              strokeDasharray="502"
              strokeDashoffset={(1 - progressPercentage / 100) * 502}
              strokeLinecap="round"
              className="transition-all duration-300 ease-out"
            />
          </svg>

          {/* Draggable Knob */}
          <motion.div
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.1}
            onDrag={handleDrag}
            style={{
              x: useTransform(rotation, (r) => Math.cos((r * Math.PI) / 180) * RADIUS),
              y: useTransform(rotation, (r) => Math.sin((r * Math.PI) / 180) * RADIUS),
            }}
            className="w-6 h-6 bg-blue-500 rounded-full absolute shadow-md cursor-pointer"
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}
