import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg-ontwerp-zonder-titel.png";

const Hero = () => {
  return (
    <>
      <style>{`
        @media (max-width: 639px) {
          /* Lichte paarse overlay van boven naar halverwege beneden uitgefade op hero */
          section.relative.min-h-screen::after {
            content: '' !important;
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            height: 50% !important;
            background: linear-gradient(to bottom, hsl(var(--primary) / 0.3), transparent) !important;
            pointer-events: none !important;
            z-index: 35 !important;
          }
          
          /* Hero content links uitlijnen op mobile - Plan A */
          /* Verwijder alle padding links en gebruik negatieve margin om content tegen linkerkant te duwen */
          section.relative.min-h-screen > div.relative.w-full.h-full.flex.items-start {
            padding-left: 0 !important;
            padding-right: 1rem !important;
            margin-left: -1.5rem !important;
            padding-top: 7rem !important; /* Plaats content nog iets hoger op mobile */
          }
          
          .hero-content-container {
            text-align: left !important;
            margin-left: -1.5rem !important;
            margin-right: auto !important;
            align-items: flex-start !important;
            padding-left: 0 !important;
            width: calc(100% + 1.5rem) !important;
          }
          
          .hero-content-container > * {
            text-align: left !important;
            margin-left: 0 !important;
            margin-right: auto !important;
            padding-left: 0 !important;
          }
          
          /* Verwijder ook padding van alle child elementen */
          /* Zorg dat het streepje in lijn is met de header - zelfde margin-left als header */
          .hero-content-container .hero-subtitle-mobile,
          div.hero-subtitle-mobile.inline-flex {
            padding-left: 0 !important;
            margin-left: 0.5rem !important;
          }
          
          section.relative.min-h-screen .hero-subtitle-mobile {
            margin-left: 0.5rem !important;
          }
          
          /* Verleng streepje iets op mobile */
          .hero-content-container .hero-subtitle-mobile span:first-child {
            margin-left: 0 !important;
            padding-left: 0 !important;
            font-size: 1.5rem !important;
            line-height: 1 !important;
          }
          
          /* Vergroot tekst iets op mobile en zorg dat het op 1 regel blijft */
          .hero-content-container .hero-subtitle-mobile span.text-white:not(:first-child) {
            font-size: 0.75rem !important;
            white-space: nowrap !important;
          }
          
          .hero-content-container .hero-subtitle-mobile {
            white-space: nowrap !important;
            flex-wrap: nowrap !important;
          }
          
          .hero-content-container h1,
          .hero-content-container .hero-buttons-container {
            padding-left: 0 !important;
            margin-left: 0 !important;
          }
          
          /* Zorg dat hero titel visueel in 3 regels blijft op mobile - ook op echte telefoons */
          /* Maak de h1 box breder naar rechts, tekst blijft op dezelfde plek */
          /* Overschrijf container constraints voor h1 door het uit de container te laten breken */
          .hero-content-container {
            overflow: visible !important;
            position: relative !important;
            margin-top: 6rem !important; /* Plaats content nog lager op mobile */
          }
          
          h1.hero-title-mobile.text-primary-foreground {
            font-size: 2.125rem !important; /* 34px - iets groter maar nog steeds in 3 regels */
            line-height: 1.25 !important; /* Meer ruimte tussen regels */
            max-width: none !important;
            width: calc(100vw - 1.5rem) !important;
            min-width: calc(100vw - 1.5rem) !important;
            word-wrap: break-word !important;
            white-space: normal !important;
            display: block !important;
            margin-left: 0.5rem !important;
            margin-right: calc(-100vw + 100% + 1.5rem) !important;
            padding-right: 1rem !important;
            box-sizing: border-box !important;
            position: relative !important;
          }
          
          section.relative.min-h-screen h1.hero-title-mobile {
            font-size: 2.125rem !important; /* 34px - iets groter maar nog steeds in 3 regels */
            line-height: 1.25 !important; /* Meer ruimte tussen regels */
            width: calc(100vw - 1.5rem) !important;
            min-width: calc(100vw - 1.5rem) !important;
            margin-left: 0.5rem !important;
            margin-right: calc(-100vw + 100% + 1.5rem) !important;
            padding-right: 1rem !important;
            box-sizing: border-box !important;
          }
          
          .hero-content-container h1.hero-title-mobile {
            font-size: 2.125rem !important; /* 34px - iets groter maar nog steeds in 3 regels */
            line-height: 1.25 !important; /* Meer ruimte tussen regels */
            width: calc(100vw - 1.5rem) !important;
            min-width: calc(100vw - 1.5rem) !important;
            max-width: none !important;
            margin-left: 0.5rem !important;
            margin-right: calc(-100vw + 100% + 1.5rem) !important;
            padding-right: 1rem !important;
            box-sizing: border-box !important;
          }
          
          /* Verwijder line-break op mobile zodat tekst natuurlijk in 3 regels wrapt */
          h1.hero-title-mobile br {
            display: none !important;
          }
          
          /* Maak hero knoppen kleiner en minder breed op mobile */
          /* Uitlijnen met header links */
          .hero-buttons-container {
            width: auto !important;
            max-width: 100% !important;
            margin-left: 0 !important;
            padding-left: 0 !important;
            align-items: flex-start !important;
            gap: 0.75rem !important;
          }
          
          /* Verklein ruimte boven tweede knop */
          .hero-buttons-container > a:nth-child(2) {
            margin-top: -0.25rem !important;
          }
          
          .hero-buttons-container a {
            width: auto !important;
            max-width: 85% !important;
            margin-left: 0 !important;
          }
          
          .hero-buttons-container button,
          .hero-buttons-container .hero-button-mobile {
            font-size: 1rem !important;
            padding: 0.75rem 1.5rem !important;
            height: auto !important;
            min-height: 2.75rem !important;
            width: auto !important;
            max-width: 85% !important;
            margin-left: 0 !important;
          }
          
          /* Zorg dat buttons-container in lijn is met header */
          .hero-content-container .hero-buttons-container {
            margin-left: 0 !important;
            padding-left: 0 !important;
            align-self: flex-start !important;
            margin-top: -0.5rem !important;
          }
          
          /* Zorg dat buttons zelf ook links uitgelijnd zijn */
          .hero-content-container .hero-buttons-container > a {
            margin-left: 0 !important;
            padding-left: 0 !important;
          }
          
          /* Verklein margin-bottom van header om ruimte boven buttons te verkleinen */
          .hero-content-container h1.hero-title-mobile {
            margin-bottom: 2.25rem !important;
          }
          
          /* Zorg dat de tekst natuurlijk in 3 regels wrapt */
          h1.hero-title-mobile {
            display: block !important;
            overflow-wrap: break-word !important;
          }
          
          /* Hero foto iets naar rechts positioneren op mobile (maar niet helemaal rechts) */
          section.relative.min-h-screen div.absolute.inset-0.overflow-hidden img {
            object-position: 55% center !important;
          }
        }
      `}</style>
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden w-full max-w-full">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroBg}
          alt="Evenementenopbouw en afbouw"
          className="w-full h-full object-cover object-left sm:object-center animate-zoom-in"
        />
        <div className="absolute inset-0 bg-black/40 sm:bg-black/30" />
      </div>

      {/* Header Overlay Gradient */}
      <div className="absolute top-0 left-0 right-0 bottom-0 min-h-screen bg-gradient-to-b from-black/50 via-black/30 to-transparent z-30 pointer-events-none" />

      {/* Content */}
      <div className="relative w-full h-full flex items-start sm:items-center pt-52 sm:pt-0 pl-4 sm:pl-6 md:pl-8 lg:pl-16 xl:pl-32 2xl:pl-48 pr-4 sm:pr-6 lg:pr-8 z-50">
        <div className="hero-content-container max-w-4xl lg:max-w-5xl w-full">
          <div className="hero-subtitle-mobile inline-flex items-center gap-2 text-[11px] sm:text-sm font-semibold tracking-wide uppercase mb-4 animate-fade-up">
            <span className="text-white text-sm sm:text-xl">—</span>
            <span className="text-white">Horeca & Hospitality crew</span>
          </div>
          <h1 className="hero-title-mobile text-primary-foreground mb-10 sm:mb-6 animate-fade-up delay-100 text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-[64px] font-extrabold leading-none" style={{ lineHeight: '1.0' }}>
            Wij zijn de schakel tussen<br />
            topcrew en topbeleving<span className="text-accent">.</span>
          </h1>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 animate-fade-up delay-200 hero-buttons-container">
            <a href="https://app.recruitment.fleks.works/172b1913-9407-4035-bc25-95465367e408/apply" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="hero" size="xl" className="px-6 w-full sm:w-auto hero-button-mobile">
                Werken bij TAP
              </Button>
            </a>
            <Link to="/voor-opdrachtgevers" className="w-full sm:w-auto">
              <Button variant="hero-outline" size="xl" className="px-6 w-full sm:w-auto hero-button-mobile">
                Voor Opdrachtgevers
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero;
