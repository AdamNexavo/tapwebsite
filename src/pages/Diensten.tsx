import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Zap, Shield, Award, MapPin, Clock, Users, ArrowRight, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import crewBarriers from "@/assets/crew-barriers.png";
import crewTechniek from "@/assets/crew-techniek.png";
import crewBarriersReplacement from "@/assets/crew-barriers-replacement.jpg";
import avControl from "@/assets/av-control.png";
import avCrewMember from "@/assets/av-crew-member.png";
import specialistForklift from "@/assets/specialist-forklift.png";
import specialistRigger from "@/assets/specialist-rigger.png";
import crewStageSetup from "@/assets/cs_foto_olympischstadium.jpg";
import crewTechniekImg from "@/assets/crew-techniek.png";
import crewTeamImg from "@/assets/crew-steps.png";

const reviews = [
  {
    name: "Manfred Geisink",
    company: "MANS Events",
    text: "Wij werken sinds 2022 samen met Crewstars. Zij ondersteunen ons met de op- en afbouw van alle grote producties van MANS Events. Dit naar alle tevredenheid 👍",
    rating: 5,
  },
  {
    name: "Max Steiner",
    company: "Euro-Tec",
    text: "Wij werken als Euro Tec sinds 2022 samen met CrewStars. Zeer tevreden. Gemotiveerde werkers en sluiten heel goed aan bij onze eigen crew. Betrouwbaar!",
    rating: 5,
  },
  {
    name: "DOP Crewservice",
    company: "DOP Crewservice",
    text: "Onze crew heeft, tijdens de op- en afbouw van een groot congres in Amsterdam, samengewerkt met Crewstars. De samenwerking verliep in onze ervaring erg goed. Crewstars beschikt over goede en positieve crew met de juiste werkethiek.",
    rating: 5,
  },
  {
    name: "Daniel Hootsmans",
    company: "NDSM Producties",
    text: "We maken inmiddels al een paar jaar tot volle tevredenheid gebruik van deze mannen. Betrokken, harde werkers en fijn in de omgang. Aanrader!",
    rating: 5,
  },
  {
    name: "Dustin van Doorn",
    company: "Clipper MS",
    text: "Wij, Clipperms, zijn tevreden over de samenwerking met Crewstars. Het personeel is altijd gemotiveerd en het contact met de planning verloopt erg prettig. Een fijne samenwerking!",
    rating: 5,
  },
];

