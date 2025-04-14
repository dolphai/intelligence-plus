import AdvisorySection from "@/components/advisory-section";
import FaqSection from "@/components/faq-section";
import Footer from "@/components/footer";
import GallerySection from "@/components/gallery-section";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import PartnersSection from "@/components/partners-section";
import SchoolBenefits from "@/components/school-benefits";
import StakeholderSection from "@/components/stakeholder-section";
import StudentAchievements from "@/components/student-achievements";
import StudentBenefits from "@/components/student-benefits";
import TestimonialsSection from "@/components/testimonials-section";
import TimelineSection from "@/components/timeline-section";
import VideoSection from "@/components/video-section";
import type { Metadata } from "next";

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
