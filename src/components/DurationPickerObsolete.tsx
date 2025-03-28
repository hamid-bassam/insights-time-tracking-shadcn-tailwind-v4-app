"use client";

import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

export default function DurationPickerObsolete({
  value,
  onChange,
}: {
  value: { hours: number; minutes: number };
  onChange: (newValue: { hours: number; minutes: number }) => void;
}) {
  const [hours, setHours] = useState(value.hours);
  const [minutes, setMinutes] = useState(value.minutes);

  useEffect(() => {
    setHours(value.hours);
    setMinutes(value.minutes);
  }, [value]);

  const updateTime = (newHours: number, newMinutes: number) => {
    if (newHours < 0) newHours = 0;
    if (newHours > 23) newHours = 23;
    if (newMinutes < 0) newMinutes = 0;
    if (newMinutes > 59) newMinutes = 59;

    setHours(newHours);
    setMinutes(newMinutes);
    onChange({ hours: newHours, minutes: newMinutes });
  };

  return (
    <div className="flex items-center space-x-2">
      <Input
        type="number"
        min="0"
        max="23"
        value={hours}
        onChange={(e) => updateTime(parseInt(e.target.value) || 0, minutes)}
        className="w-16 text-center"
      />
      <span className="text-sm">h</span>
      <Input
        type="number"
        min="0"
        max="59"
        value={minutes}
        onChange={(e) => updateTime(hours, parseInt(e.target.value) || 0)}
        className="w-16 text-center"
      />
      <span className="text-sm">m</span>
    </div>
  );
}
