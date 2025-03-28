'use client'
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex flex-col items-center text-white px-6">
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

      {/* Header Section */}
      <div className="relative z-10 text-center max-w-3xl mt-20">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          Work Smarter, Not Harder
        </h1>
        <p className="mt-6 text-lg md:text-2xl text-gray-300">
          AI-driven time tracking that maximizes your productivity and minimizes wasted effort.
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <Button className="px-6 py-3 text-lg font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500">
            Start Now
          </Button>
          <Button className="px-6 py-3 text-lg font-semibold border border-gray-500 hover:bg-gray-800">
            Learn More
          </Button>
        </div>
      </div>

      {/* About Section */}
      <div className="relative z-10 max-w-4xl mt-24 text-center">
        <h2 className="text-4xl font-bold">About Us</h2>
        <p className="mt-4 text-lg text-gray-300">
          We are a team of innovators passionate about optimizing workflows and helping businesses achieve peak efficiency. Our time-tracking solution is designed for high-performance individuals and teams.
        </p>
      </div>

      {/* Features Section */}
      <div className="relative z-10 max-w-5xl mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold">AI-Powered Tracking</h3>
          <p className="text-gray-400 mt-2">Smart automation that seamlessly integrates into your workflow.</p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold">Real-Time Insights</h3>
          <p className="text-gray-400 mt-2">Make data-driven decisions with real-time analytics.</p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold">Seamless Integrations</h3>
          <p className="text-gray-400 mt-2">Connect with your favorite productivity tools effortlessly.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative z-10 mt-24 text-center">
        <h2 className="text-4xl font-bold">Ready to Take Control of Your Time?</h2>
        <p className="mt-4 text-lg text-gray-300">Join thousands of professionals optimizing their workflow with us.</p>
        <div className="mt-6">
          <Button className="px-8 py-4 text-xl font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500">
            Get Started Now
          </Button>
        </div>
      </div>
    </div>
  );
}
