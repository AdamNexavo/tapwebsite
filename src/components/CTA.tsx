import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-custom px-4 lg:px-8">
        <div className="relative bg-card rounded-3xl overflow-hidden border border-border">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="relative p-8 md:p-16 text-center">
            <div className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase mb-4">
              <span className="text-accent text-xl">•</span>
              <span className="text-accent">Contact</span>
            </div>
            <h2 className="heading-lg text-foreground mb-4 max-w-2xl mx-auto">
              Heeft u personeel nodig voor op- of afbouw?
            </h2>
            <p className="text-body max-w-xl mx-auto mb-8">
              Neem contact met ons op en wij regelen ervaren crewleden voor uw evenement. 
              Flexibel, betrouwbaar en altijd op tijd. Vraag vandaag nog een offerte aan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent-bottom" size="xl">
                Vraag personeel aan
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="xl">
                <Phone className="w-5 h-5" />
                +31 (0)20 123 4567
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
