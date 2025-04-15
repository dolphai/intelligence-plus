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
      link: "https://nisp.mic.gov.in/assets/img/MoE-Logo.png",
    },
    {
      type: "logo",
      link: "https://nmbhssbpr.wordpress.com/wp-content/uploads/2023/04/niti-aayog-aim.png",
    },
    {
      type: "logo",
      link: "https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E_SDG_logo_UN_emblem_square_trans_WEB-1024x879.png",
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
    <section className="w-full relative py-12 bg-gray-50 overflow-hidden bg-gradient-to-b from-indigo-950 to-violet-900">
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
          <h2 className="text-3xl sm:text-4xl text-white">
            Aligned to the goals and guidelines of
          </h2>
        </motion.div>

        {/* Marquee Container */}
        <Marquee
          pauseOnHover={true}
          className="relative mx-auto w-full max-w-4xl overflow-hidden"
        >
          {[...guidelines, ...guidelines].map((item, index) => (
            <div key={index} className="p-4 flex-shrink-0 h-full">
              <div className="h-full bg-white px-2 py-1 rounded-sm flex items-center justify-center">
                {item.type === "logo" && (
                  <img
                    src={item.link}
                    alt=""
                    className="h-16 w-auto object-contain"
                  />
                )}

                {item.type === "policy" && (
                  <div className="font-[800] h-[65px] text-sm w-[250px] text-black flex items-center justify-center text-center">
                    <p>{item.link}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
