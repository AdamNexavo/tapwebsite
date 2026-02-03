import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Euro, Users, TrendingUp, Music, Calendar, Building2, Award, Shield, Trophy } from "lucide-react";
import specialistForkliftImg from "@/assets/specialist-forklift.png";
import specialistRiggerImg from "@/assets/specialist-rigger.png";

const VacatureSpecialisten = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Intro */}
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
                  alt="Crewstars specialisten"
                  className="w-full h-full object-cover opacity-90"
                  style={{
                    objectPosition: "100% center",
                  }}
                />
                {/* Lichte zwarte overlay */}
                <div className="absolute inset-0 bg-black/30" />
              </div>
            </div>
            {/* Rechterhelft - paars */}
            <div 
              className="absolute inset-0 bg-[#6366f1]"
              style={{
                clipPath: "polygon(45% 100%, 100% 100%, 100% 0, 55% 0)",
              }}
            />
          </div>
          
          <div className="container-custom px-4 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Linkerhelft - leeg of optioneel content */}
                <div className="hidden lg:block"></div>
                
                {/* Rechterhelft - tekst meer naar rechts en naar onder */}
                <div className="text-center lg:flex lg:justify-center lg:items-center lg:pt-16">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white mb-6">
                    Specialisten
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="section-padding bg-secondary pt-24 md:pt-32">
          <div className="container-custom px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="max-w-4xl space-y-2">
                <p className="text-3xl md:text-4xl text-foreground leading-relaxed font-black">
                  Zet jouw expertise in voor de grootste evenementen.
                </p>
                <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-8">
                  Als specialist breng je unieke expertise mee die essentieel is voor complexe evenementen. Of je nu heftrucks bedient, hoogwerkers bestuurt, riggingwerk uitvoert of als sitecoördinator teams aanstuurt - jouw specialisatie maakt het verschil. Je werkt aan projecten waar precisie, veiligheid en ervaring cruciaal zijn voor het succes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Wat we bieden Section */}
        <section className="section-padding bg-background">
          <div className="container-custom px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 md:mb-16">
                <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase mb-4 text-accent">
                  • Wat we bieden
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-foreground mb-6">
                  Waarom bij Crewstars werken?
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {/* Flexibele werktijden */}
                <div className="bg-muted/60 rounded-2xl p-6 border border-border/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-accent/50">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-black text-foreground mb-2">
                    Flexibele werktijden
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Ook avonden, nachten en weekenden mogelijk. We passen ons aan jouw beschikbaarheid aan.
                  </p>
                </div>

                {/* Uurtarief */}
                <div className="bg-muted/60 rounded-2xl p-6 border border-border/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-accent/50">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                    <Euro className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-black text-foreground mb-2">
                    Aantrekkelijk uurtarief
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Uurtarief tussen de <strong className="text-foreground">€16,03</strong> en <strong className="text-foreground">€18,74</strong> bruto.
                  </p>
                </div>

                {/* Dynamisch team */}
                <div className="bg-muted/60 rounded-2xl p-6 border border-border/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-accent/50">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-black text-foreground mb-2">
                    Professioneel team
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Werk samen met ervaren specialisten aan de grootste evenementen.
                  </p>
                </div>

                {/* Groei en opleiding */}
                <div className="bg-muted/60 rounded-2xl p-6 border border-border/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-accent/50">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-black text-foreground mb-2">
                    Groei en opleiding
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Mogelijkheden voor groei en verdere ontwikkeling binnen je specialisatie.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wie we zoeken Section */}
        <section className="section-padding bg-secondary">
          <div className="container-custom px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Linkerhelft - Foto */}
                <div className="flex justify-center lg:justify-start">
                  <div className="relative w-full max-w-xl">
                    <div className="relative rounded-xl overflow-hidden">
                      <img
                        src={specialistRiggerImg}
                        alt="Crewstars rigger aan het werk"
                        className="rounded-xl shadow-xl object-cover w-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Rechterhelft - Tekst */}
                <div>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase mb-4 text-accent">
                    • Wie we zoeken
                  </span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-foreground mb-6">
                    Jij bent de perfecte match als je:
                  </h2>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <span className="text-accent text-xl mt-1">•</span>
                      <div>
                        <strong className="text-foreground">Relevante certificaten en bevoegdheden</strong>
                        <p className="text-foreground/70 text-sm mt-1">Je beschikt over de juiste certificaten voor jouw specialisatie (bijv. heftruckcertificaat, hoogwerkerbevoegdheid, riggerdiploma).</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent text-xl mt-1">•</span>
                      <div>
                        <strong className="text-foreground">Ervaring in de evenementenbranche</strong>
                        <p className="text-foreground/70 text-sm mt-1">Je hebt ervaring met het werken op evenementen en kent de dynamiek van de branche.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent text-xl mt-1">•</span>
                      <div>
                        <strong className="text-foreground">VCA-certificaat is een pré</strong>
                        <p className="text-foreground/70 text-sm mt-1">Voor bepaalde projecten is een VCA-certificaat vereist of sterk aanbevolen.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent text-xl mt-1">•</span>
                      <div>
                        <strong className="text-foreground">Veiligheidsbewust</strong>
                        <p className="text-foreground/70 text-sm mt-1">Je werkt altijd volgens de geldende veiligheidsvoorschriften en procedures.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Werkzaamheden Section */}
        <section className="section-padding bg-background">
          <div className="container-custom px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
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
                <div className="bg-muted/60 rounded-2xl p-6 border border-border/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-accent/50">
                  <Award className="w-8 h-8 text-accent mb-3" />
                  <h3 className="text-xl font-black text-foreground mb-3">
                    Heftruckchauffeurs
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Je bedient heftrucks voor het efficiënt verplaatsen van zware materialen en apparatuur. Je werkt nauw samen met de opbouwteams en zorgt voor een vloeiende logistieke flow op de werkvloer.
                  </p>
                </div>

                {/* Hoogwerkerbedieners */}
                <div className="bg-muted/60 rounded-2xl p-6 border border-border/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-accent/50">
                  <Shield className="w-8 h-8 text-accent mb-3" />
                  <h3 className="text-xl font-black text-foreground mb-3">
                    Hoogwerkerbedieners
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Je bedient hoogwerkers om veilig op hoogte te werken. Je gebruikt de hoogwerker om materialen te installeren of demonteren op hoogte. Je werkt volgens alle veiligheidsprotocollen.
                  </p>
                </div>

                {/* Riggers */}
                <div className="bg-muted/60 rounded-2xl p-6 border border-border/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-accent/50">
                  <Award className="w-8 h-8 text-accent mb-3" />
                  <h3 className="text-xl font-black text-foreground mb-3">
                    Riggers
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Je hangt constructies en apparatuur veilig op hoogte op. Je berekent belastingen, gebruikt de juiste riggingmaterialen en werkt volgens de hoogste veiligheidsnormen.
                  </p>
                </div>

                {/* VCA-medewerkers */}
                <div className="bg-muted/60 rounded-2xl p-6 border border-border/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-accent/50">
                  <Shield className="w-8 h-8 text-accent mb-3" />
                  <h3 className="text-xl font-black text-foreground mb-3">
                    VCA-medewerkers
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Je voert op- en afbouwwerkzaamheden uit op VCA-verplichte locaties. Je volgt alle veiligheidsprocedures en werkt volgens de geldende VCA-richtlijnen en werkinstructies.
                  </p>
                </div>

                {/* Sitecoördinatoren */}
                <div className="bg-muted/60 rounded-2xl p-6 border border-border/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-accent/50">
                  <Users className="w-8 h-8 text-accent mb-3" />
                  <h3 className="text-xl font-black text-foreground mb-3">
                    Sitecoördinatoren
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Je coördineert teams op de werkvloer en bent het aanspreekpunt voor de opdrachtgever. Je houdt overzicht over de planning en zorgt dat alles volgens schema verloopt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Locaties Section */}
        <section className="section-padding bg-secondary">
          <div className="container-custom px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 md:mb-16">
                <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase mb-4 text-accent">
                  • Locaties
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-foreground mb-6">
                  Werk op diverse locaties zoals:
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                <div className="bg-background rounded-2xl p-8 border border-border/60 shadow-lg text-center">
                  <Music className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-black text-foreground mb-2">
                    Concerten
                  </h3>
                  <p className="text-foreground/70 text-sm">
                    Van kleine podia tot grote stadions
                  </p>
                </div>

                <div className="bg-background rounded-2xl p-8 border border-border/60 shadow-lg text-center">
                  <Calendar className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-black text-foreground mb-2">
                    Festivals
                  </h3>
                  <p className="text-foreground/70 text-sm">
                    De grootste festivals van Nederland
                  </p>
                </div>

                <div className="bg-background rounded-2xl p-8 border border-border/60 shadow-lg text-center">
                  <Building2 className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-black text-foreground mb-2">
                    Bedrijfsevenementen
                  </h3>
                  <p className="text-foreground/70 text-sm">
                    Beurzen, congressen en corporate events
                  </p>
                </div>

                <div className="bg-background rounded-2xl p-8 border border-border/60 shadow-lg text-center">
                  <Trophy className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-black text-foreground mb-2">
                    Sportevenementen
                  </h3>
                  <p className="text-foreground/70 text-sm">
                    Van marathons tot grote sportevenementen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-background">
          <div className="container-custom px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-foreground mb-6">
                Interesse? Solliciteer nu!
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed mb-8">
                Ben jij de specialist die we zoeken? Stuur ons je sollicitatie en ontdek wat Crewstars voor jou kan betekenen.
              </p>
              <Button 
                variant="accent-bottom" 
                size="xl"
                className="px-8"
                asChild
              >
                <a href="https://app.recruitment.fleks.works/d6c6c449-5908-42f5-8ee1-6ee0361edb3b/apply">
                  Solliciteer nu
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTA 
          title="Meer informatie?"
          description="Heb je vragen over deze vacature of wil je meer weten over werken bij Crewstars? Neem gerust contact met ons op."
          buttonText="Neem contact op"
          buttonLink="/contact"
        />
      </main>
      <Footer />
    </div>
  );
};

export default VacatureSpecialisten;

