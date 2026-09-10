import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import TeamMarquee from "@/components/TeamMarquee";

// Below-the-fold sections are dynamically imported so they don't block
// the initial page load. Each becomes a separate chunk that loads on
// demand as the user scrolls toward it. Zero visual change the
// components render identically, just their JS is deferred.
const Counters = dynamic(() => import("@/components/Counters"));
const ClientLogos = dynamic(() => import("@/components/ClientLogos"));
const Projects = dynamic(() => import("@/components/Projects"));
const WhatWeBuild = dynamic(() => import("@/components/WhatWeBuild"));
const Solution = dynamic(() => import("@/components/Solution"));
const ComparisonTable = dynamic(() => import("@/components/ComparisonTable"));
const ServicesPreview = dynamic(() => import("@/components/ServicesPreview"));
const PricingTiers = dynamic(() => import("@/components/PricingTiers"));
const Footer = dynamic(() => import("@/components/Footer"));

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
