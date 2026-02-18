import Header from "@/components/Header";
import Footer from "@/components/Footer";

const HorecaCrew = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="section-padding pt-24">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-black mb-6">HORECA CREW</h1>
            <p className="text-lg text-foreground/70 mb-8">
              Op zoek naar representatieve horeca crew voor jouw event? TAP levert personeel dat snel schakelt, overzicht houdt en met de juiste energie op de vloer staat. Van borrel tot festival: wij zorgen dat het soepel loopt, zowel voor de gasten als voor jou.
            </p>
            <h2 className="text-3xl md:text-4xl font-black mb-6">Wij beschikken over crew dat o.a. op de volgende vlakken kunnen ondersteunen:</h2>
            <div className="space-y-4 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-2">Cateringcrew:</h3>
                <ul className="list-disc list-inside space-y-2 text-foreground/70">
                  <li>Barpersoneel</li>
                  <li>Bediening</li>
                  <li>Keukenpersoneel</li>
                  <li>Event crew</li>
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

export default HorecaCrew;
