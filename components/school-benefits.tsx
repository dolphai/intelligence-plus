"use client";

import { motion } from "framer-motion";
import { BarChart3, Brain, FileText, Medal, Star, Trophy } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function SchoolBenefits() {
  const benefits = [
    {
      icon: <FileText className="h-10 w-10 text-blue-500" />,
      title: "Free Innovation Program",
      description:
        "Research backed, self-paced & age appropriate Innovation Skills Program for grades 1st to 9th",
    },
    {
      icon: <Brain className="h-10 w-10 text-violet-500" />,
      title: "Built on India’s First Agentic-AI Platform",
      description:
        "Personalized, cutting-edge content  that fosters real-world problem-solving and feedback",
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-orange-500" />,
      title: "School Innovation Performance Report",
      description:
        "Lead with clarity on student Innovation skills and focus areas",
    },
    {
      icon: <Medal className="h-10 w-10 text-yellow-500" />,
      title: "National School Innovation Awards",
      description:
        "Prestigious Awards for schools based on performance data . Also published in  EW Magazine ",
    },
    {
      icon: <Trophy className="h-10 w-10 text-red-500" />,
      title: "MOE - Aligned Initiative",
      description:
        "Lead with credibility and showcase implementation of NPPIS, IIE and NEP 2020 goals ",
    },
    {
      icon: <Star className="h-10 w-10 text-green-500" />,
      title: "Leadership Recognition",
      description:
        "School leaders receive awards and visibility for enabling 'Innovation In Schools'",
    },
  ];

  return (
    <section
      id="school-benefits"
      className="w-full py-12 bg-gradient-to-b from-indigo-950 to-violet-900 relative overflow-hidden"
    >
      {/* Stars background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 2 + 1,
              height: Math.random() * 2 + 1,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container flex flex-col lg:flex-row items-center gap-10 px-4 md:px-6 relative z-10 w-full">
        <motion.div
          className="flex flex-col w-full lg:w-1/3 shrink-0 items-center text-center space-y-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl  text-orange-400">
            School Benefits
          </h2>
          <p className="max-w-[700px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Position Your School as a National Innovation Leader
          </p>
          <Button className="bg-orange-600 hover:bg-violet-700">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSfBSD35zx1tlJ9H-FCfv2N1VsaEaKuMi8FfOH7cAmQSiGRV0w/viewform"
              target="_blank"
            >
              Bring Innovation to your School
            </Link>
          </Button>
        </motion.div>

        <div className="grid grid-cols-1  md:grid-cols-3 gap-6 max-w-5xl place-items-center">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="relative h-full w-full bg-white rounded-3xl p-6 h-full w-full shadow-xl flex items-center justify-center flex-col text-center"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>

              {/* Decorative elements */}
              <motion.div
                className="absolute -z-10 -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-2 bg-blue-300 rounded-full opacity-70"
                animate={{
                  width: ["70%", "90%", "70%"],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
