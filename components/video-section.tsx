"use client";

import { motion } from "framer-motion";

export default function VideoSection() {
  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center text-center space-y-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Vision
          </h2>
          <p className="max-w-7xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Innoventure World Foundation is focussed on empowering 10 million
            students across 10,000 schools with the Innovation skills to drive
            India into a sustainable and equitable future.
          </p>
        </motion.div>

        <motion.div
          className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="relative aspect-video bg-gray-100 overflow-hidden">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/jJOaN8oX5rs"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
