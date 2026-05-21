"use client";

import { useInView } from "react-intersection-observer";

export function useScrollReveal(threshold = 0.1) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
    rootMargin: "-100px",
  });

  return { ref, inView };
}
