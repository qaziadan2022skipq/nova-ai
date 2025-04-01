import BuildTogetherSection from "@/components/landing-page/about-us/about-us-build-together";
import AboutUsChooseNova from "@/components/landing-page/about-us/about-us-choose-nova";
import AboutUsHero from "@/components/landing-page/about-us/about-us-hero";
import AboutUsTitle from "@/components/landing-page/about-us/about-us-title";
import WhyChooseNova from "@/components/landing-page/landing-choose-nova";
import LandingNavbar from "@/components/landing-page/landing-navbar";

export default function AboutUsPage() {
  return (
    <div>
      <LandingNavbar />
      <AboutUsTitle />
      <AboutUsHero />
      <WhyChooseNova />
      <AboutUsChooseNova />
      <BuildTogetherSection />
    </div>
  );
}
