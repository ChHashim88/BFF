"use client";

import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ModelSection } from "@/components/sections/ModelSection";
import { PrinciplesSection } from "@/components/sections/PrinciplesSection";
import { PlatformSection } from "@/components/sections/PlatformSection";
import FUIBentoGridDark from "@/components/ui/bento-grid";
import VerticalTabs from "@/components/ui/vertical-tabs";
import { GallerySection } from "@/components/sections/GallerySection";
import OpportunitySection from "@/components/ui/opportunity-section";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { RevenueSection } from "@/components/sections/RevenueSection";
import { RevenueCardsSection } from "@/components/sections/RevenueCardsSection";
import { ExecuteSection } from "@/components/sections/ExecuteSection";
import { FoundersClubSection } from "@/components/sections/FoundersClubSection";
import { ProgressSection } from "@/components/sections/ProgressSection";
import { ProcessSection } from "@/components/ui/process-section";
import Investment from "@/components/ui/Investment";
import { ContactSection } from "@/components/sections/ContactSection";
import Footer from "@/components/ui/footer";
import { WaitlistModal } from "@/components/ui/WaitlistModal";
import { StickyFooterCTA } from "@/components/ui/StickyFooterCTA";
import { Zap, Compass, Layers, Key, Users, Building2 } from "lucide-react";

const processItems = [
  {
    icon: Zap,
    title: "Activation",
    description: "Advancing the BFF platform toward launch",
  },
  {
    icon: Compass,
    title: "Origination",
    description: "Expanding and progressing the initial project pipeline",
  },
  {
    icon: Layers,
    title: "Structuring",
    description: "Structuring and preparing the first film offerings",
  },
  {
    icon: Key,
    title: "Access",
    description: "Developing the initial investor experience",
  },
  {
    icon: Users,
    title: "Formation",
    description: "Growing the founding investor community",
  },
  {
    icon: Building2,
    title: "Infrastructure",
    description: "Building the foundation for recurring platform revenue",
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="relative w-full overflow-x-hidden bg-background">
        <HeroSection />
        <ProblemSection />
        <ModelSection />
        <PrinciplesSection />
        <PlatformSection />
        <FUIBentoGridDark />
        <VerticalTabs />
        <GallerySection />
        <OpportunitySection />
        <TimelineSection />
        <RevenueSection />
        <RevenueCardsSection />
        <ExecuteSection />
        <FoundersClubSection />
        <ProgressSection />
        <ProcessSection
          id="next"
          subtitle="WHAT COMES NEXT"
          title="Market Execution"
          description="BFF is now preparing to move from foundation-building into market execution."
          buttonText="Capital raised in this round will support:"
          items={processItems}
        />
        <Investment />
        <ContactSection />
        <Footer />
      </main>
      <WaitlistModal />
      <StickyFooterCTA />
    </>
  );
}
