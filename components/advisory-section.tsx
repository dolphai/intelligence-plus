"use client";

import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

export default function AdvisorySection() {
  const guidelines = [
    {
      type: "logo",
      link: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Ministry_of_Education_India.svg",
    },
    {
      type: "logo",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb_OJQ7SD7LfUt1nZQGfi1oEhzdr39TAL3Sw&s",
    },
    {
      type: "logo",
      link: "https://nmbhssbpr.wordpress.com/wp-content/uploads/2023/04/niti-aayog-aim.png",
    },
    {
      type: "logo",
      link: "https://i.pinimg.com/736x/68/99/ff/6899ff91faecd2acccbf4e87020bd8ba.jpg",
    },
    {
      type: "policy",
      link: "National Education Policy 2020 (NEP)",
    },
    {
      type: "policy",
      link: "National Policy for Promotion of Innovation in Schools (NPPIS)",
    },
    {
      type: "policy",
      link: "Idea Innovation and Entrepreneurship Agenda (IIE)",
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
        </motion.div>

        {/* Marquee Container */}
        <Marquee className="relative mx-auto w-full max-w-4xl overflow-hidden">
          {[...guidelines, ...guidelines].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 flex-shrink-0"
            >
              {item.type === "logo" && (
                <img
                  src={item.link}
                  alt=""
                  className="h-16 w-auto object-contain"
                />
              )}

              {item.type === "policy" && (
                <div className="font-[800] h-full max-w-[250px] text-center p-4 rounded-md h-full align-middle bg-violet-600 text-white ">
                  {item.link}
                </div>
              )}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
