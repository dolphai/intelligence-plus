"use client";

import { motion } from "framer-motion";

export default function PartnersSection() {
  const partners = [
    {
      name: "Mapro",
      logo: "https://www.mapro.com/cdn/shop/files/Group_139560_2x_de61683a-e433-4113-85a8-314587f529a6.jpg?height=628&pad_color=fff&v=1660288307&width=1200",
      type: "Education Partner",
    },
    {
      name: "TATA",
      logo: "https://companieslogo.com/img/orig/TATAMOTORS.NS-1c3e3e90.png?t=1720244494",
      type: "Education Partner",
    },
    {
      name: "OYO",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/23/OYO_Rooms_logo.png",
      type: "Education Partner",
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

        <div className="grid md:grid-cols-3 gap-8 items-center">
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
                alt={partner.name}
                className="max-h-12 w-auto hover:grayscale-0 transition-all duration-300"
              />
              <div className="text-center">
                <p className="font-bold">{partner.name}</p>
                <p className="text-sm opacity-50">{partner.type}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
