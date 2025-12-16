import { useState, useEffect } from "react";
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

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const section = document.getElementById('over-ons');
    if (section) {
      setSectionTop(section.offsetTop);
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate the parallax offset for the right photo (starts at top, moves down on scroll)
  const scrollProgress = Math.max(0, scrollY - sectionTop + 200);
  const parallaxOffset = Math.min(150, scrollProgress * 0.3);

  return (
    <section id="over-ons" className="section-padding bg-background overflow-hidden">
      <div className="container-custom px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side - Overlapping Photos */}
          <div className="relative order-2 lg:order-1 h-[500px] flex items-center justify-center">
            {/* Background Photo (left, stays fixed) */}
            <div 
              className="absolute left-0 top-1/2 w-[280px] h-[380px] bg-white p-3 rounded-2xl shadow-2xl"
              style={{ transform: 'translateY(-50%)' }}
            >
              <img
                src={festivalCrowd}
                alt="Festival publiek"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            
            {/* Foreground Photo (right, moves with scroll, overlaps left) */}
            <div 
              className="absolute left-[180px] top-0 w-[280px] h-[380px] bg-white p-3 rounded-2xl shadow-2xl z-10"
              style={{ 
                transform: `translateY(${Math.max(0, parallaxOffset)}px)`,
                transition: 'transform 0.3s ease-out',
              }}
            >
              <img
                src={crewTechniek}
                alt="Crewstars techniek team"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase mb-4">
              <span className="text-accent text-xl">•</span>
              <span className="text-accent">Wat we doen</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground mb-6">
              Ondersteuning in<br />de evenementen
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              De evenementenbranche draait op creativiteit, samenwerking en precisie. Een goed eindresultaat 
              begint met de juiste ondersteuning. Crewstars helpt bij alles wat komt kijken rond de op- en 
              afbouw, of tijdens het draaien van het evenement zelf.
              <br /><br />
              Met ervaren professionals en gemotiveerde nieuwkomers leveren we ondersteuning waarop de branche kan bouwen.
            </p>
            
            {/* Diensten */}
            <div className="bg-muted rounded-xl px-6 py-5 shadow-lg inline-flex items-center gap-6 mb-8">
              {diensten.map((dienst, index) => (
                <div key={dienst.title} className="flex items-center gap-2">
                  <dienst.icon className="w-5 h-5 text-accent" />
                  <span className="font-semibold text-foreground">{dienst.title}</span>
                  {index < diensten.length - 1 && <span className="text-muted-foreground ml-4">•</span>}
                </div>
              ))}
            </div>

            <Button variant="hero" size="xl" className="px-6 hover:-translate-y-2 transition-all duration-300">
              Meer over onze diensten
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
