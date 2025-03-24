import LandingAddition from "@/components/landing-page/landing-addition";
import LandingHero from "@/components/landing-page/landing-hero";
import LandingNarrative from "@/components/landing-page/landing-narrative";
import LandingNavbar from "@/components/landing-page/landing-navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <LandingNavbar />
      <LandingHero />
      <LandingNarrative />
      <LandingAddition />
    </div>
  );
}
