import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AlgemeneVoorwaarden = () => {
  useEffect(() => {
    document.title = "TAP Crew | Algemene Voorwaarden";
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Intro */}
        <section className="algemene-voorwaarden-intro-section relative section-padding pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-12 sm:pb-16 md:pb-20 lg:pb-24 overflow-hidden">
          <div className="absolute inset-0 z-0 bg-secondary" />
          
          <div className="container-custom px-4 sm:px-6 lg:px-6 xl:px-8 relative z-10">
            <div className="max-w-6xl mx-auto pt-8 sm:pt-12 md:pt-16 lg:pt-20">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight text-foreground mb-4 sm:mb-6 text-center uppercase italic">
                Algemene Voorwaarden
              </h1>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-background">
          <div className="container-custom px-4 sm:px-6 lg:px-6 xl:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="reveal space-y-6 sm:space-y-8 text-foreground/80 leading-relaxed">
                <p className="text-base sm:text-lg">
                  Welkom bij TAP Crew. Om onze dienstverlening zo helder en transparant mogelijk te houden, hanteren wij algemene voorwaarden die van toepassing zijn op al onze offertes, overeenkomsten en geleverde diensten.
                </p>

                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-foreground mb-3 sm:mb-4 uppercase">
                      Informatievoorziening
                    </h2>
                    <p className="text-sm sm:text-base">
                      Wij hechten veel waarde aan goede communicatie over de afspraken die we met onze opdrachtgevers maken. Voor alle algemene voorwaarden die op onze samenwerking van kracht zijn, informeren wij je graag persoonlijk en uitgebreid. Zo weet je precies waar je aan toe bent en voorkomen we onduidelijkheden achteraf.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-foreground mb-3 sm:mb-4 uppercase">
                      Contact en opvragen
                    </h2>
                    <p className="mb-3 text-sm sm:text-base">
                      Wil je de volledige voorwaarden inzien of heb je specifieke vragen over de bepalingen die voor jouw situatie gelden? Je kunt te allen tijde contact met ons opnemen. Wij sturen je de relevante documentatie graag toe.
                    </p>
                    <p className="text-sm sm:text-base">
                      Voor vragen of verzoeken kun je terecht op onze <Link to="/contact" className="text-accent hover:underline">Contactpagina</Link>.
                    </p>
                  </div>
                </div>

                <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border/50">
                  <p className="text-xs sm:text-sm text-foreground/60">
                    <strong>Crewstars B.V.</strong><br />
                    Adres: Bierbrouwersweg 29, 3449HW Woerden<br />
                    KvK-nummer: 96320680<br />
                    BTW-identificatienummer: NL867561580B01
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AlgemeneVoorwaarden;
