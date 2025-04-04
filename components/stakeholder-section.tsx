"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function StakeholderSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

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
      quote: "This program represents the future of education - adaptive, engaging, and results-driven.",
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % stakeholders.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + stakeholders.length) % stakeholders.length)
  }

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
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Stakeholder Applaud</h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Hear from education leaders who have implemented our programs
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-xl bg-violet-50 p-8 md:p-12">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center gap-8"
            >
              <div className="flex-shrink-0">
                <Avatar className="h-24 w-24 border-4 border-white shadow-lg">
                  <AvatarImage src={stakeholders[currentIndex].image} alt={stakeholders[currentIndex].name} />
                  <AvatarFallback>
                    {stakeholders[currentIndex].name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="flex-1 text-center md:text-left">
                <blockquote className="text-xl italic text-gray-700 mb-4">
                  "{stakeholders[currentIndex].quote}"
                </blockquote>
                <div>
                  <p className="font-bold text-lg">{stakeholders[currentIndex].name}</p>
                  <p className="text-gray-500">{stakeholders[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            <Button variant="outline" size="icon" onClick={prevSlide} className="rounded-full">
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous</span>
            </Button>
            {stakeholders.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 p-0 rounded-full ${index === currentIndex ? "bg-violet-600" : "bg-gray-300"}`}
              >
                <span className="sr-only">Go to slide {index + 1}</span>
              </Button>
            ))}
            <Button variant="outline" size="icon" onClick={nextSlide} className="rounded-full">
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

