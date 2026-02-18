import Header from "@/components/Header";
import Footer from "@/components/Footer";

const VoorOpdrachtgevers = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="section-padding pt-24">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-black mb-6">SAMENWERKEN MET TAP</h1>
            <p className="text-lg text-foreground/70 mb-8">
              Sinds 2021 koppelen wij energieke horeca- en hospitalitymedewerkers aan festivals, beurzen en zakelijke events. Onze kracht? We selecteren niet alleen op ervaring, maar vooral op mentaliteit. Bij TAP draait het om Talent, Actie en Passie, dé drie waarden die zorgen dat onze crew een bijdrage levert aan jou event. Elke medewerker krijgt de kans om te groeien, en die drive voel je terug op jouw event. Of het nu gaat om ontvangst, bar of bediening: wij zetten de juiste mensen op de juiste plek. Met oog voor sfeer, detail en beleving.
            </p>
            <h2 className="text-3xl md:text-4xl font-black mb-6">WAAROM TAP?</h2>
            <p className="text-lg text-foreground/70 mb-8">
              Goede crew is één ding, maar de organisatie eromheen moet net zo strak zijn. TAP denkt verder dan alleen de vloer. We vormen een betrouwbare schakel tussen crew en opdrachtgever, zowel operationeel als achter de schermen. Flexibel, betrokken en altijd gericht op het versterken van samenwerkingen.
            </p>
            <h2 className="text-3xl md:text-4xl font-black mb-6">ZO REGELEN WIJ HET</h2>
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-2">Rittenplanning</h3>
                <p className="text-foreground/70">
                  We combineren ritten slim zodat crewleden samen reizen. Kostenefficiënt én het zorgt voor een betere opkomst. Wij regelen de rittenplanning – wij hebben alleen een adres nodig.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Duidelijke informatie</h3>
                <p className="text-foreground/70">
                  Iedere crew ontvangt duidelijke info over tijden, taken, locatie, kleding en gedrag. Zo staan ze voorbereid op locatie, zodat jullie als organisatie geen gedoe hebben op de dag zelf.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Teamleider of coördinator</h3>
                <p className="text-foreground/70">
                  Indien gewenst leveren we een teamleider of coördinator aan die zorgt voor aansturing, controle en contact met jouw productieleiding.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Schaalbaar</h3>
                <p className="text-foreground/70">
                  Van kleine shows tot grote festivals; we schalen eenvoudig op met vaste mensen en vertrouwde partners.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Vaste uurtarieven</h3>
                <p className="text-foreground/70">
                  We werken met vaste uurtarieven per functie. Alles duidelijk vooraf — zonder extra toeslagen of addertjes achteraf.
                </p>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-6">SAMENWERKEN? WIJ STAAN KLAAR.</h2>
            <p className="text-lg text-foreground/70 mb-8">
              Wij staan klaar om jou personeelsbehoefte te vervullen. Benieuwd naar de mogelijkheden? Neem contact op of vraag direct een offerte aan.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default VoorOpdrachtgevers;
