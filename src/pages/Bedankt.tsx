import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const Bedankt = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Bevestigings Section */}
        <section className="section-padding bg-secondary pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
          <div className="container-custom px-4 sm:px-6 lg:px-6 xl:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="bg-background rounded-xl sm:rounded-2xl p-8 sm:p-10 md:p-12 lg:p-16 shadow-xl border border-border/50 text-center">
                <div className="mb-6">
                  <CheckCircle2 className="w-20 h-20 sm:w-24 sm:h-24 text-accent mx-auto" />
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight text-foreground mb-4 sm:mb-6">
                  Bedankt!
                </h1>
                <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed mb-8 sm:mb-10 max-w-md mx-auto">
                  We hebben je bericht ontvangen en nemen zo spoedig mogelijk contact met je op.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    variant="accent-bottom"
                    size="xl"
                    className="px-8"
                  >
                    <Link to="/">Terug naar home</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="xl"
                    className="px-8"
                  >
                    <Link to="/contact">Nog een bericht versturen</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTA 
          title="Samenwerken?"
          description="Of je nu op zoek bent naar ondersteuning voor je evenement of een uitdagende baan, bij Crewstars ben je aan het juiste adres."
          buttonText="Contact opnemen"
          buttonLink="/contact"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Bedankt;
