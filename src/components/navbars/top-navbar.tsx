"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Calculator", href: "#solar-calculator-section" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "/blog" },
];

const logo = {
  url: "/",
  title: "Viron Solar",
};

export function TopNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#') && href.length > 1) {
      e.preventDefault();

      // If we're not on the homepage and clicking a section link, navigate to homepage first
      if (pathname !== '/' && href !== '#home') {
        router.push(`/${href}`);
        return;
      }

      // Handle home link - if not on homepage, go to homepage
      if (href === '#home' && pathname !== '/') {
        router.push('/');
        return;
      }

      // Smooth scroll to section
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (href === '/blog') {
      e.preventDefault();
      alert('Blog section coming soon! Check out our solar insights in the About section.');
      // Navigate to about section as fallback
      if (pathname === '/') {
        const el = document.querySelector('#about');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        router.push('/#about');
      }
    }
  };

  const handleQuoteClick = () => {
    // Always navigate directly to quote page for immediate conversion
    router.push('/quote');
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <a href={logo.url} className="flex items-center gap-2" title={logo.title}>
          <img 
            src="/logo.png" 
            alt="Viron Solar" 
            className="h-8 w-auto"
          />
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
              onClick={e => handleSmoothScroll(e, link.href)}
            >
              {link.label}
            </a>
          ))}

          <Button
            onClick={handleQuoteClick}
            style={{ backgroundColor: "#FF6B35" }}
            className="text-white hover:bg-[#E55A2B] active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
          >
            <span className="relative z-10">Get a Quote</span>
          </Button>
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
              <Button
                onClick={() => {
                  setIsMenuOpen(false);
                  handleQuoteClick();
                }}
                style={{ backgroundColor: "#FF6B35" }}
                className="w-full text-white hover:bg-[#E55A2B] active:scale-[0.98] transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
              >
                Get a Quote
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </nav>
  );
}
