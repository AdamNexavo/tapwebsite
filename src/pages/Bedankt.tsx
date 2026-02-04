import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const Bedankt = () => {
  return (
    <div className="min-h-screen">
      <style>{`
        /* Donkergrijze button style voor "Nog een bericht versturen" op alle resoluties */
        section.section-padding.bg-secondary .bg-background.rounded-xl a.bg-\\[\\#464646\\] {
          background-color: #464646 !important;
          color: white !important;
          border-bottom-color: #2f2f2f !important;
        }
        section.section-padding.bg-secondary .bg-background.rounded-xl a.bg-\\[\\#464646\\]:hover {
          background-color: #5a5a5a !important;
        }
        @media (max-width: 639px) {
          /* Bevestigingsblok op mobiel - smaller en gecentreerd */
          section.section-padding.bg-secondary .max-w-2xl {
            max-width: calc(100% - 1rem) !important;
            margin-left: auto !important;
            margin-right: auto !important;
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
          }
          section.section-padding.bg-secondary .bg-background.rounded-xl {
            width: 100% !important;
            max-width: 100% !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
            padding: 1.5rem !important;
            box-sizing: border-box !important;
          }
          /* Zorg dat interne content niet overflow veroorzaakt */
          section.section-padding.bg-secondary .bg-background.rounded-xl * {
            max-width: 100% !important;
            word-wrap: break-word !important;
          }
          /* Button tekst aanpassen op mobiel */
          section.section-padding.bg-secondary .bg-background.rounded-xl button,
          section.section-padding.bg-secondary .bg-background.rounded-xl a.inline-flex {
            font-size: 1rem !important; /* text-base */
            line-height: 1.5rem !important;
          }
          /* Overschrijf text-lg class specifiek */
          section.section-padding.bg-secondary .bg-background.rounded-xl .text-lg {
            font-size: 1rem !important; /* text-base */
            line-height: 1.5rem !important;
          }
        }
      `}</style>
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
                    variant="accent-bottom"
                    size="xl"
                    className="px-8 bg-[#464646] hover:bg-[#5a5a5a] border-b-[#2f2f2f] text-white"
                  >
                    <Link to="/contact">Nog een bericht versturen</Link>
                  </Button>
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
