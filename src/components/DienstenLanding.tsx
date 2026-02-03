import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Zap, Shield, Clock, Users, Award, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const DienstenLanding = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const pluspunten = [
    {
      icon: Zap,
      title: "Flexibiliteit",
      description: "Opschalen of afschalen kan in overleg. We passen ons aan op wijzigingen in de planning en zorgen voor de juiste crew op het juiste moment.",
      color: "from-yellow-500/20 to-orange-500/20",
      iconColor: "text-yellow-500",
    },
    {
      icon: Award,
      title: "Ervaring",
      description: "Jarenlange ervaring in de evenementenbranche. Onze crew kent de dynamiek van verschillende producties en weet wat er nodig is.",
      color: "from-blue-500/20 to-purple-500/20",
      iconColor: "text-blue-500",
    },
    {
      icon: Shield,
      title: "Betrouwbaarheid",
      description: "Duidelijke afspraken en goede communicatie. Je weet vooraf hoeveel mensen er komen en op welke tijden de crew aanwezig is.",
      color: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-500",
    },
    {
      icon: Clock,
      title: "Snelheid",
      description: "Snel schakelen tussen verschillende typen evenementen. Van festivals tot congressen, we zijn gewend om in korte tijd te schakelen.",
      color: "from-red-500/20 to-pink-500/20",
      iconColor: "text-red-500",
    },
    {
      icon: Users,
      title: "Kwaliteit",
      description: "Ervaren professionals en gemotiveerde crewleden. We sluiten naadloos aan bij bestaande teams en werkwijzen.",
      color: "from-indigo-500/20 to-violet-500/20",
      iconColor: "text-indigo-500",
    },
    {
      icon: MapPin,
      title: "Nationaal bereik",
      description: "Inzet in heel Nederland vanuit verschillende hubs. Beschikbaar voor eendaagse en meerdaagse producties, dag-, avond- en nachtplanningen.",
      color: "from-teal-500/20 to-cyan-500/20",
      iconColor: "text-teal-500",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            pluspunten.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative section-padding pt-32 md:pt-40 bg-gradient-to-br from-background via-secondary/50 to-background overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom px-4 lg:px-8 relative z-10">
        {/* Split Layout: Left side - Intro, Right side - Visual */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
          {/* Left: Intro Text */}
          <div className="lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase mb-6">
              <span className="text-accent text-xl">•</span>
              <span className="text-accent">Wat we bieden</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-foreground mb-6">
              Diensten die<br />maken dat het werkt
            </h1>
            <p className="text-lg text-foreground/70 leading-relaxed mb-8">
              Crewstars levert technische ondersteuning op de vloer. We sluiten aan bij bestaande teams van
              producties en locaties, tijdens opbouw, show en afbouw. Deze pagina geeft een overzicht van wat we
              leveren en wanneer opdrachtgevers ons inschakelen.
            </p>
            <Link to="/diensten">
              <Button variant="accent-bottom" size="xl" className="px-6 hover:-translate-y-2 transition-all duration-300">
                Bekijk alle diensten
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Right: Large Icon Grid */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            {pluspunten.slice(0, 4).map((pluspunt, index) => {
              const IconComponent = pluspunt.icon;
              const isVisible = visibleCards.includes(index);
              return (
                <div
                  key={pluspunt.title}
                  className={`relative group aspect-square bg-gradient-to-br ${pluspunt.color} rounded-3xl p-6 flex flex-col items-center justify-center border border-border/30 backdrop-blur-sm transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                  } hover:scale-105 hover:shadow-2xl cursor-pointer`}
                >
                  <div className={`${pluspunt.iconColor} mb-4 transition-transform duration-300 group-hover:scale-110`}>
                    <IconComponent className="w-12 h-12 lg:w-16 lg:h-16" />
                  </div>
                  <h3 className="text-base lg:text-lg font-black text-foreground text-center">{pluspunt.title}</h3>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom: Full Width Cards Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center items-center gap-2 text-sm font-semibold tracking-wide uppercase mb-12">
            <span className="text-accent text-xl">•</span>
            <span className="text-accent">Onze pluspunten</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pluspunten.map((pluspunt, index) => {
              const IconComponent = pluspunt.icon;
              const isVisible = visibleCards.includes(index);
              return (
                <div
                  key={pluspunt.title}
                  className={`group relative bg-background/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-border/50 shadow-xl hover:shadow-2xl transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  } hover:border-accent/50 hover:-translate-y-2`}
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${pluspunt.color} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${pluspunt.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-7 h-7 ${pluspunt.iconColor}`} />
                    </div>
                    <h3 className="text-2xl font-black text-foreground mb-4">{pluspunt.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">{pluspunt.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DienstenLanding;





