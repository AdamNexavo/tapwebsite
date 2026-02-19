import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CTA from "@/components/CTA";
import serviceCrewHeroImg from "@/assets/service-crew-hero.jpg";

const ServiceCrew = () => {
  useEffect(() => {
    document.title = "TAP Crew | Service Crew";
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="min-h-[80vh] lg:min-h-screen" style={{ backgroundColor: '#1a1a1a' }}>
          <div className="grid lg:grid-cols-2 min-h-[80vh] lg:min-h-screen">
            {/* Left side - Text */}
            <div className="reveal flex flex-col justify-center px-6 sm:px-10 md:px-14 lg:px-16 xl:px-24 py-48 sm:py-52 md:py-56 lg:py-40">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-black italic uppercase mb-6" style={{ color: '#7a6df7' }}>
                SERVICE CREW
              </h1>
              <p className="text-white text-base sm:text-lg leading-relaxed mb-6">
                Op zoek naar representatieve service crew voor jouw event of pop-up store? TAP levert medewerkers die gastgericht denken, verkoopervaring combineren met energie op de vloer, en zelfstandig een store of verkooppunt kunnen draaien. Wij zorgen dat jouw merk of merchandise professioneel wordt gepresenteerd.
              </p>
              <p className="text-white text-base sm:text-lg leading-relaxed mb-8">
                Wij beschikken over crew dat o.a. op de volgende vlakken kunnen ondersteunen:
              </p>

              <div className="space-y-6 mb-8 pl-2">
                <div>
                  <h3 className="text-white text-lg font-bold mb-2">Merchandise crew (pop-up stores & events):</h3>
                  <ul className="list-disc list-inside space-y-1 text-white/80">
                    <li>Salesmedewerkers</li>
                    <li>Store- en floormanagers</li>
                    <li>Kassapersoneel / POS-beheerders</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white text-lg font-bold mb-2">Festival crew:</h3>
                  <ul className="list-disc list-inside space-y-1 text-white/80">
                    <li>Merchandise verkoop</li>
                    <li>Store management</li>
                  </ul>
                </div>
              </div>

              <p className="text-white/80 text-base sm:text-lg mb-8">
                Neem vrijblijvend contact op om de mogelijkheden te bekijken.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button variant="hero" size="xl" className="px-6 w-full sm:w-auto uppercase">
                    CONTACT
                  </Button>
                </Link>
                <Link to="/voor-opdrachtgevers">
                  <Button variant="hero-outline" size="xl" className="px-6 w-full sm:w-auto uppercase">
                    CREW AANVRAGEN
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right side - Photo */}
            <div className="hidden lg:block relative">
              <img
                src={serviceCrewHeroImg}
                alt="Service crew aan het werk"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ borderBottomLeftRadius: '5%' }}
              />
            </div>
          </div>
        </section>

        <CTA 
          title="Samenwerken?"
          description="Op zoek naar betrouwbare service crew voor jouw event? Neem contact op en we bespreken de mogelijkheden."
          buttonText="Contact opnemen"
          buttonLink="/contact"
        />
      </main>
      <Footer />
    </div>
  );
};

export default ServiceCrew;
