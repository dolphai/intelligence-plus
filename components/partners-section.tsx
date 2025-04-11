"use client";

import { motion } from "framer-motion";

export default function PartnersSection() {
  const partners = [
    {
      logo: "/partner1.png",
    },
    {
      logo: "/partner2.jpeg",
    },
    {
      logo: "/partner3.png",
    },
  ];

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
            Our Partners
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Working together with leading organizations to advance education
          </p>
        </motion.div>

        <div className="mx-auto max-w-3xl grid grid-cols-3 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center p-4 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={partner.logo || "/placeholder.svg"}
                alt="Logo"
                className="h-28 hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
