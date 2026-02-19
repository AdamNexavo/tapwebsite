import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocatiesBlock from "@/components/LocatiesBlock";
import CTA from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Hammer, Layers, Package, Tent } from "lucide-react";
import { Link } from "react-router-dom";
import crewTechniekImg from "@/assets/crew-techniek.png";
import crewBarriersImg from "@/assets/crew-barriers.png";
import crewWorkingImg from "@/assets/crew-working.png";
import ctaLogo from "@/assets/cta-logo.svg";

const OpEnAfbouwVacature = () => {
  const [visibleBlocks, setVisibleBlocks] = useState<Set<number>>(new Set());
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' ? window.innerWidth <= 639 : false);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);
  const interesseHeaderRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const updateHeader = () => {
      if (!interesseHeaderRef.current) {
        console.log('OpEnAfbouwVacature: interesseHeaderRef.current is null');
        return;
      }
      
      const isMobileSize = window.innerWidth <= 639;
      console.log('OpEnAfbouwVacature: window.innerWidth =', window.innerWidth, 'isMobile =', isMobileSize);
      setIsMobile(isMobileSize);
      
      if (isMobileSize) {
        // Force 36px op mobiel - direct style
        interesseHeaderRef.current.style.fontSize = '36px';
        interesseHeaderRef.current.style.lineHeight = '1.2';
        console.log('OpEnAfbouwVacature: Set font-size to 36px');
        console.log('OpEnAfbouwVacature: Computed font-size =', window.getComputedStyle(interesseHeaderRef.current).fontSize);
      } else {
        // Reset op desktop
        interesseHeaderRef.current.style.fontSize = '';
        interesseHeaderRef.current.style.lineHeight = '';
      }
    };
    
    // Direct uitvoeren
    updateHeader();
    
    // Meerdere keren proberen
    const timeouts = [10, 50, 100, 300, 1000].map(delay => 
      setTimeout(updateHeader, delay)
    );
    
    window.addEventListener('resize', updateHeader);
    
    return () => {
      window.removeEventListener('resize', updateHeader);
      timeouts.forEach(clearTimeout);
    };
  }, []);

  useEffect(() => {
    // Only run on mobile
    if (window.innerWidth > 639) return;

    const observers: IntersectionObserver[] = [];

    blockRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleBlocks((prev) => new Set(prev).add(index));
              
              // Als dit block 5 is (Interesse header), zet de font-size
              if (index === 5 && interesseHeaderRef.current && window.innerWidth <= 639) {
                interesseHeaderRef.current.style.fontSize = '36px';
                interesseHeaderRef.current.style.lineHeight = '1.2';
                console.log('OpEnAfbouwVacature: Set font-size to 36px via IntersectionObserver');
              }
              
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px',
        }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen">
      <style>{`
        @media (max-width: 639px) {
          /* Verklein regelafstand en font-size voor intro titel op mobile - alleen OpEnAfbouwVacature */
          .text-center.mb-16.md\\:mb-20 .max-w-4xl.mx-auto.space-y-2 > p.text-3xl.md\\:text-4xl.text-foreground.leading-relaxed.font-black {
            line-height: 1.2 !important;
            font-size: 29px !important;
          }
          
          .location-cards-wrapper {
            padding-left: 2rem !important;
            padding-right: 2rem !important;
            overflow: visible !important;
            position: relative !important;
            padding-bottom: 6rem !important;
          }
          .bg-secondary.rounded-2xl .mb-6 {
            margin-bottom: 0.5rem !important;
          }
          .bg-secondary.rounded-2xl h2.text-3xl {
            margin-bottom: 2rem !important;
            margin-top: 0 !important;
          }
          .location-cards-container {
            position: relative !important;
            width: 100% !important;
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
            overflow: visible !important;
          }
          .location-card {
            opacity: 0 !important;
            pointer-events: none !important;
            transition: opacity 0.3s ease !important;
            position: absolute !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            margin-right: 0 !important;
            width: 280px !important;
            height: 400px !important;
            overflow: visible !important;
            border-radius: 0.75rem !important;
            border: 3px solid white !important;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05) !important;
            background: white !important;
          }
          .location-card > div {
            height: calc(100% - 6px) !important;
            width: calc(100% - 6px) !important;
            margin: 3px !important;
            overflow: hidden !important;
            border-radius: calc(0.75rem - 3px) !important;
          }
          .location-card.location-card-active {
            opacity: 1 !important;
            pointer-events: auto !important;
            position: relative !important;
            left: auto !important;
            transform: none !important;
          }
          .location-card > div > div {
            overflow: visible !important;
            border-radius: 0.75rem !important;
          }
          .location-card > div > div > div.location-overlay {
            background: linear-gradient(to bottom, hsl(var(--primary) / 0.85) 0%, hsl(var(--primary) / 0.7) 30%, transparent 50%) !important;
            z-index: 5 !important;
            position: absolute !important;
            top: -4px !important;
            left: -4px !important;
            right: -4px !important;
            width: calc(100% + 8px) !important;
            height: calc(100% + 4px) !important;
            border-radius: 0.75rem 0.75rem 0 0 !important;
            margin: 0 !important;
            transform: translateZ(0) !important;
          }
          .location-card-title {
            left: 50% !important;
            top: 1.25rem !important;
            bottom: auto !important;
            transform: translateX(-50%) !important;
            text-align: center !important;
            width: 100% !important;
          }
          .location-card-title h3 {
            writing-mode: horizontal-tb !important;
            transform: none !important;
            text-align: center !important;
            margin: 0 auto !important;
            text-shadow: none !important;
            drop-shadow: none !important;
            filter: none !important;
          }
          .location-nav-mobile {
            display: flex !important;
            bottom: 2rem !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            z-index: 50 !important;
          }
          .location-nav-mobile.hidden {
            display: flex !important;
          }
          .location-nav-mobile.-translate-x-1\\/2 {
            transform: translateX(-50%) !important;
          }
          .location-nav-mobile button {
            width: 3rem !important;
            height: 3rem !important;
            border-radius: 0.5rem !important;
            background-color: hsl(var(--primary)) !important;
            color: white !important;
            border: none !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05) !important;
          }
          .location-nav-mobile button svg {
            color: white !important;
            width: 1.5rem !important;
            height: 1.5rem !important;
          }
          .location-nav-mobile button:hover {
            background-color: #4a4a4a !important;
          }
          .location-nav-mobile button:hover svg {
            color: hsl(var(--primary)) !important;
          }

          /* Mobile CTA - match AV-technician width by breaking out of max-w-6xl */
          .mobile-cta-wrapper {
            position: relative !important;
            left: 50% !important;
            right: 50% !important;
            width: 100vw !important;
            margin-left: -50vw !important;
            margin-right: -50vw !important;
            padding-top: 4rem !important;
            padding-bottom: 0.02rem !important;
          }

          .photo-container {
            position: relative;
            overflow: visible;
          }
          .photo-container .purple-overlay {
            position: absolute;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            width: 100% !important;
            height: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            transform: none !important;
          }
          .photo-container .rotated-image {
            display: none !important;
          }
          
          /* Slide up animatie voor werkzaamheden blocks - alleen mobile */
          .werkzaamheden-block {
            opacity: 0;
            transform: translateY(40px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          }
          .werkzaamheden-block.visible {
            opacity: 1;
            transform: translateY(0);
          }
          /* Staggered delays voor een voor een animatie */
          .werkzaamheden-block.visible:nth-child(1) {
            transition-delay: 0ms;
          }
          .werkzaamheden-block.visible:nth-child(2) {
            transition-delay: 100ms;
          }
          .werkzaamheden-block.visible:nth-child(3) {
            transition-delay: 200ms;
          }
          .werkzaamheden-block.visible:nth-child(4) {
            transition-delay: 300ms;
          }
          .werkzaamheden-block.visible:nth-child(5) {
            transition-delay: 400ms;
          }
          .werkzaamheden-block.visible:nth-child(6) {
            transition-delay: 500ms;
          }
          
          /* Interesse header in paarse block - alleen mobiel, 36px - OpEnAfbouwVacature specifiek */
          .bg-primary.rounded-2xl h3.interesse-op-afbouw,
          .werkzaamheden-block.bg-primary h3.interesse-op-afbouw,
          .bg-primary.rounded-2xl.werkzaamheden-block h3.interesse-op-afbouw,
          .werkzaamheden-block.visible.bg-primary h3.interesse-op-afbouw,
          .bg-primary.rounded-2xl.werkzaamheden-block.visible h3.interesse-op-afbouw,
          h3.interesse-op-afbouw.text-2xl {
            font-size: 36px !important;
            line-height: 1.2 !important;
          }
          
          /* Extra specifiek voor zekerheid */
          div.bg-primary.rounded-2xl.werkzaamheden-block.visible h3.text-2xl.interesse-op-afbouw {
            font-size: 36px !important;
            line-height: 1.2 !important;
          }
        }
      `}</style>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative section-padding pt-32 md:pt-40 pb-20 md:pb-24 overflow-hidden">
          {/* Diagonale scheiding */}
          <div className="absolute inset-0 z-0">
            {/* Linkerhelft - secondary background met foto */}
            <div 
              className="absolute inset-0 bg-secondary"
              style={{
                clipPath: "polygon(0 0, 0 100%, 45% 100%, 55% 0)",
                overflow: "hidden",
              }}
            >
              {/* Foto in grijze ruimte - alleen linkerhelft */}
              <div 
                className="absolute"
                style={{
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: "55%",
                  clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 0)",
                }}
              >
                <img
                  src={crewTechniekImg}
                  alt="Op- en afbouw crew"
                  className="w-full h-full object-cover opacity-90"
                  style={{
                    objectPosition: "100% center",
                  }}
                />
                {/* Lichte zwarte overlay */}
                <div className="absolute inset-0 bg-black/50" />
              </div>
            </div>
            {/* Rechterhelft - paars */}
            <div 
              className="absolute inset-0 bg-[#7a6df7]"
              style={{
                clipPath: "polygon(45% 100%, 100% 100%, 100% 0, 55% 0)",
              }}
            />
          </div>
          
          <div className="container-custom px-4 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Linkerhelft - leeg */}
                <div className="hidden lg:block"></div>
                
                {/* Rechterhelft - tekst */}
                <div className="text-center lg:flex lg:justify-center lg:items-center lg:pt-16">
                  <div className="lg:flex lg:flex-col lg:items-start">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white mb-2">
                    Vacature
                  </h1>
                    <p className="text-xl md:text-2xl text-white/90 mb-6">
                    Op- en afbouw
                  </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-background">
          <div className="container-custom px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              {/* Intro tekst gecentreerd */}
              <div className="text-center mb-16 md:mb-20">
                <div className="max-w-4xl mx-auto space-y-2">
                  <p className="text-3xl md:text-4xl text-foreground leading-relaxed font-black">
                    De kracht achter elk succesvol evenement
                  </p>
                  <p className="text-base text-foreground/70 leading-relaxed">
                    Als evenementenbouwer ben je essentieel voor het succes van elk project. Je werkt onder andere mee aan de opbouw van podia, trussconstructies, tenten en tijdelijke infrastructuur. Tijdens de afbouw zorg je voor een veilige en efficiënte demontage. Elke dag is anders en je werkt aan de meest uiteenlopende evenementen.
                  </p>
                </div>
              </div>

              {/* Foto naast Wat we bieden etc. */}
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                {/* Linkerhelft - Foto */}
                <div className="flex justify-center lg:justify-start">
                  <div className="relative w-full max-w-sm h-full">
                    <div className="relative rounded-xl overflow-visible h-full photo-container">
                      <img
                        src={crewBarriersImg}
                        alt="Op- en afbouw werkzaamheden"
                        className="rounded-xl shadow-xl object-cover w-full h-full"
                      />
                      {/* Brand purple overlay */}
                      <div className="absolute inset-0 rounded-xl z-10 purple-overlay" style={{ backgroundColor: 'hsl(var(--primary))' }}></div>
                      {/* Crew working image - fills purple box */}
                      <img
                        src={crewBarriersImg}
                        alt="Crewstars team aan het werk"
                        className="absolute inset-0 rounded-xl z-30 hidden lg:block w-full h-full object-cover rotated-image"
                        style={{ 
                          transform: 'rotate(-5deg)'
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Rechterhelft - Tekst */}
                <div>
                  {/* Functienaam badge */}
                  <div className="mb-6">
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Evenementenbouwer
                    </span>
                  </div>
                  
                  {/* Wat we bieden */}
                  <div className="mb-12">
                    <h2 className="text-2xl font-black text-foreground mb-4">
                      Wat we bieden:
                    </h2>
                    <ul className="space-y-2 text-foreground/70">
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Flexibele werktijden (ook avonden, nachten, weekenden).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Uurtarief tussen de <strong>€16,03</strong> en <strong>€18,74</strong> bruto.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Dynamisch team en afwisselende projecten.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Mogelijkheden voor groei en opleiding.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Wie we zoeken */}
                  <div className="mb-12">
                    <h2 className="text-2xl font-black text-foreground mb-4">
                      Wie we zoeken:
                    </h2>
                    <ul className="space-y-2 text-foreground/70">
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Handig, flexibel en een echte teamplayer.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Ervaring is een plus, maar geen vereiste.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Rijbewijs (B) is mooi meegenomen.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Solliciteer knop */}
                  <div className="mb-12">
                    <Button 
                      variant="accent-bottom" 
                      size="xl"
                      className="px-8"
                      asChild
                    >
                      <a href="https://app.recruitment.fleks.works/d6c6c449-5908-42f5-8ee1-6ee0361edb3b/apply">
                        Solliciteer nu
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Werkzaamheden Section */}
              <div className="mt-20 md:mt-24">
                <div className="text-center mb-12 md:mb-16">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase mb-4 text-accent">
                    • Werkzaamheden
                  </span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-foreground mb-6">
                    Wat ga je doen?
                  </h2>
                  <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto">
                    Als evenementenbouwer werk je aan verschillende soorten projecten. Hieronder zie je de verschillende rollen waarin je kunt werken.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {/* Stagehands */}
                  <div 
                    ref={(el) => (blockRefs.current[0] = el)}
                    className={`bg-muted/60 rounded-2xl p-6 border border-border/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-accent/50 werkzaamheden-block ${visibleBlocks.has(0) ? 'visible' : ''}`}
                  >
                    <Users className="w-8 h-8 text-accent mb-3" />
                    <h3 className="text-xl font-black text-foreground mb-3">
                      Stagehands
                    </h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      Assisteren bij de op- en afbouw van o.a. truss, licht, geluid, video en kabelwerk. Laden en lossen van trucks en ondersteunen waar extra handen nodig zijn op de vloer.
                    </p>
                  </div>

                  {/* Sitecrew */}
                  <div 
                    ref={(el) => (blockRefs.current[1] = el)}
                    className={`bg-muted/60 rounded-2xl p-6 border border-border/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-accent/50 werkzaamheden-block ${visibleBlocks.has(1) ? 'visible' : ''}`}
                  >
                    <Hammer className="w-8 h-8 text-accent mb-3" />
                    <h3 className="text-xl font-black text-foreground mb-3">
                      Sitecrew
                    </h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      Terreinwerk zoals hekken, vloeren, signing en tijdelijke infrastructuur. Breed inzetbare crew voor de basis van elk event, van inrichtingswerk tot het klaarzetten van materialen.
                    </p>
                  </div>

                  {/* Podiumbouwers */}
                  <div 
                    ref={(el) => (blockRefs.current[2] = el)}
                    className={`bg-muted/60 rounded-2xl p-6 border border-border/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-accent/50 werkzaamheden-block ${visibleBlocks.has(2) ? 'visible' : ''}`}
                  >
                    <Layers className="w-8 h-8 text-accent mb-3" />
                    <h3 className="text-xl font-black text-foreground mb-3">
                      Podiumbouwers
                    </h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      Bouwen van podiumconstructies voor verschillende soorten producties. Werken op de grond én op hoogte, volgens de planning en tekeningen van de technische partij.
                    </p>
                  </div>

                  {/* Standbouwers */}
                  <div 
                    ref={(el) => (blockRefs.current[3] = el)}
                    className={`bg-muted/60 rounded-2xl p-6 border border-border/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-accent/50 werkzaamheden-block ${visibleBlocks.has(3) ? 'visible' : ''}`}
                  >
                    <Package className="w-8 h-8 text-accent mb-3" />
                    <h3 className="text-xl font-black text-foreground mb-3">
                      Standbouwers
                    </h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      Op- en afbouw van zowel uniforme als maatwerk standbouw voor beurzen en zakelijke events. Nette en nauwkeurige afwerking volgens het ontwerp en de huisstijl van de opdrachtgever.
                    </p>
                  </div>

                  {/* Tentenbouwers */}
                  <div 
                    ref={(el) => (blockRefs.current[4] = el)}
                    className={`bg-muted/60 rounded-2xl p-6 border border-border/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-accent/50 werkzaamheden-block ${visibleBlocks.has(4) ? 'visible' : ''}`}
                  >
                    <Tent className="w-8 h-8 text-accent mb-3" />
                    <h3 className="text-xl font-black text-foreground mb-3">
                      Tentenbouwers
                    </h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      Snel en veilig plaatsen van tentconstructies zoals aluhallen, pagodes en stretchtenten. Inclusief verankering, afwerking en het klaarzetten van de basisinrichting waar nodig.
                    </p>
                  </div>

                  {/* CTA Block */}
                  <div 
                    ref={(el) => (blockRefs.current[5] = el)}
                    className={`bg-primary rounded-2xl p-6 border border-primary/50 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-center items-center text-white werkzaamheden-block ${visibleBlocks.has(5) ? 'visible' : ''}`}
                  >
                    <h3 
                      ref={interesseHeaderRef}
                      className="text-2xl md:text-3xl font-black text-white mb-3 text-center interesse-op-afbouw"
                    >
                      Interesse?
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed mb-6 text-center">
                      Klaar voor een nieuwe uitdaging? Solliciteer nu en word onderdeel van ons team!
                    </p>
                    <a href="https://app.recruitment.fleks.works/d6c6c449-5908-42f5-8ee1-6ee0361edb3b/apply" target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button
                        variant="accent-bottom"
                        size="xl"
                        className="w-full bg-[#464646] hover:bg-[#5a5a5a] border-b-[#2f2f2f] text-white px-8"
                      >
                        Solliciteer nu
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Locaties binnen dezelfde sectie */}
              <LocatiesBlock variant="images" />

              {/* CTA binnen dezelfde sectie */}
              <div className="mobile-cta-wrapper sm:hidden">
                <CTA 
                  title="Meer weten?"
                  description="Heb je nog vragen over deze functie of wil je meer informatie? We staan voor je klaar om alles te bespreken. Neem gerust contact met ons op!"
                  buttonText="Neem contact op"
                  buttonLink="/contact"
                />
              </div>
              <div className="hidden sm:block">
                <div className="relative overflow-hidden rounded-[48px] rounded-tr-none bg-primary text-white mt-24 md:mt-32">
                  <div className="relative grid lg:grid-cols-[1.3fr,1fr] gap-8 items-center px-8 py-10 md:px-16 md:py-14 max-w-5xl mx-auto">
                    {/* Tekst links */}
                    <div className="space-y-6 max-w-2xl lg:max-w-3xl -ml-4 md:-ml-8 lg:-ml-14">
                      <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight md:whitespace-nowrap">
                        Meer weten?
                      </h2>
                      <p className="text-lg md:text-xl text-white/80 max-w-xl">
                        Heb je nog vragen over deze functie of wil je meer informatie? We staan voor je klaar om alles te bespreken. Neem gerust contact met ons op!
                      </p>
                      <div className="mt-12 md:mt-16">
                        <Link to="/contact">
                          <Button
                            variant="accent-bottom"
                            size="xl"
                            className="bg-[#464646] hover:bg-[#5a5a5a] border-b-[#2f2f2f] text-white px-8"
                          >
                            Neem contact op
                            <ArrowRight className="w-5 h-5 ml-2" />
                          </Button>
                        </Link>
                      </div>
                    </div>

                    {/* Afbeelding / logo rechts */}
                    <div className="relative flex justify-center lg:justify-end">
                      <div className="relative h-[260px] md:h-[320px] lg:h-[360px] aspect-[4/5] lg:aspect-[3/4] flex items-center justify-center">
                        <img
                          src={ctaLogo}
                          alt="Crewstars logo"
                          className="h-auto w-full max-w-[780px] origin-center scale-[2.5] md:scale-[2.75] lg:scale-[3] rotate-12 translate-x-12 md:translate-x-24 lg:translate-x-32 -translate-y-2 md:-translate-y-4 lg:-translate-y-6 grayscale brightness-75"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OpEnAfbouwVacature;

