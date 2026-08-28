import Hero from "@/components/Hero";
import TeamMarquee from "@/components/TeamMarquee";
import Counters from "@/components/Counters";
import ClientLogos from "@/components/ClientLogos";
import Projects from "@/components/Projects";
import WhatWeBuild from "@/components/WhatWeBuild";
import Solution from "@/components/Solution";
import ComparisonTable from "@/components/ComparisonTable";
import ServicesPreview from "@/components/ServicesPreview";
import PricingTiers from "@/components/PricingTiers";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <TeamMarquee />
      <Counters />
      <ClientLogos />
      <Projects />
      <WhatWeBuild />
      <Solution />
      <ComparisonTable />
      <ServicesPreview />
      <PricingTiers />
      <Footer />
    </>
  );
}
