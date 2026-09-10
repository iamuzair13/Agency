"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// ─── Service data ─────────────────────────────────────────────
export const services = [
  {
    num: "01",
    title: "High-Converting Websites",
    bg: "#2563eb",
    fg: "#ffffff",
    features: [
      "Websites that turn visitors into paying customers not just pretty pages.",
      "Mobile-first design that looks stunning on every screen your customers use.",
      "Lightning-fast load speeds that keep bounce rates low and engagement high.",
      "SEO built in from day one so Google sends you free traffic for years.",
      "Conversion-optimized layouts backed by user behavior research.",
      "A website that works as your best salesperson 24 hours a day, 7 days a week.",
    ],
  },
  {
    num: "02",
    title: "Scalable Business Systems",
    bg: "#7c3aed",
    fg: "#ffffff",
    features: [
      "Custom platforms that handle thousands of customers without breaking a sweat.",
      "Secure payment processing that makes checkout effortless for your buyers.",
      "Customer accounts, dashboards, and self-service portals your users will love.",
      "Automated workflows that save your team hours of manual work every week.",
      "Inventory, bookings, and orders managed in one place no more spreadsheets.",
      "Built to grow with you from your first 100 customers to your first million.",
    ],
  },
  {
    num: "03",
    title: "Complete Digital Products",
    bg: "#0c1530",
    fg: "#ffffff",
    features: [
      "From idea to launch we handle everything so you can focus on your business.",
      "Your product live in weeks, not months, with weekly progress you can see.",
      "Real customer feedback built into the process from day one.",
      "Admin panels and analytics that show you exactly how your business is performing.",
      "You own everything your product, your data, your customers. No lock-in, ever.",
      "Post-launch support that keeps your product running smoothly after go-live.",
    ],
  },
  {
    num: "04",
    title: "Brand Identity Design",
    bg: "#db2777",
    fg: "#ffffff",
    features: [
      "A brand that customers remember, trust, and choose over competitors.",
      "Logo, colors, and typography that make you look established from day one.",
      "Marketing materials that look premium brochures, decks, and business cards.",
      "Social media templates your team can use to post consistently and professionally.",
      "A brand guide that keeps everyone on the same page as you grow.",
      "Unlimited revisions until you are absolutely proud of how your brand looks.",
    ],
  },
  {
    num: "05",
    title: "Customer Experience Design",
    bg: "#059669",
    fg: "#ffffff",
    features: [
      "Designs based on real customer research not guesses or assumptions.",
      "User journeys that guide customers naturally toward buying from you.",
      "Interactive prototypes you can click through before we build anything.",
      "Usability tested with real people so your customers never get frustrated.",
      "Accessible to every customer including those with disabilities.",
      "An experience so smooth your customers will tell their friends about it.",
    ],
  },
  {
    num: "06",
    title: "Brand Storytelling Videos",
    bg: "#ea580c",
    fg: "#ffffff",
    features: [
      "Videos that explain your product in 60 seconds and make customers want it.",
      "Animated brand intros that make every first impression unforgettable.",
      "Social media video content that stops the scroll and drives engagement.",
      "Product demos that show customers exactly why they need what you offer.",
      "Motion that brings your brand personality to life across every channel.",
      "Content optimized for every platform Instagram, YouTube, your website, and more.",
    ],
  },
  {
    num: "07",
    title: "Interactive Experiences",
    bg: "#4f46e5",
    fg: "#ffffff",
    features: [
      "Websites that feel alive customers stay longer and explore more.",
      "Scroll animations that reveal your story step by step, keeping visitors engaged.",
      "Smooth page transitions that make your site feel like a premium app.",
      "Interactive product showcases that let customers explore before they buy.",
      "Loading states and micro-interactions that make every click feel satisfying.",
      "Buttery-smooth performance on every device no jank, no lag, no frustration.",
    ],
  },
];

export const totalServices = services.length;

// ─── Check icon ───────────────────────────────────────────────
function CheckIcon({ color }: { color: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3 w-3"
      style={{ color }}
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

// ─── 3D Flip Service Card ─────────────────────────────────────
export function ServiceCard({ s, index }: { s: (typeof services)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const goToContact = () => router.push("/contact");

  // Scroll progress: 0 = card entering from bottom, 1 = card leaving from top
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Two flips total:
  // 1st flip: back→front when card enters view
  // 2nd flip: front→back when card leaves view
  // 0.00–0.40 → 180deg  (back face, name only)
  // 0.40–0.45 → 0deg    (snaps to front face, full content)
  // 0.45–0.85 → 0deg    (stays on front face)
  // 0.85–0.90 → 180deg  (snaps back to back face)
  // 0.90–1.00 → 180deg  (back face, name only)
  const rawRotate = useTransform(
    scrollYProgress,
    [0, 0.4, 0.45, 0.85, 0.9, 1],
    [180, 180, 0, 0, 180, 180]
  );
  const rotateY = useSpring(rawRotate, {
    stiffness: 200,
    damping: 30,
    mass: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      role="link"
      tabIndex={0}
      aria-label={`Start a project ${s.title}`}
      onClick={goToContact}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          goToContact();
        }
      }}
      className="group relative h-[460px] w-full cursor-pointer sm:h-[480px] md:h-auto md:aspect-[3/4]"
      style={{ perspective: "1400px" }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          transformStyle: "preserve-3d",
          rotateY,
        }}
      >
        {/* Front face full content (visible after flip) */}
        <div
          className="absolute inset-0 flex flex-col overflow-hidden rounded-3xl p-6 text-white md:rounded-[2rem] md:p-7 lg:p-8"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            backgroundColor: s.bg,
          }}
        >
          {/* Header */}
          <div className="mb-5 flex items-center justify-between md:mb-6">
            <div className="text-[1.5rem] font-semibold leading-tight tracking-tight text-white md:text-[1.75rem]">
              {s.title}
            </div>
            <span
              className="text-[10px] font-mono uppercase tracking-[0.18em] text-white/55"
            >
              {s.num} / {String(totalServices).padStart(2, "0")}
            </span>
          </div>

          {/* Feature list */}
          <ul className="flex flex-1 flex-col gap-3 md:gap-3.5">
            {s.features.map((f, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 transition-all duration-300 group-hover:translate-x-1"
                style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)", transitionDelay: `${i * 40}ms` }}
              >
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: s.fg }}
                >
                  <CheckIcon color={s.bg} />
                </span>
                <span
                  className="text-[13.5px] leading-relaxed md:text-[14.5px]"
                >
                  {f}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Back face name only (visible before flip) */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden rounded-3xl p-6 text-white md:rounded-[2rem]"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            backgroundColor: s.bg,
          }}
        >
          {/* Grid pattern */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
              maskImage:
                "radial-gradient(60% 60%, black 0%, transparent 80%)",
              WebkitMaskImage:
                "radial-gradient(60% 60%, black 0%, transparent 80%)",
            }}
          />
          <span
            className="relative mb-4 text-[10px] font-mono uppercase tracking-[0.22em] text-white/55 md:text-[11px]"
          >
            {s.num} / {String(totalServices).padStart(2, "0")}
          </span>
          <div
            className="relative text-center text-[2rem] font-semibold leading-tight tracking-tight text-white transition-transform duration-500 group-hover:scale-105 md:text-[2.5rem]"
          >
            {s.title}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
