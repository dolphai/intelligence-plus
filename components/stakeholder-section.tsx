"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

export default function StakeholderSection() {
  const stakeholders = [
    {
      name: "Dr. Abhay Jere",
      desg: "Vice Chairman, AICTE & Chief Innovation Officer, Ministry of Education, Govt. of India",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpScMBJf2hH00rsGU5qlMy1cKBgldDquWXbQ&s",
      quote:
        "Children getting exposure to business models, design thinking frameworks and creating value propositions is something remarkable at such a young age. What I have witnessed is worthy taking to every school of India.",
    },
    {
      name: "Padma Vibhushan Dr. Raghunath Mashelkar",
      desg: "Reknowned Indian Scientist & Innovator",
      image:
        "https://media.licdn.com/dms/image/v2/D4D12AQFRhdbyW5RM-g/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1724202308979?e=2147483647&v=beta&t=T72iLkyw1xiBFSBq3JVif3cs4FyHqo5-nS4cFnu8gb8",
      quote:
        "Innoventure is a brilliant platform that nurtures essential skills like ideation, innovation, and critical thinking in children—skills vital for building a strong foundation for young India. With over a decade of impact, it aligns perfectly with NEP 2020’s vision of moving from content-heavy learning to higher-order thinking and innovation.",
    },
    {
      name: "Dr. Ganesh Natrajan",
      desg: "Chairman of 5F World, GTT Data Solutions, Lighthouse Communities, EPPS & Honeywell Automation India Ltd.",
      image:
        "https://forceindia.net/wp-content/uploads/2021/03/Dr-Ganesh-Natarajan.jpg",
      quote:
        "Innoventure is one such platform where quality of the students and the tools that they are being introduced to is outstanding. This will inspire a better society. A very good format and very well organized event.",
    },
    {
      name: "Sushil Borde",
      desg: "Head of Reliance Innovation Leadership Centre",
      role: "Head",
      image: "/sushil-borde.png",
      quote:
        "The potential in students is immense, and it's vital that desgs nurture an innovation mindset and skillset. This kind of learning is what young India needs to solve real-world problems. I’ve seen firsthand the incredible impact—students are being truly empowered to think, create, and innovate.",
    },
    {
      name: "Air Marshal Bhushan Gokhale",
      desg: "Ex- Vice Chair of Air Staff, India; Chairman, MES Education",
      image: "/bhushan-gokhale.png",
      quote:
        "Innoventure is a great platform for the young minds & can truly be taken to the National and International level because technology and such innovation processes are very important for national development.",
    },
    {
      name: "Gurbans Chatwal",
      desg: "Vice President of Innovation & Intelligent Automation ,  Fiserv",
      role: "Vice President",
      image:
        "https://council.aimresearch.co/wp-content/uploads/2025/01/Gurbans-Chatwal.png",
      quote:
        "I’m truly amazed at how you've transformed an abstract concept like innovation into a tangible program for children as young as 6. It’s delightful to see the creativity and detail in their ideas. This platform truly nurtures the innovation spark in young minds. An absolutely brilliant initiative!",
    },
  ];

  return (
    <section className="w-full py-12 bg-white">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center text-center space-y-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Trusted Voices. Transformative Vision
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Championed by Leaders, Driven by Purpose
          </p>
        </motion.div>

        <Carousel
          className="mx-auto"
          opts={{
            loop: true,
          }}
        >
          <CarouselContent className="min-h-[500px]">
            {stakeholders.map((stakeholder, index) => (
              <CarouselItem
                key={index}
                className="p-4 sm:basis-2/3 md:basis-1/2 lg:basis-1/2 xl:basis-1/3 " // Added min-h-full
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="max-w-4xl mx-auto bg-violet-50 rounded-xl h-full flex flex-col md:w-[350px] md:h-[630px] lg:w-[450px] lg:h-[550px]" // Added flex and flex-col
                >
                  <div className=" max-h-[250px] w-full">
                    <img
                      src={stakeholder.image}
                      className="h-full max-h-[250px] w-full object-contain" // Consider object-cover
                      alt="Image"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left p-8 flex flex-col justify-between">
                    {/* Adjusted this div */}
                    <blockquote className="text-md italic text-gray-700 mb-4">
                      "{stakeholder.quote}"
                    </blockquote>
                    <div>
                      <p className="font-bold text-lg">{stakeholder.name}</p>
                      <p className="text-gray-500">{stakeholder.desg}</p>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex w-full items-center justify-center gap-5 mt-10">
            <CarouselPrevious className="static lg:absolute" />
            <CarouselNext className="static lg:absolute" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
