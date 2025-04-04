"use client";

import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";

export default function TimelineSection() {
  const timelineEvents = [
    {
      date: "January 15, 2024",
      title: "Registration Opens",
      description:
        "Schools and individual students can register for the upcoming challenges",
    },
    {
      date: "March 1, 2024",
      title: "Regional Qualifiers",
      description: "First round of challenges begins across regional centers",
    },
    {
      date: "May 15, 2024",
      title: "National Semi-Finals",
      description:
        "Top performers from regional qualifiers compete at the semi-final level",
    },
    {
      date: "June 30, 2024",
      title: "National Finals",
      description:
        "Championship event with awards ceremony and industry recognition",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center text-center space-y-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Timeline & Round Details
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Key dates for the upcoming IntelligentPlus National Challenge
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-violet-200 transform md:-translate-x-1/2"></div>

          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              className="relative mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div
                className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="md:w-1/2 flex justify-center md:justify-end md:pr-8 md:pl-0 pl-8 mb-4 md:mb-0">
                  <div
                    className={`p-4 rounded-lg shadow-md bg-white ${index % 2 === 0 ? "md:text-right" : ""}`}
                  >
                    <div className="flex items-center mb-2">
                      <CalendarDays className="h-4 w-4 text-violet-600 mr-2" />
                      <span className="text-sm text-violet-600 font-medium">
                        {event.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-1">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>

                <div className="absolute left-4 top-1/2 -translate-x-1/2 md:left-1/2 w-4 h-4 rounded-full bg-violet-600 border-4 border-white transform md:-translate-x-1/2"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
