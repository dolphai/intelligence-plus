"use client";

import { motion } from "framer-motion";

export default function VideoSection() {
  return (
    <section className="w-full py-12 bg-white">
      <div className="container flex flex-col md:flex-row items-center px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center text-center space-y-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Our Vision
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            See how Intelligence Plus is transforming education through
            innovative courses and challenges
          </p>
        </motion.div>

        <motion.div
          className="relative w-[315px] h-[560px] sm:shrink-0 mx-auto max-w-7xl overflow-hidden rounded-2xl shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="relative bg-gray-100 size-full overflow-hidden">
            <iframe
              width="315"
              height="560"
              className="h-full w-full"
              src="https://www.youtube.com/embed/sxFUq2A4w4w"
              title="YouTube video player"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
