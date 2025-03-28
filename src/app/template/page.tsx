'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { LucideClock } from "lucide-react";
import { useState } from "react";

export default function TimeTrackingDashboard() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  const toggleTimer = () => {
    setRunning(!running);
    if (!running) {
      const startTime = Date.now() - time;
      const interval = setInterval(() => {
        setTime(Date.now() - startTime);
      }, 1000);
      return () => clearInterval(interval);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white p-6 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-opacity-20 bg-black" style={{ clipPath: "polygon(0% 0%, 100% 25%, 100% 100%, 0% 75%)" }}></div>

      <motion.div
        animate={{ rotate: running ? 360 : 0 }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        className="z-10 w-40 h-40 rounded-full border-4 border-gray-700 flex items-center justify-center shadow-lg"
      >
        <LucideClock size={60} className="text-gray-300" />
      </motion.div>
      <h1 className="z-10 text-5xl font-semibold mt-6 tracking-widest">{new Date(time).toISOString().substr(11, 8)}</h1>
      <Card className="z-10 mt-8 w-80 bg-gray-900 shadow-xl">
        <CardContent className="flex flex-col items-center p-6">
          <Button
            className="px-6 py-3 text-lg font-medium tracking-widest bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800"
            onClick={toggleTimer}
          >
            {running ? "Pause" : "Start"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
