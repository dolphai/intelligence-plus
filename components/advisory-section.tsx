"use client"

import { motion } from "framer-motion"
import { Award, BookOpen, GraduationCap, Users } from "lucide-react"

export default function AdvisorySection() {
  const guidelines = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Curriculum Standards",
      description: "All courses aligned with national education standards",
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Expert Educators",
      description: "Content developed by leading education professionals",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Challenge Guidelines",
      description: "Fair and inclusive competition rules for all participants",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community Support",
      description: "Ongoing assistance for schools and students",
    },
  ]

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
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Advisory Guidelines</h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our educational framework is built on these core principles
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {guidelines.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="p-3 rounded-full bg-violet-100 text-violet-600 mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-500">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

