"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Results", href: "#work" },
  { label: "Work", href: "#graphic-work" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setMobileOpen(false);
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 backdrop-blur-md border-b border-white/10 ${
          scrolled
            ? "bg-navy/95 shadow-md"
            : "bg-navy/85 shadow-soft"
        }`}
        role="banner"
      >
        <div className="section-shell flex h-[72px] items-center justify-between">
          {/* Logo */}
          <a href="#" aria-label="Building Better Brands — home" onClick={closeMobile}>
            <Logo />
          </a>

          {/* Desktop nav */}
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-1 lg:flex"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="link-underline px-4 py-2 text-sm font-semibold text-white/80 transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 inline-flex items-center rounded-md bg-gold px-5 py-2.5 text-sm font-black text-navy transition-all duration-200 hover:bg-white hover:shadow-md"
            >
              Let&apos;s Talk
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="grid h-10 w-10 place-items-center rounded-md text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            {mobileOpen ? (
              <X aria-hidden="true" size={22} />
            ) : (
              <Menu aria-hidden="true" size={22} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-label="Mobile navigation"
          aria-modal="true"
          className="mobile-menu-enter fixed inset-0 z-40 flex flex-col bg-navy pt-[72px]"
        >
          <nav className="flex flex-col gap-1 p-5" aria-label="Mobile navigation">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                style={{ animationDelay: `${i * 60}ms` }}
                className="reveal visible border-b border-white/10 py-4 text-xl font-bold text-white transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={closeMobile}
              className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-gold px-6 py-4 text-base font-black text-navy transition hover:bg-white"
            >
              Let&apos;s Talk
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
