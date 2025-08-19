import { TwoColumnHeroWithImage } from "@/components/heros/two-column-hero-with-image";
import { NumberedBadgeCards } from "@/components/feature/numbered-badge-cards";
import SolarCalculator from "@/components/solar/solar-calculator";
import { GridOverlayGallery } from "@/components/gallery/grid-overlay-gallery";
import { GradientOverlayCta } from "@/components/cta/gradient-overlay-cta";
import { NewsletterFooter } from "@/components/footers/newsletter-footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <TwoColumnHeroWithImage />
      <NumberedBadgeCards />
      <SolarCalculator />
      <GridOverlayGallery />
      <GradientOverlayCta />
      <NewsletterFooter />
    </main>
  );
}