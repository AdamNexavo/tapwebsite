import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Aanmelden = () => {
  useEffect(() => {
    document.title = "TAP Crew | Aanmelden";
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="section-padding pt-24">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-black mb-6">Aanmelden</h1>
            <p className="text-lg text-foreground/70 mb-8">
              Meld je aan via het inschrijfformulier.
            </p>
            {/* TODO: Formulier toevoegen */}
            <div className="bg-secondary rounded-lg p-8">
              <p className="text-center text-foreground/70">
                Inschrijfformulier wordt hier geplaatst
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Aanmelden;
