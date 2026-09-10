"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PixelButton from "@/components/PixelButton";

const EASE = [0.16, 1, 0.3, 1] as const;

const tiers = [
  {
    name: "Launch",
    subtitle: "Fixed scope, fixed price",
    price: "$8k",
    priceLabel: "starting at",
    desc: "Perfect for new websites, landing pages, and well-defined projects with a clear business goal.",
    features: [
      "Strategy session to define your goals",
      "Senior team assigned to your project",
      "2–6 week delivery timeline",
      "Design, build, and launch included",
      "30 days of post-launch support",
    ],
    popular: false,
  },
  {
    name: "Growth",
    subtitle: "Monthly partnership",
    price: "$6k",
    priceLabel: "per month",
    desc: "An ongoing partnership to continuously improve your online presence and customer acquisition.",
    features: [
      "Dedicated expert on your project",
      "Quick responses, same-week updates",
      "Direct communication with your team",
      "Scale up or down as your needs change",
      "Monthly strategy and progress reviews",
    ],
    popular: true,
  },
  {
    name: "Scale",
    subtitle: "Full partnership",
    price: "Custom",
    priceLabel: "tailored to your goals",
    desc: "A complete team strategy, design, and development owning your digital growth end-to-end.",
    features: [
      "Complete digital strategy and execution",
      "Strategy + design + development team",
      "Quarterly business growth planning",
      "Priority support and fast turnaround",
      "Dedicated project lead",
    ],
    popular: false,
  },
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 shrink-0">
      <path d="M5 10l3 3 7-7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function PricingTiers() {
  return (
    <section className="relative overflow-hidden bg-white py-16 transition-colors duration-500 dark:bg-[#0f1020] sm:py-24">
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/4 left-1/2 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-[#4555fd]/8 blur-[120px] sm:h-[500px] sm:w-[800px] sm:blur-[180px]"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12 max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-[#4e516a] dark:text-white/50"
          >
            Investment
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            className="mt-4 text-[28px] font-medium leading-[1.1] tracking-tight text-[#202342] dark:text-white sm:text-[40px] sm:tracking-[-1.2px]"
          >
            Pricing that grows with you
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
            className="mt-4 text-sm text-[#4e516a] dark:text-white/60 sm:text-base"
          >
            Three ways to work with us. Pick the model that fits where your
            business is today switch as your needs change.
          </motion.p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.1 }}
              className={`relative flex flex-col rounded-3xl border p-6 transition-all duration-300 sm:p-8 ${
                tier.popular
                  ? "border-[#4555fd] bg-gradient-to-b from-[#4555fd]/8 to-transparent shadow-[0_8px_40px_rgba(69,85,253,0.12)] dark:border-[#6b78ff] dark:from-[#6b78ff]/10 dark:to-transparent dark:shadow-[0_8px_40px_rgba(107,120,255,0.15)] lg:scale-[1.03]"
                  : "border-[#202342]/10 bg-[#f5f6fa] hover:border-[#202342]/20 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20"
              }`}
            >
              {/* Popular badge */}
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#4555fd] px-4 py-1 text-xs font-bold text-white dark:bg-[#6b78ff]">
                  Most popular
                </span>
              )}

              {/* Header */}
              <div>
                <h3 className="text-xl font-medium text-[#202342] dark:text-white">
                  {tier.name}
                </h3>
                <p className="mt-1 text-xs text-[#4e516a] dark:text-white/50">
                  {tier.subtitle}
                </p>
              </div>

              {/* Price */}
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-bold tracking-tight text-[#202342] dark:text-white">
                  {tier.price}
                </span>
                <span className="text-xs text-[#4e516a] dark:text-white/50">
                  {tier.priceLabel}
                </span>
              </div>

              {/* Description */}
              <p className="mt-4 text-sm leading-relaxed text-[#4e516a] dark:text-white/60">
                {tier.desc}
              </p>

              {/* Features */}
              <ul className="mt-6 flex-1 space-y-3">
                {tier.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-2.5">
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        tier.popular
                          ? "bg-[#4555fd]/15 text-[#4555fd] dark:bg-[#6b78ff]/20 dark:text-[#6b78ff]"
                          : "bg-[#202342]/8 text-[#4e516a] dark:bg-white/10 dark:text-white/50"
                      }`}
                    >
                      <CheckIcon />
                    </span>
                    <span className="text-sm text-[#202342] dark:text-white/80">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-8 flex justify-center">
                <PixelButton
                  href="/contact"
                  showArrow={false}
                  bgClassName={
                    tier.popular
                      ? "bg-[#4555fd] dark:bg-[#6b78ff]"
                      : "bg-[#202342] dark:bg-white"
                  }
                  textClassName={
                    tier.popular
                      ? "text-white dark:text-black"
                      : "text-white dark:text-black"
                  }
                  fillColor={tier.popular ? "#3a47d4" : "#4555fd"}
                >
                  Get started
                </PixelButton>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Helper line */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
          className="mt-10 text-center text-sm text-[#4e516a] dark:text-white/50"
        >
          All projects include NDA, full ownership, and a 14-day satisfaction guarantee.{" "}
          <Link
            href="/contact"
            className="font-medium text-[#4555fd] underline-offset-4 transition-colors hover:underline dark:text-[#6b78ff]"
          >
            Not sure which fits?
          </Link>{" "}
          we&apos;ll point you to the right one.
        </motion.p>
      </div>
    </section>
  );
}
