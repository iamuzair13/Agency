"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// ─── Service data ─────────────────────────────────────────────
export const services = [
  {
    num: "01",
    title: "Frontend Development",
    bg: "#2563eb",
    fg: "#ffffff",
    features: [
      "Pixel-perfect, responsive UIs with React, Next.js & Tailwind CSS.",
      "Type-safe codebase with TypeScript end-to-end, zero any types.",
      "Lighthouse 90+ scores on performance, accessibility & SEO.",
      "Server-side rendering and static generation for maximum speed.",
      "Design system with reusable components documented in Storybook.",
      "Cross-browser tested on Chrome, Safari, Firefox & Edge.",
    ],
  },
  {
    num: "02",
    title: "Backend Development",
    bg: "#7c3aed",
    fg: "#ffffff",
    features: [
      "REST & GraphQL APIs with clean architecture and full documentation.",
      "PostgreSQL & MongoDB databases designed for scale and performance.",
      "JWT & OAuth authentication with role-based access control.",
      "Payment integration with Stripe, PayPal & subscription billing.",
      "Rate limiting, caching & security hardening out of the box.",
      "Automated testing with 80%+ coverage on critical paths.",
    ],
  },
  {
    num: "03",
    title: "Full Stack Dev",
    bg: "#0c1530",
    fg: "#ffffff",
    features: [
      "End-to-end product builds from database schema to deployed UI.",
      "CI/CD pipelines with GitHub Actions for automated deployments.",
      "Docker containerization & cloud hosting on AWS, Vercel or Railway.",
      "Real-time features with WebSockets & Server-Sent Events.",
      "Admin dashboards & analytics built into every product.",
      "Full code handover with documentation on day one, no lock-in.",
    ],
  },
  {
    num: "04",
    title: "Graphic Designing",
    bg: "#db2777",
    fg: "#ffffff",
    features: [
      "Brand identity systems — logo, color palette, typography & guidelines.",
      "Marketing collateral: brochures, flyers, business cards & decks.",
      "Social media kits with templates for posts, stories & ads.",
      "Print-ready artwork with proper bleed, margins & color profiles.",
      "Icon sets & illustration packs custom-drawn for your brand.",
      "Unlimited revisions until you love the final result, guaranteed.",
    ],
  },
  {
    num: "05",
    title: "UI/UX Design",
    bg: "#059669",
    fg: "#ffffff",
    features: [
      "User research, personas & journey maps to inform every decision.",
      "Low-fi wireframes to high-fi interactive Figma prototypes.",
      "Design systems with tokens, components & documentation.",
      "Usability testing with real users before a single line of code.",
      "Accessibility-first design meeting WCAG 2.1 AA standards.",
      "Developer handoff with specs, assets & redlines in Figma.",
    ],
  },
  {
    num: "06",
    title: "Motion Graphics",
    bg: "#ea580c",
    fg: "#ffffff",
    features: [
      "Animated logos & brand stingers that make first impressions count.",
      "Explainer videos that simplify complex products in 60 seconds.",
      "Lottie animations for web & mobile — lightweight & scalable.",
      "Social media motion content for reels, stories & ads.",
      "Title cards, lower thirds & transitions for video content.",
      "Sound design & music sync to bring motion to life.",
    ],
  },
  {
    num: "07",
    title: "Animations",
    bg: "#4f46e5",
    fg: "#ffffff",
    features: [
      "Micro-interactions & hover states that make UIs feel alive.",
      "Scroll-triggered animations with Framer Motion & GSAP.",
      "Page transitions & route animations for seamless SPA feel.",
      "3D transforms & WebGL effects with Three.js & R3F.",
      "Loading states & skeleton screens that delight, not frustrate.",
      "Performance-optimized — 60fps animations on mobile devices.",
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
        {/* Front face — full content (visible after flip) */}
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

        {/* Back face — name only (visible before flip) */}
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
