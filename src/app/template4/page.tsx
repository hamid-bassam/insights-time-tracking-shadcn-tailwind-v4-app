'use client'
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center text-white px-6">
      {/* Aurora-like Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"></div>

      {/* Polygonal Layer */}
      <div
        className="absolute w-[140%] h-[140%] bg-gray-900 opacity-25 backdrop-blur-3xl"
        style={{ clipPath: "polygon(0% 10%, 100% 0%, 100% 90%, 0% 100%)" }}
      ></div>

      {/* Aurora-Inspired Flowing Light Effects */}
      <motion.div
        initial={{ opacity: 0.3, scale: 1.1 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
        className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-600/30 via-indigo-500/30 to-transparent blur-[140px] opacity-50"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0.3, scale: 1.2 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
        className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-600/30 via-pink-500/30 to-transparent blur-[140px] opacity-50"
      ></motion.div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          The Future of Time Tracking
        </h1>
        <p className="mt-6 text-lg md:text-2xl text-gray-300">
          Boost your productivity with our AI-driven time-tracking solution.
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <Button className="px-6 py-3 text-lg font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500">
            Get Started
          </Button>
          <Button className="px-6 py-3 text-lg font-semibold border border-gray-500 hover:bg-gray-800">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}
