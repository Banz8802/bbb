"use client";

import { useState, useRef, TouchEvent } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";
import { RevealSection } from "./RevealSection";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = testimonials.length;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 40;

    if (distance > minSwipeDistance) {
      // Swiped Left -> Next
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      // Swiped Right -> Prev
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section id="testimonials" className="bg-[#f8fafc] py-20 sm:py-28">
      <div className="section-shell">
        <RevealSection>
          <SectionHeader
            eyebrow="Client Testimonials"
            title="Trusted by ambitious leaders across Australia & Asia-Pacific"
            copy="Discover how our strategic brand positioning, content systems, and Meta ad campaigns drive measurable growth for market leaders."
          />
        </RevealSection>

        {/* ========================================================
            DESKTOP VIEW (3-Column Grid on lg screens)
           ======================================================== */}
        <div className="mt-14 hidden gap-6 lg:grid lg:grid-cols-3">
          {testimonials.map((item, idx) => (
            <RevealSection key={item.name} delay={idx * 80}>
              <CardContent item={item} />
            </RevealSection>
          ))}
        </div>

        {/* ========================================================
            MOBILE VIEW (1 Card at a Time, Infinite Swipe Slider)
           ======================================================== */}
        <div className="mt-10 block lg:hidden">
          <RevealSection>
            <div
              className="relative touch-pan-y overflow-hidden rounded-2xl"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Carousel Track */}
              <div
                className="flex transition-transform duration-300 ease-smooth"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((item) => (
                  <div key={item.name} className="w-full shrink-0 px-1">
                    <CardContent item={item} />
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Controls & Pagination Dots */}
            <div className="mt-6 flex items-center justify-between px-2">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous testimonial"
                className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-navy shadow-sm transition hover:bg-navy hover:text-white"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Pagination Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((item, i) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      i === activeIndex
                        ? "w-7 bg-gold"
                        : "w-2.5 bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next testimonial"
                className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-navy shadow-sm transition hover:bg-navy hover:text-white"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}

{/* Shared Card Content Component */}
function CardContent({ item }: { item: (typeof testimonials)[number] }) {
  return (
    <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-card-hover sm:p-8">
      {/* Decorative quote mark watermark */}
      <Quote
        aria-hidden="true"
        className="absolute -right-2 -top-2 h-20 w-20 text-slate-100 transition-colors group-hover:text-gold/10"
      />

      <div className="relative">
        {/* Star Rating */}
        <div className="flex items-center gap-1 text-gold">
          {Array.from({ length: item.rating }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className="fill-gold text-gold"
              aria-hidden="true"
            />
          ))}
        </div>

        {/* Quote Body */}
        <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
          &ldquo;{item.quote}&rdquo;
        </p>
      </div>

      {/* Author Info */}
      <div className="relative mt-8 flex items-center gap-3.5 border-t border-slate-100 pt-5">
        {/* Avatar Initials Badge */}
        <div
          className={`grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br ${item.avatarBg} text-sm font-black text-white shadow-sm ring-2 ring-slate-100`}
        >
          {item.initials}
        </div>

        <div className="flex flex-col min-w-0">
          <span className="truncate font-display text-base font-bold text-navy">
            {item.name}
          </span>
          <span className="truncate text-xs font-medium text-slate-500">
            {item.role} &bull; {item.company}
          </span>
          <span className="mt-1 inline-flex w-fit items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600">
            📍 {item.location}
          </span>
        </div>
      </div>
    </article>
  );
}
