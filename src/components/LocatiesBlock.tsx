import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ziggoDomeImg from "@/assets/ziggo-dome-concert.png";
import mysterylandImg from "@/assets/mysteryland.png";
import bedrijfseventsImg from "@/assets/bedrijfsevenementen.png";
import sporteventsImg from "@/assets/sportevenementen.png";
import beurzenImg from "@/assets/beurzen.png";
import theatersImg from "@/assets/theaters.png";

interface LocatiesBlockProps {
  variant?: "images" | "icons";
}

const LocatiesBlock = ({ variant = "images" }: LocatiesBlockProps) => {
  const [isLaptop, setIsLaptop] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

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
  
  const locations = [
    {
      name: "Festivals",
      image: mysterylandImg,
      icon: null,
    },
    {
      name: "Concerten",
      image: ziggoDomeImg,
      icon: null,
    },
    {
      name: "Beurzen",
      image: beurzenImg,
      icon: null,
    },
    {
      name: "Bedrijfsevenementen",
      image: bedrijfseventsImg,
      icon: null,
    },
    {
      name: "Sportevenementen",
      image: sporteventsImg,
      icon: null,
    },
    {
      name: "Theaters",
      image: theatersImg,
      icon: null,
    },
  ];

  // Auto-swipe op mobiel (max-width: 639px)
  useEffect(() => {
    const isMobile = window.innerWidth <= 639;
    if (!isMobile) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev < locations.length - 1) {
          return prev + 1;
        } else {
          return 0; // Terug naar eerste card
        }
      });
    }, 3000); // 3 seconden

    return () => clearInterval(interval);
  }, [locations.length]);

  if (variant === "images") {
    return (
      <div className="mt-20 md:mt-24">
        <div className="bg-secondary rounded-2xl border border-border/30 shadow-xl p-8 md:p-12 overflow-hidden">
          {/* Locaties badge */}
          <div className="mb-6 text-center">
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase mb-4 text-accent">
              • Locaties
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-12 text-center">
            Werk op diverse locaties
          </h2>
          
          {/* Overlapping cards style like Sectors - overlap naar rechts, tekst links */}
          <div 
            className="flex justify-center items-center overflow-visible pb-4 lg:max-w-[90%] lg:mx-auto 2xl:max-w-full location-cards-wrapper"
            onTouchStart={(e) => {
              setTouchStart(e.targetTouches[0].clientX);
              setTouchEnd(e.targetTouches[0].clientX);
            }}
            onTouchMove={(e) => setTouchEnd(e.targetTouches[0].clientX)}
            onTouchEnd={() => {
              if (!touchStart || !touchEnd) return;
              const distance = touchStart - touchEnd;
              const minSwipeDistance = 50;
              
              if (Math.abs(distance) > minSwipeDistance) {
                if (distance > 0 && currentIndex < locations.length - 1) {
                  // Swipe left - next card
                  setCurrentIndex(currentIndex + 1);
                } else if (distance < 0 && currentIndex > 0) {
                  // Swipe right - previous card
                  setCurrentIndex(currentIndex - 1);
                }
              }
            }}
          >
            <div className="flex justify-center items-center gap-0 min-w-max location-cards-container">
              {locations.map((location, index) => (
                <div
                  key={location.name}
                  className={`location-card relative overflow-hidden rounded-2xl w-[140px] md:w-[160px] lg:w-[180px] 2xl:w-[200px] h-[240px] md:h-[280px] lg:h-[320px] 2xl:h-[340px] cursor-default border-2 sm:border-4 border-white shadow-lg transition-transform duration-500 ease-out hover:scale-[1.05] hover:shadow-2xl group flex-shrink-0 ${index === currentIndex ? 'location-card-active' : ''}`}
                  style={{ 
                    marginRight: index < locations.length - 1 ? (isLaptop ? '-10px' : isDesktop ? '-20px' : '-25px') : '0',
                    zIndex: index + 1,
                  }}
                >
                <div className="relative w-full h-full overflow-hidden rounded-2xl">
                  {/* Background Image */}
                  <img
                    src={location.image}
                    alt={location.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                  />
                  
                  {/* Overlay - gradient van links naar rechts zoals homepage, van boven naar beneden op mobiel */}
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-transparent sm:bg-gradient-to-l sm:from-transparent sm:via-transparent sm:to-primary/70 lg:from-transparent lg:via-transparent lg:to-primary/70 2xl:to-primary/70 transition-opacity duration-500 location-overlay" />
                </div>
                
                {/* Content - Vertical Text bovenaan gecentreerd op mobiel */}
                <div className="absolute left-3 sm:left-4 bottom-6 sm:bottom-6 origin-bottom-left z-50 pointer-events-none location-card-title">
                  <h3 
                    className="text-base sm:text-lg md:text-xl font-bold text-white whitespace-nowrap drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
                    style={{ 
                      writingMode: 'vertical-rl',
                      transform: 'rotate(180deg)',
                    }}
                  >
                    {location.name}
                  </h3>
                </div>
                </div>
              ))}
            </div>
            
            {/* Mobile Navigation - onder de card, gecentreerd */}
            <div className="location-nav-mobile hidden absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4">
              <button
                onClick={() => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : locations.length - 1))}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/90 hover:bg-white text-primary shadow-lg hover:shadow-xl transition-all border-2 border-primary/20"
                aria-label="Vorige"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => setCurrentIndex((prev) => (prev < locations.length - 1 ? prev + 1 : 0))}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all"
                aria-label="Volgende"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Icon variant (for the other set of pages)
  return null; // Will be implemented if needed
};

export default LocatiesBlock;