const Diensten = () => {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [currentReview, setCurrentReview] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [currentReview2, setCurrentReview2] = useState(0);
  const [dragOffset2, setDragOffset2] = useState(0);
  const [visibleWidgets, setVisibleWidgets] = useState<number[]>([]);
  const section1Ref = useRef<HTMLElement | null>(null);
  const section2Ref = useRef<HTMLDivElement | null>(null);
  const section3Ref = useRef<HTMLDivElement | null>(null);
  const stepsRef = useRef<HTMLDivElement | null>(null);
  const widgetsRef = useRef<HTMLDivElement | null>(null);
  const timelineScrollRef = useRef<HTMLDivElement | null>(null);
  const dragStartX = useRef<number | null>(null);
  const dragDeltaX = useRef(0);
  const isDragging = useRef(false);
  const dragStartX2 = useRef<number | null>(null);
  const dragDeltaX2 = useRef(0);
  const isDragging2 = useRef(false);


  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
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

            // Fade in steps one by one with staggered delay
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

  // Animate widgets appearing one by one from top with fade-in
  useEffect(() => {
    setVisibleWidgets([]);
    let delays: NodeJS.Timeout[] = [];
    let hasAnimated = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true;
            const widgetCount = 3;

            // Fade in widgets one by one with staggered delay
            for (let i = 0; i < widgetCount; i++) {
              const timeout = setTimeout(() => {
                setVisibleWidgets((prev) => {
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

    const currentWidgetsRef = widgetsRef.current;
    if (currentWidgetsRef) {
      observer.observe(currentWidgetsRef);
    }

    return () => {
      if (currentWidgetsRef) {
        observer.unobserve(currentWidgetsRef);
      }
      delays.forEach((timeout) => clearTimeout(timeout));
    };
  }, []);

  // Auto-rotate reviews
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Auto-rotate reviews 2
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview2((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Update visuele scroll thumb positie
  useEffect(() => {
    const scrollContainer = timelineScrollRef.current;
    if (!scrollContainer) return;

    const updateThumbPosition = () => {
      const scrollTop = scrollContainer.scrollTop;
      const scrollHeight = scrollContainer.scrollHeight;
      const clientHeight = scrollContainer.clientHeight;
      const maxScroll = scrollHeight - clientHeight;

      const parentContainer = scrollContainer.parentElement as HTMLElement | null;
      if (!parentContainer) return;

      const trackHeight = Math.round(parentContainer.getBoundingClientRect().height);
      parentContainer.style.setProperty('--track-height', `${trackHeight}px`);

      if (maxScroll <= 0) {
        parentContainer.style.setProperty('--thumb-top', '0px');
        parentContainer.style.setProperty('--thumb-height', `${trackHeight}px`);
        return;
      }

      const thumbHeight = Math.round(
        Math.max(80, (clientHeight / scrollHeight) * trackHeight)
      );

      const scrollRatio = Math.max(0, Math.min(1, scrollTop / maxScroll));
      let thumbTop = scrollRatio * (trackHeight - thumbHeight);

      thumbTop = Math.round(thumbTop);
      if (scrollTop >= maxScroll - 1) {
        thumbTop = trackHeight - thumbHeight;
      }

      parentContainer.style.setProperty('--thumb-top', `${thumbTop}px`);
      parentContainer.style.setProperty('--thumb-height', `${thumbHeight}px`);
    };

    updateThumbPosition();
    scrollContainer.addEventListener('scroll', updateThumbPosition);
    window.addEventListener('resize', updateThumbPosition);

    return () => {
      scrollContainer.removeEventListener('scroll', updateThumbPosition);
      window.removeEventListener('resize', updateThumbPosition);
    };
  }, []);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) =>
      (prev - 1 + reviews.length) % reviews.length
    );
  };

  const nextReview2 = () => {
    setCurrentReview2((prev) => (prev + 1) % reviews.length);
  };

  const prevReview2 = () => {
    setCurrentReview2((prev) =>
      (prev - 1 + reviews.length) % reviews.length
    );
  };

  // Identieke parallax-berekening voor alle secties - exact dezelfde snelheid
  const getParallaxOffset = (ref: React.RefObject<HTMLElement | HTMLDivElement | null>) => {
    if (!ref.current) return 0;
    const rect = ref.current.getBoundingClientRect();
    const viewportDistance = rect.top - window.innerHeight + 200; // Start 200px voor sectie in viewport komt
    const scrollProgress = Math.max(0, -viewportDistance);
    // Op mobile (< 640px): max 50px beweging zodat animatie eerder stopt
    // Op desktop: max 150px beweging zoals origineel
    const isMobile = window.innerWidth < 640;
    const maxOffset = isMobile ? 50 : 150;
    return Math.min(maxOffset, scrollProgress * 0.3); // Exact dezelfde snelheid: 0.3
  };

  // Elke sectie heeft zijn eigen parallax, maar met exact dezelfde formule en snelheid
  const parallaxOffset1 = getParallaxOffset(section1Ref);
  const parallaxOffset2 = getParallaxOffset(section2Ref);
  const parallaxOffset3 = getParallaxOffset(section3Ref);

  const pluspunten = [
    {
      icon: Clock,
      title: "Bereikbaarheid",
      description: "Dag-, avond- en nachtplanningen zijn mogelijk. We zijn beschikbaar voor projecten in zowel binnen- als buitenland.",
    },
    {
      icon: Zap,
      title: "Flexibiliteit",
      description: "Flexibel opschalen is mogelijk. We zijn ook last-minute inzetbaar wanneer er onverwachte wijzigingen zijn in de planning.",
    },
    {
      icon: Award,
      title: "Ervaring",
      description: "Jarenlange ervaring in de evenementenbranche. Onze crew kent de dynamiek van verschillende producties en weet wat er nodig is.",
    },
    {
      icon: Shield,
      title: "Betrouwbaarheid",
      description: "Duidelijke afspraken en goede communicatie. Je weet vooraf hoeveel mensen er komen en op welke tijden de crew aanwezig is.",
    },
    {
      icon: MapPin,
      title: "Nationaal bereik",
      description: "Inzet in heel Nederland vanuit verschillende hubs. Beschikbaar voor eendaagse en meerdaagse producties, dag-, avond- en nachtplanningen.",
    },
    {
      icon: Users,
      title: "Kwaliteit",
      description: "Ervaren professionals en gemotiveerde crewleden. We sluiten naadloos aan bij bestaande teams en werkwijzen.",
    },
  ];

  return (
    <div className="min-h-screen">
      <style>{`
        @media (max-width: 639px) {
          /* Achtergrondfoto positioneren op mobiel - bovenkant van foto zichtbaar */
          section.relative.section-padding.pt-24 img[alt="Crewstars team aan het werk op het podium"] {
            object-position: 20% top !important;
          }
          /* Maak grijze blocks lichter op mobiel */
          section.section-padding.bg-background div[class*="bg-muted"] {
            background-color: hsl(var(--muted) / 0.15) !important;
          }
          section.py-12.bg-muted\\/50 div[class*="bg-muted"] {
            background-color: hsl(var(--muted) / 0.15) !important;
          }
          section.py-12.bg-background div[class*="bg-muted"] {
            background-color: hsl(var(--muted) / 0.15) !important;
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
                  src={crewStageSetup}
                  alt="Crewstars team aan het werk op het podium"
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
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight text-white mb-4 sm:mb-6">
                    Diensten
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our advantages / Pluspunten */}
        <section className="section-padding bg-background">
          <div className="container-custom px-4 sm:px-6 lg:px-6 xl:px-8">
            <div className="max-w-6xl mx-auto">
              {/* Section label centered on top */}
              <div className="flex justify-center items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-8 sm:mb-12 md:mb-16">
                <span className="text-accent text-lg sm:text-xl">•</span>
                <span className="text-accent">Waarom Crewstars?</span>
              </div>

              <div className="grid lg:grid-cols-[1fr,1fr] gap-8 sm:gap-12 lg:gap-12 xl:gap-16 items-start">
                {/* Text column */}
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-black leading-tight text-foreground mb-4 sm:mb-6">
                    Betrouwbare partner voor jouw event
                  </h2>
                  <p className="text-sm sm:text-base lg:text-lg text-foreground/70 leading-relaxed">
                    Bij Crewstars staat kwaliteit en betrouwbaarheid centraal. We begrijpen dat elk evenement uniek is en passen hierop aan. Onze ervaren crewleden sluiten aan bij jouw team en zorgen voor een soepele uitvoering van de werkzaamheden.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-foreground/70 leading-relaxed">
                    We zijn flexibel inzetbaar, (inter)nationaal bereikbaar en werken met duidelijke afspraken. Of het nu gaat om opbouw, show of afbouw - we zorgen dat de juiste mensen op de juiste plek werken.
                  </p>
                </div>

                {/* Widgets column */}
                <div ref={widgetsRef} className="flex flex-col gap-4 sm:gap-6">
                  {pluspunten.slice(0, 3).map((pluspunt, index) => {
                    const IconComponent = pluspunt.icon;
                    const isVisible = visibleWidgets.includes(index);
                    return (
                      <div
                        key={index}
                        className={`bg-muted/60 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-border/60 shadow-lg hover:shadow-xl transition-all duration-700 hover:border-accent/50 ${
                          isVisible 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 -translate-y-8'
                        }`}
                      >
                        <div className="flex items-center gap-2 sm:gap-3 mb-2">
                          <div className="bg-accent/10 p-1.5 sm:p-2 rounded-lg sm:rounded-xl">
                            <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                          </div>
                          <h3 className="text-base sm:text-lg font-black text-foreground">{pluspunt.title}</h3>
                        </div>
                        <p className="text-xs sm:text-sm text-foreground/70 leading-snug">{pluspunt.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What we provide */}
        <section className="section-padding bg-secondary pt-6 sm:pt-8 md:pt-12" ref={section1Ref}>
          <div className="container-custom px-4 sm:px-6 lg:px-6 xl:px-8">
            <div className="max-w-5xl mx-auto">
              {/* Section label centered on top */}
              <div className="flex justify-center items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-10 sm:mb-12 md:mb-16 lg:mb-20">
                <span className="text-accent text-lg sm:text-xl">•</span>
                <span className="text-accent">Ons aanbod</span>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-10 xl:gap-10 items-center">
                {/* Left column - overlapping photos with parallax (same stijl als homepage) */}
                <div className="flex justify-center lg:justify-start">
                  <div className="relative h-[280px] sm:h-[360px] md:h-[420px] w-full max-w-md flex items-center justify-center">
                    {/* Achtergrondfoto - blijft op positie */}
                    <div
                      className="absolute left-0 top-1/2 w-[140px] sm:w-[200px] md:w-[240px] lg:w-[260px] h-[200px] sm:h-[280px] md:h-[320px] lg:h-[340px] bg-[#333333] p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-2xl"
                      style={{ transform: "translateY(-50%)" }}
                    >
                      <img
                        src={crewTechniek}
                        alt="Crewstars techniek team"
                        className="w-full h-full object-cover rounded-lg sm:rounded-xl"
                      />
                    </div>

                    {/* Voorgrondfoto - beweegt mee met scroll */}
                    <div
                      className="absolute left-[90px] sm:left-[130px] md:left-[150px] lg:left-[160px] top-0 w-[140px] sm:w-[200px] md:w-[240px] lg:w-[260px] h-[200px] sm:h-[280px] md:h-[320px] lg:h-[340px] bg-[#333333] p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-2xl z-10"
                      style={{
                        transform: `translateY(${-40 + parallaxOffset1}px)`,
                        transition: "transform 0.3s ease-out",
                      }}
                    >
                      <img
                        src={crewBarriersReplacement}
                        alt="Festivalpubliek"
                        className="w-full h-full object-cover rounded-lg sm:rounded-xl"
                      />
                    </div>
                  </div>
                </div>

                {/* Right column - text */}
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-black leading-tight text-foreground mb-3 sm:mb-4">
                    Op-en afbouw
                  </h2>
                  <p className="text-sm sm:text-base lg:text-lg text-foreground/70 leading-relaxed mb-6 sm:mb-8">
                    Inzetbaar voor het ondersteunen tijdens de op- en afbouw van evenementen.
                  </p>

                  <Accordion
                    type="single"
                    collapsible
                    className="w-full rounded-2xl bg-muted/60 border border-border/60 shadow-lg overflow-hidden"
                  >
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-left text-base px-4">
                        Stagehands
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/70 px-4">
                        Assisteren bij de op- en afbouw van o.a. truss, licht, geluid, video en kabelwerk. Laden en lossen
                        van trucks en ondersteunen waar extra handen nodig zijn op de vloer.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-left text-base px-4">
                        Sitecrew
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/70 px-4">
                        Terreinwerk zoals hekken, vloeren, signing en tijdelijke infrastructuur. Breed inzetbare crew voor
                        de basis van elk event, van inrichtingswerk tot het klaarzetten van materialen.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-left text-base px-4">
                        Podiumbouwers
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/70 px-4">
                        Bouwen van podiumconstructies voor verschillende soorten producties. Werken op de grond én op
                        hoogte, volgens de planning en tekeningen van de technische partij.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger className="text-left text-base px-4">
                        Standbouwers
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/70 px-4">
                        Op- en afbouw van zowel uniforme als maatwerk standbouw voor beurzen en zakelijke events. Nette en
                        nauwkeurige afwerking volgens het ontwerp en de huisstijl van de opdrachtgever.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger className="text-left text-base px-4">
                        Tentenbouwers
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/70 px-4">
                        Snel en veilig plaatsen van tentconstructies zoals aluhallen, pagodes en stretchtenten. Inclusief
                        verankering, afwerking en het klaarzetten van de basisinrichting waar nodig.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Second block - AV Support */}
        <section className="py-12 sm:py-16 md:py-24 bg-muted/50">
          <div className="container-custom px-4 sm:px-6 lg:px-6 xl:px-8">
            <div ref={section2Ref} className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-10 xl:gap-10 items-center">
                {/* Left column - text */}
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-black leading-tight text-foreground mb-3 sm:mb-4">
                    AV Support
                  </h2>
                  <p className="text-sm sm:text-base lg:text-lg text-foreground/70 leading-relaxed mb-6 sm:mb-8">
                    Ondersteunende crew met kennis van audiovisuele techniek, inzetbaar tijdens opbouw, uitvoering en afbouw.
                  </p>

                  <Accordion
                    type="single"
                    collapsible
                    className="w-full rounded-2xl bg-muted/60 border border-border/60 shadow-lg overflow-hidden"
                  >
                    <AccordionItem value="item-1b">
                      <AccordionTrigger className="text-left text-base px-4">
                        Lichttechnici
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/70 px-4">
                        Ophangen, bekabelen en instellen van lichtinstallaties, en ondersteuning tijdens shows voor het
                        bedienen en afstellen van de verlichting.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2b">
                      <AccordionTrigger className="text-left text-base px-4">
                        Geluidstechnici
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/70 px-4">
                        Plaatsen en aansluiten van speakers, bekabeling en microfoons, met ondersteuning tijdens
                        soundchecks en bediening tijdens het evenement.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3b">
                      <AccordionTrigger className="text-left text-base px-4">
                        Videotechnici
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/70 px-4">
                        Montage van LED-schermen, projectoren en mediaservers, met inzet tijdens shows voor controle,
                        troubleshooting en ondersteuning.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4b">
                      <AccordionTrigger className="text-left text-base px-4">
                        Video-operators
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/70 px-4">
                        Bedienen van videosystemen en presentaties tijdens shows en zakelijke events, volgens draaiboek en
                        aanwijzingen van de regie.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5b">
                      <AccordionTrigger className="text-left text-base px-4">
                        Patchers / Kabeltrekkers
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/70 px-4">
                        Aanleggen en organiseren van stroom- en signaalkabels, en ondersteuning bij patching tijdens
                        opbouw én draaiende productie.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                {/* Right column - image */}
                <div className="flex justify-center lg:justify-end">
                  <div className="relative h-[280px] sm:h-[360px] md:h-[420px] w-full max-w-md flex items-center justify-center">
                    <div
                      className="absolute left-0 top-0 w-[140px] sm:w-[200px] md:w-[240px] lg:w-[260px] h-[200px] sm:h-[280px] md:h-[320px] lg:h-[340px] bg-[#333333] p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-2xl z-10"
                      style={{
                        transform: `translateY(${-40 + parallaxOffset2}px)`,
                        transition: "transform 0.3s ease-out",
                      }}
                    >
                      <img
                        src={avCrewMember}
                        alt="Crewstars AV crew member"
                        className="w-full h-full object-cover rounded-lg sm:rounded-xl"
                      />
                    </div>

                    <div
                      className="absolute left-[90px] sm:left-[130px] md:left-[150px] lg:left-[160px] top-1/2 w-[140px] sm:w-[200px] md:w-[240px] lg:w-[260px] h-[200px] sm:h-[280px] md:h-[320px] lg:h-[340px] bg-[#333333] p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-2xl"
                      style={{ transform: "translateY(-50%)" }}
                    >
                      <img
                        src={avControl}
                        alt="AV controle setup"
                        className="w-full h-full object-cover rounded-lg sm:rounded-xl"
                      />
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </section>

        {/* Third block - Specialisten (image left, text right) */}
        <section className="py-12 sm:py-16 md:py-24 bg-background">
          <div className="container-custom px-4 sm:px-6 lg:px-6 xl:px-8">
            <div ref={section3Ref} className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-10 xl:gap-10 items-center">
                {/* Left column - image */}
                <div className="flex justify-center lg:justify-start">
                  <div className="relative h-[280px] sm:h-[360px] md:h-[420px] w-full max-w-md flex items-center justify-center">
                    <div
                      className="absolute left-0 top-1/2 w-[140px] sm:w-[200px] md:w-[240px] lg:w-[260px] h-[200px] sm:h-[280px] md:h-[320px] lg:h-[340px] bg-[#333333] p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-2xl"
                      style={{ transform: "translateY(-50%)" }}
                    >
                      <img
                        src={specialistForklift}
                        alt="Crewstars specialisten met heftrucks"
                        className="w-full h-full object-cover rounded-lg sm:rounded-xl"
                      />
                    </div>

                    <div
                      className="absolute left-[90px] sm:left-[130px] md:left-[140px] lg:left-[160px] top-0 w-[140px] sm:w-[200px] md:w-[240px] lg:w-[260px] h-[200px] sm:h-[280px] md:h-[320px] lg:h-[340px] bg-[#333333] p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-2xl z-10"
                      style={{
                        transform: `translateY(${-40 + parallaxOffset3}px)`,
                        transition: "transform 0.3s ease-out",
                      }}
                    >
                      <img
                        src={specialistRigger}
                        alt="Crewstars rigger aan het werk"
                        className="w-full h-full object-cover rounded-lg sm:rounded-xl"
                      />
                    </div>
                  </div>
                </div>

                {/* Right column - text */}
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-black leading-tight text-foreground mb-3 sm:mb-4">
                    Specialisten
                  </h2>
                  <p className="text-sm sm:text-base lg:text-lg text-foreground/70 leading-relaxed mb-6 sm:mb-8">
                    Inzet van gespecialiseerde krachten waar extra kennis of ervaring nodig is.
                  </p>

                  <Accordion
                    type="single"
                    collapsible
                    className="w-full rounded-2xl bg-muted/60 border border-border/60 shadow-lg overflow-hidden"
                  >
                    <AccordionItem value="item-1c">
                      <AccordionTrigger className="text-left text-base px-4">
                        Heftruckchauffeurs
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/70 px-4">
                        Bedienen van heftrucks voor het verplaatsen, laden en lossen van materialen tijdens op- en afbouw.
                        Ingezet voor logistiek, terreinwerk en ondersteuning bij technische teams.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2c">
                      <AccordionTrigger className="text-left text-base px-4">
                        Hoogwerkerbedieners
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/70 px-4">
                        Bevoegd om veilig op hoogte te werken met diverse hoogwerkers, volgens de geldende veiligheids- en
                        bedieningsvoorschriften.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3c">
                      <AccordionTrigger className="text-left text-base px-4">
                        Riggers
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/70 px-4">
                        Ophangen en veilig bevestigen van constructies op hoogte en vanaf de grond, volgens riggingnormen
                        en in afstemming met de technische leiding.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4c">
                      <AccordionTrigger className="text-left text-base px-4">
                        VCA-medewerkers
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/70 px-4">
                        Uitvoeren van op- en afbouwwerkzaamheden op locaties waar VCA verplicht is, met aandacht voor
                        veiligheidsprocedures en werkinstructies.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5c">
                      <AccordionTrigger className="text-left text-base px-4">
                        Sitecoördinatoren
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/70 px-4">
                        Aansturen van teams en schakelen met opdrachtgever tijdens opbouw, show en afbouw. Verantwoordelijk
                        voor het overzicht op de werkvloer en het verloop volgens planning.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
            </div>
          </div>
        </section>

        {/* Plan van aanpak Section */}
        <section className="section-padding bg-secondary">
          <div className="container-custom px-4 sm:px-6 lg:px-6 xl:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3 sm:mb-4">
                <span className="text-accent text-lg sm:text-xl">•</span>
                <span className="text-accent">hoe we werken</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-black leading-tight text-foreground mb-4 sm:mb-6">
                Onze werkwijze
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto px-2">
                Door duidelijke communicatie en een gestructureerde werkwijze zorgen we voor een vloeiende samenwerking van begin tot eind.
              </p>
            </div>

            {/* Stats with Image Section */}
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-12 xl:gap-16 mb-12 sm:mb-16 lg:items-stretch mt-12 sm:mt-16 md:mt-24">
              {/* Left side - Image aligned: top with heading top, bottom with stats bottom */}
              <div className="flex justify-center lg:justify-start">
                <div className="w-full max-w-xl lg:relative lg:h-full">
                  {/* Spacer matching span mb-4 to align image top with h2 top */}
                  <div className="hidden lg:block" style={{ height: 'calc(1rem + 1.5rem)' }}></div>
                  {/* Image container positioned from h2 top to stats bottom */}
                  <div className="lg:absolute lg:left-0 lg:right-0 relative rounded-xl overflow-visible flex justify-center" style={{ top: 'calc(1rem + 1.5rem)', bottom: 0 }}>
                    <div className="relative rounded-xl overflow-visible h-full" style={{ width: '85%', maxWidth: '85%' }}>
                      <img
                        src={crewTechniekImg}
                        alt="Crewstars team aan het werk"
                        className="rounded-xl shadow-xl object-cover w-full h-full"
                      />
                      {/* Brand purple overlay */}
                      <div className="absolute inset-0 rounded-xl z-10" style={{ backgroundColor: 'hsl(var(--primary))' }}></div>
                      {/* Crew team image - fills purple box */}
                      <img
                        src={crewTeamImg}
                        alt="Crewstars team"
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

              {/* Right side - Timeline vertical with fixed height */}
              <div ref={stepsRef} className="max-w-xl relative overflow-visible" style={{ height: '400px' }}>
                {/* Vertical timeline line - centered on circles */}
                <div className="absolute top-0 bottom-0 w-0.5 bg-accent/30" style={{ left: '24px', transform: 'translateX(-50%)' }}></div>
                
                <div ref={timelineScrollRef} className="relative h-full overflow-y-auto overflow-x-visible pr-2 sm:pr-4 pl-2 sm:pl-2" style={{ scrollbarWidth: 'thin' }}>
                  <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 pb-6 sm:pb-10">
                  {/* Step 1 */}
                  <div className={`relative pl-14 sm:pl-20 transition-all duration-700 ${
                    visibleSteps.includes(0) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 -translate-y-8'
                  }`}>
                    {/* Timeline dot - centered on line */}
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
                    {/* Timeline dot - centered on line */}
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
                    {/* Timeline dot - centered on line */}
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
                    {/* Timeline dot - centered on line */}
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
                  Crew aanvragen
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Ervaringen uit de praktijk Section */}
        <section className="section-padding bg-secondary diensten-original-reviews">
          <div className="container-custom px-4 sm:px-6 lg:px-6 xl:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="relative overflow-visible">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-black text-foreground mb-3 sm:mb-4">
                  Ervaringen uit de praktijk
                </h3>
                {/* Review Cards */}
                <div
                  className="relative overflow-x-hidden overflow-y-visible pt-2 pb-10"
                  onMouseDown={(e) => {
                    isDragging.current = true;
                    dragStartX.current = e.clientX;
                    dragDeltaX.current = 0;
                    setDragOffset(0);
                  }}
                  onMouseMove={(e) => {
                    if (!isDragging.current || dragStartX.current === null) return;
                    dragDeltaX.current = e.clientX - dragStartX.current;
                    setDragOffset(dragDeltaX.current);
                  }}
                  onMouseUp={() => {
                    if (!isDragging.current) return;
                    isDragging.current = false;
                    const threshold = 60;
                    if (dragDeltaX.current <= -threshold) {
                      setCurrentReview((prev) => (prev + 1) % reviews.length);
                    } else if (dragDeltaX.current >= threshold) {
                      setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
                    }
                    dragStartX.current = null;
                    dragDeltaX.current = 0;
                    setDragOffset(0);
                  }}
                  onMouseLeave={() => {
                    if (!isDragging.current) return;
                    isDragging.current = false;
                    dragStartX.current = null;
                    dragDeltaX.current = 0;
                    setDragOffset(0);
                  }}
                  onTouchStart={(e) => {
                    const touch = e.touches[0];
                    isDragging.current = true;
                    dragStartX.current = touch.clientX;
                    dragDeltaX.current = 0;
                    setDragOffset(0);
                  }}
                  onTouchMove={(e) => {
                    if (!isDragging.current || dragStartX.current === null) return;
                    const touch = e.touches[0];
                    dragDeltaX.current = touch.clientX - dragStartX.current;
                    setDragOffset(dragDeltaX.current);
                  }}
                  onTouchEnd={() => {
                    if (!isDragging.current) return;
                    isDragging.current = false;
                    const threshold = 60;
                    if (dragDeltaX.current <= -threshold) {
                      setCurrentReview((prev) => (prev + 1) % reviews.length);
                    } else if (dragDeltaX.current >= threshold) {
                      setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
                    }
                    dragStartX.current = null;
                    dragDeltaX.current = 0;
                    setDragOffset(0);
                  }}
                >
                  <div 
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(calc(-${currentReview * 100}% + ${dragOffset}px))` }}
                  >
                    {reviews.map((review, index) => (
                      <div
                        key={index}
                        className="min-w-full"
                      >
                        <div className="bg-white rounded-2xl p-8 shadow-xl border border-border/50 max-w-[90%] mx-auto my-4 cursor-pointer select-none">
                          <div className="flex items-center gap-1 mb-4">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                            ))}
                          </div>
                          <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                            "{review.text}"
                          </p>
                          <div>
                            <p className="font-bold text-foreground">{review.name}</p>
                            <p className="text-sm text-foreground/60">{review.company}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={prevReview}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-background rounded-full p-2 shadow-lg border border-border/50 hover:bg-accent hover:text-accent-foreground transition-all duration-300 z-10"
                  aria-label="Vorige review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextReview}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-background rounded-full p-2 shadow-lg border border-border/50 hover:bg-accent hover:text-accent-foreground transition-all duration-300 z-10"
                  aria-label="Volgende review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-0">
                  {reviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentReview(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentReview === index
                          ? 'bg-accent w-8'
                          : 'bg-foreground/30 hover:bg-foreground/50'
                      }`}
                      aria-label={`Ga naar review ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Duplicated Reviews Section - Mobile Only */}
        <div className="max-w-5xl mx-auto mt-12 sm:mt-16 md:mt-24 lg:mt-32 diensten-duplicated-reviews-mobile">
          <div className="relative overflow-visible terug-in-de-tijd-reviews-wrapper">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-black text-foreground mb-3 sm:mb-4">
              Ervaringen uit de praktijk
            </h3>
            {/* Review Cards */}
            <div
              className="relative overflow-x-hidden overflow-y-visible pt-2 pb-10"
              onMouseDown={(e) => {
                isDragging2.current = true;
                dragStartX2.current = e.clientX;
                dragDeltaX2.current = 0;
                setDragOffset2(0);
              }}
              onMouseMove={(e) => {
                if (!isDragging2.current || dragStartX2.current === null) return;
                dragDeltaX2.current = e.clientX - dragStartX2.current;
                setDragOffset2(dragDeltaX2.current);
              }}
              onMouseUp={() => {
                if (!isDragging2.current) return;
                isDragging2.current = false;
                const threshold = 60;
                if (dragDeltaX2.current <= -threshold) {
                  setCurrentReview2((prev) => (prev + 1) % reviews.length);
                } else if (dragDeltaX2.current >= threshold) {
                  setCurrentReview2((prev) => (prev - 1 + reviews.length) % reviews.length);
                }
                dragStartX2.current = null;
                dragDeltaX2.current = 0;
                setDragOffset2(0);
              }}
              onMouseLeave={() => {
                if (!isDragging2.current) return;
                isDragging2.current = false;
                dragStartX2.current = null;
                dragDeltaX2.current = 0;
                setDragOffset2(0);
              }}
              onTouchStart={(e) => {
                const touch = e.touches[0];
                isDragging2.current = true;
                dragStartX2.current = touch.clientX;
                dragDeltaX2.current = 0;
                setDragOffset2(0);
              }}
              onTouchMove={(e) => {
                if (!isDragging2.current || dragStartX2.current === null) return;
                const touch = e.touches[0];
                dragDeltaX2.current = touch.clientX - dragStartX2.current;
                setDragOffset2(dragDeltaX2.current);
              }}
              onTouchEnd={() => {
                if (!isDragging2.current) return;
                isDragging2.current = false;
                const threshold = 60;
                if (dragDeltaX2.current <= -threshold) {
                  setCurrentReview2((prev) => (prev + 1) % reviews.length);
                } else if (dragDeltaX2.current >= threshold) {
                  setCurrentReview2((prev) => (prev - 1 + reviews.length) % reviews.length);
                }
                dragStartX2.current = null;
                dragDeltaX2.current = 0;
                setDragOffset2(0);
              }}
            >
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(calc(-${currentReview2 * 100}% + ${dragOffset2}px))` }}
              >
                {reviews.map((review, index) => (
                  <div
                    key={index}
                    className="min-w-full"
                  >
                    <div className="bg-background rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl border border-border/50 max-w-[95%] sm:max-w-[90%] mx-auto my-3 sm:my-4 cursor-pointer select-none review-card">
                      <div className="flex items-center gap-1 mb-3 sm:mb-4">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-accent text-accent" />
                        ))}
                      </div>
                      <p className="text-sm sm:text-base md:text-lg text-foreground/80 leading-relaxed mb-4 sm:mb-6">
                        "{review.text}"
                      </p>
                      <div>
                        <p className="font-bold text-foreground text-sm sm:text-base">{review.name}</p>
                        <p className="text-xs sm:text-sm text-foreground/60">{review.company}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevReview2}
              className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 bg-background rounded-full p-1.5 sm:p-2 shadow-lg border border-border/50 hover:bg-accent hover:text-accent-foreground transition-all duration-300 z-10 review-nav-button"
              aria-label="Vorige review"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={nextReview2}
              className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 bg-background rounded-full p-1.5 sm:p-2 shadow-lg border border-border/50 hover:bg-accent hover:text-accent-foreground transition-all duration-300 z-10 review-nav-button"
              aria-label="Volgende review"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-0 review-dots">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview2(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentReview2 === index
                      ? 'bg-accent w-8'
                      : 'bg-foreground/30 hover:bg-foreground/50'
                  }`}
                  aria-label={`Ga naar review ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <CTA 
          title="Ondersteuning nodig?"
          description="Heb je een evenement of project waar je ondersteuning bij nodig hebt? Neem contact met ons op en ontdek hoe Crewstars jouw evenement kunt ondersteunen."
          buttonText="Crew aanvragen"
          buttonLink="/offerte"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Diensten;


