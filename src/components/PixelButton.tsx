"use client";

import Link from "next/link";
import { forwardRef } from "react";

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)" as const;

type PixelButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  arrowClassName?: string;
  /** Override the fill color for primary buttons (defaults to #4555fd) */
  fillColor?: string;
  /** Text color class for the button text (e.g. "text-white dark:text-[#202342]") */
  textClassName?: string;
  /** Background class for the button (e.g. "bg-[#202342] dark:bg-white") */
  bgClassName?: string;
  /** Arrow circle bg class (e.g. "bg-white dark:bg-[#202342]") */
  arrowBgClassName?: string;
  /** Arrow icon color class */
  arrowColorClassName?: string;
  /** Show the arrow circle (default true for primary, false for secondary) */
  showArrow?: boolean;
  /** External link? */
  external?: boolean;
};

/**
 * PixelButton — replicates the hero section's pixel-perfect button animation:
 * 1. Background fill sweep (scale-x-0 → scale-x-100, left to right)
 * 2. Text slide-up (two copies, first slides up & fades, second slides in from below)
 * 3. Arrow circle slide (arrow slides out right, duplicate slides in from left)
 *
 * All transitions use the project's signature easing: cubic-bezier(0.16, 1, 0.3, 1)
 */
const PixelButton = forwardRef<HTMLAnchorElement, PixelButtonProps>(
  (
    {
      href,
      children,
      variant = "primary",
      className = "",
      fillColor,
      textClassName,
      bgClassName,
      arrowBgClassName,
      arrowColorClassName,
      showArrow,
      external = false,
    },
    ref
  ) => {
    const isPrimary = variant === "primary";
    const hasArrow = showArrow ?? isPrimary;

    // Default styles per variant
    const defaultBg = isPrimary
      ? "bg-[#202342] dark:bg-white"
      : "border border-[#202342]/15 dark:border-white/15";
    const defaultText = isPrimary
      ? "text-white dark:text-[#202342]"
      : "text-[#202342] dark:text-white";
    const defaultArrowBg = isPrimary
      ? "bg-white dark:bg-[#202342]"
      : "bg-[#202342] dark:bg-white";
    const defaultArrowColor = isPrimary
      ? "text-[#202342] dark:text-white"
      : "text-white dark:text-[#202342]";

    const bg = bgClassName || defaultBg;
    const text = textClassName || defaultText;
    const arrowBg = arrowBgClassName || defaultArrowBg;
    const arrowColor = arrowColorClassName || defaultArrowColor;
    const fill = fillColor || "#4555fd";

    const linkProps = external
      ? { href, target: "_blank", rel: "noopener noreferrer" }
      : { href };

    return (
      <Link
        ref={ref}
        {...linkProps}
        className={`group relative inline-flex h-12 items-center justify-center gap-3 overflow-hidden rounded-full py-3 pl-7 pr-2 text-sm font-bold tracking-tight sm:h-auto ${bg} ${className}`}
      >
        {/* 1. Background fill sweep (primary only) */}
        {isPrimary && (
          <span
            className="absolute inset-0 origin-left scale-x-0 rounded-full transition-transform duration-1000 group-hover:scale-x-100"
            style={{ backgroundColor: fill, transitionTimingFunction: EASE }}
          />
        )}

        {/* Secondary: subtle bg fill from left */}
        {!isPrimary && (
          <span
            className="absolute inset-0 origin-left scale-x-0 rounded-full bg-[#202342]/5 transition-transform duration-1000 group-hover:scale-x-100 dark:bg-white/8"
            style={{ transitionTimingFunction: EASE }}
          />
        )}

        {/* 2. Text slide-up */}
        <span className="relative z-10 h-5 overflow-hidden">
          <span
            className={`block h-5 leading-5 ${text} transition-all duration-1000 group-hover:-translate-y-full group-hover:scale-110 group-hover:opacity-0`}
            style={{ transitionTimingFunction: EASE }}
          >
            {children}
          </span>
          <span
            className={`absolute left-0 top-full block h-5 origin-bottom scale-90 leading-5 ${text} transition-all duration-1000 group-hover:-translate-y-full group-hover:scale-100`}
            style={{ transitionTimingFunction: EASE }}
          >
            {children}
          </span>
        </span>

        {/* 3. Arrow circle slide */}
        {hasArrow && (
          <span
            className={`relative z-10 flex h-9 w-9 items-center justify-center overflow-hidden rounded-full ${arrowBg}`}
          >
            {/* Arrow that slides out to the right on hover */}
            <span
              className={`absolute inset-0 flex items-center justify-center ${arrowColor} transition-all duration-1000 group-hover:translate-x-full`}
              style={{ transitionTimingFunction: EASE }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4"
              >
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            {/* Arrow that slides in from the left on hover */}
            <span
              className={`absolute inset-0 flex -translate-x-full items-center justify-center ${arrowColor} transition-all duration-1000 group-hover:translate-x-0`}
              style={{ transitionTimingFunction: EASE }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4"
              >
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </span>
        )}
      </Link>
    );
  }
);

PixelButton.displayName = "PixelButton";

export default PixelButton;
