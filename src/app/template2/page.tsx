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
      {/* Elegant & Premium Background */}
      <div className="absolute inset-0 bg-black flex items-center justify-center">
        <div className="absolute w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-90"></div>
        <div className="absolute w-[120%] h-[120%] bg-opacity-20 bg-gray-800 rotate-12" style={{ clipPath: "polygon(0% 15%, 100% 0%, 100% 85%, 0% 100%)" }}></div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute w-[140%] h-[140%] bg-gradient-to-t from-gray-950 to-gray-800 opacity-40 rotate-[-8deg]"
        ></motion.div>
      </div>

      <motion.div
        animate={{ rotate: running ? 360 : 0 }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        className="z-10 w-40 h-40 rounded-full border-4 border-gray-600 flex items-center justify-center shadow-xl bg-gray-900/50 backdrop-blur-lg"
      >
        <LucideClock size={60} className="text-gray-300" />
      </motion.div>
      <h1 className="z-10 text-6xl font-semibold mt-6 tracking-wide text-gray-200 drop-shadow-lg">{new Date(time).toISOString().substr(11, 8)}</h1>
      <Card className="z-10 mt-8 w-96 bg-gray-900/80 shadow-2xl backdrop-blur-lg border border-gray-700">
        <CardContent className="flex flex-col items-center p-8">
          <Button
            className="px-8 py-4 text-xl font-semibold tracking-widest bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 shadow-lg"
            onClick={toggleTimer}
          >
            {running ? "Pause" : "Start"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
