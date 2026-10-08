"use client";

import { useEffect } from "react";

/** Fades in any element with the .rv class as it scrolls into view. */
export default function Reveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".rv:not(.in)");
    if (!("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -6% 0px", threshold: 0.05 }
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  });
  return null;
}
