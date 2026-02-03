import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Hammer, Monitor, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import festivalCrowd from "@/assets/festival-crowd.png";
import crewTechniek from "@/assets/crew-techniek.png";

const diensten = [
  { icon: Hammer, title: "Op- en afbouw" },
  { icon: Monitor, title: "AV-Support" },
  { icon: Users, title: "Specialisten" },
];

const Services = () => {
  const [scrollY, setScrollY] = useState(0);
  const [sectionTop, setSectionTop] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    const section = document.getElementById('over-ons');
    if (section) {
      setSectionTop(section.offsetTop);
    }

    handleResize(); // Check on mount
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleScroll(); // Check on mount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Calculate the parallax offset for the right photo (starts at top, moves down on scroll)
  const scrollProgress = Math.max(0, scrollY - sectionTop + 200);
  const parallaxOffset = Math.min(80, scrollProgress * 0.2); // Eerder stoppen (80 in plaats van 150, 0.2 in plaats van 0.3)

  return (
    <section id="over-ons" className="relative section-padding bg-background overflow-hidden lg:overflow-visible">
      <div className="container-custom px-4 sm:px-6 lg:px-6 xl:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-12 xl:gap-20 items-center">
          {/* Image Side - Overlapping Photos */}
          <div className="relative order-1 sm:order-2 lg:order-1 h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center overflow-hidden lg:overflow-visible w-full">
            {/* Background Photo (left, stays fixed) */}
            <div 
              className="absolute left-0 top-1/2 w-[140px] sm:w-[180px] md:w-[200px] lg:w-[260px] xl:w-[280px] h-[200px] sm:h-[260px] md:h-[300px] lg:h-[360px] xl:h-[380px] bg-white p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-2xl"
              style={{ 
                transform: isMobile 
                  ? 'translate(calc(-50% - 60px), -50%)'
                  : 'translateX(-10px) translateY(-50%)'
              }}
            >
              <img
                src={festivalCrowd}
                alt="Festival publiek"
                className="w-full h-full object-cover rounded-lg sm:rounded-xl"
              />
            </div>
            
            {/* Foreground Photo (right, moves with scroll, overlaps left) */}
            <div 
              className="absolute left-[90px] sm:left-[120px] md:left-[140px] lg:left-[160px] xl:left-[180px] top-0 w-[140px] sm:w-[180px] md:w-[200px] lg:w-[260px] xl:w-[280px] h-[200px] sm:h-[260px] md:h-[300px] lg:h-[360px] xl:h-[380px] bg-white p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-2xl z-10"
              style={{ 
                transform: isMobile 
                  ? `translate(calc(-50% + 60px), calc(-30px + ${Math.max(0, parallaxOffset)}px))`
                  : `translateX(10px) translateY(calc(-30px + ${Math.max(0, parallaxOffset)}px))`,
                transition: 'transform 0.3s ease-out',
              }}
            >
              <img
                src={crewTechniek}
                alt="Crewstars techniek team"
                className="w-full h-full object-cover rounded-lg sm:rounded-xl"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="order-2 sm:order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3 sm:mb-4">
              <span className="text-accent text-lg sm:text-xl">•</span>
              <span className="text-accent">Wat we doen</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-black leading-tight text-foreground mb-4 sm:mb-6">
              Ondersteuning in<br />de evenementen
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              De evenementenbranche draait op creativiteit, samenwerking en precisie. Een goed eindresultaat 
              begint met de juiste ondersteuning. Crewstars helpt bij alles wat komt kijken rond de op- en 
              afbouw, of tijdens het draaien van het evenement zelf.
              <br /><br />
              Met ervaren professionals en gemotiveerde nieuwkomers leveren we ondersteuning waarop de branche kan bouwen.
            </p>
            
            {/* Diensten */}
            <div className="bg-muted rounded-lg sm:rounded-xl px-4 sm:px-6 py-3 sm:py-5 shadow-lg flex flex-wrap items-center gap-3 sm:gap-6 mb-6 sm:mb-8">
              {diensten.map((dienst, index) => (
                <div key={dienst.title} className="flex items-center gap-2">
                  <dienst.icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                  <span className="font-semibold text-foreground text-sm sm:text-base">{dienst.title}</span>
                  {index < diensten.length - 1 && <span className="text-muted-foreground ml-2 sm:ml-4 hidden sm:inline">•</span>}
                </div>
              ))}
            </div>

            <Link to="/diensten">
              <Button variant="accent-bottom" size="xl" className="w-full sm:w-auto px-6 text-sm sm:text-base hover:-translate-y-2 transition-all duration-300">
                Meer over onze diensten
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
