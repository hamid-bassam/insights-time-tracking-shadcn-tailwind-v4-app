"use client";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function DurationPickerObs({
  value,
  onChange,
}: {
  value: { hours: number; minutes: number };
  onChange: (newValue: { hours: number; minutes: number }) => void;
}) {
  const [hours, setHours] = useState(value.hours);
  const [minutes, setMinutes] = useState(value.minutes);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setHours(value.hours);
    setMinutes(value.minutes);
  }, [value]);

  const updateTime = (newHours: number, newMinutes: number) => {
    newHours = Math.min(Math.max(newHours, 0), 23);
    newMinutes = Math.min(Math.max(newMinutes, 0), 59);

    setHours(newHours);
    setMinutes(newMinutes);
    onChange({ hours: newHours, minutes: newMinutes });
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-full px-4 py-2 flex justify-between items-center">
          <span className="text-lg font-semibold">
            {String(hours).padStart(2, "0")}h {String(minutes).padStart(2, "0")}m
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-4 bg-white rounded-xl shadow-lg">
        <div className="flex justify-center space-x-6">
          <motion.div
            className="flex flex-col items-center"
            whileTap={{ scale: 0.9 }}
          >
            <Button
              onClick={() => updateTime(hours + 1, minutes)}
              className="w-10 h-10 text-lg"
            >
              ▲
            </Button>
            <span className="text-2xl font-bold">{hours}</span>
            <Button
              onClick={() => updateTime(hours - 1, minutes)}
              className="w-10 h-10 text-lg"
            >
              ▼
            </Button>
          </motion.div>

          <motion.div
            className="flex flex-col items-center"
            whileTap={{ scale: 0.9 }}
          >
            <Button
              onClick={() => updateTime(hours, minutes + 5)}
              className="w-10 h-10 text-lg"
            >
              ▲
            </Button>
            <span className="text-2xl font-bold">{minutes}</span>
            <Button
              onClick={() => updateTime(hours, minutes - 5)}
              className="w-10 h-10 text-lg"
            >
              ▼
            </Button>
          </motion.div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
