"use client";

import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export default function StudentAchievements() {
  const achievements = [
    {
      name: "Satyaj Hedaoo",
      achivement:
        "7th Grader Satyaj Hedaoo  featured on CNBC TV18 as West India Winner for PlastoBrickMaker",
      link: "/students/Satyaj-Hedaoo.png",
    },
    {
      name: "Amogh Holla",
      achivement:
        "8th Grader,  Amogh Holla created Fab-Re App solving Recycling of fabrics",
      link: "/students/Amogh-Holla.png",
    },
    {
      name: "Suditi Basu",
      achivement:
        "6th grader Suditi Basu helps Teenagers achieve economic empowerment through T.E.E.N",
      link: "/students/Suditi-Basu.png",
    },
    {
      name: "Priyashi Sharma",
      achivement:
        "9th Grader Priyashi Sharma conceptualizes “Sense Sync” - A cookware for the visually impaired.",
      link: "/students/Priyashi-Sharma.png",
    },
    {
      name: "Aashritha Sanjay",
      achivement:
        "9th Grader Aashritha Sanjay from the Padma Seshadri Bala Bhavan Chennai,category innovates with InnoVision - Making retail accessible to the visually impaired. (2024)",
      link: "/students/Aashritha-Sanjay.png",
    },
    {
      name: "Rohan Patra",
      achivement:
        "8th Grader Rohan Patra from The HDFC School, Pune innovates through Medi Bridge - Medicine tracking assistant. (2024)",
      link: "/students/Rohan-Patra.png",
    },
    {
      name: "Kabir Ganesh",
      achivement:
        "5th Grader Kabir Ganesh from Indus International school, Pune innovates for solving congested washrooms in Trains",
      link: "/students/Kabir-Ganesh.png",
    },
  ];

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
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative shadow-lg rounded-3xl flex items-center flex-col md:flex-col justify-between basis-1/2"
                >
                  <div className="md:col-span-5 p-4 relative w-full h-full">
                    <img
                      src={achievement.link}
                      alt={achievement.name}
                      className="rounded-3xl w-full aspect-video"
                    />
                    <div className="md:col-span-7 p-6 md:p-10 flex flex-col justify-center">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">
                        {achievement.achivement}
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
