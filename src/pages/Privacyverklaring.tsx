import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacyverklaring = () => {
  return (
    <div className="min-h-screen">
      <style>{`
        @media (max-width: 639px) {
        }
      `}</style>
      <Header />
      <main>
        {/* Intro */}
        <section className="relative section-padding pt-32 md:pt-40 pb-20 md:pb-24 overflow-hidden">
          <div className="absolute inset-0 z-0 bg-secondary" />
          
          <div className="container-custom px-4 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-foreground mb-6 text-center">
                Privacyverklaring
              </h1>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-background">
          <div className="container-custom px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8 text-foreground/80 leading-relaxed">
                <p className="text-lg">
                  Bij Crewstars vinden we het belangrijk dat er zorgvuldig wordt omgegaan met jouw persoonsgegevens. Daarom verwerken en beveiligen we je gegevens met de grootst mogelijke zorg. We houden ons hierbij aan de Algemene Verordening Gegevensbescherming (AVG). In deze verklaring lees je welke gegevens we verzamelen, waarom we dat doen, hoe lang we ze bewaren en welke rechten jij hebt.
                </p>

                <p>
                  Via www.crewstars.nl verwerken we persoonsgegevens. Of je nu contact met ons opneemt, je aanmeldt om te werken of gewoon onze site bezoekt: we zorgen dat jouw gegevens vertrouwelijk worden behandeld. Crewstars verzamelt gegevens onder andere wanneer je ons een bericht stuurt, iets invult op de website of via social media met ons in contact komt. Deze gegevens gebruiken we om onze dienstverlening te verbeteren, goed contact te onderhouden en een passende match te maken tussen crew en opdrachtgever.
                </p>

                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4">
                      1. Op welke manier verzamelen we gegevens?
                    </h2>
                    <p className="mb-3">
                      Crewstars ontvangt gegevens van jou via meerdere kanalen:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Direct via jou</strong> – Bijvoorbeeld als je je aanmeldt om voor ons te werken, een formulier invult of ons een e-mail stuurt.</li>
                      <li><strong>Via onze website</strong> – Door het gebruik van cookies verzamelen we anonieme informatie over je gedrag op de site, zodat we de gebruikservaring kunnen verbeteren.</li>
                      <li><strong>Via de plannings- en loonapplicatie</strong> – Wanneer je voor Crewstars werkt, worden via deze systemen je gewerkte uren en bijbehorende gegevens verwerkt.</li>
                      <li><strong>Op locatie</strong> – Tijdens projecten of evenementen kunnen wij informatie verzamelen die noodzakelijk is voor de uitvoering van het werk, zoals aanwezigheid of logistieke gegevens.</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4">
                      2. Welke gegevens verzamelen we?
                    </h2>
                    <p className="mb-3">
                      Afhankelijk van je contact met ons kunnen we de volgende gegevens verwerken:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Voor- en achternaam, geboortedatum, adres, telefoonnummer en e-mailadres</li>
                      <li>Gegevens over beschikbaarheid en inzetbaarheid</li>
                      <li>Ingevulde informatie op het contact- of aanmeldformulier</li>
                      <li>IP-adres en websitegebruik (via cookies)</li>
                      <li>Informatie over gewerkte uren, loonbetalingen en eventueel BSN (indien wettelijk vereist via payroll)</li>
                      <li>Reacties of berichten op social media of andere publieke platforms</li>
                    </ul>
                    <p className="mt-4">
                      Onze website kan links bevatten naar externe pagina's of social media. Crewstars is niet verantwoordelijk voor hoe die partijen met jouw gegevens omgaan. Lees daarom altijd hun privacybeleid.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4">
                      3. Waarom gebruiken we jouw gegevens?
                    </h2>
                    <p className="mb-3">
                      Crewstars gebruikt persoonsgegevens om:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Je in te plannen voor werk</li>
                      <li>De administratie en uitbetaling van uren via payroll te regelen</li>
                      <li>Contact te onderhouden en informatie uit te wisselen over projecten</li>
                      <li>Je op de hoogte te houden van werkmogelijkheden</li>
                      <li>Onze dienstverlening te verbeteren</li>
                      <li>Voldoen aan wettelijke verplichtingen</li>
                    </ul>
                    <p className="mt-4">
                      We gebruiken je gegevens nooit voor andere doeleinden dan hierboven genoemd, tenzij jij daar expliciet toestemming voor hebt gegeven.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4">
                      4. Delen we jouw gegevens?
                    </h2>
                    <p className="mb-3">
                      Soms moeten we je gegevens delen met derde partijen. Dit gebeurt alleen als het noodzakelijk is:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Met onze payrollpartner voor contracten en betalingen</li>
                      <li>Met opdrachtgevers, maar alleen als het relevant is voor jouw inzet</li>
                      <li>Met overheidsinstanties, als wij daar wettelijk toe verplicht zijn</li>
                      <li>Met onze IT-partners, die zorgen voor veilige opslag en verwerking van gegevens</li>
                    </ul>
                    <p className="mt-4">
                      We zorgen dat deze partijen net zo zorgvuldig omgaan met jouw gegevens als wij zelf doen.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4">
                      5. Hoe lang bewaren we gegevens?
                    </h2>
                    <p>
                      We bewaren je gegevens niet langer dan nodig is. Hoe lang dat precies is, hangt af van de aard van je contact met ons en wat wettelijk verplicht is. Sollicitatiegegevens verwijderen we standaard na een redelijke termijn, tenzij je bij ons in dienst komt. In dat geval gelden de wettelijke bewaartermijnen voor personeelsdossiers.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4">
                      6. Beveiliging van gegevens
                    </h2>
                    <p>
                      Alle gegevens die wij ontvangen worden opgeslagen in beveiligde systemen. Alleen bevoegde medewerkers hebben toegang. We nemen passende technische en organisatorische maatregelen om verlies of misbruik te voorkomen. Let wel: 100% veiligheid online kunnen wij niet garanderen, maar we doen er alles aan om risico's te minimaliseren.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4">
                      7. Jouw rechten
                    </h2>
                    <p className="mb-3">
                      Je hebt altijd het recht om je gegevens in te zien, te corrigeren of te laten verwijderen. Ook kun je bezwaar maken tegen verwerking of vragen om een beperking daarvan. Wil je gegevens laten overdragen aan een andere partij? Dat kan, mits technisch haalbaar.
                    </p>
                    <p className="mb-3">
                      Voor al deze zaken kun je contact opnemen via:
                    </p>
                    <p className="font-semibold">
                      Crewstars B.V.<br />
                      info@crewstars.nl
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4">
                      8. Vragen of klachten?
                    </h2>
                    <p>
                      Heb je vragen over deze privacyverklaring of over hoe wij omgaan met jouw gegevens? Neem gerust contact met ons op. We lossen het graag samen op. Kom je er met ons niet uit, dan kun je terecht bij de Autoriteit Persoonsgegevens.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4">
                      9. Wijzigingen
                    </h2>
                    <p>
                      Crewstars behoudt zich het recht voor om wijzigingen aan te brengen in deze privacyverklaring. We raden aan deze regelmatig door te nemen. Bij belangrijke wijzigingen brengen we je daarvan op de hoogte.
                    </p>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border/50">
                  <p className="text-sm text-foreground/60">
                    <strong>Crewstars B.V.</strong><br />
                    KvK 96320680<br />
                    BTW NL867561580B01<br />
                    Bierbrouwersweg 29, 3449HW Woerden
                  </p>
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

export default Privacyverklaring;

