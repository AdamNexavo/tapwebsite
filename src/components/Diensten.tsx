import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import dienstenHeroImg from "@/assets/diensten-hero.png";

const Diensten = () => {
  return (
    <>
      <style>{`
        @media (max-width: 639px) {
          /* Maak h2 groter op mobile - zelfde grootte als andere h2's */
          section.w-full h2.text-3xl {
            font-size: 2.5rem !important; /* 40px - groter dan text-3xl (30px) */
            line-height: 1.1 !important;
          }
          
          /* Label en h2 dichter bij elkaar */
          section.w-full .space-y-6 > div.mt-4 + h2,
          section.w-full .space-y-8 > div.mt-4 + h2 {
            margin-top: 0.25rem !important;
          }
          section.w-full .space-y-6 > div.mt-4,
          section.w-full .space-y-8 > div.mt-4 {
            margin-bottom: 0 !important;
          }
        }
      `}</style>
      <section className="w-full py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: '#1a1a1a' }}>
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1.2fr,1fr] gap-8 lg:gap-12 items-center">
            {/* Left Side - Photo */}
            <div className="reveal relative">
              <img
                src={dienstenHeroImg}
                alt="Diensten"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>

            {/* Right Side - Text Content */}
            <div className="reveal p-6 sm:p-8 md:p-10 lg:p-12 space-y-6 sm:space-y-8 relative">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide uppercase mt-4 sm:mt-6">
                <span className="text-white text-lg sm:text-xl">•</span>
                <span className="text-white">VOOR OPDRACHTGEVERS</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight" style={{ color: '#7a6df7' }}>
                OVER ONZE<br />DIENSTEN
              </h2>
              
              <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed max-w-xl">
                Sinds 2021 koppelen wij talentvolle horeca- en hospitalitycrew aan festivals, beurzen en zakelijke events in heel Nederland. Bij TAP geloven we in groei en ontwikkeling – zo zetten we de juiste mensen op de juiste plek om te shinen op jouw event.
              </p>
              
              <p className="text-white text-base sm:text-lg">
                Meer weten over onze diensten?
              </p>
              
              <div className="pt-0">
                <Link to="/voor-opdrachtgevers">
                  <Button
                    variant="accent-bottom"
                    size="xl"
                    className="px-8 text-base sm:text-lg shadow-none hover:shadow-none"
                  >
                    VOOR OPDRACHTGEVERS
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Diensten;
