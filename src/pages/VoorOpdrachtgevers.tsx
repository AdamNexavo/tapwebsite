import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import WerkenBijHero from "@/components/WerkenBijHero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import CTA from "@/components/CTA";
import { Utensils, Users, Coffee, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import voorOpdrachtgeversHero from "@/assets/bg-week-34.jpg";
import crewTechniekImg from "@/assets/crew-techniek.png";
import crewTeamImg from "@/assets/crew-steps.png";
import bevrijdingsfestivalImg from "@/assets/bevrijdingsfestival-crew.jpg";

const VoorOpdrachtgevers = () => {
  useEffect(() => {
    document.title = "TAP Crew | Voor opdrachtgevers";
  }, []);
  const [visibleWidgets, setVisibleWidgets] = useState<number[]>([]);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const widgetsRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement | null>(null);
  const timelineScrollRef = useRef<HTMLDivElement | null>(null);

  const crewTypes = [
    {
      icon: Utensils,
      title: "Horeca Crew",
      description: "Ervaren bar- en cateringmedewerkers voor festivals, beurzen en zakelijke events. Van inschenken tot bediening.",
      buttonText: "HORECA CREW",
      link: "/horeca-crew"
    },
    {
      icon: Users,
      title: "Hospitality Crew",
      description: "Gastvrije medewerkers voor ontvangst, gastenbegeleiding en service. Warm welkom aan het begin van ieder event.",
      buttonText: "HOSPITALITY CREW",
      link: "/hospitality-crew"
    },
    {
      icon: Coffee,
      title: "Service Crew",
      description: "Representatieve service crew voor merchandise, pop-up stores en events. Gastgericht met verkoopervaring.",
      buttonText: "SERVICE CREW",
      link: "/service-crew"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            crewTypes.forEach((_, index) => {
              setTimeout(() => {
                setVisibleWidgets((prev) => [...prev, index]);
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (widgetsRef.current) {
      observer.observe(widgetsRef.current);
    }

    return () => {
      if (widgetsRef.current) {
        observer.unobserve(widgetsRef.current);
      }
    };
  }, []);

  // Animate steps appearing one by one from top to bottom
  useEffect(() => {
    setVisibleSteps([]);
    let delays: NodeJS.Timeout[] = [];
    let hasAnimated = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true;
            const stepCount = 4;

            for (let i = 0; i < stepCount; i++) {
              const timeout = setTimeout(() => {
                setVisibleSteps((prev) => {
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
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const currentStepsRef = stepsRef.current;
    if (currentStepsRef) {
      observer.observe(currentStepsRef);
    }

    return () => {
      if (currentStepsRef) {
        observer.unobserve(currentStepsRef);
      }
      delays.forEach((timeout) => clearTimeout(timeout));
    };
  }, []);

  return (
    <div className="min-h-screen">
      <style>{`
        @media (max-width: 639px) {
          /* Foto focus bovenkant op mobiel */
          section.relative.section-padding.pt-24 img[alt="Crewstars team aan het werk"] {
            object-position: center top !important;
          }
        }
        @media (min-width: 1024px) {
          /* Verwijder fixed height op laptop/desktop */
          section.relative.section-padding.pt-24[style*="height"] {
            height: auto !important;
          }
        }
        
      `}</style>
      <Header />
      <main>
        {/* Intro */}
        <section className="relative section-padding pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-12 sm:pb-16 md:pb-20 lg:pb-24 overflow-hidden" style={{ height: '300px' }}>
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
                  src={voorOpdrachtgeversHero}
                  alt="Crewstars team aan het werk"
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
          
          <div className="container-custom px-4 sm:px-6 lg:px-6 xl:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Linkerhelft - leeg of optioneel content */}
                <div className="hidden lg:block"></div>
                
                {/* Rechterhelft - tekst meer naar rechts en naar onder */}
                <div className="text-center lg:flex lg:justify-center lg:items-center lg:pt-16">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-7xl font-black leading-tight text-white mb-4 sm:mb-6 whitespace-nowrap uppercase italic">
                    DIENSTEN
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Eerste sectie */}
        <section className="section-padding pt-12 md:pt-16 lg:pt-20 pb-24 md:pb-32 relative overflow-hidden" style={{ backgroundColor: '#f1f1f1' }}>
          <div className="container-custom px-4 sm:px-6 lg:px-6 xl:px-8">
            <div className="max-w-6xl mx-auto">
              {/* Section label centered on top */}
              <div className="flex justify-center items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-8 sm:mb-12 md:mb-16">
                <span className="text-primary text-lg sm:text-xl">•</span>
                <span className="text-primary">VOOR OPDRACHTGEVERS</span>
              </div>

              <div className="grid lg:grid-cols-[1fr,1fr] gap-8 sm:gap-12 lg:gap-12 xl:gap-16 items-start">
                {/* Text column */}
                <div className="reveal space-y-4 sm:space-y-6">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black leading-tight text-foreground mb-4 sm:mb-6 italic">
                    WAT WE DOEN
                  </h1>
                  <p className="text-sm sm:text-base lg:text-lg text-foreground leading-relaxed">
                    Sinds 2021 koppelen wij energieke horeca- en hospitalitymedewerkers aan festivals, beurzen en zakelijke events. Onze kracht? We selecteren niet alleen op ervaring, maar vooral op mentaliteit. Bij TAP draait het om Talent, Actie en Passie, dé drie waarden die zorgen dat onze crew een bijdrage levert aan jou event.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-foreground leading-relaxed">
                    Elke medewerker krijgt de kans om te groeien, en die drive voel je terug op jouw event. Of het nu gaat om ontvangst, bar of bediening: wij zetten de juiste mensen op de juiste plek. Met oog voor sfeer, detail en beleving.
                  </p>
                </div>

                {/* Widgets column */}
                <div ref={widgetsRef} className="flex flex-col gap-2 sm:gap-3">
                  {crewTypes.map((crewType, index) => {
                    const IconComponent = crewType.icon;
                    const isVisible = visibleWidgets.includes(index);
                    return (
                      <div
                        key={index}
                        className={`bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-3 border border-border/60 shadow-lg hover:shadow-xl transition-all duration-700 hover:border-accent/50 ${
                          isVisible 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 -translate-y-8'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1.5">
                          <div className="bg-primary/10 p-1 sm:p-1.5 rounded-lg">
                            <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                          </div>
                          <h3 className="text-sm sm:text-base font-black text-foreground">{crewType.title}</h3>
                        </div>
                        <p className="text-xs sm:text-sm text-foreground/70 leading-snug mb-2">
                          {crewType.description}
                        </p>
                        <Link to={crewType.link}>
                          <Button 
                            variant="accent-bottom" 
                            size="sm" 
                            className="uppercase w-full sm:w-auto text-xs h-8 rounded-sm"
                          >
                            {crewType.buttonText}
                          </Button>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* WerkenBijHero sectie - WAAROM TAP? */}
        <WerkenBijHero variant="voor-opdrachtgevers" />
        
        <section className="px-4 sm:px-6 lg:px-8 pt-0 pb-16 md:pb-24 -mt-12 md:-mt-16">
          <div className="reveal container-custom max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black mb-6">ZO REGELEN WIJ HET</h2>
            
            <Accordion
              type="single"
              collapsible
              className="w-full rounded-2xl bg-muted/60 border border-border/60 shadow-lg overflow-hidden mb-8"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-base px-4">
                  Carpooling
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 px-4">
                  We combineren ritten slim zodat crewleden samen reizen. Kostenefficiënt én het zorgt voor een betere opkomst. Wij regelen de rittenplanning – wij hebben alleen een adres nodig.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-base px-4">
                  Briefing vooraf
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 px-4">
                  Iedere crew ontvangt duidelijke info over tijden, taken, locatie, kleding en gedrag. Zo staan ze voorbereid op locatie, zodat jullie als organisatie geen gedoe hebben op de dag zelf.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-base px-4">
                  Aanspreekpunt op locatie
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 px-4">
                  Indien gewenst leveren we een teamleider of coördinator aan die zorgt voor aansturing, controle en contact met jouw productieleiding.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-base px-4">
                  Flexibel in piekperiodes
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 px-4">
                  Van kleine shows tot grote festivals; we schalen eenvoudig op met vaste mensen en vertrouwde partners.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-base px-4">
                  Duidelijke prijzen vooraf
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 px-4">
                  We werken met vaste uurtarieven per functie. Alles duidelijk vooraf — zonder extra toeslagen of addertjes achteraf.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Hoe we werken Section */}
        <section className="section-padding bg-secondary">
          <div className="container-custom px-4 sm:px-6 lg:px-6 xl:px-8">
            <div className="reveal text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3 sm:mb-4">
                <span className="text-accent text-lg sm:text-xl">•</span>
                <span className="text-accent">hoe we werken</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-black leading-tight text-foreground mb-4 sm:mb-6">
                ONZE WERKWIJZE
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto px-2">
                Door duidelijke communicatie en een gestructureerde werkwijze zorgen we voor een vloeiende samenwerking van begin tot eind.
              </p>
            </div>

            {/* Stats with Image Section */}
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-12 xl:gap-16 mb-12 sm:mb-16 lg:items-stretch mt-12 sm:mt-16 md:mt-24">
              {/* Left side - Image aligned */}
              <div className="flex justify-center lg:justify-start">
                <div className="w-full max-w-xl lg:relative lg:h-full">
                  <div className="hidden lg:block" style={{ height: 'calc(1rem + 1.5rem)' }}></div>
                  <div className="lg:absolute lg:left-0 lg:right-0 relative rounded-xl overflow-visible flex justify-center" style={{ top: 'calc(1rem + 1.5rem)', bottom: 0 }}>
                    <div className="relative rounded-xl overflow-visible h-full" style={{ width: '85%', maxWidth: '85%' }}>
                      <img
                        src={crewTechniekImg}
                        alt="TAP Crew team aan het werk"
                        className="rounded-xl shadow-xl object-cover w-full h-full"
                      />
                      {/* Brand purple overlay */}
                      <div className="absolute inset-0 rounded-xl z-10" style={{ backgroundColor: 'hsl(var(--primary))' }}></div>
                      {/* Crew team image */}
                      <img
                        src={bevrijdingsfestivalImg}
                        alt="TAP Crew team"
                        className="absolute inset-0 rounded-xl z-30 hidden lg:block w-full h-full object-cover"
                        style={{ 
                          transform: 'rotate(-5deg)',
                          objectPosition: 'center 30%'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Timeline vertical */}
              <div ref={stepsRef} className="max-w-xl relative overflow-visible" style={{ height: '400px' }}>
                {/* Vertical timeline line */}
                <div className="absolute top-0 bottom-0 w-0.5 bg-accent/30" style={{ left: '24px', transform: 'translateX(-50%)' }}></div>
                
                <div ref={timelineScrollRef} className="relative h-full overflow-y-auto overflow-x-visible pr-2 sm:pr-4 pl-2 sm:pl-2" style={{ scrollbarWidth: 'thin' }}>
                  <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 pb-6 sm:pb-10">
                  {/* Step 1 */}
                  <div className={`relative pl-14 sm:pl-20 transition-all duration-700 ${
                    visibleSteps.includes(0) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 -translate-y-8'
                  }`}>
                    <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ left: '24px' }}>
                      <div className="relative w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center">
                        <div className="absolute inset-0 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-background border-2 sm:border-4 border-accent shadow-lg"></div>
                        <span className="relative z-10 text-accent font-black text-xs sm:text-base leading-none flex items-center justify-center">1</span>
                      </div>
                    </div>
                    <div className="bg-background rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg border border-border/50">
                      <h4 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                        Oriënterend gesprek
                      </h4>
                      <p className="text-xs sm:text-sm text-foreground/60">
                        We starten met een gesprek waarin we jouw wensen en de projectdetails bespreken. Zo krijgen we een volledig beeld van wat je nodig hebt en hoe we je optimaal kunnen helpen.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className={`relative pl-14 sm:pl-20 transition-all duration-700 ${
                    visibleSteps.includes(1) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 -translate-y-8'
                  }`}>
                    <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ left: '24px' }}>
                      <div className="relative w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center">
                        <div className="absolute inset-0 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-background border-2 sm:border-4 border-accent shadow-lg"></div>
                        <span className="relative z-10 text-accent font-black text-xs sm:text-base leading-none flex items-center justify-center">2</span>
                      </div>
                    </div>
                    <div className="bg-background rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg border border-border/50">
                      <h4 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                        Crew samenstellen
                      </h4>
                      <p className="text-xs sm:text-sm text-foreground/60">
                        Jij geeft aan wat voor personeel je nodig hebt voor jouw evenement. Wij stellen de juiste crew samen en plannen de inzet op basis van de benodigde vaardigheden en ervaring.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className={`relative pl-14 sm:pl-20 transition-all duration-700 ${
                    visibleSteps.includes(2) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 -translate-y-8'
                  }`}>
                    <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ left: '24px' }}>
                      <div className="relative w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center">
                        <div className="absolute inset-0 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-background border-2 sm:border-4 border-accent shadow-lg"></div>
                        <span className="relative z-10 text-accent font-black text-xs sm:text-base leading-none flex items-center justify-center">3</span>
                      </div>
                    </div>
                    <div className="bg-background rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg border border-border/50">
                      <h4 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                        Uitvoering van de werkzaamheden
                      </h4>
                      <p className="text-xs sm:text-sm text-foreground/60">
                        Onze ervaren crewleden voeren de afgesproken werkzaamheden uit met aandacht voor kwaliteit en veiligheid. We sluiten ons aan binnen jullie team en zorgen dat alles volgens planning verloopt.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className={`relative pl-14 sm:pl-20 transition-all duration-700 ${
                    visibleSteps.includes(3) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 -translate-y-8'
                  }`}>
                    <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ left: '24px' }}>
                      <div className="relative w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center">
                        <div className="absolute inset-0 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-background border-2 sm:border-4 border-accent shadow-lg"></div>
                        <span className="relative z-10 text-accent font-black text-xs sm:text-base leading-none flex items-center justify-center">4</span>
                      </div>
                    </div>
                    <div className="bg-background rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg border border-border/50">
                      <h4 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                        Afronding en facturatie
                      </h4>
                      <p className="text-xs sm:text-sm text-foreground/60">
                        Na voltooiing van het project ontvang je een overzichtelijke factuur. Alle uitgevoerde werkzaamheden en uren zijn duidelijk en transparant weergegeven, zodat je precies weet waarvoor je betaalt.
                      </p>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center mt-12 sm:mt-16 md:mt-20">
              <Link to="/offerte">
                <Button variant="accent-bottom" size="xl" className="w-full sm:w-auto px-6 text-sm sm:text-base hover:-translate-y-2 transition-all duration-300">
                  CREW AANVRAGEN
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <CTA 
          title="Samenwerken?"
          description="Of je nu op zoek bent naar crew voor je evenement of een leuke baan, bij TAP Crew ben je aan het juiste adres."
          buttonText="Contact opnemen"
          buttonLink="/contact"
        />
      </main>
      <Footer />
    </div>
  );
};

export default VoorOpdrachtgevers;
