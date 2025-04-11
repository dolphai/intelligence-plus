"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

export default function FaqSection() {
  const faqs = [
    {
      question: "How can schools register for Innoventure?",
      answer:
        "School registration is completely free and can be done by filling up the form online. The process requires basic information about the school and a designated coordinator. The registered school will receive login details by May end on their registered mail ID, along with all material required for student communication and awareness.",
    },
    {
      question: "How can the students register for the free innovation course?",
      answer:
        "Students can register on the website by filling up the online form.",
    },
    {
      question: "How can the child register for the Innoventure challenge?",
      answer:
        "A child can register through the same login page where all courses are listed by clicking on the Innoventure challenge and filling out the registration form.",
    },
    {
      question: "What age groups are eligible for the challenges?",
      answer:
        "Students from grades 1st to 9th are eligible, with different categories and difficulty levels for middle and high school students.",
    },
    {
      question: "How are the challenges evaluated?",
      answer:
        "Challenges are evaluated by a panel of education experts, industry professionals, and academic leaders using standardized rubrics. Judging criteria include innovation, technical execution, presentation, and real-world applicability.",
    },
    {
      question:
        "Can individual students participate without school affiliation?",
      answer:
        "Yes, individual participation is allowed for students whose schools are not registered. They can participate in most challenges and access learning resources.",
    },
    {
      question: "Why so many rounds in the InnoVenture Challenge?",
      answer:
        "The Innoventure process helps children DISCOVER their potential, LEARN new skills, and CREATE real-life solutions. Multiple rounds allow them to nurture these capabilities, making the experience enriching and long-lasting.",
    },
    {
      question: "What type of questions does the Round 1 paper have?",
      answer:
        "Round 1 papers are grade-specific and include subjective challenge statements focusing on creativity, innovation, ideation, and problem-solving. Examples include creative seasonal ideas, identifying odd emotions, and visual representations of concepts.",
    },
    {
      question: "How will the students prepare for the Round 1 Exam?",
      answer:
        "Registered students will receive paid preparation material in their individual logins to start preparing for the Innoventure challenge.",
    },
    {
      question: "What are the Round 1 Dates?",
      answer:
        "Round 1 will be conducted on the platform between mid-September to mid-October 2025.",
    },
    {
      question: "Is there a fee for Innoventure Round One?",
      answer:
        "Registration is free, but there is a fee for the Round 1 preparation material.",
    },
    {
      question: "Where will the result of round 1 be declared?",
      answer:
        "Results will be declared online in the last week of October 2025.",
    },
    {
      question: "What are the Round 2 Dates?",
      answer:
        "Round 2 will be conducted online between mid-November to mid-December 2025.",
    },
    {
      question: "What type of questions can be asked in the second round?",
      answer:
        "Round 2 involves questions like personal goals, opinions on topics like pocket money or national symbols, and hypothetical scenarios that test communication and reasoning.",
    },
    {
      question: "How will the students prepare for the round 2 exam?",
      answer:
        "Round 2 will be an online interview with four questions to be answered in five minutes. Students can prepare using additional paid material available online.",
    },
    {
      question: "When is the result of round 2 declared?",
      answer:
        "Results will be declared online in the last week of December 2025.",
    },
    {
      question: "What are the final round dates?",
      answer:
        "The final round will be held offline in the last week of January 2026.",
    },
    {
      question: "How will the students prepare for the round 3 exam?",
      answer:
        "Final round instructions will be shared via email one month prior. Online training sessions will also be arranged.",
    },
    {
      question: "How do parents and students come to know the results?",
      answer:
        "Results for Round 1 and 2 will be declared online via individual logins. Final round results will be announced during the award ceremony.",
    },
    {
      question: "How will the final round be held?",
      answer:
        "The final round will be conducted offline. Venue and schedule will be announced in advance.",
    },
    {
      question: "Is there a registration fee for the final round?",
      answer:
        "No registration fee is charged, but the preparation material for the final round is paid.",
    },
    {
      question:
        "Do parents need to accompany the children for the final round?",
      answer:
        "It is not mandatory. Parents may choose to accompany their children or designate a school representative or guardian.",
    },
    {
      question: "Where will students stay for the final round?",
      answer:
        "Stay will be arranged at a common venue with subsidized costs to allow all participants to stay together.",
    },
    {
      question:
        "Why are parents required to cover their own expenses for the final round?",
      answer:
        "Travel, stay, and food are lifestyle choices that vary. IntelligencePlus leaves these to parents’ discretion while ensuring a valuable experience for the child.",
    },
    {
      question: "What awards and rewards do students receive?",
      answer:
        "Winners from each grade (4th to 9th) receive trophies and certificates. Zonal toppers (1st to 9th) receive Gold Medals and certificates. Class toppers also receive School-Level Gold Medals.",
    },
    {
      question: "How is the student registration process done for schools?",
      answer:
        "Once a school is registered, students can directly register online using their own login.",
    },
    {
      question: "How can schools promote Innovation courses and InnoVenture?",
      answer:
        "Schools can use assemblies, PTA meetings, posters, WhatsApp, social media, and emails. IntelligencePlus provides soft copies of posters and communication material.",
    },
    {
      question: "Who will administer the Round 1 exam?",
      answer:
        "The exam will be conducted online by a school representative. School leaders will not be involved.",
    },
    {
      question:
        "Where can school leaders access performance and ranking reports?",
      answer:
        "Once registered, schools get login credentials to access performance and ranking reports based on students’ course and challenge participation.",
    },
  ];
  const [showAll, setShowAll] = useState(false);
  const displayedFaqs = showAll ? faqs : faqs.slice(0, 10);
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
            Frequently Asked Questions
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Find answers to common questions about our programs
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {displayedFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

          {faqs.length > 10 && (
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-6 py-2 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
              >
                {showAll ? "View Less" : "View More"}
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
