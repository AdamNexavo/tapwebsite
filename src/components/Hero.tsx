import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg-overlay-techniek.png";
import iconCs from "@/assets/icon-cs.svg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroBg}
          alt="Evenementenopbouw en afbouw"
          className="w-full h-full object-cover animate-zoom-in"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Header Overlay Gradient */}
      <div className="absolute top-0 left-0 right-0 bottom-0 min-h-screen bg-gradient-to-b from-black/50 via-black/30 to-transparent z-30 pointer-events-none" />

      {/* Watermark */}
      <img
        src={iconCs}
        alt="Crewstars icon"
        className="absolute right-[-40px] bottom-[-170px] pointer-events-none opacity-40 z-40 origin-bottom-right"
        style={{
          width: 'auto',
          height: 'auto',
          maxWidth: '30rem',
          imageRendering: '-webkit-optimize-contrast',
          transform: 'scale(1.3) rotate(15deg) translateZ(0)',
          transformOrigin: 'bottom right',
          backfaceVisibility: 'hidden',
          willChange: 'transform'
        }}
      />

      {/* Content */}
      <div className="relative w-full h-full flex items-center pl-4 lg:pl-32 xl:pl-64 2xl:pl-80 pr-4 lg:pr-8 z-50">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase mb-4 animate-fade-up">
            <span className="text-white text-xl">—</span>
            <span className="text-white">Flexibel personeel voor evenementen</span>
          </div>
          <h1 className="text-primary-foreground mb-6 animate-fade-up delay-100 text-[80px] font-extrabold leading-none" style={{ lineHeight: '1.0' }}>
            De schakel tussen<br />
            crew en resultaat<span className="text-accent">.</span>
          </h1>
          <div className="flex flex-wrap gap-4 animate-fade-up delay-200">
            <Button variant="hero" size="xl" className="px-6">
              Werken bij Crewstars
            </Button>
            <Button variant="hero-outline" size="xl" className="px-6">
              Voor opdrachtgevers
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
