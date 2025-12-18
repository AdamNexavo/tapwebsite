import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ctaLogo from "@/assets/cta-logo.svg";

const CTA = () => {
  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="container-custom px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-[48px] rounded-tr-none bg-primary text-white">
          <div className="relative grid lg:grid-cols-[1.3fr,1fr] gap-8 items-center px-8 py-10 md:px-16 md:py-14 max-w-5xl mx-auto">
            {/* Tekst links */}
            <div className="space-y-6 max-w-2xl lg:max-w-3xl -ml-4 md:-ml-8 lg:-ml-14">
              <h2 className="text-3xl md:text-5xl lg:text-5xl font-black leading-tight md:whitespace-nowrap">
                Klaar om te starten?
              </h2>
              <p className="text-lg md:text-xl text-white/80 max-w-xl">
                We helpen je graag verder. Je kunt bij ons terecht voor ondersteuning óf om zelf deel uit te maken van
                ons team. Kennis maken?
              </p>
              <div className="mt-12 md:mt-16">
                <Button
                  variant="accent-bottom"
                  size="xl"
                  className="bg-[#464646] hover:bg-[#5a5a5a] border-b-[#2f2f2f] text-white px-8"
                >
                  Neem contact op
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            {/* Afbeelding / logo rechts */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative h-[260px] md:h-[320px] lg:h-[360px] aspect-[4/5] lg:aspect-[3/4] flex items-center justify-center">
                <img
                  src={ctaLogo}
                  alt="Crewstars logo"
                  className="h-auto w-full max-w-[780px] origin-center scale-[2.5] md:scale-[2.75] lg:scale-[3] rotate-12 translate-x-12 md:translate-x-24 lg:translate-x-32 -translate-y-2 md:-translate-y-4 lg:-translate-y-6 grayscale brightness-75"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
