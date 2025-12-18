import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoZwart from "@/assets/logo-crewstars-wit-horizontaal.png";

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-5 h-5"
    aria-hidden="true"
  >
    <path
      d="M12 2a9 9 0 0 0-7.8 13.5L3 22l6.7-1.2A9 9 0 1 0 12 2Z"
      fill="currentColor"
      fillOpacity="0.12"
    />
    <path
      d="M12 4a7 7 0 0 0-6.06 10.5L5 19l4.64-.86A7 7 0 1 0 12 4Zm0-2a9 9 0 1 1 0 18c-.6 0-1.19-.06-1.75-.18L3 22l1.5-7.11A9 9 0 0 1 12 2Z"
      fill="currentColor"
    />
    <path
      d="M9.4 8.2c-.18-.4-.37-.41-.55-.42-.14 0-.3 0-.47 0-.16 0-.43.06-.66.3-.23.23-.87.85-.87 2.07 0 1.21.89 2.38 1.02 2.55.13.17 1.73 2.77 4.28 3.78 2.1.83 2.52.66 2.98.62.45-.04 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29-.25-.12-1.47-.74-1.69-.82-.22-.08-.39-.12-.55.12-.17.23-.63.83-.77 1-.14.17-.28.19-.52.06-.25-.12-1.02-.38-1.93-1.19-.72-.64-1.19-1.42-1.33-1.66-.14-.24-.01-.37.11-.5.12-.12.25-.28.37-.42.12-.14.16-.24.25-.4.09-.16.04-.3-.02-.42-.06-.12-.52-1.26-.74-1.72Z"
      fill="currentColor"
    />
  </svg>
);

const Footer = () => {
  return (
    <footer className="text-white" style={{ backgroundColor: "#2f2f2f" }}>
      {/* Main Footer */}
      <div className="container-custom px-4 lg:pl-4 lg:pr-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 lg:-ml-4">
            <Link to="/" className="flex items-center mb-6">
              <img 
                src={logoZwart} 
                alt="Crewstars" 
                className="h-14 w-auto"
              />
            </Link>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/70">
                <Phone className="w-5 h-5" />
                <a
                  href="tel:+31850712685"
                  className="font-semibold hover:text-accent transition-colors"
                >
                  (+31) 85 071 2685
                </a>
              </div>

              <div className="flex items-start gap-3 text-white/70">
                <Mail className="w-5 h-5 mt-1" />
                <div className="space-y-1">
                  <a
                    href="mailto:info@crewstars.nl"
                    className="font-semibold hover:text-accent transition-colors block"
                  >
                    info@crewstars.nl
                  </a>
                  <a
                    href="mailto:planning@crewstars.nl"
                    className="font-semibold hover:text-accent transition-colors block"
                  >
                    planning@crewstars.nl
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-white/70">
                <MapPin className="w-5 h-5" />
                <a
                  href="https://www.google.com/maps?q=Bierbrouwersweg+29,+3449HW+Woerden"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold hover:text-accent transition-colors"
                >
                  Bierbrouwersweg 29, 3449HW Woerden
                </a>
              </div>

            </div>
          </div>

          {/* Links */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-[1.3fr,1fr,1fr,1.7fr] gap-12 lg:col-span-3">
            <div className="lg:-ml-2">
              <h4 className="font-bold text-xl mb-4 text-accent">Menu</h4>
              <ul className="space-y-1.5 -mt-3">
                <li>
                  <Link to="/" className="text-white/70 hover:text-accent transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <a href="#werken-bij" className="text-white/70 hover:text-accent transition-colors">
                    Werken bij
                  </a>
                </li>
                <li>
                  <a href="#diensten" className="text-white/70 hover:text-accent transition-colors">
                    Diensten
                  </a>
                </li>
                <li>
                  <a href="#offerte-aanvragen" className="text-white/70 hover:text-accent transition-colors">
                    Offerte aanvragen
                  </a>
                </li>
                <li>
                  <a href="#over-ons" className="text-white/70 hover:text-accent transition-colors">
                    Over ons
                  </a>
                </li>
                <li>
                  <a href="#projecten" className="text-white/70 hover:text-accent transition-colors">
                    Projecten
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-white/70 hover:text-accent transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-4 text-accent">Informatie</h4>
              <ul className="space-y-1.5 -mt-3">
                <li>
                  <a
                    href="/privacyverklaring"
                    className="text-white/70 hover:text-accent transition-colors"
                  >
                    Privacyverklaring
                  </a>
                </li>
                <li>
                  <a
                    href="/algemene-voorwaarden"
                    className="text-white/70 hover:text-accent transition-colors"
                  >
                    Algemene voorwaarden
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:ml-2">
              <h4 className="font-bold text-xl mb-4 text-accent">Socials</h4>
              <div className="flex items-center gap-4 -mt-2 ml-1">
                <a href="#" className="text-white/70 hover:text-accent transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-white/70 hover:text-accent transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-4 text-accent">Join our crew</h4>
              <p className="text-white/70 leading-relaxed -mt-2">
                Sluit je aan bij onze crew en werk mee aan de leukste projecten.
              </p>
              <div className="mt-4">
                <Button
                  variant="accent-bottom"
                  size="xl"
                  className="px-6 hover:-translate-y-2 transition-all duration-300 bg-[#8c8cff] hover:bg-[#8c8cff] text-white hover:text-white shadow-none hover:shadow-none"
                >
                  Aanmelden
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="w-full px-4 lg:px-8 py-6">
          <div className="relative flex flex-col items-center gap-2 md:block">
            <p className="text-white/60 text-sm text-center">
              © 2026 Crewstars B.V. Alle rechten voorbehouden. · KvK 96320680 · BTW NL867561580B01
            </p>
            <p className="text-white/50 text-xs md:text-sm absolute right-0 top-1/2 -translate-y-1/2 text-right">
              Website verzorgd door Nexavo
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
