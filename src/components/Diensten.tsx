import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Diensten = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6">
            OVER ONZE DIENSTEN
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto mb-12 leading-relaxed">
            Sinds 2021 koppelen wij talentvolle horeca- en hospitalitycrew aan festivals, beurzen en zakelijke events in heel Nederland. Bij TAP geloven we in groei en ontwikkeling – zo zetten we de juiste mensen op de juiste plek om te shinen op jouw event.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Link to="/horeca-crew" className="bg-background rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-black text-foreground mb-3">HORECA CREW</h3>
              <p className="text-foreground/70">
                Representatieve horeca crew voor jouw event
              </p>
            </Link>
            <Link to="/hospitality-crew" className="bg-background rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-black text-foreground mb-3">HOSPITALITY CREW</h3>
              <p className="text-foreground/70">
                Gastvrij, proactief en representatief personeel
              </p>
            </Link>
            <Link to="/service-crew" className="bg-background rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-black text-foreground mb-3">SERVICE CREW</h3>
              <p className="text-foreground/70">
                Service crew voor events en pop-up stores
              </p>
            </Link>
          </div>
          <Link to="/voor-opdrachtgevers">
            <Button
              size="xl"
              className="bg-accent text-white hover:bg-accent/90 font-bold px-8 py-6 text-lg rounded-lg"
            >
              VOOR OPDRACHTGEVERS
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Diensten;
