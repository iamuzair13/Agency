"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * SmoothScroll — wraps the app with Lenis smooth scrolling.
 *
 * Replicates the exact setup from ikonic-dev-template.vercel.app:
 * - Lenis v1.3.x with default options (lerp: 0.1, smoothWheel: true)
 * - autoRaf: false (we drive the RAF loop manually for tight control)
 * - Integrates with framer-motion's useScroll via Lenis's scroll event
 *
 * The `lenis` class is automatically added to <html> by Lenis.
 * See globals.css for the required Lenis CSS rules.
 */
export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: false,
      anchors: true,
    });

    // Drive Lenis with requestAnimationFrame for smooth, premium scrolling
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Expose globally for debugging / programmatic scroll
    (window as unknown as { lenis: Lenis }).lenis = lenis;

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      (window as unknown as { lenis?: Lenis }).lenis = undefined;
    };
  }, []);

  return <>{children}</>;
}
