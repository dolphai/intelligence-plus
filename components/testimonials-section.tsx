"use client";

import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Padma Shree Dr. S.B. Mujumdar",
      school: "Symbiosis International University",
      desg: "Founder & President",
      link: "/placeholder.svg",
      quote:
        "While schools prepare children for academic course work, it is equally important that children be equipped with Future Ready Skills. Innoventure helps children develop creativity  & think innovatively & discover things outside the school that are valuable in the real world. Its a comendable vision and mission",
    },
    {
      name: "Padma Vibhushan Dr. Raghunath Mashelkar",
      school: "",
      link: "/placeholder.svg",
      quote:
        "Innoventure is a fantastic idea and platform. They are promoting very critical skills like Ideation, Innovation and Critical Thinking skills for children that lay a great foundation for young India. In their impressive decade long journey, they have already impacted thousands of children and  NEP 2020 has clearly says education  must move towards less content and more towards order thinking skills and innovation skills and that is exacty what IntelligencePlus and Innoventure is doing.",
    },
    {
      name: "Gurubans Chatwal",
      school: "Innovation & Intelligent Automation, Fiserv",
      desg: "Vice President",
      link: "/placeholder.svg",
      quote:
        "I am so awestruck that you have taken an abstract concept like innovation and translated it into a program and platform for children as young as 6yrs. I am so so delighted to see the ideas and detailing children have done. Stunning experience to see a platform that allows and nurtures the innovation spark in children that are otherwise not done. Absolutely amazing program.",
    },
    {
      name: "Sushil Borde",
      school: "Reliance Innovation Leadership Center",
      desg: "Head",
      link: "/placeholder.svg",
      quote:
        "The potential students have is massive and it is the need of times that children and school nurture Innovation  mindset and skillset. This is kind of learning young India needs to be competent and create solutions for real life. It's an amazing initiative and I have witnessed first-hand the impact it is creating in children's life. The projects and ideas emerging are top-notch and it reflects how student's are being empowered throught the platform to think and innovate like this",
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
            The Innovation Advantage: Why School Leaders choose the Innoventure
            Platform
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Trusted By Educators, Backed by Research and Results
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-6xl h-full">
          <Carousel className="w-full h-full" opts={{ loop: true }}>
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="w-full sm:basis-1/2 lg:basis-1/3 h-[700px]"
                >
                  <motion.div
                    className="min-h-[600px] mx-auto rounded-xl overflow-hidden shadow-lg flex flex-col"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <div className="relative aspect-video">
                      <Image
                        src={testimonial.link}
                        alt={testimonial.name}
                        fill
                      />
                    </div>

                    <div className="relative flex items-center justify-center p-4">
                      <blockquote className="text-md italic text-gray-700">
                        "{testimonial.quote}"
                      </blockquote>
                    </div>
                    <div className="p-4 mt-auto">
                      <h3 className="font-bold text-black dark:text-white">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.school}
                      </p>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex w-full items-center justify-center gap-5">
              <CarouselPrevious className="static lg:absolute" />
              <CarouselNext className="static lg:absolute" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
