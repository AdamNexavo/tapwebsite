import Header from "@/components/Header";
import Footer from "@/components/Footer";

const HospitalityCrew = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="section-padding pt-24">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-black mb-6">HOSPITALITY CREW</h1>
            <p className="text-lg text-foreground/70 mb-8">
              Op zoek naar representatieve hospitality crew voor jouw event? TAP levert personeel dat gastvrij, proactief en representatief is. Van ontvangst tot begeleiding: wij zorgen dat bezoekers zich welkom voelen en de beleving goed voelt.
            </p>
            <h2 className="text-3xl md:text-4xl font-black mb-6">Wij beschikken over crew dat o.a. op de volgende vlakken kunnen ondersteunen:</h2>
            <div className="space-y-4 mb-8">
              <ul className="list-disc list-inside space-y-2 text-foreground/70">
                <li>Hosts en hostesses</li>
                <li>Gastheren en gastvrouwen</li>
                <li>Receptiepersoneel</li>
                <li>VIP-begeleiding</li>
              </ul>
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

export default HospitalityCrew;
