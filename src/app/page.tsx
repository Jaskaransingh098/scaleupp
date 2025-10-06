import HeaderNavigation from "@/components/sections/header-navigation";
import HeroSection from "@/components/sections/hero-section";
import VideoTestimonial from "@/components/sections/video-testimonial";
import StatsSection from "@/components/sections/stats-section";
import CaseStudiesHeader from "@/components/sections/case-studies-header";
import PainPoints from "@/components/sections/pain-points";
import ResultsShowcase from "@/components/sections/results-showcase";
import ProcessSection from "@/components/sections/process-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import VideoExamples from "@/components/sections/video-examples";
import FoundersSection from "@/components/sections/founders-section";
import FaqSection from "@/components/sections/faq-section";
import FinalCtaSection from "@/components/sections/final-cta";
import RevealOnScroll from "@/components/ui/reveal-on-scroll";
import Footer from "@/components/sections/footer";
import Problem from "@/components/sections/problem";
import StarfieldBackground from "../components/ui/StartfieldBackground";
import RippleGrid from "@/components/ui/RippleGrid";
import Squares from "@/components/ui/Squares";

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      {/* Full-page gradient background */}
      <div className="fixed inset-0 -z-10 bg-black">
        {/* Radial glow */}
        {/* <div className="absolute inset-0 bg-[radial-gradient(circle_560px_at_50%_200px,#38bdf8,transparent)]" />

       
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#38bdf820_1px,transparent_1px),linear-gradient(to_bottom,#38bdf820_1px,transparent_1px)] bg-[size:18px_18px]" /> */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_-10%,rgba(238,42,123,0.3),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_90%,rgba(249,206,52,0.2),transparent)]" />
      </div>

      {/* Content */}
      <div className="relative z-20">
        <HeaderNavigation />

        <main className="pt-0">
          <HeroSection />
          <StatsSection />
          <Problem />
          <PainPoints />
          {/* <CaseStudiesHeader /> */}

          <div id="results" className="scroll-mt-[110px]">
            <ResultsShowcase />
          </div>

          <div id="process" className="scroll-mt-[110px]">
            <ProcessSection />
          </div>

          <div id="portfolio" className="scroll-mt-[110px]">
            <VideoExamples />
          </div>

          <FoundersSection />

          <div id="faq" className="scroll-mt-[110px]">
            <FaqSection />
          </div>

          <div id="contact" className="scroll-mt-[110px]">
            <FinalCtaSection />
          </div>

          <div id="footer" className="scroll-mt-[110px]">
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}
