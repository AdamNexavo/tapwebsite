import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    <section id="faq" className="section-padding bg-background scroll-mt-24">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6">
              VRAGEN? WIJ HEBBEN JOU ANTWOORDEN
            </h2>
            <p className="text-lg text-foreground/70">
              Staat je vraag er niet tussen? Neem gerust contact met ons op en we helpen je graag verder.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
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
            <a href="/contact" className="text-accent font-bold text-lg hover:underline">
              NEEM CONTACT OP
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
