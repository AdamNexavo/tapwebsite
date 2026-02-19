import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const MixMatch = () => {
  return (
    <>
      <style>{`
        @media (max-width: 639px) {
          /* Maak h2 groter op mobile - zelfde grootte als WerkenBijHero */
          section.section-padding h2.text-3xl {
            font-size: 2.5rem !important; /* 40px - groter dan text-3xl (30px) */
            line-height: 1.1 !important;
          }
          
          /* Grid wordt flex column op mobile */
          section.section-padding div.grid.lg\\:grid-cols-2 {
            display: flex !important;
            flex-direction: column !important;
            gap: 0 !important;
            align-items: flex-start !important; /* Links uitlijnen i.p.v. gecentreerd */
          }
          
          /* Alle directe flex-items volle breedte */
          section.section-padding div.grid.lg\\:grid-cols-2 > * {
            width: 100% !important;
          }
          
          /* display:contents maakt kinderen van left column directe flex-items van de grid */
          section.section-padding div.grid.lg\\:grid-cols-2 > div.reveal.space-y-6 {
            display: contents !important;
          }
          
          /* Alle kinderen van left column krijgen expliciete order */
          section.section-padding div.grid.lg\\:grid-cols-2 > div.reveal.space-y-6 > div.mt-4 { order: 1 !important; margin-bottom: 0.125rem !important; text-align: left !important; align-self: flex-start !important; }
          section.section-padding div.grid.lg\\:grid-cols-2 > div.reveal.space-y-6 > h2 { margin-top: 0 !important; }
          section.section-padding div.grid.lg\\:grid-cols-2 > div.reveal.space-y-6 > h2 { order: 2 !important; margin-bottom: 1rem !important; }
          section.section-padding div.grid.lg\\:grid-cols-2 > div.reveal.space-y-6 > p { order: 3 !important; margin-bottom: 1rem !important; }
          section.section-padding div.grid.lg\\:grid-cols-2 > div.reveal.space-y-6 > div.space-y-3 { order: 4 !important; margin-bottom: 1.5rem !important; }
          
          /* Three Steps komt na checkmarks */
          section.section-padding div.grid.lg\\:grid-cols-2 > div.reveal.space-y-4 {
            order: 5 !important;
            margin-top: 1.5rem !important;
            margin-bottom: 1.5rem !important;
          }
          
          /* Dunnere strokes op cijfers en letters in Three Steps */
          section.section-padding div.reveal.space-y-4 div.font-black {
            -webkit-text-stroke: 2px black !important;
            font-size: 2.25rem !important; /* Ietsjes groter */
          }
          section.section-padding div.reveal.space-y-4 span.font-black {
            -webkit-text-stroke: 2px black !important;
            font-size: 1.25rem !important; /* Ietsjes groter */
          }
          section.section-padding div.reveal.space-y-4 h2.font-bold {
            -webkit-text-stroke: 1.5px white !important;
            font-size: 2.125rem !important; /* 34px - nog groter */
            line-height: 1.2 !important;
          }
          
          /* Cijfer baseline gelijk met header baseline */
          section.section-padding div.reveal.space-y-4 .flex.items-start {
            align-items: baseline !important;
          }
          section.section-padding div.reveal.space-y-4 .flex-1.pt-2 {
            padding-top: 0 !important;
          }
          
          /* AANMELDEN button komt helemaal onderaan */
          section.section-padding div.grid.lg\\:grid-cols-2 > div.reveal.space-y-6 > div.pt-4 {
            order: 10 !important;
            margin-top: 1.5rem !important;
            width: 100% !important;
          }
        }
      `}</style>
      <section className="section-padding" style={{ backgroundColor: '#7a6df7' }}>
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Title, Text, Checkmarks, Button */}
            <div className="reveal space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide uppercase mt-4 sm:mt-6">
                <span className="text-white text-lg sm:text-xl">•</span>
                <span className="text-white">AAN DE SLAG</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#191919] leading-tight">
                MIX & MATCH JE WERK
              </h2>
              
              <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                Bij TAP draait het om Talent, Actie en Passie. We zetten je in op plekken waar je goed in bent én waar je energie van krijgt. Geen standaard bijbaan, maar werk dat bij je past.
              </p>

              {/* Checkmarks List */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
                  <span className="text-white font-semibold text-base sm:text-lg">Flexibele uren</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
                  <span className="text-white font-semibold text-base sm:text-lg">Verdien goed</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
                  <span className="text-white font-semibold text-base sm:text-lg">Geen ervaring? No worries!</span>
                </div>
              </div>

              {/* Button */}
              <div className="pt-4">
                <a href="https://app.recruitment.fleks.works/172b1913-9407-4035-bc25-95465367e408/apply" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="accent-bottom"
                    size="xl"
                    className="w-full sm:w-auto bg-[#464646] hover:bg-[#5a5a5a] border-b-[#2f2f2f] text-white px-6 sm:px-8 text-sm sm:text-base"
                  >
                    AANMELDEN
                  </Button>
                </a>
              </div>
            </div>

            {/* Right Column - Three Steps */}
            <div className="reveal space-y-4 sm:space-y-5">
              {/* Step 1 */}
              <div className="pb-6 sm:pb-8 border-b border-white/20">
                <div className="flex items-start gap-6 sm:gap-8">
                  <div className="flex items-baseline flex-shrink-0">
                    <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-none" style={{ WebkitTextStroke: '3px black', WebkitTextFillColor: 'transparent', color: 'transparent' }}>
                      1
                    </div>
                    <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black" style={{ WebkitTextStroke: '3px black', WebkitTextFillColor: 'transparent', color: 'transparent' }}>
                      .
                    </span>
                  </div>
                  <div className="flex-1 pt-2">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold uppercase mb-2" style={{ WebkitTextStroke: '2px white', WebkitTextFillColor: 'transparent', color: 'transparent' }}>
                      AANMELDEN
                    </h2>
                    <p className="text-white/90 text-sm sm:text-base">
                      Meld je aan via het inschrijfformulier.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="pb-6 sm:pb-8 border-b border-white/20">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="flex items-baseline flex-shrink-0">
                    <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-none" style={{ WebkitTextStroke: '3px black', WebkitTextFillColor: 'transparent', color: 'transparent' }}>
                      2
                    </div>
                    <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black" style={{ WebkitTextStroke: '3px black', WebkitTextFillColor: 'transparent', color: 'transparent' }}>
                      .
                    </span>
                  </div>
                  <div className="flex-1 pt-2">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold uppercase mb-2" style={{ WebkitTextStroke: '2px white', WebkitTextFillColor: 'transparent', color: 'transparent' }}>
                      KIES JE SHIFT
                    </h2>
                    <p className="text-white/90 text-sm sm:text-base">
                      We bellen je om kennis te maken en onze werkwijze uit te leggen.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div>
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="flex items-baseline flex-shrink-0">
                    <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-none" style={{ WebkitTextStroke: '3px black', WebkitTextFillColor: 'transparent', color: 'transparent' }}>
                      3
                    </div>
                    <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black" style={{ WebkitTextStroke: '3px black', WebkitTextFillColor: 'transparent', color: 'transparent' }}>
                      .
                    </span>
                  </div>
                  <div className="flex-1 pt-2">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold uppercase mb-2" style={{ WebkitTextStroke: '2px white', WebkitTextFillColor: 'transparent', color: 'transparent' }}>
                      AAN DE SLAG!
                    </h2>
                    <p className="text-white/90 text-sm sm:text-base">
                      Wij regelen de rest en je kunt beginnen!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default MixMatch;
