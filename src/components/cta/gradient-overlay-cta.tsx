"use client"

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const GradientOverlayCta = () => {
  const router = useRouter();

  return (
    <section id="quote" className="py-32 bg-white">
      <div className="container">
        <div className="flex h-[620px] items-center justify-center overflow-hidden rounded-2xl bg-[linear-gradient(rgba(255,107,53,0.8),rgba(255,138,92,0.6)),url('https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')] bg-cover bg-center">
          <div className="flex flex-col gap-8 p-4 text-center">
            <h2 className="text-white text-48 font-bold font-[var(--font-display)]">
              Ready to Go Solar?
            </h2>
            <p className="text-white text-18 max-w-2xl mx-auto leading-relaxed">
              Join thousands of Indian families saving money with solar energy. Schedule your free consultation today and get a personalized solar solution for your home.
            </p>
            <div className="flex flex-col justify-center gap-2 sm:flex-row">
              <Button
                size="lg"
                variant="default"
                className="bg-white text-[var(--color-primary)] hover:bg-[var(--color-neutral-light)] font-semibold"
                onClick={() => router.push('/quote')}
              >
                Schedule Free Consultation
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[var(--color-primary)] font-semibold"
                onClick={() => alert('Solar guide coming soon! Contact us for personalized solar information.')}
              >
                Download Solar Guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { GradientOverlayCta };