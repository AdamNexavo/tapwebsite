import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ArrowRight, CheckCircle2, Calendar, X } from "lucide-react";
import { format } from "date-fns";
import { nl } from "date-fns/locale/nl";
import crewWorking from "@/assets/crew-working.png";
import medewerkerFoto from "@/assets/medewerker-foto.jpg";

const Offerte = () => {
  const [formData, setFormData] = useState({
    naam: "",
    bedrijf: "",
    email: "",
    telefoon: "",
    naamEvenement: "",
    datumVan: "",
    datumTot: "",
    locatie: "",
    aantalPersonen: "",
    typePersonnel: "",
    bericht: "",
  });
  const [datumVan, setDatumVan] = useState<Date | undefined>(undefined);
  const [datumTot, setDatumTot] = useState<Date | undefined>(undefined);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [datumTotError, setDatumTotError] = useState<string>("");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[\d\s\+\-\(\)]+$/;
    return phoneRegex.test(phone) || phone === "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Map display names to state keys
    const nameMap: Record<string, string> = {
      "Naam": "naam",
      "Bedrijf": "bedrijf",
      "E-mailadres": "email",
      "Telefoonnummer": "telefoon",
      "Naam evenement": "naamEvenement",
      "Locatie": "locatie",
      "Aantal personen": "aantalPersonen",
      "Type personeel": "typePersonnel",
      "Bericht / extra informatie": "bericht",
    };
    const stateKey = nameMap[name] || name;
    setFormData((prev) => ({
      ...prev,
      [stateKey]: value,
    }));
    // Clear error when user starts typing
    if (errors[stateKey]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[stateKey];
        return newErrors;
      });
    }
  };

  const handleDateChange = (date: Date | undefined, field: 'van' | 'tot') => {
    if (date) {
      const formattedDate = format(date, 'yyyy-MM-dd');
      if (field === 'van') {
        setDatumVan(date);
        setFormData((prev) => ({ ...prev, datumVan: formattedDate }));
        // Reset datumTot if it's before the new datumVan
        if (datumTot && datumTot < date) {
          setDatumTot(undefined);
          setFormData((prev) => ({ ...prev, datumTot: "" }));
        }
        // Clear error when datumVan is selected
        setDatumTotError("");
      } else {
        setDatumTot(date);
        setFormData((prev) => ({ ...prev, datumTot: formattedDate }));
        setDatumTotError("");
      }
    } else {
      if (field === 'van') {
        setDatumVan(undefined);
        setFormData((prev) => ({ ...prev, datumVan: "" }));
      } else {
        setDatumTot(undefined);
        setFormData((prev) => ({ ...prev, datumTot: "" }));
      }
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.naam.trim()) {
      newErrors.naam = "Naam is verplicht";
    }

    if (!formData.bedrijf.trim()) {
      newErrors.bedrijf = "Bedrijf is verplicht";
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-mailadres is verplicht";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Voer een geldig e-mailadres in";
    }

    if (!formData.telefoon.trim()) {
      newErrors.telefoon = "Telefoonnummer is verplicht";
    } else if (!validatePhone(formData.telefoon)) {
      newErrors.telefoon = "Voer een geldig telefoonnummer in";
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
          /* Achtergrondfoto naar boven positioneren op mobiel */
          section.relative.section-padding.pt-24 img[alt="Crewstars crewlid aan het werk"] {
            object-position: 20% top !important;
          }
          /* Header "Offerte aanvragen" op mobiel - alleen op Offerte pagina */
          section.relative.section-padding.pt-24 h1.text-3xl.sm\\:text-4xl {
            font-size: 2rem !important; /* 32px, 2px groter dan text-3xl (30px) */
          }
          /* Bevestigingsblok op mobiel - voorkom overflow en zorg voor gelijke ruimte links en rechts */
          .offerte-success-message {
            width: 100% !important;
            max-width: 100% !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
            box-sizing: border-box !important;
            overflow: hidden !important;
          }
          /* Zorg dat interne content niet overflow veroorzaakt */
          .offerte-success-message * {
            max-width: 100% !important;
            word-wrap: break-word !important;
          }
          /* Verklein button tekst op mobiel */
          .offerte-success-message button {
            font-size: 0.875rem !important; /* text-sm */
            padding-left: 1.5rem !important; /* px-6 */
            padding-right: 1.5rem !important; /* px-6 */
            height: 2.75rem !important; /* h-11 */
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
                  src={crewWorking}
                  alt="Crewstars crewlid aan het werk"
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
          
          <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Linkerhelft - leeg of optioneel content */}
                <div className="hidden lg:block"></div>
                
                {/* Rechterhelft - tekst meer naar rechts en naar onder */}
                <div className="text-center lg:flex lg:justify-center lg:items-center lg:pt-16 lg:pl-16 xl:pl-24">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-white mb-4 sm:mb-6 whitespace-nowrap">
                    Offerte aanvragen
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Offerte Formulier Section */}
        <section className="section-padding bg-secondary pt-16 sm:pt-20 md:pt-24 lg:pt-32">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-[0.9fr,1.4fr] gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start">
                {/* Linkerkant - Informatie */}
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3 sm:mb-4">
                      <span className="text-accent text-lg sm:text-xl">•</span>
                      <span className="text-accent">Offerte aanvragen</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[2.5rem] font-black leading-tight text-foreground mb-4 sm:mb-6 whitespace-nowrap">
                      Vraag een offerte aan
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-foreground/70 leading-relaxed mb-4 sm:mb-6">
                      Vul het formulier in en we nemen binnen 24 uur contact met je op om de mogelijkheden te bespreken.
                    </p>
                    <p className="text-xs sm:text-sm md:text-base text-foreground/70 leading-relaxed mb-4">
                      Weet je nog niet precies welke diensten je nodig hebt?{" "}
                      <Link to="/diensten" className="text-accent hover:text-accent/80 font-semibold underline underline-offset-2 transition-colors">
                        Bekijk ons aanbod
                      </Link>
                    </p>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-lg sm:text-xl font-black text-foreground">Wat kun je verwachten?</h3>
                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className="mt-1 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent flex-shrink-0" />
                        <p className="text-xs sm:text-sm md:text-base text-foreground/70 leading-relaxed">
                          Binnen 24 uur ontvang je een reactie op je aanvraag
                        </p>
                      </div>
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className="mt-1 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent flex-shrink-0" />
                        <p className="text-xs sm:text-sm md:text-base text-foreground/70 leading-relaxed">
                          Een persoonlijk gesprek om jouw specifieke behoeften te bespreken
                        </p>
                      </div>
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className="mt-1 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent flex-shrink-0" />
                        <p className="text-xs sm:text-sm md:text-base text-foreground/70 leading-relaxed">
                          Een op maat gemaakte offerte met duidelijke prijsopgave
                        </p>
                      </div>
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className="mt-1 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent flex-shrink-0" />
                        <p className="text-xs sm:text-sm md:text-base text-foreground/70 leading-relaxed">
                          Flexibele oplossingen voor jouw evenement
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 sm:pt-4 border-t border-foreground/30">
                    <p className="text-xs sm:text-sm text-foreground/60 leading-relaxed mb-3 sm:mb-4">
                      Heb je vragen of wil je liever direct contact? Neem dan contact met ons op via telefoon of e-mail.
                    </p>
                    <div className="flex items-center gap-3 sm:gap-4 mt-3 sm:mt-4">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden flex-shrink-0 bg-muted ring-[3px] sm:ring-[5px] ring-[#6366f1]">
                        <img
                          src={medewerkerFoto}
                          alt="Adam Akoudad"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            console.error("Foto niet geladen:", medewerkerFoto);
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                      <div>
                        <p className="text-base sm:text-lg md:text-xl font-semibold text-foreground">Adam Akoudad</p>
                        <p className="text-xs sm:text-sm md:text-base text-foreground/60">Staat voor je klaar</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Rechterkant - Formulier */}
                {!isSubmitted ? (
                  <form action="https://usebasin.com/f/defbe14b4736" method="POST" onSubmit={handleSubmit} noValidate className="bg-background rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 lg:p-12 shadow-xl border border-border/50">
                  <input type="hidden" name="_redirect" value="https://www.crewstars.nl/bedankt" />
                  <input type="hidden" name="Datum evenement (van)" value={formData.datumVan} />
                  <input type="hidden" name="Datum evenement (tot)" value={formData.datumTot} />
                  <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                    <div className="space-y-2">
                      <Label htmlFor="naam" className="font-bold">Naam <span className="text-[#6366f1]">*</span></Label>
                      <Input
                        id="naam"
                        name="Naam"
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
                      <Label htmlFor="bedrijf" className="font-bold">Bedrijf <span className="text-[#6366f1]">*</span></Label>
                      <Input
                        id="bedrijf"
                        name="Bedrijf"
                        type="text"
                        value={formData.bedrijf}
                        onChange={handleChange}
                        placeholder="Bedrijfsnaam"
                        className={errors.bedrijf ? "border-destructive focus-visible:ring-destructive" : ""}
                      />
                      {errors.bedrijf && (
                        <p className="text-sm text-destructive mt-1">{errors.bedrijf}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-bold">E-mailadres <span className="text-[#6366f1]">*</span></Label>
                      <Input
                        id="email"
                        name="E-mailadres"
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
                    <div className="space-y-2">
                      <Label htmlFor="telefoon" className="font-bold">Telefoonnummer <span className="text-[#6366f1]">*</span></Label>
                      <Input
                        id="telefoon"
                        name="Telefoonnummer"
                        type="tel"
                        value={formData.telefoon}
                        onChange={handleChange}
                        placeholder="06 12345678"
                        className={errors.telefoon ? "border-destructive focus-visible:ring-destructive" : ""}
                      />
                      {errors.telefoon && (
                        <p className="text-sm text-destructive mt-1">{errors.telefoon}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                    <div className="space-y-2">
                      <Label htmlFor="naamEvenement" className="font-bold text-sm sm:text-base">Naam evenement</Label>
                      <Input
                        id="naamEvenement"
                        name="Naam evenement"
                        type="text"
                        value={formData.naamEvenement}
                        onChange={handleChange}
                        placeholder="Naam van het evenement"
                        className="text-sm sm:text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="locatie" className="font-bold text-sm sm:text-base">Locatie</Label>
                      <Input
                        id="locatie"
                        name="Locatie"
                        type="text"
                        value={formData.locatie}
                        onChange={handleChange}
                        placeholder="Adres en/of stad"
                        className="text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                    <div className="space-y-2">
                      <Label htmlFor="datumVan" className="font-bold text-sm sm:text-base">Datum evenement (van)</Label>
                      <div className="relative">
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="w-full justify-start text-left font-normal h-10 border border-input bg-background text-foreground hover:bg-background hover:text-foreground focus:ring-2 focus:ring-[#6366f1] focus:ring-offset-2 focus:outline-none focus:border-[#6366f1] data-[state=open]:ring-2 data-[state=open]:ring-[#6366f1] data-[state=open]:ring-offset-2 data-[state=open]:border-[#6366f1] pr-8"
                            >
                              <Calendar className="mr-2 h-4 w-4" />
                              {datumVan ? format(datumVan, "PPP", { locale: nl }) : <span className="text-muted-foreground">Selecteer datum</span>}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <CalendarComponent
                              mode="single"
                              selected={datumVan}
                              onSelect={(date) => handleDateChange(date, 'van')}
                              initialFocus
                              locale={nl}
                            />
                          </PopoverContent>
                        </Popover>
                        {datumVan && (
                          <button
                            type="button"
                            className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors rounded-sm hover:bg-muted"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDateChange(undefined, 'van');
                            }}
                          >
                            <X className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="datumTot" className="font-bold text-sm sm:text-base">Datum evenement (tot)</Label>
                      <div className="relative">
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={`w-full justify-start text-left font-normal h-10 border border-input bg-background text-foreground hover:bg-background hover:text-foreground focus:ring-2 focus:ring-[#6366f1] focus:ring-offset-2 focus:outline-none focus:border-[#6366f1] data-[state=open]:ring-2 data-[state=open]:ring-[#6366f1] data-[state=open]:ring-offset-2 data-[state=open]:border-[#6366f1] pr-8 ${
                                !datumVan ? 'opacity-50 cursor-not-allowed' : ''
                              }`}
                              onClick={(e) => {
                                if (!datumVan) {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  setDatumTotError("Vul eerst begindatum in");
                                } else {
                                  setDatumTotError("");
                                }
                              }}
                            >
                              <Calendar className="mr-2 h-4 w-4" />
                              {datumTot ? format(datumTot, "PPP", { locale: nl }) : <span className="text-muted-foreground">Selecteer datum</span>}
                            </Button>
                          </PopoverTrigger>
                          {datumVan && (
                            <PopoverContent className="w-auto p-0" align="start">
                              <CalendarComponent
                                mode="single"
                                selected={datumTot}
                                onSelect={(date) => handleDateChange(date, 'tot')}
                                initialFocus
                                disabled={(date) => date < datumVan}
                                locale={nl}
                              />
                            </PopoverContent>
                          )}
                        </Popover>
                        {datumTot && (
                          <button
                            type="button"
                            className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors rounded-sm hover:bg-muted"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDateChange(undefined, 'tot');
                            }}
                          >
                            <X className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                      {datumTotError && (
                        <p className="text-sm text-destructive mt-1">{datumTotError}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                    <div className="space-y-2">
                      <Label htmlFor="aantalPersonen" className="font-bold text-sm sm:text-base">Aantal personen</Label>
                      <Input
                        id="aantalPersonen"
                        name="Aantal personen"
                        type="number"
                        min="1"
                        value={formData.aantalPersonen}
                        onChange={handleChange}
                        placeholder="Aantal crewleden"
                        className="text-sm sm:text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="typePersonnel" className="font-bold text-sm sm:text-base">Type personeel</Label>
                      <Input
                        id="typePersonnel"
                        name="Type personeel"
                        type="text"
                        value={formData.typePersonnel}
                        onChange={handleChange}
                        placeholder="Bijv. sitecrew, stagehands"
                        className="text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div className="mb-6 sm:mb-8">
                    <div className="space-y-2">
                      <Label htmlFor="bericht" className="font-bold text-sm sm:text-base">Bericht / Extra informatie</Label>
                      <Textarea
                        id="bericht"
                        name="Bericht / extra informatie"
                        rows={3}
                        value={formData.bericht}
                        onChange={handleChange}
                        placeholder="Vertel ons meer over je project..."
                        className="min-h-[80px] text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <Button
                      type="submit"
                      variant="accent-bottom"
                      size="xl"
                      className="w-full sm:w-auto px-6 sm:px-8 text-sm sm:text-base"
                    >
                      Verstuur aanvraag
                    </Button>
                  </div>
                </form>
                ) : (
                  <div className="offerte-success-message bg-background rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 lg:p-12 shadow-xl border border-border/50 flex flex-col items-center justify-center text-center min-h-[500px] box-border">
                    <div className="mb-6">
                      <CheckCircle2 className="w-20 h-20 text-accent mx-auto" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black leading-tight text-foreground mb-4">
                      Aanvraag verzonden!
                    </h3>
                    <p className="text-lg text-foreground/70 leading-relaxed mb-6 max-w-md">
                      Bedankt voor je aanvraag, {formData.naam}! We hebben je offerteaanvraag ontvangen en nemen binnen 24 uur contact met je op om de mogelijkheden te bespreken.
                    </p>
                    <Button
                      onClick={() => {
                        setIsSubmitted(false);
                        setErrors({});
                        setDatumVan(undefined);
                        setDatumTot(undefined);
                        setFormData({
                          naam: "",
                          bedrijf: "",
                          email: "",
                          telefoon: "",
                          naamEvenement: "",
                          datumVan: "",
                          datumTot: "",
                          locatie: "",
                          aantalPersonen: "",
                          typePersonnel: "",
                          bericht: "",
                        });
                      }}
                      variant="accent-bottom"
                      size="xl"
                      className="px-8"
                    >
                      Nieuwe aanvraag versturen
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTA 
          title="Ondersteuning nodig?"
          description="Heb je een evenement of project waar je ondersteuning bij nodig hebt? Neem contact met ons op en ontdek hoe Crewstars jouw evenement kunt ondersteunen."
          buttonText="Neem contact op"
          buttonLink="/contact"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Offerte;

