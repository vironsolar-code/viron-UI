"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const ITEMS = [
  { label: "Home", href: "#" },
  { label: "Why Choose Us", href: "#" },
  { label: "Calculator", href: "#" },
  { label: "About", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Projects", href: "#" },
];

const logo = {
  url: "/",
  title: "Kyren Solar",
};

export function TopNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <a href={logo.url} className="flex items-center gap-2" title={logo.title}>
          <span className="text-xl font-bold text-[var(--color-neutral-black)]">
            Kyren Solar
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-4 lg:flex">
          {ITEMS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                "text-sm font-medium text-muted-foreground hover:text-[var(--color-neutral-black)] transition-colors"
              )}
            >
              {link.label}
            </a>
          ))}

          <a href="#quote">
            <Button
              style={{ backgroundColor: "#FF6B35" }}
              className="text-white hover:bg-[var(--color-orange-light)] transition-colors"
            >
              <span className="relative z-10">Get a Quote</span>
            </Button>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="relative flex size-8 text-muted-foreground lg:hidden"
          onClick={() => setIsMenuOpen((p) => !p)}
          aria-expanded={isMenuOpen}
          aria-label="Open main menu"
        >
          <span className="sr-only">Open main menu</span>
          <div className="absolute left-1/2 top-1/2 block w-[18px] -translate-x-1/2 -translate-y-1/2">
            <span
              aria-hidden="true"
              className={cn(
                "absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out",
                isMenuOpen ? "rotate-45" : "-translate-y-1.5"
              )}
            />
            <span
              aria-hidden="true"
              className={cn(
                "absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out",
                isMenuOpen ? "opacity-0" : ""
              )}
            />
            <span
              aria-hidden="true"
              className={cn(
                "absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out",
                isMenuOpen ? "-rotate-45" : "translate-y-1.5"
              )}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden",
          isMenuOpen
            ? "visible max-h-[100vh] opacity-100"
            : "invisible max-h-0 opacity-0",
          "transition-all duration-300 ease-in-out"
        )}
      >
        <div className="border-t bg-background p-4">
          <nav className="flex flex-col divide-y divide-border">
            {ITEMS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="py-3 text-base font-medium text-primary transition-colors first:pt-0 last:pb-0 hover:text-primary/80"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4">
              <a href="#quote" onClick={() => setIsMenuOpen(false)}>
                <Button
                  style={{ backgroundColor: "#FF6B35" }}
                  className="w-full text-white hover:bg-[var(--color-orange-light)] transition-colors"
                >
                  Get a Quote
                </Button>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </nav>
  );
}
