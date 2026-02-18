import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoFooter from "@/assets/logo-footer.png";

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
      <div className="container-custom px-4 sm:px-6 lg:pl-4 lg:pr-8 xl:pr-12 py-10 sm:py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 md:gap-12 lg:gap-10 xl:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 lg:-ml-4">
            <Link to="/" className="flex items-center mb-4 sm:mb-6">
              <img 
                src={logoFooter} 
                alt="TAP Crew" 
                className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto"
              />
            </Link>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2 sm:gap-3 text-white/70 text-sm sm:text-base">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <a
                  href="tel:+31850712685"
                  className="font-semibold hover:text-accent transition-colors break-all"
                >
                  (+31) 85 071 2685
                </a>
              </div>

              <div className="flex items-start gap-2 sm:gap-3 text-white/70 text-sm sm:text-base">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <a
                    href="mailto:info@tapcrew.nl"
                    className="font-semibold hover:text-accent transition-colors block break-all"
                  >
                    info@tapcrew.nl
                  </a>
                  <a
                    href="mailto:planning@tapcrew.nl"
                    className="font-semibold hover:text-accent transition-colors block break-all"
                  >
                    planning@tapcrew.nl
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2 sm:gap-3 text-white/70 text-sm sm:text-base">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0" />
                <a
                  href="https://www.google.com/maps?q=Bierbrouwersweg+29,+3449HW+Woerden"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold hover:text-accent transition-colors"
                >
                  Bierbrouwersweg 29, 3449HW, Woerden
                </a>
              </div>

            </div>
          </div>

          {/* Links */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-[1.3fr,1fr,1fr,1.7fr] gap-8 sm:gap-10 md:gap-12 lg:gap-8 xl:gap-12 lg:col-span-3">
            <div className="lg:-ml-2">
              <h4 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-accent">Menu</h4>
              <ul className="space-y-1 sm:space-y-1.5 -mt-2 sm:-mt-3">
                <li>
                  <Link to="/" className="text-white/70 hover:text-accent transition-colors text-sm sm:text-base">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/aanmelden" className="text-white/70 hover:text-accent transition-colors text-sm sm:text-base">
                    Werken bij TAP
                  </Link>
                </li>
                <li>
                  <Link to="/voor-opdrachtgevers" className="text-white/70 hover:text-accent transition-colors text-sm sm:text-base">
                    Voor opdrachtgevers
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-white/70 hover:text-accent transition-colors text-sm sm:text-base">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-accent">Informatie</h4>
              <ul className="space-y-1 sm:space-y-1.5 -mt-2 sm:-mt-3">
                <li>
                  <Link
                    to="/privacy-verklaring"
                    className="text-white/70 hover:text-accent transition-colors text-sm sm:text-base"
                  >
                    Privacyverklaring
                  </Link>
                </li>
              </ul>
            </div>

            <div className="lg:ml-2">
              <h4 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-accent">Socials</h4>
              <div className="flex items-center gap-3 sm:gap-4 -mt-2 ml-0 sm:ml-1">
                <a href="https://www.linkedin.com/company/crewstars/" target="_blank" rel="noreferrer" className="text-white/70 hover:text-accent transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a href="https://www.instagram.com/crewstars/" target="_blank" rel="noreferrer" className="text-white/70 hover:text-accent transition-colors" aria-label="Instagram">
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-accent">Personeel inhuren?</h4>
              <p className="text-white/70 leading-relaxed -mt-2 text-sm sm:text-base">
                planning@tapcrew.nl
              </p>
              <h4 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-accent mt-6">Technisch personeel nodig?</h4>
              <p className="text-white/70 leading-relaxed -mt-2 text-sm sm:text-base">
                Bekijk ons aanbod op www.crewstars.nl
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="relative flex flex-col items-center gap-2 md:block">
            <p className="text-white/60 text-xs sm:text-sm text-center">
              TAP Crew © 2026. Alle rechten voorbehouden.
            </p>
            <p className="text-white/60 text-xs sm:text-sm text-center mt-2">
              TAP Crew is een handelsnaam van Crewstars B.V. · KvK 96320680 · BTW NL867561580B01
            </p>
            <p className="text-white/50 text-[10px] sm:text-xs md:text-sm md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:text-right mt-2 md:mt-0 nexavo-text-mobile">
              Website verzorgd door Nexavo
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
