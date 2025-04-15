"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0  bg-no-repeat bg-[position:80%_top] bg-cover md:bg-cover h-screen w-full bg-[url('/bg.jpg')]" />

      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black via-black/70 to-transparent" />

      <div className="relative z-10 flex items-end md:items-center justify-center h-full pb-20  md:pb-0">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl text-left space-y-6">
            <motion.div
              className="w-full flex items-center justify-start gap-5 md:max-h-20 md:max-w-[250px] my-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <img
                src="/foundation-logo.png"
                className="h-full w-1/2 max-w-[150px]"
              />
            </motion.div>
            <motion.div
              className="inline-block rounded-lg bg-white/10 px-3 py-1 text-sm text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              India's Largest Innovation Initiative
            </motion.div>

            <motion.h1
              className="text-2xl md:text-4xl font-bold text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Nurturing the Next Generation of{" "}
              <span className="text-violet-300">Innovators</span> & Changemakers
              — Starting Today!
            </motion.h1>

            <motion.div className="text-white">
              <p className="inline-block rounded-lg bg-white/10 px-3 py-1 text-sm text-white">
                In Collaboration with
              </p>
              <div className="flex items-center gap-5">
                <img
                  src="/e-cell-logo.png"
                  className="h-full w-1/2 max-w-[150px]"
                />

                <img
                  src="/partner1.png"
                  className="h-full w-1/2 max-w-[150px]"
                />
              </div>
            </motion.div>
            <motion.div
              className="flex flex-col gap-2 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Button size="lg" className="bg-violet-600 hover:bg-violet-700">
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfBSD35zx1tlJ9H-FCfv2N1VsaEaKuMi8FfOH7cAmQSiGRV0w/viewform"
                  target="_blank"
                >
                  Onboard Your School for Free
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
