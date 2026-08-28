"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PixelButton from "@/components/PixelButton";
import { ServiceCard, services } from "@/components/ServiceCard";

const EASE = [0.16, 1, 0.3, 1] as const;

// Show the first 3 services as a preview on the homepage
const previewServices = services.slice(0, 3);

export default function ServicesPreview() {
  return (
    <section className="relative bg-[#f5f6fa] py-16 transition-colors duration-500 dark:bg-[#0f1020] sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-12 text-center sm:mb-16"
        >
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-[#4e516a] transition-colors duration-500 dark:text-white/50">
            What We Do
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl text-[28px] font-medium leading-[1.05] tracking-tight text-[#202342] dark:text-white sm:text-[40px] sm:tracking-[-1.5px] lg:text-[48px]">
            Services that ship results
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-[#4e516a] dark:text-white/60 sm:text-base">
            From frontend pixels to backend infrastructure — we cover the full
            spectrum of digital product development.
          </p>
        </motion.div>

        {/* Service cards — same 3D flip cards as the services page */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {previewServices.map((s, i) => (
            <ServiceCard key={i} s={s} index={i} />
          ))}
        </div>

        {/* See all services button */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
          className="mt-12 text-center sm:mt-16"
        >
          <PixelButton href="/services">See all services</PixelButton>
        </motion.div>
      </div>
    </section>
  );
}
