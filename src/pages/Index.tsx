import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HashtagBanner from "@/components/HashtagBanner";
import WerkenBijHero from "@/components/WerkenBijHero";
import MixMatch from "@/components/MixMatch";
import Diensten from "@/components/Diensten";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "TAP Crew | Horeca & Hospitality Crew";
  }, []);

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden">
      <Header />
      <main className="w-full max-w-full overflow-x-hidden">
        <Hero />
        <HashtagBanner />
        <WerkenBijHero />
        <MixMatch />
        <Diensten />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
