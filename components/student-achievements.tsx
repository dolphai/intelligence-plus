"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Link from "next/link";

export default function StudentAchievements() {
  const achievements = [
    {
      title: "Most students struggle with showcasing their Stand Out Factor",
      subtitle: "IntelligentPlus makes this Easy",
      studentName: "Aisha Johnson",
      studentAge: "16 years old",
      achievement:
        "Developed an AI-powered app that won the National Science Fair",
      amount: "$25,000 scholarship",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      title: "Turning passion into recognition",
      subtitle: "Our platform provides the tools",
      studentName: "Michael Chen",
      studentAge: "15 years old",
      achievement:
        "Created a community recycling program recognized by the EPA",
      amount: "Featured in National Geographic",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      title: "Breaking barriers in STEM",
      subtitle: "With the right guidance",
      studentName: "Sofia Rodriguez",
      studentAge: "17 years old",
      achievement:
        "Published research on renewable energy in a peer-reviewed journal",
      amount: "Accepted to MIT",
      image: "/placeholder.svg?height=400&width=300",
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
            Student Achievements
          </h2>
          <p className="max-w-[700px] text-gray-900 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Success stories from students in our programs
          </p>
        </motion.div>

        <Carousel className="max-w-5xl mx-auto">
          <CarouselContent>
            {achievements.map((achievement, index) => (
              <CarouselItem key={index} className="p-4">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative shadow-lg rounded-3xl"
                >
                  <div className="bg-white rounded-3xl p-6 md:p-0 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                      <div className="md:col-span-7 p-6 md:p-10 flex flex-col justify-center">
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-2">
                              {achievement.title}
                            </h3>
                            <div className="w-24 h-1 bg-orange-400 rounded-full mb-4"></div>
                            <p className="text-xl font-medium">
                              {achievement.subtitle}
                            </p>
                          </div>
                          <motion.div
                            className="bg-white shadow-lg rounded-2xl p-6 relative z-10"
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                          >
                            <div className="space-y-2">
                              <p className="font-bold text-lg">
                                {achievement.studentName}
                              </p>
                              <p>
                                {achievement.studentAge}{" "}
                                {achievement.studentName.split(" ")[0]}{" "}
                                {achievement.achievement}
                              </p>
                              <p className="text-orange-500 font-bold">
                                {achievement.amount}
                              </p>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                      <div className="md:col-span-5 relative">
                        <div className="h-full">
                          <img
                            src={achievement.image || "/placeholder.svg"}
                            alt={achievement.studentName}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
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
              Join Our Program
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
