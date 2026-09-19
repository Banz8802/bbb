"use client";

import { useState, useEffect, useRef } from "react";
import {
  BarChart3,
  Megaphone,
  Palette,
  PenLine,
  Target,
  Workflow,
} from "lucide-react";
import { services } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";

const icons = [Target, Megaphone, PenLine, BarChart3, Workflow, Palette];

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll reveal
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".reveal").forEach((node, i) => {
            setTimeout(() => node.classList.add("visible"), i * 80);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const active = services[activeIndex];
  const ActiveIcon = icons[activeIndex];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="bg-white py-20 sm:py-28"
    >
      <div className="section-shell">
        <div className="reveal">
          <SectionHeader
            eyebrow="What we do"
            title="A complete brand growth engine"
            copy="We combine strategy, content, and paid advertising for authors, speakers, organizations, and service-based teams."
          />
        </div>

        {/* Desktop interactive split panel */}
        <div className="mt-16 hidden gap-0 overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-card lg:grid lg:grid-cols-[2fr_3fr]">
          {/* Left — service list */}
          <div className="border-r border-slate-200">
            {services.map((service, index) => {
              const Icon = icons[index];
              const isActive = index === activeIndex;
              return (
                <button
                  key={service.title}
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className={`flex w-full items-center gap-4 border-b border-slate-200 px-7 py-5 text-left transition-all duration-200 last:border-b-0 focus-visible:outline-none ${
                    isActive
                      ? "bg-navy text-white"
                      : "text-navy hover:bg-slate-100"
                  }`}
                  aria-pressed={isActive}
                >
                  <span
                    className={`font-display text-xs font-bold tabular-nums ${
                      isActive ? "text-gold" : "text-slate-400"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-md transition-colors ${
                      isActive ? "bg-gold/20 text-gold" : "bg-navy/8 text-steel"
                    }`}
                  >
                    <Icon aria-hidden="true" size={18} />
                  </div>
                  <span
                    className={`text-sm font-black ${
                      isActive ? "text-white" : "text-navy"
                    }`}
                  >
                    {service.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right — active detail panel */}
          <div
            key={activeIndex}
            className="flex flex-col justify-center p-10 animate-fade-in"
          >
            <div className="grid h-14 w-14 place-items-center rounded-xl bg-navy text-gold shadow-card">
              <ActiveIcon aria-hidden="true" size={26} />
            </div>
            <h3 className="mt-6 font-display text-3xl font-bold text-navy">
              {active.title}
            </h3>
            <p className="mt-3 text-lg leading-8 text-slate-600">
              {active.description}
            </p>
            {active.points.length > 0 && (
              <ul className="mt-7 space-y-3">
                {active.points.map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <span className="text-sm font-semibold text-slate-700">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Mobile — stacked cards */}
        <div className="mt-12 grid gap-4 lg:hidden">
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <article
                key={service.title}
                className="reveal rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-navy text-gold">
                    <Icon aria-hidden="true" size={22} />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-black text-navy">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>
                {service.points.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
