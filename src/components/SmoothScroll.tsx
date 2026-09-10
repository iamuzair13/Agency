"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * SmoothScroll wraps the app with Lenis smooth scrolling.
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

    // Drive Lenis with requestAnimationFrame but only while scrolling.
    // When the user stops scrolling, we cancel the RAF loop to save CPU/battery.
    //
    // IMPORTANT: We must listen for wheel/touch/keyboard events to restart
    // the RAF loop, not just Lenis's "scroll" event. Lenis only fires
    // "scroll" *inside* the RAF loop, so if the RAF is stopped, Lenis can't
    // process new input and "scroll" never fires a deadlock. Listening for
    // the raw user input events breaks the cycle.
    let rafId: number | null = null;
    let idleTimer: ReturnType<typeof setTimeout> | null = null;

    function startRaf() {
      if (rafId !== null) return; // already running
      function raf(time: number) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);
    }

    function stopRaf() {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    }

    function onUserScroll() {
      // (Re)start the RAF loop and reset the idle timer.
      startRaf();
      if (idleTimer) clearTimeout(idleTimer);
      idleTimer = setTimeout(stopRaf, 200); // stop ~200ms after last input
    }

    // Listen for raw user input that initiates scrolling.
    window.addEventListener("wheel", onUserScroll, { passive: true });
    window.addEventListener("touchmove", onUserScroll, { passive: true });
    window.addEventListener("keydown", onUserScroll, { passive: true });
    // Also listen for Lenis's own scroll event to keep the RAF alive
    // while momentum scrolling continues after the user lets go.
    lenis.on("scroll", onUserScroll);

    // Kick off the first frame so the initial position is correct.
    startRaf();

    // Expose globally for debugging / programmatic scroll
    (window as unknown as { lenis: Lenis }).lenis = lenis;

    return () => {
      if (idleTimer) clearTimeout(idleTimer);
      stopRaf();
      window.removeEventListener("wheel", onUserScroll);
      window.removeEventListener("touchmove", onUserScroll);
      window.removeEventListener("keydown", onUserScroll);
      lenis.destroy();
      (window as unknown as { lenis?: Lenis }).lenis = undefined;
    };
  }, []);

  return <>{children}</>;
}
