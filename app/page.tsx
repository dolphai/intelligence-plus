import type { Metadata } from "next";
import HeroSection from "@/components/hero-section";
import VideoSection from "@/components/video-section";
import AdvisorySection from "@/components/advisory-section";
import StakeholderSection from "@/components/stakeholder-section";
import SchoolBenefits from "@/components/school-benefits";
import TestimonialsSection from "@/components/testimonials-section";
import StudentBenefits from "@/components/student-benefits";
import StudentAchievements from "@/components/student-achievements";
import TimelineSection from "@/components/timeline-section";
import PartnersSection from "@/components/partners-section";
import GallerySection from "@/components/gallery-section";
import FaqSection from "@/components/faq-section";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Intelligence Plus | Educational Courses & Challenges",
  description:
    "Empowering students and schools through innovative educational courses and nationwide challenges.",
};

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <VideoSection />
      <AdvisorySection />
      <StakeholderSection />
      <SchoolBenefits />
      <TestimonialsSection />
      <StudentBenefits />
      <StudentAchievements />
      <TimelineSection />
      <PartnersSection />
      <GallerySection />
      <FaqSection />
      <Footer />
    </main>
  );
}
