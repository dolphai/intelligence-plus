"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function StakeholderSection() {
  const stakeholders = [
    {
      name: "Dr. Sarah Johnson",
      role: "Education Board Director",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "IntelligentPlus has revolutionized how we approach STEM education in our district. The results speak for themselves.",
    },
    {
      name: "Michael Chen",
      role: "School Principal",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "The curriculum and challenges have engaged our students like never before. We've seen remarkable improvement in test scores.",
    },
    {
      name: "Lisa Rodriguez",
      role: "Education Policy Advisor",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "This program represents the future of education - adaptive, engaging, and results-driven.",
    },
  ];

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
            Stakeholder Applaud
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Hear from education leaders who have implemented our programs
          </p>
        </motion.div>

        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent>
            {stakeholders.map((stakeholder, index) => (
              <CarouselItem key={index} className="p-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="max-w-4xl mx-auto bg-violet-50 rounded-xl p-8 md:p-12"
                >
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-shrink-0">
                      <Avatar className="h-24 w-24 border-4 border-white shadow-lg">
                        <AvatarImage
                          src={stakeholder.image}
                          alt={stakeholder.name}
                        />
                        <AvatarFallback>
                          {stakeholder.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <blockquote className="text-xl italic text-gray-700 mb-4">
                        "{stakeholder.quote}"
                      </blockquote>
                      <div>
                        <p className="font-bold text-lg">{stakeholder.name}</p>
                        <p className="text-gray-500">{stakeholder.role}</p>
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
      </div>
    </section>
  );
}
