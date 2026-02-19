import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import homepageImage from "@/assets/homepage-werken-bij.png";
import voorOpdrachtgeversImage from "@/assets/voor-opdrachtgevers-werken-bij.png";

interface WerkenBijHeroProps {
  variant?: "homepage" | "voor-opdrachtgevers";
}

const WerkenBijHero = ({ variant = "homepage" }: WerkenBijHeroProps) => {
  const isVoorOpdrachtgevers = variant === "voor-opdrachtgevers";
  
  return (
    <>
      <style>{`
        @media (max-width: 639px) {
          /* Plaats afbeelding boven tekst op mobile */
          section.w-full div.grid.lg\\:grid-cols-2 > div.reveal.relative.order-2.lg\\:order-1 {
            order: 1 !important;
          }
          
          section.w-full div.grid.lg\\:grid-cols-2 > div.reveal.order-1.lg\\:order-2 {
            order: 2 !important;
          }
          
          /* Maak h2 groter op mobile */
          section.w-full h2.text-3xl {
            font-size: 2.5rem !important; /* 40px - groter dan text-3xl (30px) */
            line-height: 1.1 !important;
          }
          
          /* Label en h2 dichter bij elkaar */
          section.w-full .space-y-6 > div.mt-4 + h2,
          section.w-full .space-y-6 > div + h2,
          section.w-full .space-y-8 > div + h2 {
            margin-top: 0.25rem !important;
          }
          section.w-full .space-y-6 > div.mt-4,
          section.w-full .space-y-8 > div.mt-4 {
            margin-bottom: 0 !important;
          }
        }
      `}</style>
      <section className={`w-full ${isVoorOpdrachtgevers ? "py-16 sm:py-20 md:py-24 lg:py-32" : "bg-secondary py-16 sm:py-20 md:py-24 lg:py-32"}`} style={isVoorOpdrachtgevers ? { backgroundColor: '#ffffff' } : undefined}>
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Section - Image */}
          <div className="reveal relative order-2 lg:order-1">
            <img
              src={isVoorOpdrachtgevers ? voorOpdrachtgeversImage : homepageImage}
              alt="Werken bij TAP - Event crew"
              className="w-full h-auto rounded-lg sm:rounded-xl"
            />
          </div>

          {/* Right Section - Text Content */}
          <div className="reveal order-1 lg:order-2 p-6 sm:p-8 md:p-10 lg:p-12 space-y-6 sm:space-y-8 relative">
            <div className={`inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide uppercase ${isVoorOpdrachtgevers ? "mt-4 sm:mt-6" : ""}`}>
              <span className="text-accent text-lg sm:text-xl">•</span>
              <span className="text-accent">
                {isVoorOpdrachtgevers ? "OVER ONS" : "WERKEN BIJ TAP"}
              </span>
            </div>
            
            <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight ${isVoorOpdrachtgevers ? "uppercase" : ""}`}>
              {isVoorOpdrachtgevers ? "WAAROM TAP?" : "KLAAR OM TE STRALEN?"}
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed max-w-xl">
              {isVoorOpdrachtgevers 
                ? "Goede crew is één ding, maar de organisatie eromheen moet net zo strak zijn. TAP denkt verder dan alleen de vloer. We vormen een betrouwbare schakel tussen crew en opdrachtgever, zowel operationeel als achter de schermen. Flexibel, betrokken en altijd gericht op het versterken van samenwerkingen."
                : "Bij TAP sta je midden in de actie: achter de bar, bij de entree of op de vloer. Geen standaard bijbaan, maar werken op toffe evenementen, met een team dat weet van aanpakken. Jij kiest wanneer je werkt en wij regelen de rest. Werk flexibel, sociaal, professioneel én verdien er ook nog eens lekker mee."}
            </p>
            
            <div className="pt-4">
              {isVoorOpdrachtgevers ? (
                <Link to="/offerte">
                  <Button
                    variant="accent-bottom"
                    size="xl"
                    className="px-8 text-base sm:text-lg"
                  >
                    CREW AANVRAGEN
                  </Button>
                </Link>
              ) : (
                <a href="https://app.recruitment.fleks.works/172b1913-9407-4035-bc25-95465367e408/apply" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="accent-bottom"
                    size="xl"
                    className="px-8 text-base sm:text-lg"
                  >
                    TAP ME IN!
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default WerkenBijHero;
