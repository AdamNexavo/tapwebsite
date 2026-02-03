import { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import festivalCrowdImg from "@/assets/crew-barriers.png";
import crewTechniekImg from "@/assets/crew-left-photo.jpeg";
import crewStepsImg from "@/assets/crew-lighting.png";
import crewMudBarriersImg from "@/assets/crew-mud-barriers.png";

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
    name: "Zairo Alberts",
    company: "Crewstars",
    text: "Ik ben nu al een langere tijd werkzaam bij Crewstars. Zowel het teamverband als de variatie in de werkzaamheden geeft me een drive om hier te blijven werken. Leuk bedrijf 👌",
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
  {
    name: "Richard Vergeer",
    company: "Minkema College",
    text: "Ons conciërge team kwam in tijdnood voor het inrichten van de gymzalen voor de examens. Crewstars gevraagd, binnen één dag drie gymzalen ingericht met stucloper leggen en 300 tafels en stoelen in de juiste opstelling! Harde werkers, nette en vriendelijke mannen, komen hun afspraken na!",
    rating: 5,
  },
];

const About = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [sectionTop, setSectionTop] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const dragStartX = useRef<number | null>(null);
  const dragDeltaX = useRef(0);
  const isDragging = useRef(false);

  // Auto-rotate reviews (oneindig doorlopend)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Scroll-based animatie voor de overlappende foto's rechts
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const updateSectionTop = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setSectionTop(rect.top + window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateSectionTop);

    updateSectionTop();
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateSectionTop);
    };
  }, []);

  // Zelfde parallax-berekening als in sectie 1 (Services)
  const scrollProgress = Math.max(0, scrollY - sectionTop + 200);
  const parallaxOffset = Math.min(150, scrollProgress * 0.3);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) =>
      (prev - 1 + reviews.length) % reviews.length
    );
  };

  return (
    <section
      id="terug-in-de-tijd"
      ref={sectionRef}
      className="section-padding bg-secondary overflow-visible w-full max-w-full"
    >
      <style>{`
        @media (max-width: 639px) {
          /* Meer ruimte tussen review blocks op mobile - alleen About pagina */
          section#terug-in-de-tijd .terug-in-de-tijd-reviews-wrapper .flex.transition-transform > div.min-w-full {
            padding-left: 0.75rem !important;
            padding-right: 0.75rem !important;
          }
          section#terug-in-de-tijd .terug-in-de-tijd-reviews-wrapper .review-card {
            margin-top: 1.5rem !important;
            margin-bottom: 1.5rem !important;
          }
        }
      `}</style>
      <div className="container-custom px-4 sm:px-6 lg:px-6 xl:px-8">
        {/* About Section with Image Space */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-12 xl:gap-16 items-center mb-12 sm:mb-16 md:mb-20">
          {/* Left side - Text */}
          <div className="max-w-xl order-2 sm:order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3 sm:mb-4">
              <span className="text-accent text-lg sm:text-xl">•</span>
              <span className="text-accent">Over ons</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-black leading-tight text-foreground mb-4 sm:mb-6">
              Terug in de tijd
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-foreground/70 leading-relaxed mb-3 sm:mb-4">
              In 2021 begonnen we met een klein team in de evenementenbranche. Vanuit bestaande samenwerkingen ontstond de behoefte om dit goed en professioneel neer te zetten. De combinatie van events en de klik met de mensen op de vloer maakten de keuze vanzelfsprekend.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-foreground/70 leading-relaxed">
              Met verschillende achtergronden binnen het team, waaronder technische ervaring, groeiden we stap voor stap verder. Wat begon met een paar opdrachten ontwikkelde zich tot een bedrijf waar opdrachtgevers en crew elkaar weten te vinden en graag mee samenwerken.
            </p>
          </div>

          {/* Right side - zelfde beeld als in de Services sectie (overlappende foto's) */}
          <div className="flex justify-center lg:justify-end overflow-visible order-1 sm:order-1 lg:order-2">
            <div 
              className="relative h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center w-full max-w-xl overflow-visible terug-in-de-tijd-photos-container"
              style={{
                '--parallax-offset-1': `${Math.max(0, parallaxOffset * 0.3)}px`,
                '--parallax-offset-2': `${Math.max(0, parallaxOffset * 0.1)}px`,
                '--parallax-offset-3': `${Math.max(0, parallaxOffset * 0.5)}px`,
              } as React.CSSProperties}
            >
              <div
                className="absolute left-0 top-1/2 bg-[#333333] p-2 rounded-xl sm:rounded-2xl shadow-2xl inline-flex items-center justify-center w-[100px] sm:w-[150px] md:w-[180px] lg:w-[220px] xl:w-[260px] h-[160px] sm:h-[240px] md:h-[280px] lg:h-[310px] xl:h-[346px]"
                style={
                  !isMobile
                    ? {
                        transform: `translateY(calc(-50% - 40px - ${Math.max(
                          0,
                          parallaxOffset * 0.3
                        )}px))`,
                        transition: "transform 0.3s ease-out",
                      }
                    : undefined
                }
              >
                <img
                  src={crewTechniekImg}
                  alt="Crewstars techniek team"
                  className="w-full h-full object-cover rounded-lg sm:rounded-xl"
                />
              </div>

              <div
                className="absolute left-[70px] sm:left-[100px] md:left-[120px] lg:left-[140px] xl:left-[160px] top-1/2 bg-[#333333] p-2 rounded-xl sm:rounded-2xl shadow-2xl z-10 inline-flex items-center justify-center w-[100px] sm:w-[150px] md:w-[180px] lg:w-[220px] xl:w-[260px] h-[160px] sm:h-[240px] md:h-[280px] lg:h-[310px] xl:h-[346px]"
                style={
                  !isMobile
                    ? {
                        transform: `translateY(calc(-50% + ${Math.max(
                          0,
                          parallaxOffset * 0.1
                        )}px))`,
                        transition: "transform 0.3s ease-out",
                      }
                    : undefined
                }
              >
                <img
                  src={festivalCrowdImg}
                  alt="Festival publiek"
                  className="w-full h-full object-cover rounded-lg sm:rounded-xl"
                />
              </div>

              <div
                className="absolute left-[140px] sm:left-[200px] md:left-[240px] lg:left-[280px] xl:left-[320px] top-1/2 bg-[#333333] p-2 rounded-xl sm:rounded-2xl shadow-2xl z-20 inline-flex items-center justify-center w-[100px] sm:w-[150px] md:w-[180px] lg:w-[220px] xl:w-[260px] h-[160px] sm:h-[240px] md:h-[280px] lg:h-[310px] xl:h-[346px]"
                style={
                  !isMobile
                    ? {
                        transform: `translateY(calc(-50% + 40px + ${Math.max(
                          0,
                          parallaxOffset * 0.5
                        )}px))`,
                        transition: "transform 0.3s ease-out",
                      }
                    : undefined
                }
              >
                <img
                  src={crewMudBarriersImg}
                  alt="Crewstars crew aan het werk in modderige omstandigheden"
                  className="w-full h-full object-cover rounded-lg sm:rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="max-w-5xl mx-auto mt-12 sm:mt-16 md:mt-24 lg:mt-32">
          <div className="relative overflow-visible terug-in-de-tijd-reviews-wrapper">
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
              onClick={prevReview}
              className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 bg-background rounded-full p-1.5 sm:p-2 shadow-lg border border-border/50 hover:bg-accent hover:text-accent-foreground transition-all duration-300 z-10 review-nav-button"
              aria-label="Vorige review"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={nextReview}
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
  );
};

export default About;

