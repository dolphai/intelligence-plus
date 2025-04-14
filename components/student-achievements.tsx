"use client";

import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { AnimatedAchievements } from "./ui/animated-achievements";
import { Button } from "./ui/button";
import Link from "next/link";
import { useEffect, useRef } from "react";
const achievements = [
  {
    name: "Satyaj Hedaoo",
    achievement:
      "7th Grader featured on CNBC TV18 as West India Winner for PlastoBrickMaker",
    src: "/students/Satyaj-Hedaoo.png",
  },
  {
    name: "Amogh Holla",
    achievement: "8th Grader, created Fab-Re App solving Recycling of fabrics",
    src: "/students/Amogh-Holla.png",
  },
  {
    name: "Suditi Basu",
    achievement:
      "6th grader helps Teenagers achieve economic empowerment through T.E.E.N",
    src: "/students/Suditi-Basu.png",
  },
  {
    name: "Priyashi Sharma",
    achievement:
      "9th Grader conceptualizes “Sense Sync” - A cookware for the visually impaired. ",
    src: "/students/Priyashi-Sharma.png",
  },
  {
    name: "Aashritha Sanjay",
    achievement:
      "9th Grader creates InnoVision - Making retail accessible to the visually impaired.",
    src: "/students/Aashritha-Sanjay.png",
  },
  {
    name: "Rohan Patra",
    achievement:
      "8th Grader innovates through Medi Bridge - Medicine tracking assistant. (2024)",
    src: "/students/Rohan-Patra.png",
  },
  {
    name: "Kabir Ganesh",
    achievement:
      "6th Grader, launches social initiative  HUM-DO for well being of street dogs",
    src: "/students/Kabir-Ganesh.png",
  },
];

export default function StudentAchievements() {
  const nextRef = useRef(null);
  useEffect(() => {
    const timeout = setInterval(() => {
      if (nextRef.current) {
        nextRef.current.click();
      }
    }, 5000);
    return clearInterval(timeout);
  }, []);
  return (
    <section className="w-full py-12 relative overflow-hidden flex items-center flex-col md:flex-row">
      <motion.div
        className="flex flex-col items-center text-center space-y-4 mb-4 w-full md:w-2/5 shrink-0"
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
        <Button className="bg-orange-600 hover:bg-violet-700">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSfBSD35zx1tlJ9H-FCfv2N1VsaEaKuMi8FfOH7cAmQSiGRV0w/viewform"
            target="_blank"
          >
            Bring Innovation to your School
          </Link>
        </Button>
      </motion.div>
      <div className="container px-4 md:px-6 relative z-10 w-full md:w-1/2">
        <Carousel
          className="max-w-5xl mx-auto"
          opts={{
            loop: true,
          }}
        >
          <CarouselContent className="px-2 py-5">
            {achievements.map((achievement, index) => (
              <CarouselItem key={index} className="px-4 w-full">
                <motion.div
                  key={`yt-${achievement.name}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative shadow-lg rounded-3xl flex items-center flex-col md:flex-col justify-between basis-1/2"
                >
                  <div className="md:col-span-5 p-4 relative w-full h-full">
                    <img
                      src={achievement.src}
                      alt={achievement.name}
                      className="rounded-3xl w-full aspect-video"
                    />
                    <div className="md:col-span-7 p-6 md:p-10 flex flex-col justify-center">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">
                        {achievement.name}
                      </h3>
                      <div className="w-24 h-1 bg-orange-400 rounded-full mb-4"></div>
                      <h3 className="text-xl md:text-3xl mb-2">
                        {achievement.achievement}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex w-full items-center justify-center gap-5 mt-10">
            <CarouselPrevious className="static lg:absolute" />
            <CarouselNext ref={nextRef} className="static lg:absolute" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
