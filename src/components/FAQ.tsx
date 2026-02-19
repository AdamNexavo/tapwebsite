import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CTA from "@/components/CTA";

const FAQ = () => {
  const faqs = [
    {
      question: "Hoeveel ga ik verdienen?",
      answer: "Bij TAP werk je op all-in basis, dus inclusief vakantiegeld en reserveringen. Afhankelijk van je leeftijd, werkuren, skills en inzet verdien je tussen de €16,03 en €18,17 per uur.",
    },
    {
      question: "Moet ik ervaring hebben?",
      answer: "Nope! Als je motivatie goed zit, zorgen wij dat je goed voorbereid op pad gaat en met iemand meeloopt. Bij TAP geven we jou de ruimte om jezelf te ontwikkelen.",
    },
    {
      question: "Krijg ik een contract of ben ik freelancer?",
      answer: "Je werkt bij ons op payroll. Dus met een nulurencontract, verzekering en alle rechten die daarbij horen – je hoeft zelf niets te regelen!",
    },
    {
      question: "Hoe werkt de uitbetaling?",
      answer: "Je wordt wekelijks uitbetaald voor de uren die je in de week ervoor gewerkt hebt. Je ontvangt je loonstrook én hebt altijd volledig inzicht in je loon via een app",
    },
    {
      question: "Kan ik zelf kiezen met wie ik werk?",
      answer: "Ja, als je tegelijk inschrijft en een bericht stuurt om aan te geven met wie je wil werken.",
    },
    {
      question: "Wanneer hoor ik waar en wanneer ik moet werken?",
      answer: "Alle benodigde informatie zul je vinden in onze planningsapp. Meestal een paar dagen voor het event.",
    },
    {
      question: "Krijg ik werkkleding of moet ik dat zelf regelen?",
      answer: "Voor de meeste klussen geldt: zwart, netjes en representatief. Soms krijg je een shirt van de organisatie. Bij bijzonderheden word het aangegeven in je dienstomschrijving en word dit soms voor je verzorgd.",
    },
  ];

  return (
    <>
      <style>{`
        @media (max-width: 639px) {
          /* Haal centrering weg op mobile */
          section#faq .reveal.text-center {
            text-align: left !important;
          }
          
          /* FAQ label zwart op mobile */
          section#faq .reveal .text-accent {
            color: #000000 !important;
          }
          
          /* Verberg "NEEM CONTACT OP" knop op mobile */
          section#faq .text-center.mt-12 {
            display: none !important;
          }
        }
      `}</style>
    <section id="faq" className="section-padding bg-background scroll-mt-24">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="reveal text-center mb-12">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide uppercase mt-4 sm:mt-6 mb-4">
              <span className="text-accent text-lg sm:text-xl">•</span>
              <span className="text-accent">FAQ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6">
              <span style={{ color: '#7a6df7' }}>VRAGEN?</span> WIJ HEBBEN JOU ANTWOORDEN
            </h2>
            <p className="text-lg text-foreground/70">
              Staat je vraag er niet tussen? Neem gerust contact met ons op en we helpen je graag verder.
            </p>
          </div>
          <Accordion type="single" collapsible className="reveal w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-foreground/20">
                <AccordionTrigger className="text-left font-bold text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="text-center mt-12">
            <Link to="/contact">
              <Button
                variant="accent-bottom"
                size="xl"
                className="px-8 text-base sm:text-lg"
              >
                NEEM CONTACT OP
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-32">
        <CTA 
          title="Samenwerken?"
          description="Of je nu op zoek bent naar crew voor je evenement of een leuke baan, bij TAP Crew ben je aan het juiste adres."
          buttonText="Contact opnemen"
          buttonLink="/contact"
        />
      </div>
    </section>
    </>
  );
};

export default FAQ;
