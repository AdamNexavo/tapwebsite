import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import festivalCrowd from "@/assets/festival-crowd.png";
import crewTechniek from "@/assets/crew-techniek.png";

const Diensten = () => {
  const [scrollY, setScrollY] = useState(0);
  const [sectionTop, setSectionTop] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);

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

  const scrollProgress = Math.max(0, scrollY - sectionTop + 200);
  const parallaxOffset = Math.min(150, scrollProgress * 0.3);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Intro */}
        <section className="section-padding pt-32 md:pt-40 bg-secondary">
          <div className="container-custom px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-foreground mb-6">
                Diensten
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Crewstars levert technische ondersteuning op de vloer. We sluiten aan bij bestaande teams van
                producties en locaties, tijdens opbouw, show en afbouw. Deze pagina geeft een overzicht van wat we
                leveren en wanneer opdrachtgevers ons inschakelen.
              </p>
            </div>
          </div>
        </section>

        {/* What we provide */}
        <section className="section-padding bg-background pt-8 md:pt-12" ref={sectionRef}>
          <div className="container-custom px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              {/* Section label centered on top */}
              <div className="flex justify-center items-center gap-2 text-sm font-semibold tracking-wide uppercase mb-16 md:mb-20">
                <span className="text-accent text-xl">•</span>
                <span className="text-accent">Ons aanbod</span>
              </div>

              <div className="grid lg:grid-cols-2 gap-10 items-center">
                {/* Left column - overlapping photos with parallax (same stijl als homepage) */}
                <div className="flex justify-center lg:justify-start">
                  <div className="relative h-[420px] w-full max-w-md flex items-center justify-center">
                    {/* Achtergrondfoto - blijft op positie */}
                    <div
                      className="absolute left-0 top-1/2 w-[260px] h-[340px] bg-white p-3 rounded-2xl shadow-2xl"
                      style={{ transform: "translateY(-50%)" }}
                    >
                      <img
                        src={festivalCrowd}
                        alt="Festivalpubliek"
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>

                    {/* Voorgrondfoto - beweegt mee met scroll */}
                    <div
                      className="absolute left-[160px] top-0 w-[260px] h-[340px] bg-white p-3 rounded-2xl shadow-2xl z-10"
                      style={{
                        transform: `translateY(${Math.max(0, parallaxOffset)}px)`,
                        transition: "transform 0.3s ease-out",
                      }}
                    >
                      <img
                        src={crewTechniek}
                        alt="Crewstars techniek team"
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </div>

                {/* Right column - text */}
                <div>
                  <h2 className="text-4xl md:text-5xl font-black leading-tight text-foreground mb-4">
                    Op-en afbouw
                  </h2>
                  <p className="text-lg text-foreground/70 leading-relaxed mb-8">
                    Ondersteunende crew met kennis van audiovisuele techniek, inzetbaar tijdens opbouw, uitvoering en afbouw.
                  </p>

                  <Accordion
                    type="single"
                    collapsible
                    className="w-full rounded-2xl bg-muted/60 border border-border/60 shadow-lg overflow-hidden"
                  >
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-left text-base px-4">
                        Stagehands
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/70 px-4">
                        Assisteren bij de op- en afbouw van o.a. truss, licht, geluid, video en kabelwerk. Laden en lossen
                        van trucks en ondersteunen waar extra handen nodig zijn op de vloer.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-left text-base px-4">
                        Sitecrew
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/70 px-4">
                        Terreinwerk zoals hekken, vloeren, signing en tijdelijke infrastructuur. Breed inzetbare crew voor
                        de basis van elk event, van inrichtingswerk tot het klaarzetten van materialen.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-left text-base px-4">
                        Podiumbouwers
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/70 px-4">
                        Bouwen van podiumconstructies voor verschillende soorten producties. Werken op de grond én op
                        hoogte, volgens de planning en tekeningen van de technische partij.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger className="text-left text-base px-4">
                        Standbouwers
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/70 px-4">
                        Op- en afbouw van zowel uniforme als maatwerk standbouw voor beurzen en zakelijke events. Nette en
                        nauwkeurige afwerking volgens het ontwerp en de huisstijl van de opdrachtgever.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger className="text-left text-base px-4">
                        Tentenbouwers
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/70 px-4">
                        Snel en veilig plaatsen van tentconstructies zoals aluhallen, pagodes en stretchtenten. Inclusief
                        verankering, afwerking en het klaarzetten van de basisinrichting waar nodig.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>

              {/* Second block with swapped image/text positions */}
              <div className="mt-32 md:mt-40 grid lg:grid-cols-2 gap-10 items-center">
                {/* Left column - text */}
                <div>
                  <h2 className="text-4xl md:text-5xl font-black leading-tight text-foreground mb-4">
                    AV Support
                  </h2>
                  <p className="text-lg text-foreground/70 leading-relaxed mb-8">
                    Inzetbaar voor het ondersteunen tijdens de op- en afbouw van evenementen.
                  </p>

                  <Accordion
                    type="single"
                    collapsible
                    className="w-full rounded-2xl bg-muted/60 border border-border/60 shadow-lg overflow-hidden"
                  >
                    <AccordionItem value="item-1b">
                      <AccordionTrigger className="text-left text-base px-4">
                        Lichttechnici
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/70 px-4">
                        Ophangen, bekabelen en instellen van lichtinstallaties, en ondersteuning tijdens shows voor het
                        bedienen en afstellen van de verlichting.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2b">
                      <AccordionTrigger className="text-left text-base px-4">
                        Geluidstechnici
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/70 px-4">
                        Plaatsen en aansluiten van speakers, bekabeling en microfoons, met ondersteuning tijdens
                        soundchecks en bediening tijdens het evenement.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3b">
                      <AccordionTrigger className="text-left text-base px-4">
                        Videotechnici
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/70 px-4">
                        Montage van LED-schermen, projectoren en mediaservers, met inzet tijdens shows voor controle,
                        troubleshooting en ondersteuning.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4b">
                      <AccordionTrigger className="text-left text-base px-4">
                        Video-operators
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/70 px-4">
                        Bedienen van videosystemen en presentaties tijdens shows en zakelijke events, volgens draaiboek en
                        aanwijzingen van de regie.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5b">
                      <AccordionTrigger className="text-left text-base px-4">
                        Patchers / Kabeltrekkers
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/70 px-4">
                        Aanleggen en organiseren van stroom- en signaalkabels, en ondersteuning bij patching tijdens
                        opbouw én draaiende productie.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                {/* Right column - image */}
                <div className="flex justify-center lg:justify-end">
                  <div className="relative h-[420px] w-full max-w-md flex items-center justify-center">
                    <div
                      className="absolute left-0 top-1/2 w-[260px] h-[340px] bg-white p-3 rounded-2xl shadow-2xl"
                      style={{ transform: "translateY(-50%)" }}
                    >
                      <img
                        src={festivalCrowd}
                        alt="Festivalpubliek"
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>

                    <div
                      className="absolute left-[160px] top-0 w-[260px] h-[340px] bg-white p-3 rounded-2xl shadow-2xl z-10"
                      style={{
                        transform: `translateY(${Math.max(0, parallaxOffset)}px)`,
                        transition: "transform 0.3s ease-out",
                      }}
                    >
                      <img
                        src={crewTechniek}
                        alt="Crewstars techniek team"
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Third block - Specialisten (image left, text right) */}
              <div className="mt-32 md:mt-40 grid lg:grid-cols-2 gap-10 items-center">
                {/* Left column - image */}
                <div className="flex justify-center lg:justify-start">
                  <div className="relative h-[420px] w-full max-w-md flex items-center justify-center">
                    <div
                      className="absolute left-0 top-1/2 w-[260px] h-[340px] bg-white p-3 rounded-2xl shadow-2xl"
                      style={{ transform: "translateY(-50%)" }}
                    >
                      <img
                        src={festivalCrowd}
                        alt="Festivalpubliek"
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>

                    <div
                      className="absolute left-[160px] top-0 w-[260px] h-[340px] bg-white p-3 rounded-2xl shadow-2xl z-10"
                      style={{
                        transform: `translateY(${Math.max(0, parallaxOffset)}px)`,
                        transition: "transform 0.3s ease-out",
                      }}
                    >
                      <img
                        src={crewTechniek}
                        alt="Crewstars techniek team"
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </div>

                {/* Right column - text */}
                <div>
                  <h2 className="text-4xl md:text-5xl font-black leading-tight text-foreground mb-4">
                    Specialisten
                  </h2>
                  <p className="text-lg text-foreground/70 leading-relaxed mb-8">
                    Inzet van gespecialiseerde krachten waar extra kennis of ervaring nodig is.
                  </p>

                  <Accordion
                    type="single"
                    collapsible
                    className="w-full rounded-2xl bg-muted/60 border border-border/60 shadow-lg overflow-hidden"
                  >
                    <AccordionItem value="item-1c">
                      <AccordionTrigger className="text-left text-base px-4">
                        Hefttruckchauffeurs
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/70 px-4">
                        Bedienen van heftrucks voor het verplaatsen, laden en lossen van materialen tijdens op- en afbouw.
                        Ingezet voor logistiek, terreinwerk en ondersteuning bij technische teams.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2c">
                      <AccordionTrigger className="text-left text-base px-4">
                        Hoogwerkerbedieners
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/70 px-4">
                        Bevoegd om veilig op hoogte te werken met diverse hoogwerkers, volgens de geldende veiligheids- en
                        bedieningsvoorschriften.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3c">
                      <AccordionTrigger className="text-left text-base px-4">
                        Riggers
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/70 px-4">
                        Ophangen en veilig bevestigen van constructies op hoogte en vanaf de grond, volgens riggingnormen
                        en in afstemming met de technische leiding.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4c">
                      <AccordionTrigger className="text-left text-base px-4">
                        VCA-medewerkers
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/70 px-4">
                        Uitvoeren van op- en afbouwwerkzaamheden op locaties waar VCA verplicht is, met aandacht voor
                        veiligheidsprocedures en werkinstructies.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5c">
                      <AccordionTrigger className="text-left text-base px-4">
                        Sitecoördinatoren
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/70 px-4">
                        Aansturen van teams en schakelen met opdrachtgever tijdens opbouw, show en afbouw. Verantwoordelijk
                        voor het overzicht op de werkvloer en het verloop volgens planning.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Types of events */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom px-4 lg:px-8">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase mb-4">
                <span className="text-accent text-xl">•</span>
                <span className="text-accent">Soorten evenementen</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black leading-tight text-foreground mb-4">
                Inzet bij verschillende producties
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                We zijn gewend om in korte tijd te schakelen tussen verschillende typen evenementen. De werkvloer is
                anders bij een festival dan bij een congres, maar de aanpak blijft hetzelfde: duidelijke afspraken en
                goede afstemming met de technische partij.
              </p>

              <div className="grid md:grid-cols-3 gap-4 text-sm text-foreground/80">
                <ul className="space-y-1">
                  <li>• Festivals en concerten</li>
                  <li>• Sportevenementen</li>
                  <li>• Theatertours en shows</li>
                </ul>
                <ul className="space-y-1">
                  <li>• Beurzen en expo&apos;s</li>
                  <li>• Bedrijfsevenementen</li>
                  <li>• Zakelijke congressen</li>
                </ul>
                <ul className="space-y-1">
                  <li>• Buitenlocaties en stadions</li>
                  <li>• Stadions en grote zalen</li>
                  <li>• Tijdelijke locaties</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Way of working */}
        <section className="section-padding bg-background">
          <div className="container-custom px-4 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase mb-4">
                <span className="text-accent text-xl">•</span>
                <span className="text-accent">Werkwijze</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black leading-tight text-foreground mb-4">
                Aansluiten op de bestaande&nbsp;planning
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                We sluiten aan bij de werkwijze van de producent of technische leverancier. Briefing, aansturing en
                communicatie lopen via vaste contactpersonen. Opdrachtgevers weten vooraf hoeveel mensen er komen,
                welke rollen worden ingevuld en op welke tijden de crew aanwezig is.
              </p>
            </div>
          </div>
        </section>

        {/* Practical information */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom px-4 lg:px-8">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase mb-4">
                <span className="text-accent text-xl">•</span>
                <span className="text-accent">Praktisch</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black leading-tight text-foreground mb-4">
                Beschikbaarheid en&nbsp;regio&apos;s
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                Onze basis ligt in Nederland. Vanuit verschillende hubs plannen we crew in op projecten in het land
                en, waar nodig, daarbuiten. Altijd in overleg met de productie over tijden, taken en benodigde
                ervaring.
              </p>

              <div className="grid md:grid-cols-3 gap-6 text-sm text-foreground/80">
                <div>
                  <p className="font-semibold mb-1">Regio&apos;s</p>
                  <p className="text-foreground/70">
                    Inzet in heel Nederland, met vaste hubs in de Randstad en daarbuiten. Beschikbaar voor eendaagse
                    en meerdaagse producties.
                  </p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Beschikbaarheid</p>
                  <p className="text-foreground/70">
                    Dag-, avond- en nachtplanningen zijn mogelijk. We stemmen de bezetting af op de opbouwplanning en
                    draaiperiode van het event.
                  </p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Flexibiliteit</p>
                  <p className="text-foreground/70">
                    Opschalen of afschalen kan in overleg. We kijken mee naar wijzigingen in de planning en passen de
                    crew daarop aan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Same CTA as homepage */}
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Diensten;


