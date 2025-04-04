"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Brain } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-violet-50 to-indigo-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block rounded-lg bg-violet-100 px-3 py-1 text-sm text-violet-900 mb-4">
              Nationwide Educational Challenges
            </div>
            <motion.h1
              className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Empowering the Next Generation of{" "}
              <span className="text-violet-600">Innovators</span>
            </motion.h1>
            <motion.p
              className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              IntelligentPlus provides cutting-edge educational courses and
              challenges that prepare students for the future while helping
              schools excel in STEM education.
            </motion.p>
            <motion.div
              className="flex flex-col gap-2 min-[400px]:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Button size="lg" className="bg-violet-600 hover:bg-violet-700">
                Onboard your School
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-violet-400 to-indigo-600 p-8 flex items-center justify-center">
              <Brain className="w-32 h-32 text-white opacity-20 absolute" />
              <div className="relative z-10 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Intelligent Learning Platform
                </h3>
                <p className="text-white/80 mb-6">
                  Adaptive courses that evolve with student progress
                </p>
                <Button variant="secondary" size="sm">
                  Learn How It Works
                </Button>
              </div>

              {/* Animated background elements */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full bg-white/10"
                    style={{
                      width: Math.random() * 100 + 50,
                      height: Math.random() * 100 + 50,
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, Math.random() * -100 - 50],
                      opacity: [0, 0.5, 0],
                    }}
                    transition={{
                      duration: Math.random() * 5 + 10,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
