import { useState, useEffect, useRef } from "react";
import { Music, Briefcase, Calendar, Sparkles, Trophy, Theater, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import mysterylandImg from "@/assets/mysteryland.png";
import ziggoDomeImg from "@/assets/ziggo-dome-concert.png";
import beurzenImg from "@/assets/beurzen.png";
import bedrijfseventsImg from "@/assets/bedrijfsevenementen.png";
import sporteventsImg from "@/assets/sportevenementen.png";
import nederlandHubsImg from "@/assets/nederland-hubs.png";
import theatersImg from "@/assets/theaters.png";
import crewTechniekImg from "@/assets/crew-techniek.png";
import crewTeamImg from "@/assets/crew-steps.png";

const sectors = [
  {
    icon: Music,
    category: "Festivals",
    title: "Festivals",
    image: mysterylandImg,
  },
  {
    icon: Sparkles,
    category: "Concerten",
    title: "Concerten",
    image: ziggoDomeImg,
  },
  {
    icon: Calendar,
    category: "Beurzen",
    title: "Beurzen",
    image: beurzenImg,
  },
  {
    icon: Briefcase,
    category: "Bedrijfsevenementen",
    title: "Bedrijfsevenementen",
    image: bedrijfseventsImg,
  },
  {
    icon: Trophy,
    category: "Sportevenementen",
    title: "Sportevenementen",
    image: sporteventsImg,
  },
  {
    icon: Theater,
    category: "Theaters",
    title: "Theaters",
    image: theatersImg,
  },
];

const stats = [
  {
    value: "100+",
    numericValue: 100,
    suffix: "+",
    label: "Crewleden",
    sublabel: "Klaar voor inzet",
  },
  {
    value: "1200+",
    numericValue: 1200,
    suffix: "+",
    label: "Projecten",
    sublabel: "Succesvol ondersteund",
  },
  {
    value: "5+",
    numericValue: 5,
    suffix: "+",
    label: "Jaar ervaring",
    sublabel: "Actief in de eventsector",
  },
];

const Sectors = () => {
  const [countedValues, setCountedValues] = useState<number[]>([0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const statsRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const [mapOpacity, setMapOpacity] = useState(0);
  const mapRef = useRef<HTMLDivElement>(null);
  const mapAnimationStartedRef = useRef(false);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            // Animate each stat
            stats.forEach((stat, index) => {
              const duration = 2000; // 2 seconds
              const steps = 60;
              const increment = stat.numericValue / steps;
              const stepDuration = duration / steps;
              
              let currentStep = 0;
              const timer = setInterval(() => {
                currentStep++;
                setCountedValues((prev) => {
                  const newValues = [...prev];
                  const newValue = Math.min(
                    Math.floor(increment * currentStep),
                    stat.numericValue
                  );
                  newValues[index] = newValue;
                  return newValues;
                });
                
                if (currentStep >= steps) {
                  clearInterval(timer);
                  setCountedValues((prev) => {
                    const newValues = [...prev];
                    newValues[index] = stat.numericValue;
                    return newValues;
                  });
                }
              }, stepDuration);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentRef = statsRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated]);

  // Animate steps appearing one by one from top to bottom
  useEffect(() => {
    setVisibleSteps([]);
    let delays: NodeJS.Timeout[] = [];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepCount = 3;

            // Fade in steps one by one with staggered delay
            for (let i = 0; i < stepCount; i++) {
              const timeout = setTimeout(() => {
                setVisibleSteps((prev) => [...prev, i]);
              }, i * 400);
              delays.push(timeout);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    const currentStepsRef = stepsRef.current;
    if (currentStepsRef) {
      observer.observe(currentStepsRef);
    }

    return () => {
      if (currentStepsRef) {
        observer.unobserve(currentStepsRef);
      }
      delays.forEach(clearTimeout);
    };
  }, []);

  // Fade-in animation for Netherlands map when it enters the viewport (manual JS animation)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !mapAnimationStartedRef.current) {
            mapAnimationStartedRef.current = true;

            const duration = 1000; // 1 second for a smooth fade
            const start = performance.now();

            const step = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              setMapOpacity(progress);
              if (progress < 1) {
                requestAnimationFrame(step);
              }
            };

            // Start animation
            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.6, rootMargin: "0px 0px -10% 0px" }
    );

    const currentMapRef = mapRef.current;
    if (currentMapRef) {
      observer.observe(currentMapRef);
    }

    return () => {
      if (currentMapRef) {
        observer.unobserve(currentMapRef);
      }
    };
  }, []);

  return (
    <>
    <section id="sectoren" className="section-padding bg-secondary">
      <div className="container-custom px-4 lg:px-8">
        {/* Type Evenementen Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase mb-4">
            <span className="text-accent text-xl">•</span>
            <span className="text-accent">Ons werk</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black leading-tight text-foreground mb-4">
            Waar je ons kunt vinden
          </h2>
          <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto">
Van grote festivals tot intieme corporate events: we zijn thuis in verschillende soorten evenementen en begrijpen wat elk type vraagt in de uitvoering.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="flex justify-center items-center mb-24">
          {sectors.map((sector, index) => {
            return (
              <div
                key={sector.title}
                className="relative overflow-hidden rounded-2xl w-[280px] h-[380px] cursor-default border-4 border-white shadow-lg transition-transform duration-500 ease-out hover:scale-[1.1] hover:shadow-2xl group"
                style={{ 
                  marginLeft: index === 0 ? '0' : '-30px',
                  zIndex: 10,
                }}
              >
                {/* Background Image */}
                <img
                  src={sector.image}
                  alt={sector.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-primary/80 transition-opacity duration-500" />
                
                {/* Content - Vertical Text */}
                <div className="absolute left-4 bottom-6 origin-bottom-left">
                  <h3 
                    className="text-xl font-bold text-white whitespace-nowrap"
                    style={{ 
                      writingMode: 'vertical-rl',
                      textOrientation: 'mixed',
                      transform: 'rotate(180deg)',
                    }}
                  >
                    {sector.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Landelijk Actief Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-32">
          {/* Left side - Text content */}
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-foreground mb-6">
              Actief in Nederland<br />en daarbuiten
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Onze kern ligt in Nederland, maar we zijn ook actief in België en Duitsland. 
              Bij inzet van personeel in het buitenland regelen wij alle vereiste documentatie, 
              zoals A1-verklaringen en Limosa-meldingen. Zo is alles juridisch correct en kan 
              de focus volledig op de uitvoering liggen.
            </p>
          </div>

          {/* Right side - Netherlands Map */}
          <div
            ref={mapRef}
            className="flex justify-center lg:justify-end"
            style={{ opacity: mapOpacity }}
          >
            <img
              src={nederlandHubsImg}
              alt="Kaart van Nederland met hubs in Groningen, Utrecht en Rotterdam"
              className="max-w-full h-auto max-h-[650px] object-contain"
            />
          </div>
        </div>

      </div>
    </section>

    {/* Plan van aanpak Section */}
    <section className="section-padding bg-muted/30">
      <div className="container-custom px-4 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase mb-4">
            <span className="text-accent text-xl">•</span>
            <span className="text-accent">hoe we werken</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-foreground mb-6">
            Plan van aanpak
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto">
            Onze werkwijze is gericht op duidelijkheid en korte lijnen. We zorgen voor heldere afspraken en een overzichtelijk proces, zodat de samenwerking soepel verloopt.
          </p>
        </div>

        {/* Stats with Image Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16 lg:items-stretch mt-24">
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

          {/* Right side - Steps vertical */}
          <div ref={stepsRef} className="max-w-xl flex flex-col gap-6">
            <div 
              className="bg-background rounded-2xl p-6 shadow-lg border border-border/50 relative transition-all duration-700"
              style={{
                opacity: visibleSteps.includes(0) ? 1 : 0,
                transform: visibleSteps.includes(0) ? 'translateY(0)' : 'translateY(-20px)',
              }}
            >
              <div className="absolute -top-3 -left-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent text-accent-foreground text-sm font-black shadow-lg">
                  1
                </span>
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">
                Bekijk ons aanbod
              </h4>
              <p className="text-sm text-foreground/60">
                Ontdek wat we voor jou kunnen betekenen
              </p>
            </div>
            <div 
              className="bg-background rounded-2xl p-6 shadow-lg border border-border/50 relative transition-all duration-700"
              style={{
                opacity: visibleSteps.includes(1) ? 1 : 0,
                transform: visibleSteps.includes(1) ? 'translateY(0)' : 'translateY(-20px)',
              }}
            >
              <div className="absolute -top-3 -left-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent text-accent-foreground text-sm font-black shadow-lg">
                  2
                </span>
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">
                Neem contact op
              </h4>
              <p className="text-sm text-foreground/60">
                We bespreken graag jouw wensen en mogelijkheden
              </p>
            </div>
            <div 
              className="bg-background rounded-2xl p-6 shadow-lg border border-border/50 relative transition-all duration-700"
              style={{
                opacity: visibleSteps.includes(2) ? 1 : 0,
                transform: visibleSteps.includes(2) ? 'translateY(0)' : 'translateY(-20px)',
              }}
            >
              <div className="absolute -top-3 -left-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent text-accent-foreground text-sm font-black shadow-lg">
                  3
                </span>
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">
                Wij komen je ondersteunen
              </h4>
              <p className="text-sm text-foreground/60">
                Onze crew voert met volle inzet de besproken opdracht uit.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-24">
          <Button variant="accent-bottom" size="xl" className="px-6 hover:-translate-y-2 transition-all duration-300">
            Vraag offerte aan
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
    </>
  );
};

export default Sectors;
