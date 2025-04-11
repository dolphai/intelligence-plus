"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
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
      text: "13 Year old Amogh Holla Recycling fabrics",
      studentName: "Amogh Holla ",
      image: "/placeholder.svg",
    },

    {
      text: "13 Year old Amogh Holla Recycling fabrics",
      studentName: "Amogh Holla ",
      image: "/placeholder.svg",
    },
    {
      text: "13 Year old Amogh Holla Recycling fabrics",
      studentName: "Amogh Holla ",
      image: "/placeholder.svg",
    },
    {
      text: "13 Year old Amogh Holla Recycling fabrics",
      studentName: "Amogh Holla ",
      image: "/placeholder.svg",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="flex flex-col items-center text-center space-y-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
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
              <CarouselItem key={index} className="p-4 w-full sm:basis-2/3">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative shadow-lg rounded-3xl flex items-center flex-col md:flex-row justify-between basis-1/2"
                >
                  <div className="md:col-span-7 p-6 md:p-10 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">
                      {achievement.studentName}
                    </h3>
                    <div className="w-24 h-1 bg-orange-400 rounded-full mb-4"></div>
                    <p className="font-bold text-lg">{achievement.text}</p>
                  </div>
                  <div className="md:col-span-5 p-4 relative w-full h-full min-h-[200px]">
                    <img
                      src={achievement.image}
                      alt={achievement.text}
                      className="rounded-3xl"
                    />
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

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h3 className="text-3xl md:text-5xl font-bold mb-6">
            How you can stand out
          </h3>
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white"
          >
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSfBSD35zx1tlJ9H-FCfv2N1VsaEaKuMi8FfOH7cAmQSiGRV0w/viewform"
              target="_blank"
            >
              Join the Innovation Movement - No Cost
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
