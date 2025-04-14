"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

type Achievement = {
  achievement: string;
  name: string;
  src: string;
};
export const AnimatedAchievements = ({
  achievements,
  autoplay = false,
}: {
  achievements: Achievement[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % achievements.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + achievements.length) % achievements.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <div className="mx-auto px-4 py-12 md:px-8 lg:px-12">
      <motion.div
        className="flex flex-col items-center text-center space-y-4 mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl ">
          Student Ideas, Innovations and Success Journeys
        </h2>
        <p className="max-w-[700px] text-gray-900 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Real Stories, Real Impact
        </p>
      </motion.div>
      <div className="relative container flex items-center flex-col md:flex-row w-full gap-20 flex-col-reverse">
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-3xl font-bold text-black dark:text-white">
              {achievements[active].name}
            </h3>
            <motion.p className="mt-8 text-lg text-gray-500 dark:text-neutral-300">
              {achievements[active].achievement
                .split(" ")
                .map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0.02 * index,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <ArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <ArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
            </button>
          </div>
        </div>

        <div className="md:w-3/5 w-full min-h-[400px] shrink-0">
          <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] w-full">
            <AnimatePresence>
              {achievements.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    x: 100,
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0,
                    x: isActive(index) ? 0 : -100,
                  }}
                  exit={{
                    opacity: 0,
                    x: -100,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 object-contain"
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    fill
                    draggable={false}
                    className="h-full w-full"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
