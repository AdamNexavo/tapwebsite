import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const MixMatch = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6">
              MIX & MATCH JE WERK
            </h2>
            <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto mb-8 leading-relaxed">
              Bij TAP draait het om Talent, Actie en Passie. We zetten je in op plekken waar je goed in bent én waar je energie van krijgt. Geen standaard bijbaan, maar werk dat bij je past.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="px-6 py-3 bg-accent/10 text-accent font-bold rounded-lg">Flexibele uren</span>
              <span className="px-6 py-3 bg-accent/10 text-accent font-bold rounded-lg">Verdien goed</span>
              <span className="px-6 py-3 bg-accent/10 text-accent font-bold rounded-lg">Geen ervaring? No worries!</span>
            </div>
          </div>

          {/* Stappen */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-6xl font-black text-accent mb-4">1.</div>
              <h3 className="text-xl font-bold mb-3 uppercase">AAnmeldeN</h3>
              <p className="text-foreground/70">
                Meld je aan via het inschrijfformulier.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-black text-accent mb-4">2.</div>
              <h3 className="text-xl font-bold mb-3 uppercase">korte intake</h3>
              <p className="text-foreground/70">
                We bellen je om kennis te maken en onze werkwijze uit te leggen.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-black text-accent mb-4">3.</div>
              <h3 className="text-xl font-bold mb-3 uppercase">aan de slag!</h3>
              <p className="text-foreground/70">
                Wij regelen de rest en je kunt beginnen!
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link to="/aanmelden">
              <Button
                size="xl"
                className="bg-accent text-white hover:bg-accent/90 font-bold px-8 py-6 text-lg rounded-lg"
              >
                AANMELDEN
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MixMatch;
