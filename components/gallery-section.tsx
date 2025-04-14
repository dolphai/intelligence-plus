"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";

export default function GallerySection() {
  const images = [
    {
      src: "/school-logos.jpeg",
      alt: "Students collaborating on a project",
    },
  ];

  return (
    <section className="w-full relative py-12 bg-gradient-to-b from-indigo-950 to-violet-900">
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
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center text-center space-y-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white ">
            The Best Schools of the country join in the Vision and the Value!
          </h2>
          <p className="text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Collectively Leveling -Up the Schools and Empowering Students with
            "Innovation Education"
          </p>
        </motion.div>

        <div className="flex items-center justify-center w-full mx-auto gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full object-cover transition-transform duration-500 "
              />
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        className="py-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
          It's time for your school & students to stand out!
        </h3>
        <Button
          size="lg"
          className="bg-orange-500 hover:bg-orange-600 text-white"
        >
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSfBSD35zx1tlJ9H-FCfv2N1VsaEaKuMi8FfOH7cAmQSiGRV0w/viewform"
            target="_blank"
          >
            Join the Innovation Movement - No Cost
          </Link>
        </Button>
      </motion.div>
    </section>
  );
}
