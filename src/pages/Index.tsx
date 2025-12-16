import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Sectors from "@/components/Sectors";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Sectors />
        <About />
        <CTA />
      </main>
      <Footer />
      
      {/* BEWAARD VOOR LATER - Stats sectie */}
      <div className="bg-gray-200 p-8">
        <div className="inline-flex gap-4 mb-8">
          <div className="bg-muted rounded-xl px-6 py-5 shadow-lg">
            <span className="text-4xl lg:text-5xl font-bold text-accent">100+</span>
            <p className="font-semibold text-foreground text-sm mt-2 whitespace-nowrap">Crewleden</p>
            <p className="text-xs text-muted-foreground mt-1 whitespace-nowrap">Klaar voor inzet</p>
          </div>
          <div className="bg-muted rounded-xl px-6 py-5 shadow-lg">
            <span className="text-4xl lg:text-5xl font-bold text-accent">1200+</span>
            <p className="font-semibold text-foreground text-sm mt-2 whitespace-nowrap">Projecten</p>
            <p className="text-xs text-muted-foreground mt-1 whitespace-nowrap">Succesvol ondersteund</p>
          </div>
          <div className="bg-muted rounded-xl px-6 py-5 shadow-lg">
            <span className="text-4xl lg:text-5xl font-bold text-accent">5+</span>
            <p className="font-semibold text-foreground text-sm mt-2 whitespace-nowrap">Jaar ervaring</p>
            <p className="text-xs text-muted-foreground mt-1 whitespace-nowrap">Actief in de eventsector</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
