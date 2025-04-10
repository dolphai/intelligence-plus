"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

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
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            See how Intelligence Plus is transforming education through
            innovative courses and challenges
          </p>
        </motion.div>

        <motion.div
          className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="relative aspect-video bg-gray-100 overflow-hidden">
            {!isPlaying ? (
              <>
                <img
                  src="/placeholder.svg?height=720&width=1280"
                  alt="Intelligence Plus Vision"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <Button
                    onClick={() => setIsPlaying(true)}
                    size="icon"
                    className="h-16 w-16 rounded-full bg-violet-600 hover:bg-violet-700 text-white shadow-lg transition-transform hover:scale-110"
                  >
                    <Play className="h-8 w-8" />
                    <span className="sr-only">Play video</span>
                  </Button>
                </div>
              </>
            ) : (
              <div className="w-full h-full">
                <iframe
                  src="about:blank" // Replace with actual video embed URL
                  title="Intelligence Plus Vision Video"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
