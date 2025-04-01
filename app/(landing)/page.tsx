import LandingAddition from "@/components/landing-page/landing-addition";
import AICallLine from "@/components/landing-page/landing-call";
import WhyChooseNova from "@/components/landing-page/landing-choose-nova";
import ContactForm from "@/components/landing-page/landing-contact";
import LandingHero from "@/components/landing-page/landing-hero";
import IndustriesSection from "@/components/landing-page/landing-industries";
import LandingNarrative from "@/components/landing-page/landing-industries";
import KeyBenefits from "@/components/landing-page/landing-keybenefits";
import LandingNavbar from "@/components/landing-page/landing-navbar";
import PartnersSection from "@/components/landing-page/landing-partners";

export default function Home() {
  return (
    <div>
      <LandingNavbar />
      <LandingHero />
      <PartnersSection />
      <IndustriesSection />
      <LandingAddition />
      <WhyChooseNova />
      <KeyBenefits />
      <AICallLine />
      <ContactForm />
    </div>
  );
}
