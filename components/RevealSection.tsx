"use client";

import { useEffect, useRef, ReactNode } from "react";

type RevealSectionProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

/**
 * Wraps children in a scroll-reveal container using IntersectionObserver.
 * Applies the `.reveal` CSS class and adds `.visible` on intersection.
 */
export function RevealSection({
  children,
  delay = 0,
  className = "",
}: RevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
