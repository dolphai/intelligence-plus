"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqSection() {
  const faqs = [
    {
      question: "How can schools register for Intelligence Plus programs?",
      answer:
        "Schools can register through our online portal. The process requires basic information about the school, designated coordinator, and the programs you're interested in. Our team will follow up within 48 hours to complete the onboarding process.",
    },
    {
      question: "What age groups are eligible for the challenges?",
      answer:
        "Our challenges are designed for students from grades 6-12 (ages 11-18). We have different categories and difficulty levels appropriate for middle school and high school students.",
    },
    {
      question: "Are there costs associated with participating?",
      answer:
        "Basic participation in challenges is free for all registered schools. Premium features, advanced curriculum materials, and certain specialized competitions may have associated costs. We also offer scholarships for schools in underserved communities.",
    },
    {
      question: "How are the challenges judged?",
      answer:
        "Challenges are evaluated by a panel of education experts, industry professionals, and academic leaders using standardized rubrics. Judging criteria include innovation, technical execution, presentation, and real-world applicability.",
    },
    {
      question:
        "Can individual students participate without school affiliation?",
      answer:
        "Yes, we offer individual participation tracks for students whose schools are not officially registered. These students can compete in most challenges and access many of our learning resources.",
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
            {faqs.map((faq, index) => (
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
        </motion.div>
      </div>
    </section>
  );
}
