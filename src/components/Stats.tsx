import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import crewTechniekImg from "@/assets/crew-techniek.png";
import crewMemberImg from "@/assets/crew-member.png";

// Logo imports
import logoRammstein from "@/assets/logo-rammstein.png";
import logoCiscoLive from "@/assets/logo-cisco-live.png";
import logoTcsMarathon from "@/assets/logo-tcs-marathon.png";
import logoIronman from "@/assets/logo-ironman.png";
import logoAmsterdamseZomer from "@/assets/logo-amsterdamse-zomer.png";
import logoMysteryland from "@/assets/logo-mysteryland.png";
import logoElrow from "@/assets/logo-elrow.png";
import logoTaylorSwift from "@/assets/logo-taylor-swift.png";
import logoGraspop from "@/assets/logo-graspop.png";
import logoF1DutchGp from "@/assets/logo-f1-dutch-gp.png";
import logoTomorrowland from "@/assets/logo-tomorrowland.png";
import logoVerknipt from "@/assets/logo-verknipt.png";

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

const logos = [
  { name: "Rammstein", image: logoRammstein },
  { name: "Taylor Swift - The Eras Tour", image: logoTaylorSwift },
  { name: "Cisco Live!", image: logoCiscoLive },
  { name: "Ironman", image: logoIronman },
  { name: "TCS Amsterdam Marathon", image: logoTcsMarathon },
  { name: "Mysteryland", image: logoMysteryland },
  { name: "Graspop Metal Meeting", image: logoGraspop },
  { name: "F1 Heineken Dutch Grand Prix", image: logoF1DutchGp },
  { name: "Elrow", image: logoElrow },
  { name: "De Amsterdamse Zomer", image: logoAmsterdamseZomer },
  { name: "Tomorrowland", image: logoTomorrowland },
  { name: "Verknipt", image: logoVerknipt },
];

const Stats = () => {
  const [countedValues, setCountedValues] = useState<number[]>([0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

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

  return (
    <section id="stats" className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-muted/30 relative">
      <div className="container-custom px-4 sm:px-6 lg:px-6 xl:px-8">
        {/* Stats with Image Section */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-12 xl:gap-16 mb-12 sm:mb-16 lg:items-stretch">
          {/* Left side - Text and Stats */}
          <div className="w-full md:max-w-xl order-2 sm:order-1">
            {/* Text column - mobile only wrapper */}
            <div className="stats-text-column stats-text-col">
              <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3 sm:mb-4 text-accent">
                • Onze impact
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-black leading-tight text-foreground mb-4 sm:mb-6">
                Ervaring op de vloer
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-foreground/70 leading-relaxed mb-4 sm:mb-6">
                Met jarenlange ervaring in de evenementenbranche ondersteunen wij een breed scala aan producties. Van grootschalige live events tot zakelijke producties, elk met hun eigen dynamiek en eisen. Die variatie vraagt om flexibiliteit en betrouwbare crew op de vloer. Onze cijfers en projecten laten zien waar we dagelijks aan bijdragen.
              </p>
            </div>
            {/* Stats as badges */}
            <div ref={statsRef} className="stats-badges-container flex flex-wrap gap-2 sm:gap-3 mb-5">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-background rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 shadow-lg border border-border/50 text-center flex-1 min-w-[90px] sm:min-w-0"
                >
                  <span className="text-xl sm:text-2xl lg:text-3xl font-black text-accent">
                    {countedValues[index]}{stat.suffix}
                  </span>
                  <p className="font-semibold text-foreground text-[10px] sm:text-xs mt-1">
                    {stat.label}
                  </p>
                  <p className="text-[9px] sm:text-[10px] text-muted-foreground mt-0.5">
                    {stat.sublabel}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image aligned: top with heading top, bottom with stats bottom */}
          <div className="flex justify-center lg:justify-start order-1 sm:order-2">
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
                  {/* Crew member image - fills purple box */}
                  <img
                    src={crewMemberImg}
                    alt="Crewstars team member"
                    className="absolute inset-0 rounded-xl z-30 hidden lg:block w-full h-full object-cover"
                    style={{ 
                      transform: 'rotate(-5deg)'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Logos */}
        <div className="text-center pt-6 sm:pt-8 mb-6 sm:mb-8">
          <p className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wide">
            Vertrouwd door toonaangevende evenementen
          </p>
        </div>
        <div className="space-y-6 sm:space-y-8 overflow-hidden w-full">
          {/* Top row - scroll from left to right */}
          <div className="flex gap-4 sm:gap-8 animate-scroll-right w-max">
            {/* Duplicate logos for seamless loop */}
            {[...logos.slice(0, 6), ...logos.slice(0, 6)].map((logo, index) => (
              <div
                key={`top-${index}`}
                className="flex items-center justify-center p-3 sm:p-4 h-12 sm:h-16 md:h-20 w-24 sm:w-32 md:w-40 opacity-70 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
              >
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="max-h-full max-w-full object-contain"
                  title={logo.name}
                />
              </div>
            ))}
          </div>
          {/* Bottom row - scroll from right to left */}
          <div className="flex gap-4 sm:gap-8 animate-scroll-left w-max">
            {/* Duplicate logos for seamless loop */}
            {[...logos.slice(6), ...logos.slice(6)].map((logo, index) => (
              <div
                key={`bottom-${index}`}
                className="flex items-center justify-center p-3 sm:p-4 h-12 sm:h-16 md:h-20 w-24 sm:w-32 md:w-40 opacity-70 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
              >
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="max-h-full max-w-full object-contain"
                  title={logo.name}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-8 sm:mt-12">
          <Link to="/projecten">
            <Button variant="accent-bottom" size="xl" className="w-full sm:w-auto px-6 text-sm sm:text-base hover:-translate-y-2 transition-all duration-300">
              Bekijk alle projecten
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Stats;
