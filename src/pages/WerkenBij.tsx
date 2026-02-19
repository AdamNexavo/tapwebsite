import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import medewerkerFoto from "@/assets/medewerker-foto.jpg";
import festivalHeroImg from "@/assets/festival-hero.jpg";
import crewTeamImg from "@/assets/crew-team.png";
import crewWorkingImg from "@/assets/crew-working.png";
import crewMemberImg from "@/assets/crew-member.png";
import foto223 from "@/assets/223.jpg";
import crewTechniekImg from "@/assets/crew-techniek.png";
import avCrewMemberImg from "@/assets/av-crew-member.png";
import specialistForkliftImg from "@/assets/specialist-forklift.png";

const WerkenBij = () => {
  const [visibleVacatures, setVisibleVacatures] = useState<number[]>([]);
  const vacaturesRef = useRef<HTMLDivElement | null>(null);

  // Animate vacature blocks appearing one by one from bottom to top
  useEffect(() => {
    setVisibleVacatures([]);
    let delays: NodeJS.Timeout[] = [];
    let hasAnimated = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true;
            const vacatureCount = 3;

            // Fade in vacatures one by one with staggered delay
            for (let i = 0; i < vacatureCount; i++) {
              const timeout = setTimeout(() => {
                setVisibleVacatures((prev) => {
                  if (!prev.includes(i)) {
                    return [...prev, i];
                  }
                  return prev;
                });
              }, i * 300);
              delays.push(timeout);
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    const currentVacaturesRef = vacaturesRef.current;
    if (currentVacaturesRef) {
      observer.observe(currentVacaturesRef);
    }

    return () => {
      if (currentVacaturesRef) {
        observer.unobserve(currentVacaturesRef);
      }
      delays.forEach((timeout) => clearTimeout(timeout));
    };
  }, []);

  return (
    <div className="min-h-screen">
      <style>{`
        @media (max-width: 639px) {
          /* Solliciteer direct knop - vervang met Solliciteer nu styling */
          section.section-padding.bg-secondary div.mt-6.sm\\:hidden button,
          section.section-padding.bg-secondary div.mt-6.sm\\:hidden a button {
            background-color: #8c8cff !important;
            color: white !important;
            border-bottom-width: 4px !important;
            border-bottom-color: #6565ff !important;
            font-size: 1.125rem !important;
            padding-left: 2rem !important;
            padding-right: 2rem !important;
          }
          section.section-padding.bg-secondary div.mt-6.sm\\:hidden button:hover,
          section.section-padding.bg-secondary div.mt-6.sm\\:hidden a button:hover {
            background-color: #464646 !important;
            color: hsl(var(--accent)) !important;
            border-bottom-color: #2f2f2f !important;
          }
          /* Verwijder animatie op vacature cards */
          section.section-padding.bg-background .bg-secondary.rounded-xl {
            transform: translateY(0) !important;
            opacity: 1 !important;
            transition: none !important;
          }
        }
      `}</style>
      <Header />
      <main>
        {/* Intro */}
        <section className="relative section-padding pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-12 sm:pb-16 md:pb-20 lg:pb-24 overflow-hidden">
          {/* Diagonale scheiding */}
          <div className="absolute inset-0 z-0">
            {/* Linkerhelft - secondary background met foto */}
            <div 
              className="absolute inset-0 bg-secondary"
              style={{
                clipPath: "polygon(0 0, 0 100%, 45% 100%, 55% 0)",
                overflow: "hidden",
              }}
            >
              {/* Foto in grijze ruimte - alleen linkerhelft */}
              <div 
                className="absolute"
                style={{
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: "55%",
                  clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 0)",
                }}
              >
                <img
                  src={festivalHeroImg}
                  alt="Festival vibe"
                  className="w-full h-full object-cover opacity-90"
                  style={{
                    objectPosition: "100% center",
                  }}
                />
                {/* Lichte zwarte overlay */}
                <div className="absolute inset-0 bg-black/30" />
              </div>
            </div>
            {/* Rechterhelft - paars */}
            <div 
              className="absolute inset-0 bg-[#7a6df7]"
              style={{
                clipPath: "polygon(45% 100%, 100% 100%, 100% 0, 55% 0)",
              }}
            />
          </div>
          
          <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Linkerhelft - leeg of optioneel content */}
                <div className="hidden lg:block"></div>
                
                {/* Rechterhelft - tekst meer naar rechts en naar onder */}
                <div className="text-center lg:flex lg:justify-center lg:items-center lg:pt-16">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight text-white mb-4 sm:mb-6 whitespace-nowrap">
                    Werken bij
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section met foto en tekst */}
        <section className="section-padding bg-secondary pt-16 sm:pt-20 md:pt-24 lg:pt-32">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                {/* Linkerhelft - Foto */}
                <div className="flex justify-center lg:justify-start">
                  <div className="relative w-full max-w-sm">
                    <div className="relative rounded-lg sm:rounded-xl overflow-visible">
                      <img
                        src={crewTeamImg}
                        alt="Crewstars team"
                        className="rounded-lg sm:rounded-xl shadow-xl object-cover w-full"
                      />
                      {/* Brand purple overlay */}
                      <div className="absolute inset-0 rounded-lg sm:rounded-xl z-10" style={{ backgroundColor: 'hsl(var(--primary))' }}></div>
                      {/* Crew working image - fills purple box */}
                      <img
                        src={foto223}
                        alt="Crewstars team member"
                        className="absolute inset-0 rounded-lg sm:rounded-xl z-30 hidden lg:block w-full h-full object-cover"
                        style={{ 
                          transform: 'rotate(-5deg)',
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Rechterhelft - Tekst */}
                <div>
                  <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3 sm:mb-4 text-accent">
                    • Werken bij Crewstars
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-foreground mb-4 sm:mb-6">
                    Word onderdeel van ons team
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-foreground/70 leading-relaxed mb-4 sm:mb-6">
                    Bij Crewstars werken we met gemotiveerde professionals die passie hebben voor de evenementenbranche. We bieden uitdagende projecten bij de grootste festivals, concerten, sportevenementen en corporate events in Nederland en daarbuiten.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-foreground/70 leading-relaxed mb-4 sm:mb-6">
                    Of je nu startende kracht bent of al jaren ervaring hebt, bij Crewstars krijg je de kans om te groeien en te werken aan diverse projecten. We investeren in onze mensen en zorgen voor een fijne werksfeer waarin iedereen zich thuis voelt.
                  </p>
                  {/* Solliciteer direct knop - alleen zichtbaar op mobile */}
                  <div className="mt-6 sm:hidden">
                    <a
                      href="https://app.recruitment.fleks.works/d6c6c449-5908-42f5-8ee1-6ee0361edb3b/apply"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="accent-bottom"
                        size="xl"
                        className="w-full bg-[#464646] hover:bg-[#5a5a5a] border-b-[#2f2f2f] text-white px-4 py-2.5 text-base"
                      >
                        Solliciteer direct
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vacatures Section */}
        <section className="section-padding bg-background">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8 sm:mb-12 md:mb-16">
                <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3 sm:mb-4 text-accent">
                  • Openstaande vacatures
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-foreground mb-4 sm:mb-6">
                  Kom jij ons team versterken?
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto px-2">
                  We zijn altijd op zoek naar gemotiveerde mensen die zich willen aansluiten bij ons team. Bekijk hieronder onze openstaande vacatures.
                </p>
              </div>

              {/* Vacature Cards */}
              <div ref={vacaturesRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {/* Vacature 1: Op- en afbouw */}
                <div className={`bg-secondary rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-border/60 shadow-lg hover:shadow-xl transition-all duration-700 hover:border-accent/50 flex flex-col ${
                  visibleVacatures.includes(0) 
                    ? 'translate-y-0' 
                    : 'translate-y-12'
                }`}
                style={{
                  opacity: visibleVacatures.includes(0) ? 1 : 0,
                  transition: 'transform 0.6s ease-out, opacity 0.6s ease-out'
                }}>
                  <div className="mb-4 sm:mb-6">
                    <div className="w-full h-40 sm:h-48 rounded-lg sm:rounded-xl overflow-hidden mb-3 sm:mb-4">
                      <img
                        src={crewTechniekImg}
                        alt="Op- en afbouw crew"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-foreground mb-2 sm:mb-3">
                      Op- en afbouw
                    </h3>
                    <p className="text-sm sm:text-base text-foreground/70 leading-relaxed mb-3 sm:mb-4">
                      We zoeken gemotiveerde mensen voor de op- en afbouw van evenementen. Je werkt mee aan het opzetten en afbreken van podia, truss, licht, geluid en andere technische installaties.
                    </p>
                    <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-foreground/70 mb-4 sm:mb-6">
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Fysiek fit en flexibel inzetbaar</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Teamplayer met oog voor veiligheid</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Proactieve houding en zelfstandig werken</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-auto">
                    <Button 
                      variant="accent-bottom" 
                      className="w-full text-sm sm:text-base"
                      asChild
                    >
                      <Link to="/vacatures/op-en-afbouw">
                        Bekijk vacature
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Vacature 2: AV-technician */}
                <div className={`bg-secondary rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-border/60 shadow-lg hover:shadow-xl transition-all duration-700 hover:border-accent/50 flex flex-col ${
                  visibleVacatures.includes(1) 
                    ? 'translate-y-0' 
                    : 'translate-y-12'
                }`}
                style={{
                  opacity: visibleVacatures.includes(1) ? 1 : 0,
                  transition: 'transform 0.6s ease-out, opacity 0.6s ease-out'
                }}>
                  <div className="mb-4 sm:mb-6">
                    <div className="w-full h-40 sm:h-48 rounded-lg sm:rounded-xl overflow-hidden mb-3 sm:mb-4">
                      <img
                        src={avCrewMemberImg}
                        alt="AV-technician"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-foreground mb-2 sm:mb-3">
                      AV-technician
                    </h3>
                    <p className="text-sm sm:text-base text-foreground/70 leading-relaxed mb-3 sm:mb-4">
                      Voor onze AV-afdeling zoeken we technici met kennis van licht, geluid of video. Je ondersteunt bij de installatie en bediening van audiovisuele systemen tijdens evenementen.
                    </p>
                    <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-foreground/70 mb-4 sm:mb-6">
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Kennis van licht, geluid of video</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Ervaring met professionele AV-apparatuur</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Flexibel en stressbestendig</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-auto">
                    <Button 
                      variant="accent-bottom" 
                      className="w-full text-sm sm:text-base"
                      asChild
                    >
                      <Link to="/vacatures/av-technician">
                        Bekijk vacature
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Vacature 3: Specialisten */}
                <div className={`bg-secondary rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-border/60 shadow-lg hover:shadow-xl transition-all duration-700 hover:border-accent/50 flex flex-col md:col-span-2 lg:col-span-1 ${
                  visibleVacatures.includes(2) 
                    ? 'translate-y-0' 
                    : 'translate-y-12'
                }`}
                style={{
                  opacity: visibleVacatures.includes(2) ? 1 : 0,
                  transition: 'transform 0.6s ease-out, opacity 0.6s ease-out'
                }}>
                  <div className="mb-4 sm:mb-6">
                    <div className="w-full h-40 sm:h-48 rounded-lg sm:rounded-xl overflow-hidden mb-3 sm:mb-4">
                      <img
                        src={specialistForkliftImg}
                        alt="Specialisten"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-foreground mb-2 sm:mb-3">
                      Specialisten
                    </h3>
                    <p className="text-sm sm:text-base text-foreground/70 leading-relaxed mb-3 sm:mb-4">
                      We zoeken gespecialiseerde krachten zoals heftruckchauffeurs, riggers, hoogwerkerbedieners en sitecoördinatoren. Heb je een specialisatie? Dan zijn we op zoek naar jou!
                    </p>
                    <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-foreground/70 mb-4 sm:mb-6">
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Relevante certificaten en bevoegdheden</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Ervaring in de evenementenbranche</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Veiligheidsbewust en oog voor detail</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-auto">
                    <Button 
                      variant="accent-bottom" 
                      className="w-full text-sm sm:text-base"
                      asChild
                    >
                      <Link to="/vacatures/specialisten">
                        Bekijk vacature
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTA 
          title="Geen passende vacature?"
          description="Stuur ons een open sollicitatie! We zijn altijd op zoek naar gemotiveerde mensen die zich willen aansluiten bij ons team."
          buttonText="Neem contact op"
          buttonLink="/contact"
        />
      </main>
      <Footer />
    </div>
  );
};

export default WerkenBij;
