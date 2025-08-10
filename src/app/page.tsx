import { FloatingNavbar } from "@/components/navbars/floating-navbar";
import { TwoColumnHeroWithImage } from "@/components/heros/two-column-hero-with-image";
import { NumberedBadgeCards } from "@/components/feature/numbered-badge-cards";
import SolarCalculator from "@/components/solar/solar-calculator";
import { SocialTeamProfiles } from "@/components/teams/social-team-profiles";
import { ResponsiveGridCasestudies } from "@/components/casestudies/responsive-grid-casestudies";
import { GridOverlayGallery } from "@/components/gallery/grid-overlay-gallery";
import { GradientOverlayCta } from "@/components/cta/gradient-overlay-cta";
import { NewsletterFooter } from "@/components/footers/newsletter-footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <FloatingNavbar />
      <TwoColumnHeroWithImage />
      <NumberedBadgeCards />
      <SolarCalculator />
      <SocialTeamProfiles />
      <ResponsiveGridCasestudies />
      <GridOverlayGallery />
      <GradientOverlayCta />
      <NewsletterFooter />
    </main>
  );
}