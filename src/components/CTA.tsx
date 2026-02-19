import { ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import tapBrandingElements from "@/assets/tap-branding-elements.png";

interface CTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

const CTA = ({ 
  title = "Versterk ons team",
  description = "Ben je op zoek naar een uitdagende baan in de evenementenbranche? Sluit je aan bij ons team en werk mee aan bijzondere projecten.",
  buttonText = "Bekijk vacatures",
  buttonLink = "/werken-bij"
}: CTAProps) => {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";
  const isWerkenBijPage = location.pathname === "/werken-bij";
  const isVacaturePage = location.pathname.startsWith("/vacatures/");
  const isVoorOpdrachtgeversPage = location.pathname === "/voor-opdrachtgevers";
  const isCrewPage = ["/horeca-crew", "/hospitality-crew", "/service-crew"].includes(location.pathname);
  const isOffertePage = location.pathname === "/offerte";
  
  const bgStyle = (isVoorOpdrachtgeversPage || isOffertePage)
    ? { backgroundColor: '#f1f1f1' } 
    : isCrewPage 
    ? { backgroundColor: '#1a1a1a' } 
    : undefined;
  
  return (
    <>
      <style>{`
        @media (max-width: 639px) {
          /* Watermerk is sm:hidden, dus inline styles gelden alleen op mobile */
        }
      `}</style>
    <section id="contact" className={`section-padding ${isWerkenBijPage || isVacaturePage ? 'bg-white' : ''} ${isCrewPage ? 'pt-16 sm:pt-20 md:pt-24' : 'pt-0'}`} style={bgStyle}>
      <div className="container-custom px-4 sm:px-6 lg:px-6 xl:px-8">
        <div className="reveal relative overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-[48px] rounded-tr-none bg-primary text-white">
          {/* Watermark - Mobile only */}
          <img
            src={tapBrandingElements}
            alt="TAP branding elements"
            className="cta-watermark-mobile absolute pointer-events-none z-10 sm:hidden"
            style={{
              width: 'auto',
              height: 'auto',
              maxWidth: '32rem',
              imageRendering: 'crisp-edges',
              filter: 'grayscale(100%) brightness(0.75)',
              transform: 'scale(1.6) rotate(15deg) translateZ(0)',
              transformOrigin: 'bottom right',
              backfaceVisibility: 'hidden',
              willChange: 'transform',
              bottom: '-2rem',
              right: '-2rem'
            } as React.CSSProperties}
          />
          <div className="relative grid lg:grid-cols-[1.3fr,1fr] gap-6 sm:gap-8 items-center px-5 sm:px-6 md:px-8 lg:px-8 py-8 sm:py-10 md:px-16 md:py-14 max-w-5xl mx-auto overflow-visible">
            {/* Tekst links */}
            <div className="space-y-4 sm:space-y-6 max-w-2xl lg:max-w-3xl -ml-0 sm:-ml-2 md:-ml-8 lg:-ml-10 xl:-ml-14 relative z-20">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight sm:whitespace-nowrap relative z-30 uppercase">
                {title}
              </h2>
              <p className="text-sm sm:text-base lg:text-lg md:text-xl text-white/80 max-w-xl">
                {description}
              </p>
              <div className="mt-6 sm:mt-8 md:mt-12 lg:mt-16">
                {buttonText === "Neem contact op" || buttonText === "Contact opnemen" ? (
                  isContactPage ? (
                    <a href="tel:+31850712685">
                      <Button
                        variant="accent-bottom"
                        size="xl"
                        className="w-full sm:w-auto bg-[#464646] hover:bg-[#5a5a5a] border-b-[#2f2f2f] text-white px-6 sm:px-8 text-sm sm:text-base uppercase"
                      >
                        {buttonText}
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                      </Button>
                    </a>
                  ) : (
                    <Link to="/contact">
                      <Button
                        variant="accent-bottom"
                        size="xl"
                        className="w-full sm:w-auto bg-[#464646] hover:bg-[#5a5a5a] border-b-[#2f2f2f] text-white px-6 sm:px-8 text-sm sm:text-base uppercase"
                      >
                        {buttonText}
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                      </Button>
                    </Link>
                  )
                ) : buttonLink.startsWith('#') ? (
                  <Button
                    variant="accent-bottom"
                    size="xl"
                    className="w-full sm:w-auto bg-[#464646] hover:bg-[#5a5a5a] border-b-[#2f2f2f] text-white px-6 sm:px-8 text-sm sm:text-base uppercase"
                    onClick={() => {
                      const element = document.querySelector(buttonLink);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {buttonText}
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                  </Button>
                ) : (
                  <Link to={buttonLink}>
                    <Button
                      variant="accent-bottom"
                      size="xl"
                      className="w-full sm:w-auto bg-[#464646] hover:bg-[#5a5a5a] border-b-[#2f2f2f] text-white px-6 sm:px-8 text-sm sm:text-base uppercase"
                    >
                      {buttonText}
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                    </Button>
                  </Link>
                )}
              </div>
            </div>

            {/* Afbeelding / logo rechts */}
            <div className="relative flex justify-center lg:justify-end z-10 lg:-ml-24 xl:-ml-32 hidden sm:block">
              <div className="relative h-[200px] sm:h-[260px] md:h-[320px] lg:h-[320px] xl:h-[360px] aspect-[4/5] lg:aspect-[3/4] flex items-center justify-center">
                <img
                  src={tapBrandingElements}
                  alt="TAP branding elements"
                  className="h-auto w-full max-w-[780px] origin-center scale-[1.5] sm:scale-[2] md:scale-[2.5] lg:scale-[2.2] xl:scale-[2.8] rotate-12 translate-x-24 sm:translate-x-36 md:translate-x-48 lg:translate-x-44 xl:translate-x-56 translate-y-2 md:translate-y-0 lg:translate-y-2 xl:translate-y-0"
                  style={{
                    filter: 'grayscale(100%) brightness(0.75)',
                    imageRendering: 'crisp-edges',
                    willChange: 'transform',
                    mixBlendMode: 'normal'
                  } as React.CSSProperties}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default CTA;
