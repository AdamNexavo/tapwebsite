import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Sectors from "@/components/Sectors";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden">
      <Header />
      <main className="w-full max-w-full overflow-x-hidden">
        <Hero />
        <Services />
        <Stats />
        <Sectors />
        <About />
        <CTA 
          title="Samenwerken?"
          description="Of je nu op zoek bent naar ondersteuning voor je evenement of een uitdagende baan, bij Crewstars ben je aan het juiste adres."
          buttonText="Neem contact op"
          buttonLink="/contact"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
