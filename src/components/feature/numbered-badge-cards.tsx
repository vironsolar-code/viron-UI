"use client";

import { Shield, DollarSign, Wrench, Headphones } from "lucide-react";

import { Badge } from "@/components/ui/badge";

interface DataItem {
  id: number;
  number: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

const DATA: DataItem[] = [
  {
    id: 1,
    number: "01",
    title: "Complete Transparency",
    description:
      "Clear pricing with no hidden costs. Get detailed proposals that break down every aspect of your solar installation.",
    image:
      "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: <Shield className="h-5 w-5" />,
  },
  {
    id: 2,
    number: "02",
    title: "Panel Choice by Budget",
    description:
      "Multiple tier options to fit your budget. Flexible financing solutions with quality assured panels from trusted manufacturers.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: <DollarSign className="h-5 w-5" />,
  },
  {
    id: 3,
    number: "03",
    title: "Best Installation Partners",
    description:
      "Certified technicians ensure quality installation with comprehensive warranty support and professional workmanship.",
    image:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: <Wrench className="h-5 w-5" />,
  },
  {
    id: 4,
    number: "04",
    title: "Top-Notch After-Sales",
    description:
      "24/7 customer support with regular maintenance service and continuous performance monitoring for optimal efficiency.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=700&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: <Headphones className="h-5 w-5" />,
  },
];

const NumberedBadgeCards = () => {
  return (
    <section className="bg-accent py-32">
      <div className="container">
        <div className="flex flex-col items-center pb-4 text-center">
          <h1 className="pb-3 text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl text-neutral-black">
            Why Choose Viron Solar
          </h1>
          <p className="text-muted-foreground max-w-md text-sm lg:max-w-2xl lg:text-lg">
            Experience the difference with our comprehensive solar solutions designed for your peace of mind.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-4 grid grid-cols-1 gap-4 px-4 sm:px-6 md:grid-cols-2 md:px-8 lg:grid-cols-2 xl:grid-cols-4 lg:px-12">
          {DATA.map((feature) => (
            <div
              key={feature.id}
              className="bg-background grid grid-cols-1 rounded-2xl border shadow-sm"
            >
              <div className="p-6">
                <div className="bg-primary text-primary-foreground inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold">
                  {feature.number}
                </div>
                <p className="text-md my-4 font-semibold text-neutral-black">{feature.title}</p>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
              <div className="mt-auto flex min-h-[200px] justify-center rounded-b-2xl">
                <div className="h-[200px] w-full">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="h-full w-full rounded-b-2xl object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { NumberedBadgeCards };