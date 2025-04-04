"use client"

import { motion } from "framer-motion"
import { Play } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(Array(3).fill(false))

  const testimonials = [
    {
      name: "Principal James Wilson",
      school: "Lincoln High School",
      thumbnail: "/placeholder.svg?height=300&width=500",
      quote: "The impact on our STEM program has been remarkable. Student engagement is at an all-time high.",
    },
    {
      name: "Dr. Emily Chen",
      school: "Westlake Academy",
      thumbnail: "/placeholder.svg?height=300&width=500",
      quote: "IntelligentPlus challenges have become the highlight of our academic calendar.",
    },
    {
      name: "Superintendent Robert Johnson",
      school: "Oakridge School District",
      thumbnail: "/placeholder.svg?height=300&width=500",
      quote: "The professional development for our teachers has transformed how we approach education.",
    },
  ]

  const handlePlay = (index: number) => {
    const newIsPlaying = [...isPlaying]
    newIsPlaying[index] = true
    setIsPlaying(newIsPlaying)
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
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Testimonials from School Leaders
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Hear directly from educators who have implemented our programs
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="relative rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="aspect-video relative">
                  {!isPlaying[index] ? (
                    <>
                      <img
                        src={testimonial.thumbnail || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white p-4">
                        <Button
                          onClick={() => handlePlay(index)}
                          size="icon"
                          className="h-12 w-12 rounded-full bg-violet-600 hover:bg-violet-700 text-white shadow-lg mb-4"
                        >
                          <Play className="h-6 w-6" />
                          <span className="sr-only">Play video</span>
                        </Button>
                        <p className="text-sm font-medium">{testimonial.quote}</p>
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full">
                      <iframe
                        src="about:blank" // Replace with actual video embed URL
                        title={`Testimonial from ${testimonial.name}`}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  )}
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.school}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

