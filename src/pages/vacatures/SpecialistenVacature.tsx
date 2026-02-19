import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocatiesBlock from "@/components/LocatiesBlock";
import CTA from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import specialistForkliftImg from "@/assets/specialist-forklift.png";
import specialistRiggerImg from "@/assets/specialist-rigger.png";
import ctaLogo from "@/assets/cta-logo.svg";

const SpecialistenVacature = () => {
  const [visibleBlocks, setVisibleBlocks] = useState<Set<number>>(new Set());
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);

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
        /* Strong tags styling - geldt voor alle resoluties */
        .space-y-2.text-foreground\\/70 li span strong {
          font-weight: normal !important;
        }
        .space-y-2.text-foreground\\/70 li span strong.keep-bold {
          font-weight: bold !important;
        }
        
        @media (max-width: 639px) {
          h2.text-2xl.font-black.text-foreground.mb-4 {
            font-size: 27px !important;
          }
          
          /* Verklein regelafstand voor intro titel op mobile */
          .text-center.mb-16.md\\:mb-20 .max-w-4xl.mx-auto.space-y-2 > p.text-3xl.md\\:text-4xl.text-foreground.leading-relaxed.font-black {
            line-height: 1.2 !important;
          }
          
          /* Paarse overlay verlichten op mobile - alleen vacaturepagina's */
          section.relative.section-padding.overflow-hidden > div.absolute.inset-0.z-0 > div.absolute.inset-0[style*="clip-path: polygon(45%"] {
            opacity: 0.70 !important;
            background-color: rgba(99, 102, 241, 0.70) !important;
          }
          
          /* Hero achtergrondfoto op mobile naar boven positioneren - SpecialistenVacature */
          img[alt="Specialisten"] {
            object-position: left top !important;
          }
          
          .werkzaamheden-wrapper {
            margin-top: 3rem !important;
            margin-left: calc(-1rem - 0px) !important;
            margin-right: calc(-1rem - 0px) !important;
            padding-top: 3rem !important;
            padding-bottom: 3rem !important;
            padding-left: 1rem !important;
            padding-right: 1rem !important;
            background-color: #ffffff !important;
            border-top: 2px solid hsl(var(--border)) !important;
            width: calc(100% + 2rem) !important;
            box-shadow: 0 0 0 100vmax #ffffff !important;
            clip-path: inset(0 -100vmax) !important;
          }
          .werkzaamheden-section {
            margin-top: 0 !important;
            width: 100% !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
          }
          .werkzaamheden-section div.bg-muted\\/60.rounded-2xl {
            background-color: #f5f5f5 !important;
          }
          .werkzaamheden-section .bg-primary h3.text-2xl {
            font-size: 2.25rem !important;
            line-height: 2.5rem !important;
          }
          
          /* Centreer werkzaamheden blocks op mobile - SpecialistenVacature */
          .werkzaamheden-section > div.text-center {
            width: 100% !important;
            max-width: 100% !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
          
          .werkzaamheden-section .grid.md\\:grid-cols-2.lg\\:grid-cols-3 {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            width: 100% !important;
            max-width: 100% !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
            box-sizing: border-box !important;
            gap: 1.5rem !important;
          }
          
          .werkzaamheden-section .grid.md\\:grid-cols-2.lg\\:grid-cols-3 > div {
            width: 100% !important;
            max-width: 343px !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
            box-sizing: border-box !important;
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
          /* CTA styling - exact hetzelfde als homepage CTA component */
          .vacature-cta {
            border-radius: 1rem !important;
            margin-top: 3rem !important;
          }
          .vacature-cta > div.grid {
            padding-left: 1.25rem !important;
            padding-right: 1.25rem !important;
            padding-top: 2rem !important;
            padding-bottom: 2rem !important;
            gap: 1.5rem !important;
          }
          .vacature-cta > div.grid > div:first-child {
            margin-left: 0 !important;
            margin-right: 0 !important;
            max-width: 100% !important;
            gap: 1rem !important;
          }
          .vacature-cta > div.grid > div:first-child.space-y-6 {
            gap: 1rem !important;
          }
          .vacature-cta h2 {
            font-size: 1.5rem !important;
            line-height: 1.25 !important;
            white-space: normal !important;
          }
          .vacature-cta p {
            font-size: 0.875rem !important;
            line-height: 1.5 !important;
          }
          .vacature-cta > div.grid > div:first-child > div {
            margin-top: 1.5rem !important;
          }
          .vacature-cta button {
            width: 100% !important;
            padding-left: 1.5rem !important;
            padding-right: 1.5rem !important;
            font-size: 0.875rem !important;
          }
          .vacature-cta > div.grid > div:last-child {
            display: none !important;
          }
          /* Homepage CTA wrapper - alleen op mobiel */
          .mobile-cta-wrapper {
            display: block !important;
          }
          .mobile-cta-wrapper section#contact {
            background-color: white !important;
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
                  src={specialistForkliftImg}
                  alt="Specialisten"
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
                    Specialisten
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
                    Zet jouw expertise in voor de grootste evenementen
                  </p>
                  <p className="text-base text-foreground/70 leading-relaxed">
                    Met jouw specialistische kennis en vaardigheden ben je onmisbaar voor complexe projecten. Of je nu werkt met heftrucks, hoogwerkers, rigging of als sitecoördinator - jouw expertise zorgt ervoor dat alles veilig en volgens planning verloopt. Je werkt aan de meest uitdagende en grootschalige evenementen.
                  </p>
                </div>
              </div>

              {/* Foto naast Wat we bieden etc. */}
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                {/* Linkerhelft - Foto */}
                <div className="flex justify-center lg:justify-start">
                  <div className="relative w-full max-w-sm h-full">
                    <div className="relative rounded-xl overflow-visible h-full">
                      <img
                        src={specialistForkliftImg}
                        alt="Specialisten"
                        className="rounded-xl shadow-xl object-cover w-full h-full"
                      />
                      {/* Brand purple overlay */}
                      <div className="absolute inset-0 rounded-xl z-10" style={{ backgroundColor: 'hsl(var(--primary))' }}></div>
                      {/* Specialist rigger image - fills purple box */}
                      <img
                        src={specialistRiggerImg}
                        alt="Specialisten aan het werk"
                        className="absolute inset-0 rounded-xl z-30 hidden lg:block w-full h-full object-cover"
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
                      Specialist
                    </span>
                  </div>
                  
                  {/* Wat we bieden */}
                  <div className="mb-12">
                    <h2 className="text-2xl font-black text-foreground mb-4">
                      Wat we bieden
                    </h2>
                    <ul className="space-y-2 text-foreground/70">
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span><strong>Flexibele</strong> werktijden (ook avonden, nachten, weekenden).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span><strong>Uurtarief</strong> tussen de <strong className="keep-bold">€16,03</strong> en <strong className="keep-bold">€18,74</strong> bruto.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span><strong>Dynamisch</strong> team en afwisselende projecten.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Mogelijkheden voor <strong>groei</strong> en <strong>opleiding</strong>.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Wie we zoeken */}
                  <div className="mb-12">
                    <h2 className="text-2xl font-black text-foreground mb-4">
                      Wie we zoeken
                    </h2>
                    <ul className="space-y-2 text-foreground/70">
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Relevante certificaten en bevoegdheden voor jouw specialisatie.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Ervaring in de evenementenbranche is een must</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Oog voor veiligheid en zelfstandig kunnen werken.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Flexibel en teamplayer.</span>
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
              <div className="werkzaamheden-wrapper">
              <div className="mt-20 md:mt-24 werkzaamheden-section">
                <div className="text-center mb-12 md:mb-16">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase mb-4 text-accent">
                    • Werkzaamheden
                  </span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-foreground mb-6">
                    Wat ga je doen?
                  </h2>
                  <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto">
                    Als specialist werk je aan verschillende soorten projecten. Afhankelijk van jouw certificaten, bevoegdheden en vaardigheden werk je in één of meerdere van de onderstaande rollen.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {/* Heftruckchauffeurs */}
                  <div 
                    ref={(el) => (blockRefs.current[0] = el)}
                    className={`bg-muted/60 rounded-2xl p-6 border border-border/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-accent/50 werkzaamheden-block ${visibleBlocks.has(0) ? 'visible' : ''}`}
                  >
                    <Award className="w-8 h-8 text-accent mb-3" />
                    <h3 className="text-xl font-black text-foreground mb-3">
                      Heftruckchauffeurs
                    </h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      Je bedient heftrucks voor het efficiënt verplaatsen van zware materialen en apparatuur. Je werkt nauw samen met de opbouwteams en zorgt voor een vloeiende logistieke flow op de werkvloer.
                    </p>
                  </div>

                  {/* Hoogwerkerbedieners */}
                  <div 
                    ref={(el) => (blockRefs.current[1] = el)}
                    className={`bg-muted/60 rounded-2xl p-6 border border-border/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-accent/50 werkzaamheden-block ${visibleBlocks.has(1) ? 'visible' : ''}`}
                  >
                    <Shield className="w-8 h-8 text-accent mb-3" />
                    <h3 className="text-xl font-black text-foreground mb-3">
                      Hoogwerkerbedieners
                    </h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      Je bedient hoogwerkers om veilig op hoogte te werken. Je gebruikt de hoogwerker om materialen te installeren of demonteren op hoogte. Je werkt volgens alle veiligheidsprotocollen.
                    </p>
                  </div>

                  {/* Riggers */}
                  <div 
                    ref={(el) => (blockRefs.current[2] = el)}
                    className={`bg-muted/60 rounded-2xl p-6 border border-border/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-accent/50 werkzaamheden-block ${visibleBlocks.has(2) ? 'visible' : ''}`}
                  >
                    <Award className="w-8 h-8 text-accent mb-3" />
                    <h3 className="text-xl font-black text-foreground mb-3">
                      Riggers
                    </h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      Je hangt constructies en apparatuur veilig op hoogte op. Je berekent belastingen, gebruikt de juiste riggingmaterialen en werkt volgens de hoogste veiligheidsnormen.
                    </p>
                  </div>

                  {/* VCA-medewerkers */}
                  <div 
                    ref={(el) => (blockRefs.current[3] = el)}
                    className={`bg-muted/60 rounded-2xl p-6 border border-border/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-accent/50 werkzaamheden-block ${visibleBlocks.has(3) ? 'visible' : ''}`}
                  >
                    <Shield className="w-8 h-8 text-accent mb-3" />
                    <h3 className="text-xl font-black text-foreground mb-3">
                      VCA-medewerkers
                    </h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      Je voert op- en afbouwwerkzaamheden uit op VCA-verplichte locaties. Je volgt alle veiligheidsprocedures en werkt volgens de geldende VCA-richtlijnen en werkinstructies.
                    </p>
                  </div>

                  {/* Sitecoördinatoren */}
                  <div 
                    ref={(el) => (blockRefs.current[4] = el)}
                    className={`bg-muted/60 rounded-2xl p-6 border border-border/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-accent/50 werkzaamheden-block ${visibleBlocks.has(4) ? 'visible' : ''}`}
                  >
                    <Users className="w-8 h-8 text-accent mb-3" />
                    <h3 className="text-xl font-black text-foreground mb-3">
                      Sitecoördinatoren
                    </h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      Je coördineert teams op de werkvloer en bent het aanspreekpunt voor de opdrachtgever. Je houdt overzicht over de planning en zorgt dat alles volgens schema verloopt.
                    </p>
                  </div>

                  {/* CTA Block */}
                  <div 
                    ref={(el) => (blockRefs.current[5] = el)}
                    className={`bg-primary rounded-2xl p-6 border border-primary/50 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-center items-center text-white werkzaamheden-block ${visibleBlocks.has(5) ? 'visible' : ''}`}
                  >
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-3 text-center">
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
              </div>

              {/* Locaties binnen dezelfde sectie */}
              <LocatiesBlock variant="images" />
              </div>
          </div>
        </section>
        
        {/* Homepage CTA - alleen op mobiel */}
        <div className="mobile-cta-wrapper sm:hidden">
          <CTA 
            title="Meer weten?"
            description="Heb je nog vragen over deze functie of wil je meer informatie? We staan voor je klaar om alles te bespreken. Neem gerust contact met ons op!"
            buttonText="Neem contact op"
            buttonLink="/contact"
          />
        </div>

        {/* CTA Section - alleen op laptop/desktop */}
        <div className="hidden sm:block">
          <CTA 
            title="Meer weten?"
            description="Heb je nog vragen over deze functie of wil je meer informatie? We staan voor je klaar om alles te bespreken. Neem gerust contact met ons op!"
            buttonText="Neem contact op"
            buttonLink="/contact"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SpecialistenVacature;

