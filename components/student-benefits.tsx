"use client";

import { motion } from "framer-motion";

import {
  Award,
  BookOpenCheck,
  Globe,
  GraduationCap,
  Mic,
  Trophy,
} from "lucide-react";

export default function StudentBenefits() {
  const benefits = [
    {
      icon: <GraduationCap className="h-10 w-10 text-blue-500" />,
      title: "Free Access to the Innoventure Innovation Course",
      description:
        "Learn age-appropriate innovation skills through mini-episodes using the case study method pioneered at Harvard",
    },
    {
      icon: <Award className="h-10 w-10 text-yellow-500" />,
      title: "Certificates featuring Leading Brands",
      description: "Build your profile with course completion certificates",
    },
    {
      icon: <BookOpenCheck className="h-10 w-10 text-green-500" />,
      title: "Master Real-World Innovation Skills",
      description:
        "Ideation, design thinking, problem-solving, storytelling, pitching, and more.",
    },
    {
      icon: <Mic className="h-10 w-10 text-purple-500" />,
      title: "Participate (Free) in the Innoventure Challenge",
      description:
        "Present your ideas and earn a certificate from IIT Hyderabad.",
    },
    {
      icon: <Trophy className="h-10 w-10 text-pink-500" />,
      title: "Win the Innoventure Student Awards",
      description: "Be celebrated as one of India’s top young innovators",
    },
    {
      icon: <Globe className="h-10 w-10 text-red-500" />,
      title: "Pathways to Real Impact",
      description:
        "Past students have won awards, grants, launched initiatives, filed patents and gained global recognition.",
    },
  ];

  return (
    <section
      id="student-benefits"
      className="w-full py-12 md:py-24 bg-gradient-to-b from-indigo-950 to-violet-900 relative overflow-hidden"
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

      <div className="container flex flex-col lg:flex-row items-center px-4 md:px-6 relative z-10">
        <motion.div
          className="w-full lg:w-1/3 shrink-0 flex flex-col items-center text-center space-y-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-orange-400">
            Student Benefits
          </h2>
          <p className="max-w-[700px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Why every student must not miss this experience and opportunity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl place-items-center">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative h-full min-h-[270px] w-full bg-white rounded-3xl p-6 h-full w-full shadow-xl flex items-center justify-center flex-col text-center"
            >
              <div className="">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>

              {/* Decorative wave elements */}
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
