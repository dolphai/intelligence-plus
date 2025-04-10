"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, GraduationCap, Users } from "lucide-react";

export default function AdvisorySection() {
  const guidelines = [
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Ministry_of_Education_India.svg",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb_OJQ7SD7LfUt1nZQGfi1oEhzdr39TAL3Sw&s",
    },
    {
      logo: "https://nmbhssbpr.wordpress.com/wp-content/uploads/2023/04/niti-aayog-aim.png",
    },
    {
      logo: "https://i.pinimg.com/736x/68/99/ff/6899ff91faecd2acccbf4e87020bd8ba.jpg",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 bg-gray-50 overflow-hidden">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center text-center space-y-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Advisory Guidelines
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Aligned to the goals and guidelines of
          </p>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative mx-auto w-full max-w-4xl overflow-hidden">
          <motion.div
            className="flex space-x-8 animate-marquee"
            initial={{ x: "0%" }}
            animate={{ x: "-50%" }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {[...guidelines, ...guidelines].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 flex-shrink-0"
              >
                <img
                  src={item.logo}
                  alt=""
                  className="h-16 w-auto object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
