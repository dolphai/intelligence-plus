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
      name: "Radha Baruah",
      school: "Principal Sanskriti the Gurukul, Assam",
      link: "https://www.youtube.com/embed/Y8xg18-FwYo",

      quote:
        "Children gain exposure to expertise, that is beyond what the school could provide. It’s so interesting to see the kind of solutions that the children are coming up for problems. That is what India needs and InnoVenture does just that",
    },
    {
      name: "Pallavi Naik",
      school: "Principal, Kalmandi Shamrao Hogh School",
      link: "https://www.youtube.com/embed/6CIf8t2VEUA",
      quote:
        "The learning that comes out of this experience is immense and we see that learning getting transferred into the Atal Tinkering projects that the children work on in the school.",
    },
    {
      name: "Promini Chopra",
      school: "Principal, Seth MR Jaipuria",
      link: "https://www.youtube.com/embed/RXUhIWhpoIg",
      quote:
        "We often ask if our children our future-ready, there have been seminars in which speakers talk about making our children future-ready, but you have done made them put it into action through InnoVenture",
    },
  ];

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 bg-white">
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
                  className="w-full sm:basis-1/2 lg:basis-1/3 py-5"
                >
                  <motion.div
                    className="mx-auto rounded-xl overflow-hidden shadow-lg flex flex-col"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <div className="relative aspect-[14/9]">
                      <iframe
                        className="absolute inset-0 w-full h-full"
                        src={testimonial.link}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>

                    <div className="relative flex items-center justify-center p-4 min-h-[180px]">
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

            <div className="flex w-full items-center justify-center gap-5 mt-5">
              <CarouselPrevious className="static lg:absolute" />
              <CarouselNext className="static lg:absolute" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
