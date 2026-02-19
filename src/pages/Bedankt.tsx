import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Bedankt = () => {
  useEffect(() => {
    document.title = "TAP Crew | Bedankt";
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="relative section-padding pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-12 sm:pb-16 md:pb-20 lg:pb-24 overflow-hidden">
          <div className="absolute inset-0 z-0 bg-secondary" />
          <div className="container-custom px-4 sm:px-6 lg:px-6 xl:px-8 relative z-10">
            <div className="max-w-3xl mx-auto pt-8 sm:pt-12 md:pt-16 lg:pt-20 text-center">
              <div className="reveal flex flex-col items-center gap-6 sm:gap-8">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-accent/10 flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 sm:w-14 sm:h-14 text-accent" />
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-foreground">
                  Bedankt voor je <span style={{ color: '#7a6df7' }}>bericht</span>!
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-xl leading-relaxed">
                  We hebben je aanvraag ontvangen en nemen zo snel mogelijk contact met je op. Meestal hoor je binnen 24 uur van ons.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link to="/">
                    <Button
                      variant="accent-bottom"
                      size="xl"
                      className="w-full sm:w-auto px-6 sm:px-8 text-sm sm:text-base rounded-sm border-b-[2px] shadow-none hover:shadow-none"
                    >
                      Terug naar home
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button
                      variant="ghost"
                      size="xl"
                      className="w-full sm:w-auto px-6 sm:px-8 text-sm sm:text-base rounded-sm border border-b-[3px] border-foreground/30 border-b-foreground/40 bg-transparent text-foreground hover:bg-[#464646] hover:text-[#7a6df7] hover:border-[#464646] hover:border-b-[#2f2f2f] font-bold"
                    >
                      Contact opnemen
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Bedankt;
