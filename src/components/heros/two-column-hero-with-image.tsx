import { ArrowRight, ArrowUpRight, Sun } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const TwoColumnHeroWithImage = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-soft/50 via-transparent to-orange-soft/30 pointer-events-none" />

      <div className="container relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-6">
            <Badge
              variant="outline"
              className="bg-primary text-white border-0 hover:bg-orange-light transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Sun className="mr-2 size-3.5 text-white" />
              India's Most Affordable Solar
              <ArrowUpRight className="ml-2 size-4" />
            </Badge>

            <h1 className="text-pretty text-4xl font-bold lg:text-6xl xl:text-7xl leading-tight text-neutral-black">
              Stop Paying for{" "}
              <span className="text-primary font-bold">
                Electricity
              </span>
            </h1>

            <h2 className="text-xl lg:text-2xl font-semibold text-neutral-black mb-2">
              Switch to Solar and Let Sun Pay Your Bill
            </h2>

            <p className="text-muted-foreground max-w-xl lg:text-xl leading-relaxed">
              Join thousands of Indian families who have reduced their electricity 
              bills by up to 90% with our premium solar installations. Experience 
              energy independence with zero down payment and instant savings.
            </p>

            <div className="flex w-full flex-col justify-center gap-3 sm:flex-row lg:justify-start pt-2">
              <Button
                size="lg"
                className="w-full sm:w-auto group bg-primary hover:bg-orange-light text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-full px-8"
              >
                Get Free Quote
                <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                className="w-full sm:w-auto group bg-white hover:bg-gray-100 text-neutral-black border border-gray-200 rounded-full px-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Calculate Savings
                <ArrowUpRight className="ml-2 size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-orange-light/20 rounded-3xl blur-xl opacity-30" />
            <img
              src="https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg"
              alt="Modern solar panel installation on residential home"
              className="relative min-h-[500px] max-h-[800px] w-full rounded-3xl object-cover shadow-2xl ring-1 ring-black/5"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { TwoColumnHeroWithImage };