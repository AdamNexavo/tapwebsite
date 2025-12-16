import { useState, useEffect } from "react";
import { Music, Briefcase, Calendar, Sparkles, Trophy, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import mysterylandImg from "@/assets/mysteryland.png";
import ziggoDomeImg from "@/assets/ziggo-dome-concert.png";
import beurzenImg from "@/assets/beurzen.png";
import bedrijfseventsImg from "@/assets/bedrijfsevenementen.png";
import sporteventsImg from "@/assets/sportevenementen.png";
import nederlandHubsImg from "@/assets/nederland-hubs.png";

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
];

// Logo data - shuffled differently for each page
const logoPages = [
  // Page 1
  [
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
  ],
  // Page 2 - shuffled order
  [
    { name: "Tomorrowland", image: logoTomorrowland },
    { name: "Ironman", image: logoIronman },
    { name: "Mysteryland", image: logoMysteryland },
    { name: "Rammstein", image: logoRammstein },
    { name: "Elrow", image: logoElrow },
    { name: "Cisco Live!", image: logoCiscoLive },
    { name: "Taylor Swift - The Eras Tour", image: logoTaylorSwift },
    { name: "De Amsterdamse Zomer", image: logoAmsterdamseZomer },
    { name: "F1 Heineken Dutch Grand Prix", image: logoF1DutchGp },
    { name: "Verknipt", image: logoVerknipt },
    { name: "TCS Amsterdam Marathon", image: logoTcsMarathon },
    { name: "Graspop Metal Meeting", image: logoGraspop },
  ],
  // Page 3 - different shuffled order
  [
    { name: "F1 Heineken Dutch Grand Prix", image: logoF1DutchGp },
    { name: "Verknipt", image: logoVerknipt },
    { name: "Taylor Swift - The Eras Tour", image: logoTaylorSwift },
    { name: "Tomorrowland", image: logoTomorrowland },
    { name: "Cisco Live!", image: logoCiscoLive },
    { name: "Graspop Metal Meeting", image: logoGraspop },
    { name: "De Amsterdamse Zomer", image: logoAmsterdamseZomer },
    { name: "Ironman", image: logoIronman },
    { name: "Rammstein", image: logoRammstein },
    { name: "TCS Amsterdam Marathon", image: logoTcsMarathon },
    { name: "Mysteryland", image: logoMysteryland },
    { name: "Elrow", image: logoElrow },
  ],
];

const Sectors = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [visibleLogos, setVisibleLogos] = useState<number[]>([]);

  // Animate logos appearing one by one
  useEffect(() => {
    setVisibleLogos([]);

    const logoCount = logoPages[currentPage].length;
    const delays: NodeJS.Timeout[] = [];

    // Fade in logos one by one with staggered delay
    for (let i = 0; i < logoCount; i++) {
      const timeout = setTimeout(() => {
        setVisibleLogos((prev) => [...prev, i]);
      }, i * 100);
      delays.push(timeout);
    }

    return () => {
      delays.forEach(clearTimeout);
    };
  }, [currentPage]);

  // Auto-advance pages
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % logoPages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentLogos = logoPages[currentPage];

  return (
    <section id="sectoren" className="section-padding bg-secondary">
      <div className="container-custom px-4 lg:px-8">
        {/* Type Evenementen Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase mb-4">
            <span className="text-accent text-xl">•</span>
            <span className="text-accent">Ons werk</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-foreground mb-4">
            Waar je ons kunt vinden
          </h2>
          <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto">
            Van grote festivals tot intieme corporate events: wij hebben ervaring met 
            alle soorten evenementen en weten precies wat er nodig is voor een vlekkeloze uitvoering.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="flex justify-center items-center mb-24">
          {sectors.map((sector, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={sector.title}
                onMouseEnter={() => setActiveIndex(index)}
                className="relative overflow-hidden rounded-2xl w-[280px] h-[380px] cursor-pointer border-4 border-white"
                style={{ 
                  marginLeft: index === 0 ? '0' : '-30px',
                  transform: `scale(${isActive ? 1.1 : 1})`,
                  zIndex: isActive ? 50 : 10,
                  boxShadow: isActive 
                    ? '0 25px 50px -12px rgba(0, 0, 0, 0.4)' 
                    : '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                {/* Background Image */}
                <img
                  src={sector.image}
                  alt={sector.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    transform: `scale(${isActive ? 1.05 : 1})`,
                    transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-primary/80 transition-opacity duration-300" />
                
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

        {/* Projects Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start py-16 md:py-24">
          {/* Left side - Text content */}
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground mb-6">
              Projecten
            </h2>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              In 2025 was onze crew actief bij talloze toffe evenementen 
              in binnen- en buitenland. We werkten mee aan festivals 
              als Lowlands, Adele in Munich, Decibel Outdoor, 
              Mysteryland en nog veel meer. Ook waren we betrokken bij 
              bijna alle grote concerten in locaties als de Ziggo Dome, 
              Johan Cruijff Arena en AFAS Live.
              <br /><br />
              Benieuwd naar al onze projecten?
            </p>
            <Button variant="hero" size="xl" className="px-6 hover:-translate-y-2 transition-all duration-300">
              Bekijk alle projecten
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Right side - Logo grid with animation */}
          <div className="relative">
            <div className="grid grid-cols-3 gap-x-8 gap-y-6">
              {currentLogos.map((logo, index) => (
                <div
                  key={`${currentPage}-${index}`}
                  className="flex items-center justify-center p-3 md:p-4 h-16 md:h-20 transition-all duration-500"
                  style={{
                    opacity: visibleLogos.includes(index) ? 1 : 0,
                    transform: visibleLogos.includes(index) 
                      ? 'translateY(0) scale(1)' 
                      : 'translateY(10px) scale(0.95)',
                  }}
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

            {/* Page indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {logoPages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentPage === index
                      ? 'bg-accent w-8'
                      : 'bg-foreground/30 hover:bg-foreground/50'
                  }`}
                  aria-label={`Ga naar pagina ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Landelijk Actief Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-32">
          {/* Left side - Text content */}
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground mb-6">
              Actief in Nederland en daarbuiten
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Onze kern ligt in Nederland, maar we zijn ook actief in België en Duitsland. 
              Bij inzet van personeel in het buitenland regelen wij alle vereiste documentatie, 
              zoals A1-verklaringen en Limosa-meldingen. Zo is alles juridisch correct en kan 
              de focus volledig op de uitvoering liggen.
            </p>
          </div>

          {/* Right side - Netherlands Map */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={nederlandHubsImg}
              alt="Kaart van Nederland met hubs in Groningen, Utrecht en Rotterdam"
              className="max-w-full h-auto max-h-[650px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sectors;
