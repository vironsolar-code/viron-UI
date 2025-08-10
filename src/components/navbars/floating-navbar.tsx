"use client";

import { ChevronRight } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger } from
"@/components/ui/navigation-menu";

const ITEMS = [
{ label: "Home", href: "#" },
{ label: "Why Choose Us", href: "#" },
{ label: "Calculator", href: "#" },
{ label: "About", href: "#" },
{ label: "Blog", href: "#" },
{ label: "Projects", href: "#" }];


const logo = {
  url: "#",
  title: "Kyren Solar"
};

const FloatingNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <section className="absolute top-5 left-1/2 z-50 w-[min(90%,700px)] -translate-x-1/2 rounded-full border bg-white/70 backdrop-blur-md lg:top-12">
      <div className="flex items-center justify-between px-6 py-3">
        <a href={logo.url} className="flex shrink-0 items-center gap-2" title={logo.title}>
          <span className="text-xl font-bold text-[var(--color-neutral-black)] !w-full !h-full">Kyren Solar</span>
        </a>

        {/* Desktop Navigation */}
        <NavigationMenu className="max-lg:hidden">
          <NavigationMenuList>
            {ITEMS.map((link) =>
            <NavigationMenuItem key={link.label} className="">
                <a
                href={link.href}
                className={cn(
                  "relative bg-transparent px-1.5 text-sm font-medium text-muted-foreground hover:text-[var(--color-neutral-black)] transition-colors"
                )}>

                  {link.label}
                </a>
              </NavigationMenuItem>
            )}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Get Quote Button */}
        <div className="flex items-center gap-2.5">
          <a href="#quote" className="max-lg:hidden">
            <Button style={{ backgroundColor: '#FF6B35' }} className="text-white hover:bg-[var(--color-orange-light)] transition-colors">
              <span className="relative z-10">Get a Quote</span>
            </Button>
          </a>

          {/* Hamburger Menu Button (Mobile Only) */}
          <button
            className="relative flex size-8 text-muted-foreground lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>

            <span className="sr-only">Open main menu</span>
            <div className="absolute top-1/2 left-1/2 block w-[18px] -translate-x-1/2 -translate-y-1/2">
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "rotate-45" : "-translate-y-1.5"}`}>
              </span>
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "opacity-0" : ""}`}>
              </span>
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "-rotate-45" : "translate-y-1.5"}`}>
              </span>
            </div>
          </button>
        </div>
      </div>

      {/*  Mobile Menu Navigation */}
      <div
        className={cn(
          "fixed inset-x-0 top-[calc(100%+1rem)] flex flex-col rounded-2xl border bg-background p-6 transition-all duration-300 ease-in-out lg:hidden",
          isMenuOpen ?
          "visible translate-y-0 opacity-100" :
          "invisible -translate-y-4 opacity-0"
        )}>

        <nav className="flex flex-1 flex-col divide-y divide-border">
          {ITEMS.map((link) =>
          <a
            key={link.label}
            href={link.href}
            className={cn(
              "py-4 text-base font-medium text-primary transition-colors first:pt-0 last:pb-0 hover:text-primary/80"
            )}
            onClick={() => setIsMenuOpen(false)}>

              {link.label}
            </a>
          )}
          <div className="pt-4">
            <a href="#quote" onClick={() => setIsMenuOpen(false)}>
              <Button style={{ backgroundColor: '#FF6B35' }} className="w-full text-white hover:bg-[var(--color-orange-light)] transition-colors">
                Get a Quote
              </Button>
            </a>
          </div>
        </nav>
      </div>
    </section>);

};

export { FloatingNavbar };