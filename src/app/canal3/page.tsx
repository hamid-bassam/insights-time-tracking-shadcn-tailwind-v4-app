/* eslint-disable react/no-unescaped-entities */
'use client'
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden text-white">
      {/* Navigation Bar */}
      <header className="absolute top-0 w-full px-6 py-4 flex items-center justify-between z-20 bg-black/40 backdrop-blur-md shadow-md">
        <div className="text-xl font-bold tracking-wider uppercase">TimeFlow</div>
        <nav className="space-x-6 text-sm hidden md:flex">
          <a href="#features" className="hover:text-gray-300 transition">Features</a>
          <a href="#testimonials" className="hover:text-gray-300 transition">Testimonials</a>
          <a href="#faq" className="hover:text-gray-300 transition">FAQ</a>
          <a href="#about" className="hover:text-gray-300 transition">About Us</a>
        </nav>
        <Button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 px-4 py-2 text-sm font-semibold shadow-lg">
          Get Started
        </Button>
      </header>

      {/* Aurora-like Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />

      {/* Decorative Grain / Texture Layer */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(255,255,255,0.02),_transparent)]" />

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

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center max-w-3xl mx-auto">
        <h1 className="text-transparent text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 drop-shadow-lg">
          Unlock Your Full Potential
        </h1>
        <p className="mt-6 text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto">
          The AI-powered time tracker built to boost productivity and efficiency for modern teams.
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <Button className="px-6 py-3 text-lg font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 shadow-xl transition-transform transform hover:-translate-y-1">
            Get Started Now
          </Button>
          <Button className="px-6 py-3 text-lg font-semibold border border-gray-500 bg-gray-800/40 backdrop-blur-md hover:bg-gray-800/70 shadow-xl transition-transform transform hover:-translate-y-1">
            Learn More
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 max-w-5xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
            Why TimeFlow?
          </h2>
          <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12">
            We combine AI, deep analytics, and seamless integrations to give you real-time insights,
            helping you stay on top of what truly matters.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-gray-800/70 rounded-3xl shadow-xl backdrop-blur-md">
              <h3 className="text-2xl font-semibold">AI-Driven Automation</h3>
              <p className="text-gray-400 mt-2">
                Our AI algorithms learn from your routine to automate time tracking, so you can focus on real work.
              </p>
            </div>
            <div className="p-6 bg-gray-800/70 rounded-3xl shadow-xl backdrop-blur-md">
              <h3 className="text-2xl font-semibold">Deep Analytics</h3>
              <p className="text-gray-400 mt-2">
                Track every second with powerful insights on your most and least productive hours.
              </p>
            </div>
            <div className="p-6 bg-gray-800/70 rounded-3xl shadow-xl backdrop-blur-md">
              <h3 className="text-2xl font-semibold">Seamless Integrations</h3>
              <p className="text-gray-400 mt-2">
                Connect to your favorite tools: Slack, Trello, Asana, and more, for a truly unified workflow.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Comparison / Unique Value Prop */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            How We Stand Out
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/70 p-6 rounded-3xl shadow-xl backdrop-blur-md">
              <h3 className="text-2xl font-semibold mb-4">Unlike Traditional Tools</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Manual timesheets are prone to error.</li>
                <li>Basic timers lack in-depth insights.</li>
                <li>Limited real-time collaboration features.</li>
              </ul>
            </div>
            <div className="bg-gray-800/70 p-6 rounded-3xl shadow-xl backdrop-blur-md">
              <h3 className="text-2xl font-semibold mb-4">With TimeFlow</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>AI automates the grunt work for you.</li>
                <li>Robust analytics fuel faster decision-making.</li>
                <li>Collaboration is built in for entire teams.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* About Section / Our Mission */}
      <section id="about" className="relative z-10 max-w-4xl mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
            Who We Are
          </h2>
          <p className="mt-4 text-lg text-gray-300 mb-8">
            Founded by a group of productivity enthusiasts, TimeFlow is on a mission to help ambitious
            teams and individuals streamline their workflows. We believe in innovation, transparency, and
            empowering you to reach new heights.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/70 p-6 rounded-3xl shadow-xl backdrop-blur-md">
              <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
              <p className="text-gray-400">
                A world where time tracking is effortless and seamlessly integrated into your daily life,
                freeing you to focus on what truly matters.
              </p>
            </div>
            <div className="bg-gray-800/70 p-6 rounded-3xl shadow-xl backdrop-blur-md">
              <h3 className="text-xl font-semibold mb-3">Our Promise</h3>
              <p className="text-gray-400">
                We continuously innovate and refine our platform to deliver the best possible
                productivity experience for every user.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative z-10 max-w-4xl mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
            What Our Users Say
          </h2>
          <p className="mt-4 text-lg text-gray-300 mb-12">
            Join thousands of satisfied professionals who trust TimeFlow every day.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/70 p-6 rounded-3xl shadow-xl backdrop-blur-md">
              <p className="text-gray-300 italic">
                "TimeFlow revolutionized the way our team collaborates. We've cut out wasted hours and soared in productivity!"
              </p>
              <p className="mt-4 text-sm text-blue-400 font-semibold">- Sarah K, Project Manager</p>
            </div>
            <div className="bg-gray-800/70 p-6 rounded-3xl shadow-xl backdrop-blur-md">
              <p className="text-gray-300 italic">
                "As a freelancer, TimeFlow helps me bill clients accurately and focus on high-value tasks. Game changer!"
              </p>
              <p className="mt-4 text-sm text-blue-400 font-semibold">- David M, Web Developer</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative z-10 max-w-4xl mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
            Got Questions?
          </h2>
          <p className="mt-4 text-lg text-gray-300 mb-12">
            Find answers to our most frequently asked questions, or contact our support team.
          </p>
          <div className="space-y-6 text-left">
            <div className="bg-gray-800/70 p-4 rounded-3xl shadow-md backdrop-blur-md">
              <h3 className="text-xl font-semibold">Is there a free trial?</h3>
              <p className="text-gray-400 mt-2">
                Yes, we offer a 14-day free trial with all premium features unlocked.
              </p>
            </div>
            <div className="bg-gray-800/70 p-4 rounded-3xl shadow-md backdrop-blur-md">
              <h3 className="text-xl font-semibold">How secure is my data?</h3>
              <p className="text-gray-400 mt-2">
                We use end-to-end encryption and follow industry best practices to ensure your data is safe.
              </p>
            </div>
            <div className="bg-gray-800/70 p-4 rounded-3xl shadow-md backdrop-blur-md">
              <h3 className="text-xl font-semibold">Do you integrate with other tools?</h3>
              <p className="text-gray-400 mt-2">
                Absolutely! We have native integrations with Slack, Trello, Asana, Jira, GitHub, and more.
              </p>
            </div>
            <div className="bg-gray-800/70 p-4 rounded-3xl shadow-md backdrop-blur-md">
              <h3 className="text-xl font-semibold">Can I cancel any time?</h3>
              <p className="text-gray-400 mt-2">
                Yes, you can cancel or change your plan at any time, no questions asked.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
            Choose Your Plan
          </h2>
          <p className="mt-4 text-lg text-gray-300 mb-12">
            Flexible pricing for individuals and teams of all sizes.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/70 p-6 rounded-3xl shadow-xl backdrop-blur-md">
              <h3 className="text-2xl font-semibold mb-3">Starter</h3>
              <p className="text-4xl font-extrabold">$9</p>
              <p className="text-sm text-gray-400">per month</p>
              <ul className="list-disc list-inside text-left text-gray-400 mt-4 space-y-1">
                <li>Basic time tracking</li>
                <li>Limited AI automation</li>
                <li>Email support</li>
              </ul>
              <Button className="mt-6 w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500">
                Get Starter
              </Button>
            </div>
            <div className="bg-gray-800/70 p-6 rounded-3xl shadow-xl backdrop-blur-md">
              <h3 className="text-2xl font-semibold mb-3">Pro</h3>
              <p className="text-4xl font-extrabold">$19</p>
              <p className="text-sm text-gray-400">per month</p>
              <ul className="list-disc list-inside text-left text-gray-400 mt-4 space-y-1">
                <li>Full AI automation</li>
                <li>Team collaboration features</li>
                <li>Priority support</li>
              </ul>
              <Button className="mt-6 w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500">
                Get Pro
              </Button>
            </div>
            <div className="bg-gray-800/70 p-6 rounded-3xl shadow-xl backdrop-blur-md">
              <h3 className="text-2xl font-semibold mb-3">Enterprise</h3>
              <p className="text-4xl font-extrabold">Custom</p>
              <p className="text-sm text-gray-400">Contact us</p>
              <ul className="list-disc list-inside text-left text-gray-400 mt-4 space-y-1">
                <li>Advanced security</li>
                <li>Custom integrations</li>
                <li>Dedicated support</li>
              </ul>
              <Button className="mt-6 w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500">
                Contact Us
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Final Call to Action */}
      <section className="relative z-10 mt-16 mb-24 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
            Take Control of Your Time Today
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Experience a new level of productivity with our AI-driven time tracking solution. Start your
            14-day free trial and join our growing community.
          </p>
          <div className="mt-6">
            <Button className="px-8 py-4 text-xl font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 shadow-lg transition-transform transform hover:-translate-y-1">
              Start Your Free Trial
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
