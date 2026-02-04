import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import contactIntro from "@/assets/contact-intro.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    naam: "",
    email: "",
    telefoon: "",
    onderwerp: "",
    bericht: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.naam.trim()) {
      newErrors.naam = "Naam is verplicht";
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-mailadres is verplicht";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Voer een geldig e-mailadres in";
    }

    if (!formData.bericht.trim()) {
      newErrors.bericht = "Bericht is verplicht";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    if (!validateForm()) {
      e.preventDefault();
      return;
    }
    // Form will submit normally to Basin endpoint
  };

  return (
    <div className="min-h-screen">
      <style>{`
        @media (max-width: 639px) {
          /* Formulier container op mobiel - voorkom overflow en zorg voor gelijke ruimte links en rechts */
          section.section-padding.bg-secondary .bg-background.rounded-xl {
            width: 100% !important;
            max-width: 100% !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
            box-sizing: border-box !important;
            overflow: hidden !important;
          }
          /* Bevestigingsblok op mobiel - voorkom overflow en zorg voor gelijke ruimte links en rechts */
          .contact-success-message {
            width: 100% !important;
            max-width: 100% !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
            box-sizing: border-box !important;
            overflow: hidden !important;
          }
          /* Zorg dat interne content niet overflow veroorzaakt */
          .contact-success-message * {
            max-width: 100% !important;
            word-wrap: break-word !important;
          }
          /* Verklein button tekst op mobiel */
          .contact-success-message button {
            font-size: 0.875rem !important; /* text-sm */
            padding-left: 1.5rem !important; /* px-6 */
            padding-right: 1.5rem !important; /* px-6 */
            height: 2.75rem !important; /* h-11 */
          }
          /* Foto focus bovenkant op mobiel */
          section.relative.section-padding.pt-24 img[alt="Crewstars team aan het werk"] {
            object-position: center top !important;
          }
        }
        @media (min-width: 1024px) {
          /* Verwijder fixed height op laptop/desktop */
          section.relative.section-padding.pt-24[style*="height"] {
            height: auto !important;
          }
        }
      `}</style>
      <Header />
      <main>
        {/* Intro */}
        <section className="relative section-padding pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-12 sm:pb-16 md:pb-20 lg:pb-24 overflow-hidden" style={{ height: '300px' }}>
          {/* Diagonale scheiding */}
          <div className="absolute inset-0 z-0">
            {/* Linkerhelft - secondary background met foto */}
            <div 
              className="absolute inset-0 bg-secondary"
              style={{
                clipPath: "polygon(0 0, 0 100%, 45% 100%, 55% 0)",
                overflow: "hidden",
              }}
            >
              {/* Foto in grijze ruimte - alleen linkerhelft */}
              <div 
                className="absolute"
                style={{
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: "55%",
                  clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 0)",
                }}
              >
                <img
                  src={contactIntro}
                  alt="Crewstars team aan het werk"
                  className="w-full h-full object-cover opacity-90"
                  style={{
                    objectPosition: "100% center",
                  }}
                />
                {/* Lichte zwarte overlay */}
                <div className="absolute inset-0 bg-black/30" />
              </div>
            </div>
            {/* Rechterhelft - paars */}
            <div 
              className="absolute inset-0 bg-[#6366f1]"
              style={{
                clipPath: "polygon(45% 100%, 100% 100%, 100% 0, 55% 0)",
              }}
            />
          </div>
          
          <div className="container-custom px-4 sm:px-6 lg:px-6 xl:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Linkerhelft - leeg of optioneel content */}
                <div className="hidden lg:block"></div>
                
                {/* Rechterhelft - tekst meer naar rechts en naar onder */}
                <div className="text-center lg:flex lg:justify-center lg:items-center lg:pt-16">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight text-white mb-4 sm:mb-6 whitespace-nowrap">
                    Contact
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Formulier Section */}
        <section className="section-padding bg-secondary pt-16 sm:pt-20 md:pt-24 lg:pt-32">
          <div className="container-custom px-4 sm:px-6 lg:px-6 xl:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="bg-background rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 lg:p-12 shadow-xl border border-border/50">
                {/* Titel bovenaan */}
                <div className="mb-6 sm:mb-8">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-[2.5rem] font-black leading-tight text-foreground mb-8 sm:mb-12 text-center">
                    Neem contact met ons op
                  </h2>
                </div>

                {/* Contactgegevens */}
                <div className="mb-8 sm:mb-12 pb-6 sm:pb-8 border-b border-foreground/30">
                  <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-20 xl:gap-24">
                    <div className="flex items-center gap-2">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0" />
                      <div className="flex flex-col -space-y-1">
                        <h3 className="font-semibold text-foreground text-sm sm:text-base">E-mail</h3>
                        <a href="mailto:info@crewstars.nl" className="text-xs sm:text-sm text-foreground/70 hover:text-accent transition-colors break-all">
                          info@crewstars.nl
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0" />
                      <div className="flex flex-col -space-y-1">
                        <h3 className="font-semibold text-foreground text-sm sm:text-base">Telefoon</h3>
                        <a href="tel:+31850712685" className="text-xs sm:text-sm text-foreground/70 hover:text-accent transition-colors">
                          (+31) 85 071 2685
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0" />
                      <div className="flex flex-col -space-y-1">
                        <h3 className="font-semibold text-foreground text-sm sm:text-base">Adres</h3>
                        <span className="text-xs sm:text-sm text-foreground/70">
                          Bierbrouwersweg 29, Woerden
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Formulier en Google Maps naast elkaar */}
                <div className="grid lg:grid-cols-[1.2fr,1fr] gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
                  {/* Formulier links */}
                  <div>
                    {!isSubmitted ? (
                      <>
                        <div className="mb-6 sm:mb-8">
                          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3 sm:mb-4">
                            <span className="text-accent text-lg sm:text-xl">•</span>
                            <span className="text-accent">Stuur een bericht</span>
                          </div>
                          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-black leading-tight text-foreground mb-2">
                            Vul het formulier in
                          </h3>
                          <p className="text-sm sm:text-base lg:text-lg text-foreground/70 leading-relaxed">
                            Stuur ons een bericht en we nemen zo spoedig mogelijk contact met je op.
                          </p>
                        </div>

                        <form action="https://usebasin.com/f/d4e1aea6b9d0" method="POST" onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-6">
                        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="naam" className="font-bold">Naam <span className="text-[#6366f1]">*</span></Label>
                            <Input
                              id="naam"
                              name="naam"
                              type="text"
                              value={formData.naam}
                              onChange={handleChange}
                              placeholder="Jouw naam"
                              className={errors.naam ? "border-destructive focus-visible:ring-destructive" : ""}
                            />
                            {errors.naam && (
                              <p className="text-sm text-destructive mt-1">{errors.naam}</p>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email" className="font-bold">E-mailadres <span className="text-[#6366f1]">*</span></Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="jouw@email.nl"
                              className={errors.email ? "border-destructive focus-visible:ring-destructive" : ""}
                            />
                            {errors.email && (
                              <p className="text-sm text-destructive mt-1">{errors.email}</p>
                            )}
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="telefoon" className="font-bold">Telefoonnummer</Label>
                            <Input
                              id="telefoon"
                              name="telefoon"
                              type="tel"
                              value={formData.telefoon}
                              onChange={handleChange}
                              placeholder="06 12345678"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="onderwerp" className="font-bold">Onderwerp</Label>
                            <Input
                              id="onderwerp"
                              name="onderwerp"
                              type="text"
                              value={formData.onderwerp}
                              onChange={handleChange}
                              placeholder="Onderwerp van je bericht"
                            />
                          </div>
                        </div>

                          <div className="space-y-2">
                            <Label htmlFor="bericht" className="font-bold">Bericht <span className="text-[#6366f1]">*</span></Label>
                            <Textarea
                              id="bericht"
                              name="bericht"
                              rows={5}
                              value={formData.bericht}
                              onChange={handleChange}
                              placeholder="Vertel ons hoe we je kunnen helpen..."
                              className={`min-h-[120px] ${errors.bericht ? "border-destructive focus-visible:ring-destructive" : ""}`}
                            />
                            {errors.bericht && (
                              <p className="text-sm text-destructive mt-1">{errors.bericht}</p>
                            )}
                          </div>

                          <div className="flex justify-center pt-4">
                            <Button
                              type="submit"
                              variant="accent-bottom"
                              size="xl"
                              className="px-8"
                            >
                              Verstuur bericht
                            </Button>
                          </div>
                        </form>
                      </>
                    ) : (
                      <div className="contact-success-message flex flex-col items-center justify-center py-16 px-4 sm:px-8 text-center box-border">
                        <div className="mb-6">
                          <CheckCircle2 className="w-20 h-20 text-accent mx-auto" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-black leading-tight text-foreground mb-4">
                          Bericht verzonden!
                        </h3>
                        <p className="text-lg text-foreground/70 leading-relaxed mb-8 max-w-md">
                          Bedankt voor je bericht, {formData.naam}! We hebben je bericht ontvangen en nemen zo spoedig mogelijk contact met je op.
                        </p>
                    <Button
                      onClick={() => {
                        setIsSubmitted(false);
                        setErrors({});
                        setFormData({
                          naam: "",
                          email: "",
                          telefoon: "",
                          onderwerp: "",
                          bericht: "",
                        });
                      }}
                      variant="accent-bottom"
                      size="xl"
                      className="px-8"
                    >
                      Nieuw bericht versturen
                    </Button>
                      </div>
                    )}
                  </div>

                  {/* Google Maps rechts */}
                  <div className="flex flex-col">
                    <div className="mb-3 sm:mb-4">
                      <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3 sm:mb-4">
                        <span className="text-accent text-lg sm:text-xl">•</span>
                        <span className="text-accent">Onze locatie</span>
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl font-black leading-tight text-foreground mb-2">
                        Bezoek ons op kantoor
                      </h3>
                      <p className="text-xs sm:text-sm text-foreground/70">
                        Kom gerust langs! Koffie of thee?
                      </p>
                    </div>
                    <div className="rounded-lg sm:rounded-xl overflow-hidden shadow-lg border border-border/50 flex-1">
                      <iframe
                        src="https://www.google.com/maps?q=Bierbrouwersweg+29,+Woerden,+Nederland&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0, minHeight: '300px' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full"
                        title="Crewstars locatie - Bierbrouwersweg 29, Woerden"
                      />
                    </div>
                  </div>
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

export default Contact;

