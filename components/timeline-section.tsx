"use client";

import { motion } from "framer-motion";

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

        <div className="w-full px-4 py-12 md:mt-28 min-h-[150px]">
          <div className="relative flex flex-col md:flex-row md:justify-between items-center">
            <div className="absolute md:top-1/2 top-0 md:left-0 md:right-0 left-4 h-full md:h-1 w-1 md:w-full bg-violet-200 z-0" />

            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className="relative md:w-1/4 w-full flex flex-col items-center md:items-center mb-10 md:mb-0"
              >
                <div
                  className={`hidden md:block mb-6 md:mb-0 md:absolute md:w-64 ${
                    index % 2 === 0
                      ? "bottom-[30%] translate-y-full"
                      : "top-[30%] -translate-y-full"
                  }`}
                >
                  <div className="p-4 rounded-xl shadow-md text-center">
                    <h3 className="text-violet-300 font-semibold">
                      {event.date}
                    </h3>
                    <h4 className="text-lg font-bold mt-1">{event.title}</h4>
                    <p className="text-sm mt-2">{event.description}</p>
                  </div>
                </div>

                {/* Dot */}
                <div className="z-10 absolute md:static left-5 top-1/2 -translate-y-1/2 md:-translate-y-0 -translate-x-1/2 w-5 h-5 rounded-full bg-violet-500 border-4 border-white shadow-lg" />

                {/* Mobile card */}
                <div className="md:hidden mt-4 w-full">
                  <div className="ml-5 p-4 rounded-xl shadow-md">
                    <h3 className="text-violet-400 font-semibold">
                      {event.date}
                    </h3>
                    <h4 className="text-lg font-bold mt-1">{event.title}</h4>
                    <p className="text-sm mt-2">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
