"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

type TimelineEvent = {
  date: string;
  title: string;
  description: string;
  details?: string;
};

export default function TimelineSection() {
  const timelineEvents: TimelineEvent[] = [
    {
      date: "Deadline: May 2025",
      title: "Free School Registration",
      description:
        " Schools can register online by sharing basic details and coordinator info.",
      details: "get login access and support materials by end of may.",
    },
    {
      date: "Opens June 2025",
      title: "Free Student Registration",
      description:
        "Once schools are registered, students can sign up online to begin their innovation journey through their individual logins. ",
    },
    {
      date: "June - August 2025",
      title: "Free Innovation Course",
      description:
        "Students from Grades 1–9 will explore engaging, world class Innovation Courses.",
      details:
        "Certificate awarded featuring top brands/companies & Free entry to Innoventure Round 1 upon completion",
    },
    {
      date: "September - October 2025",
      title: "Innoventure Round 1",
      description:
        "Creative Thinking Challenge. To be done online anytime at your school’s chosen date",
    },
    {
      date: "November, 2025",
      title: "National School Innovation Ranking",
      description: "Whole school performance report and awards announced",
      details:
        "Also published in Education World Magazine, post the award ceremony in Jan,2026",
    },
    {
      date: " Nov - Mid Dec, 2025",
      title: "Innoventure Round 2:",
      description:
        "National semifinalists students will have an online  interview on their own chosen date and time.",
    },
    {
      date: "Jan end, 2026",
      title: "Innoventure National Finale",
      description: "Offline event with jury presentations and Award Ceremony.",
    },
  ];
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(
    null,
  );

  const handleClick = (event: (typeof timelineEvents)[0]) => {
    setSelectedEvent(event);
  };

  const closeDialog = () => setSelectedEvent(null);

  return (
    <section
      id="timeline"
      className="w-full py-12 md:py-24 bg-gray-50 bg-gradient-to-b from-indigo-950 to-violet-900"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center text-center space-y-4 mb-4 xl:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-orange-400">
            Process Timeline & Round Details
          </h2>
        </motion.div>

        <div className="w-full px-4 py-12 mt-0 lg:mt-40 min-h-[200px]">
          <div className="relative flex flex-col lg:flex-row lg:justify-between items-center">
            <div className="absolute lg:top-1/2 top-0 lg:left-0 lg:right-0 left-2 h-full lg:h-1 w-1 lg:w-full bg-violet-200 z-0" />

            {timelineEvents.map((event, index) => (
              <div
                key={index}
                onClick={() => handleClick(event)}
                className="relative cursor-pointer lg:w-1/4 w-full flex flex-col items-center lg:items-center mb-10 lg:mb-0"
              >
                {/* Desktop card */}
                <div
                  className={`hidden bg-white rounded-xl lg:block mb-6 lg:mb-0 lg:absolute lg:w-64 ${
                    index % 2 === 0
                      ? "bottom-[10%] translate-y-full"
                      : "top-[30%] -translate-y-full"
                  }`}
                >
                  <div className="p-4 rounded-xl shadow-md text-center">
                    <h3 className="text-violet-600 font-semibold">
                      {event.date}
                    </h3>
                    <h4 className="text-lg font-bold mt-1">{event.title}</h4>
                    <p className="text-sm mt-2">{event.description}</p>
                  </div>
                </div>

                {/* Dot */}
                <div className="z-10 absolute lg:static left-2 top-1/2 -translate-y-1/2 lg:-translate-y-0 -translate-x-1/2 w-5 h-5 rounded-full bg-violet-500 border-4 border-white shadow-lg" />

                {/* Mobile card */}
                <div className="lg:hidden rounded-xl w-full">
                  <div className="ml-5 p-4  bg-white rounded-xl shadow-md">
                    <h3 className="text-violet-400 font-semibold">
                      {event.date}
                    </h3>
                    <h4 className="text-lg font-bold mt-1">{event.title}</h4>
                    <p className="text-sm mt-2">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Dialog for event details */}
            <Dialog open={!!selectedEvent} onOpenChange={closeDialog}>
              <DialogContent>
                {selectedEvent && (
                  <>
                    <DialogHeader>
                      <DialogTitle>{selectedEvent.title}</DialogTitle>
                      <DialogDescription>
                        {selectedEvent.date}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-2 text-sm">
                      <li> {selectedEvent.description}</li>
                      {selectedEvent?.details && (
                        <li> {selectedEvent?.details}</li>
                      )}
                    </div>
                  </>
                )}
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
}
