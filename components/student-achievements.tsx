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
const achievements = [
  {
    name: "Satyaj Hedaoo",
    achievement:
      "7th Grader Satyaj Hedaoo  featured on CNBC TV18 as West India Winner for PlastoBrickMaker",
    src: "/students/Satyaj-Hedaoo.png",
  },
  {
    name: "Amogh Holla",
    achievement:
      "8th Grader,  Amogh Holla created Fab-Re App solving Recycling of fabrics",
    src: "/students/Amogh-Holla.png",
  },
  {
    name: "Suditi Basu",
    achievement:
      "6th grader Suditi Basu helps Teenagers achieve economic empowerment through T.E.E.N",
    src: "/students/Suditi-Basu.png",
  },
  {
    name: "Priyashi Sharma",
    achievement:
      "9th Grader Priyashi Sharma conceptualizes “Sense Sync” - A cookware for the visually impaired. ",
    src: "/students/Priyashi-Sharma.png",
  },
  {
    name: "Aashritha Sanjay",
    achievement:
      "9th Grader Aashritha Sanjay creates InnoVision - Making retail accessible to the visually impaired.",
    src: "/students/Aashritha-Sanjay.png",
  },
  {
    name: "Rohan Patra",
    achievement:
      "8th Grader Rohan Patra  innovates through Medi Bridge - Medicine tracking assistant. (2024)",
    src: "/students/Rohan-Patra.png",
  },
  {
    name: "Kabir Ganesh",
    achievement:
      "6th Grader, Kabir Ganesh launches social initiative  HUM-DO for well being of street dogs",
    src: "/students/Kabir-Ganesh.png",
  },
];

export default function StudentAchievements() {
  return (
    <section className="w-full py-12 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
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

        <Carousel
          className="max-w-5xl mx-auto"
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {achievements.map((achievement, index) => (
              <CarouselItem key={index} className="px-4 w-full sm:basis-2/3">
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
                        {achievement.achievement}
                      </h3>
                      <div className="w-24 h-1 bg-orange-400 rounded-full mb-4"></div>
                      <p className="font-bold text-lg">{achievement?.text}</p>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex w-full items-center justify-center gap-5 mt-10">
            <CarouselPrevious className="static lg:absolute" />
            <CarouselNext className="static lg:absolute" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export function AnimatedAchievementsDemo() {
  return <AnimatedAchievements achievements={achievements} autoplay={true} />;
}
