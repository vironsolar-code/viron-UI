"use client"
import { ArrowRight, ArrowUpRight, Sun } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const TwoColumnHeroWithImage = () => {
  return (
    <section className="py-32 relative overflow-hidden min-h-screen flex items-center">
      {/* Background Image */}
      <img
        src="/img-solar.jpg"
        alt="Modern solar panel installation on residential home"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-soft/30 via-transparent to-orange-soft/20 pointer-events-none" />

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          <Badge
            variant="outline"
            className="bg-primary text-white border-0 hover:bg-orange-light transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Sun className="mr-2 size-3.5 text-white" />
            India's Most Affordable Solar Company
            <ArrowUpRight className="ml-2 size-4" />
          </Badge>

          <h1 className="text-pretty text-4xl font-bold lg:text-6xl xl:text-7xl leading-tight text-white drop-shadow-2xl">
            Stop Paying for{" "}
            <span className="text-primary font-bold">
              Electricity
            </span>
          </h1>

          <h2 className="text-xl lg:text-2xl font-semibold text-white mb-2 drop-shadow-xl">
            Switch to Solar and Let Sun Pay Your Bill
          </h2>

          <p className="text-white/90 max-w-2xl lg:text-xl leading-relaxed drop-shadow-lg">
            Join thousands of Indian families who have reduced their electricity 
            bills by up to 90% with our premium solar installations. Experience 
            energy independence with zero down payment and instant savings.
          </p>

          <div className="flex w-full flex-col justify-center gap-3 sm:flex-row pt-4">
            <Link href="/quote">
              <Button
                size="lg"
                className="w-full sm:w-auto group bg-primary text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-full px-8"
              >
                Get Free Quote
                <ArrowUpRight className="ml-2 size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
            </Link>
            <Button
              size="lg"
              className="w-full sm:w-auto group bg-white hover:bg-white text-primary border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-full px-8"
              onClick={e => {
                const el = document.querySelector('#solar-calculator-section');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Calculate Savings
              <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { TwoColumnHeroWithImage };