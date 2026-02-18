import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ServiceCrew = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="section-padding pt-24">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-black mb-6">SERVICE CREW</h1>
            <p className="text-lg text-foreground/70 mb-8">
              Op zoek naar representatieve service crew voor jouw event of pop-up store? TAP levert medewerkers die gastgericht denken, verkoopervaring combineren met energie op de vloer, en zelfstandig een store of verkooppunt kunnen draaien. Wij zorgen dat jouw merk of merchandise professioneel wordt gepresenteerd.
            </p>
            <h2 className="text-3xl md:text-4xl font-black mb-6">Wij beschikken over crew dat o.a. op de volgende vlakken kunnen ondersteunen:</h2>
            <div className="space-y-4 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-2">Merchandise crew (pop-up stores & events):</h3>
                <ul className="list-disc list-inside space-y-2 text-foreground/70">
                  <li>Salesmedewerkers</li>
                  <li>Store- en floormanagers</li>
                  <li>Kassapersoneel / POS-beheerders</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Festival crew:</h3>
                <ul className="list-disc list-inside space-y-2 text-foreground/70">
                  <li>Merchandise verkoop</li>
                  <li>Store management</li>
                </ul>
              </div>
            </div>
            <p className="text-lg text-foreground/70 mb-8">
              Neem vrijblijvend contact op om de mogelijkheden te bekijken.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceCrew;
