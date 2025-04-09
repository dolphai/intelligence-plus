"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.academicinfluence.com/res/w_800,h_450,c_pad,f_auto,q_auto/v1706889139400/tips-for-balancing-work-and-college')`, // Replace with actual image path
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl text-left space-y-6">
            <motion.div
              className="inline-block rounded-lg bg-white/10 px-3 py-1 text-sm text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Nationwide Educational Challenges
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Empowering the Next Generation of{" "}
              <span className="text-violet-400">Innovators</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-white/80 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              IntelligentPlus provides cutting-edge educational courses and
              challenges that prepare students for the future while helping
              schools excel in STEM education.
            </motion.p>

            <motion.div
              className="flex flex-col gap-2 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Button size="lg" className="bg-violet-600 hover:bg-violet-700">
                Onboard Your School — No Cost
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
