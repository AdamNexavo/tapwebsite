import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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
  // Initialize visibleSteps: start empty for animation on all screen sizes
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [isLaptop, setIsLaptop] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const detailsRefs = useRef<(HTMLDetailsElement | null)[]>([]);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsLaptop(width >= 1024 && width < 1920);
      setIsDesktop(width >= 1920);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

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

  // Animate steps appearing one by one from top to bottom (ALL SCREEN SIZES)
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

  // Measure open content height and set --push CSS variable
  useEffect(() => {
    const updatePushHeight = () => {
      detailsRefs.current.forEach((detailsElement, index) => {
        if (!detailsElement) return;
        
        if (detailsElement.open) {
          // Always use 200px for push height
          detailsElement.style.setProperty('--push', '200px');
        } else {
          detailsElement.style.setProperty('--push', '0px');
        }
      });
    };

    // Update on mount and when cards toggle
    updatePushHeight();
    
    // Listen for toggle events
    const handleToggleEvent = () => {
      setTimeout(updatePushHeight, 0);
    };
    
    detailsRefs.current.forEach((ref) => {
      if (ref) {
        ref.addEventListener('toggle', handleToggleEvent);
      }
    });
    
    return () => {
      detailsRefs.current.forEach((ref) => {
        if (ref) {
          ref.removeEventListener('toggle', handleToggleEvent);
        }
      });
    };
  }, []);

  // Handle toggle: close other cards when one opens
  const handleToggle = (index: number) => {
    const detailsElement = detailsRefs.current[index];
    if (!detailsElement) return;
    
    const isTheaters = sectors[index].title === "Theaters";
    
    // If clicking on Theaters card, close all other cards but don't open Theaters
    if (isTheaters) {
      detailsElement.open = false;
      // Close all other open cards
      setTimeout(() => {
        detailsRefs.current.forEach((ref, i) => {
          if (ref && i !== index && ref.open) {
            ref.open = false;
          }
        });
      }, 0);
      return;
    }
    
    const isOpen = detailsElement.open;
    console.log('toggle', index, isOpen);
    
    // If opening this card, close all others
    // Use setTimeout to ensure this runs after the browser's native toggle
    if (isOpen) {
      setTimeout(() => {
        detailsRefs.current.forEach((ref, i) => {
          if (ref && i !== index && ref.open) {
            ref.open = false;
          }
        });
      }, 0);
    }
  };

  return (
    <>
    <section id="sectoren" className="section-padding bg-secondary">
      <div className="container-custom px-4 sm:px-6 lg:px-6 xl:px-8">
        {/* Type Evenementen Section */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3 sm:mb-4">
            <span className="text-accent text-lg sm:text-xl">•</span>
            <span className="text-accent">Ons werk</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-black leading-tight text-foreground mb-3 sm:mb-4">
            Waar je ons kunt vinden
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto px-2">
Van grote festivals tot intieme corporate events: we zijn thuis in verschillende soorten evenementen en begrijpen wat elk type vraagt in de uitvoering.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="lg:flex lg:justify-center lg:px-8 2xl:px-0">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-start lg:justify-center items-center mb-6 sm:mb-8 md:mb-10 overflow-visible sm:overflow-x-auto pb-0 sm:pb-4 -mx-4 px-0 sm:-mx-4 sm:px-4 lg:overflow-visible lg:mx-0 lg:px-0 lg:w-auto lg:max-w-[55%] 2xl:max-w-full 2xl:px-0 scrollbar-hide w-full max-w-full gap-0 sm:gap-0">
          {sectors.map((sector, index) => {
            const isTheaters = sector.title === "Theaters";
            return (
              <details
                key={sector.title}
                ref={(el) => { detailsRefs.current[index] = el; }}
                data-sector-index={index}
                className="sector-card relative overflow-hidden rounded-xl sm:rounded-2xl w-[200px] sm:w-[200px] sm:w-[240px] md:w-[260px] lg:w-[200px] 2xl:w-[280px] sm:h-[320px] md:h-[360px] lg:h-[380px] border-2 sm:border-4 border-white shadow-lg group sm:hover:scale-[1.1] sm:hover:shadow-2xl transition-all duration-500 ease-out flex-shrink-0 sm:flex-shrink-0 text-left p-0 bg-transparent"
                onToggle={() => handleToggle(index)}
                style={{ 
                  '--push': '0px',
                  marginLeft: index > 0 ? (isLaptop ? '-10px' : isDesktop ? '-20px' : '0') : '0'
                } as React.CSSProperties}
              >
                <summary className={`sector-card-header relative list-none h-[350px] sm:h-[320px] md:h-[360px] lg:h-[380px] ${isTheaters ? 'cursor-default' : 'cursor-pointer'}`}>
                  {/* Background Image */}
                  <img
                    src={sector.image}
                    alt={sector.title}
                    className="absolute inset-0 w-full h-full object-cover sm:group-hover:scale-[1.05] transition-transform duration-500 ease-out"
                  />
                  
                  {/* Overlay - Top on mobile, original on desktop */}
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-transparent sm:bg-gradient-to-l sm:from-transparent sm:via-transparent sm:to-primary/60 lg:from-transparent lg:via-transparent lg:to-primary/70 xl:from-transparent xl:via-transparent xl:to-primary/70 transition-opacity duration-500" />
                  
                  {/* Content - Top on mobile, bottom on desktop, left side vertical on laptop/desktop */}
                  <div className="absolute left-3 sm:left-4 top-4 sm:bottom-4 sm:bottom-6 lg:left-3 lg:bottom-6 lg:top-auto lg:translate-y-0 origin-top-left sm:origin-bottom-left lg:origin-bottom-left z-10">
                    <h3 
                      className="text-base sm:text-lg md:text-xl font-bold text-white whitespace-nowrap mobile-horizontal-text"
                      style={{ 
                        writingMode: (isLaptop || isDesktop) ? 'vertical-rl' : 'horizontal-tb',
                        transform: (isLaptop || isDesktop) ? 'rotate(180deg)' : 'none',
                      }}
                    >
                      {sector.title}
                    </h3>
                  </div>
                </summary>
              </details>
            );
          })}
          </div>
        </div>

        {/* Landelijk Actief Section */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-12 xl:gap-16 items-center mt-16 sm:mt-20 md:mt-32">
          {/* Left side - Text content */}
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-black leading-tight text-foreground mb-4 sm:mb-6">
              Actief in Nederland<br />en daarbuiten
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-foreground/70 leading-relaxed">
              Onze kern ligt in Nederland, maar we zijn ook actief in België en Duitsland. 
              Bij inzet van personeel in het buitenland regelen wij alle vereiste documentatie, 
              zoals A1-verklaringen en Limosa-meldingen. Zo is alles juridisch correct en kan 
              de focus volledig op de uitvoering liggen.
            </p>
          </div>

          {/* Right side - Netherlands Map */}
          <div
            className="flex justify-center lg:justify-end"
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
    <section id="plan-van-aanpak" className="section-padding bg-muted/30">
      <div className="container-custom px-4 sm:px-6 lg:px-6 xl:px-8">
        <div className="sectors-header-text text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3 sm:mb-4">
            <span className="text-accent text-lg sm:text-xl">•</span>
            <span className="text-accent">hoe we werken</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-black leading-tight text-foreground mb-4 sm:mb-6">
            Plan van aanpak
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto px-2">
            Onze werkwijze is gericht op duidelijkheid en korte lijnen. We zorgen voor heldere afspraken en een overzichtelijk proces, zodat de samenwerking soepel verloopt.
          </p>
        </div>

        {/* Stats with Image Section */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-12 xl:gap-16 mb-12 sm:mb-16 lg:items-stretch mt-12 sm:mt-16 md:mt-24">
          {/* Left side - Image aligned: top with heading top, bottom with stats bottom */}
          <div className="plan-van-aanpak-image-container flex justify-center lg:justify-start">
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
                    className="absolute inset-0 rounded-xl z-30 block w-full h-full object-cover"
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
          <div ref={stepsRef} className="plan-van-aanpak-steps max-w-xl flex flex-col gap-4 sm:gap-6">
            <div 
              className="bg-background rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-border/50 relative transition-all duration-700"
              style={{
                opacity: visibleSteps.includes(0) ? 1 : 0,
                transform: visibleSteps.includes(0) ? 'translateY(0)' : 'translateY(-20px)',
              }}
            >
              <div className="absolute -top-2 sm:-top-3 -left-2 sm:-left-3">
                <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent text-accent-foreground text-xs sm:text-sm font-black shadow-lg">
                  1
                </span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                Bekijk ons aanbod
              </h4>
              <p className="text-xs sm:text-sm text-foreground/60">
                Ontdek wat we voor jou kunnen betekenen
              </p>
            </div>
            <div 
              className="bg-background rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-border/50 relative transition-all duration-700"
              style={{
                opacity: visibleSteps.includes(1) ? 1 : 0,
                transform: visibleSteps.includes(1) ? 'translateY(0)' : 'translateY(-20px)',
              }}
            >
              <div className="absolute -top-2 sm:-top-3 -left-2 sm:-left-3">
                <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent text-accent-foreground text-xs sm:text-sm font-black shadow-lg">
                  2
                </span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                Neem contact op
              </h4>
              <p className="text-xs sm:text-sm text-foreground/60">
                We bespreken graag jouw wensen en mogelijkheden
              </p>
            </div>
            <div 
              className="bg-background rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-border/50 relative transition-all duration-700"
              style={{
                opacity: visibleSteps.includes(2) ? 1 : 0,
                transform: visibleSteps.includes(2) ? 'translateY(0)' : 'translateY(-20px)',
              }}
            >
              <div className="absolute -top-2 sm:-top-3 -left-2 sm:-left-3">
                <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent text-accent-foreground text-xs sm:text-sm font-black shadow-lg">
                  3
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-foreground mb-2">
                Wij komen je ondersteunen
              </h4>
              <p className="text-xs sm:text-sm text-foreground/60">
                Onze crew voert met volle inzet de besproken opdracht uit.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12 sm:mt-16 md:mt-24">
          <Link to="/offerte">
            <Button variant="accent-bottom" size="xl" className="w-full sm:w-auto px-6 text-sm sm:text-base hover:-translate-y-2 transition-all duration-300">
              Vraag offerte aan
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
    </>
  );
};

export default Sectors;
