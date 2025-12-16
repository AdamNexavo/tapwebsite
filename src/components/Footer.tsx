import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";
import logoZwart from "@/assets/logo-crewstars-zwart.svg";

const Footer = () => {
  const footerLinks = {
    oplossingen: [
      { name: "Personeel voor Opbouw", href: "#" },
      { name: "Personeel voor Afbouw", href: "#" },
      { name: "Flexibel Inzetbaar", href: "#" },
      { name: "Gespecialiseerd Personeel", href: "#" },
    ],
    sectoren: [
      { name: "Festivals & Concerten", href: "#" },
      { name: "Corporate Events", href: "#" },
      { name: "Beurzen", href: "#" },
      { name: "Speciale Evenementen", href: "#" },
    ],
    overOns: [
      { name: "Ons Team", href: "#" },
      { name: "Cases", href: "#" },
      { name: "Werken bij", href: "#" },
      { name: "Contact", href: "#" },
    ],
  };

  return (
    <footer className="text-white" style={{ backgroundColor: '#919191' }}>
      {/* Main Footer */}
      <div className="container-custom px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-6">
              <img 
                src={logoZwart} 
                alt="Crewstars" 
                className="h-12 w-auto"
                style={{ 
                  filter: 'brightness(0) invert(1)',
                  opacity: 1
                }}
              />
            </Link>
            <p className="text-white/70 mb-6 max-w-sm leading-relaxed">
              Uitzendbureau gespecialiseerd in personeel voor evenementenopbouw en -afbouw. 
              Wij leveren ervaren crewleden wanneer u ze nodig heeft.
            </p>
            <div className="space-y-3">
              <a href="mailto:info@crewstars.nl" className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors">
                <Mail className="w-5 h-5" />
                info@crewstars.nl
              </a>
              <a href="tel:+31201234567" className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors">
                <Phone className="w-5 h-5" />
                +31 (0)20 123 4567
              </a>
              <div className="flex items-center gap-3 text-white/70">
                <MapPin className="w-5 h-5" />
                Amsterdam, Nederland
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Oplossingen</h4>
            <ul className="space-y-3">
              {footerLinks.oplossingen.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/70 hover:text-accent transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Sectoren</h4>
            <ul className="space-y-3">
              {footerLinks.sectoren.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/70 hover:text-accent transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Over Ons</h4>
            <ul className="space-y-3">
              {footerLinks.overOns.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/70 hover:text-accent transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2024 Crewstars. Alle rechten voorbehouden.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-white/60 hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
