"use client"

import { Facebook, Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from "lucide-react";

const navigation = [
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
    ],
  },
  {
    title: "Services", 
    links: [
      { name: "Residential Solar", href: "#" },
      { name: "Commercial Solar", href: "#" },
      { name: "Maintenance", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Calculator", href: "#" },
      { name: "Blog", href: "#" },
      { name: "FAQs", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Contact", href: "#" },
      { name: "Help Center", href: "#" },
      { name: "Warranty", href: "#" },
    ],
  },
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com" },
];

const contactInfo = [
  { 
    icon: Phone, 
    label: "Phone", 
    value: "+91 8121378181 / +91 8121478181",
    href: "tel:+918121378181"
  },
  { 
    icon: Mail, 
    label: "Email", 
    value: "contact@vironsolar.com",
    href: "mailto:contact@vironsolar.com"
  },
];

const offices = [
  { city: "Hyderabad", address: "Door No 51, Raghavendra Environ, Rd No 3, Sri Shivaganga colony, Hyderabad - 500074" },
];

export const NewsletterFooter = () => {
  return (
    <section className="bg-background py-12 sm:py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-5 md:px-6">
        {/* Logo and newsletter section */}
        <div className="mb-10 flex flex-col items-start justify-between gap-10 border-b pb-10 sm:mb-16 sm:pb-12 md:flex-row">
          <div className="w-full max-w-full sm:max-w-sm">
            <a href="#" onClick={(e) => e.preventDefault()} className="mb-6 inline-block">
              <img 
                src="/logo.png" 
                alt="Viron Solar" 
                className="h-12 w-auto"
              />
            </a>
            <p className="mb-8 text-base text-muted-foreground">
              Leading India's solar revolution with affordable, reliable solar solutions for homes and businesses. Switch to clean energy and start saving today.
            </p>

            {/* Newsletter subscription */}
            <div className="mb-6">
              <h3 className="mb-3 text-lg font-semibold text-foreground">Solar Tips & Updates</h3>
              <div className="flex w-full max-w-full flex-col gap-3 sm:max-w-md sm:flex-row">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex h-12 flex-1 rounded-md border border-input bg-background px-4 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 sm:h-10 sm:text-sm"
                />
                <button className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 py-2 text-base font-medium whitespace-nowrap text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 sm:h-10 sm:px-4 sm:text-sm">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-3">
              {contactInfo.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
                >
                  <contact.icon className="h-4 w-4" />
                  <span className="text-sm">{contact.value}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Section */}
          <div className="w-full border-t pt-8 sm:border-t-0 sm:pt-0">
            <nav className="grid w-full grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-2 md:w-auto md:grid-cols-4">
              {navigation.map((section) => (
                <div key={section.title} className="min-w-[140px]">
                  <h2 className="mb-4 text-lg font-semibold">
                    {section.title}
                  </h2>
                  <ul className="space-y-3.5">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="inline-block py-1 text-muted-foreground transition-colors duration-200 hover:text-primary active:text-primary"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>

            {/* Office Locations */}
            <div className="mt-8 pt-8 border-t">
              <h3 className="mb-4 text-lg font-semibold flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Our Offices
              </h3>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
                {offices.map((office) => (
                  <div key={office.city} className="text-sm">
                    <div className="font-medium text-foreground">{office.city}</div>
                    <div className="text-muted-foreground">{office.address}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="order-1 mb-6 flex w-full items-center justify-center gap-6 sm:justify-start md:order-2 md:mb-0 md:w-auto">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-label={`Visit our ${link.name} page`}
                className="rounded-full p-3 text-muted-foreground transition-all duration-200 hover:bg-accent hover:text-primary active:bg-accent/70"
                rel="noopener noreferrer"
                target="_blank"
              >
                <link.icon className="h-6 w-6 sm:h-5 sm:w-5" />
              </a>
            ))}
          </div>

          {/* Copyright - Below on mobile, left on desktop */}
          <p className="order-2 text-center text-sm text-muted-foreground sm:text-left md:order-1">
            © {new Date().getFullYear()} Viron Solar. All rights reserved.{" "}
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="text-foreground underline underline-offset-4 transition-colors hover:text-primary"
            >
              vironsolar.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};