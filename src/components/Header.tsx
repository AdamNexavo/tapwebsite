import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoZwart from "@/assets/logo-crewstars-zwart.svg";
import logoWit from "@/assets/logo-crewstars-wit-horizontaal.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProjectenOpen, setIsProjectenOpen] = useState(false);
  const [isOpdrachtgeversOpen, setIsOpdrachtgeversOpen] = useState(false);
  const location = useLocation();
  const isDienstenPage = location.pathname === "/diensten";

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled past Hero section (approximately 100vh)
      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Werken bij", href: "#werken-bij" },
    { name: "Voor opdrachtgevers", href: "#voor-opdrachtgevers" },
    { name: "Over ons", href: "#over-ons" },
    { name: "Projecten", href: "#projecten" },
  ];

  return (
    <>
      {isDienstenPage && !isScrolled && (
        <div
          className="fixed top-0 left-0 right-0 h-24 bg-[#333333] z-[90]"
          aria-hidden="true"
        />
      )}
      <header
        className={`fixed z-[100] rounded-2xl transition-all duration-300 ${
          isScrolled
            ? "top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-[85%] bg-background backdrop-blur-md border border-border/50 shadow-lg"
            : isDienstenPage
            ? "top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-[95%] bg-[#333333] backdrop-blur-none border-transparent shadow-none"
            : "top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-[95%] bg-transparent backdrop-blur-none border-transparent shadow-none"
        }`}
      >
      <div className={`flex items-center justify-between h-16 py-2 w-full ${
        isScrolled ? "px-6 lg:px-8" : "px-6 lg:px-8"
      }`}>
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={isScrolled ? logoZwart : logoWit}
              alt="Crewstars" 
              className={`w-auto transition-all duration-300 ${
                isScrolled ? "h-10" : "h-14"
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => {
              if (item.name === "Voor opdrachtgevers") {
                return (
                  <div
                    key={item.name}
                    className="relative group"
                    onMouseEnter={() => setIsOpdrachtgeversOpen(true)}
                    onMouseLeave={() => setIsOpdrachtgeversOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1.5 font-bold transition-all duration-200 outline-none ${
                        isScrolled 
                          ? isOpdrachtgeversOpen ? "text-primary" : "text-foreground/80 hover:text-primary"
                          : isOpdrachtgeversOpen ? "text-accent" : "text-white hover:text-accent hover:-translate-y-1"
                      }`}
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpdrachtgeversOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpdrachtgeversOpen && (
                      <div 
                        className="absolute top-full left-0 pt-1 w-48 z-50"
                        onMouseEnter={() => setIsOpdrachtgeversOpen(true)}
                        onMouseLeave={() => setIsOpdrachtgeversOpen(false)}
                      >
                        <div className="bg-background border border-border/50 rounded-lg shadow-xl backdrop-blur-md overflow-hidden">
                          <Link
                            to="/diensten"
                            className="block px-4 py-2.5 text-sm font-medium text-foreground hover:bg-accent/10 hover:text-accent transition-colors duration-150"
                          >
                            Diensten
                          </Link>
                          <a
                            href="#offerte-aanvragen"
                            className="block px-4 py-2.5 text-sm font-medium text-foreground hover:bg-accent/10 hover:text-accent transition-colors duration-150"
                          >
                            Offerte aanvragen
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              if (item.name === "Projecten") {
                return (
                  <div
                    key={item.name}
                    className="relative group"
                    onMouseEnter={() => setIsProjectenOpen(true)}
                    onMouseLeave={() => setIsProjectenOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1.5 font-bold transition-all duration-200 outline-none ${
                        isScrolled 
                          ? isProjectenOpen ? "text-primary" : "text-foreground/80 hover:text-primary"
                          : isProjectenOpen ? "text-accent" : "text-white hover:text-accent hover:-translate-y-1"
                      }`}
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isProjectenOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isProjectenOpen && (
                      <div 
                        className="absolute top-full left-0 pt-1 w-32 z-50"
                        onMouseEnter={() => setIsProjectenOpen(true)}
                        onMouseLeave={() => setIsProjectenOpen(false)}
                      >
                        <div className="bg-background border border-border/50 rounded-lg shadow-xl backdrop-blur-md overflow-hidden">
                          <a
                            href="#projecten-2023"
                            className="block px-4 py-2.5 text-sm font-medium text-foreground hover:bg-accent/10 hover:text-accent transition-colors duration-150"
                          >
                            2023
                          </a>
                          <a
                            href="#projecten-2024"
                            className="block px-4 py-2.5 text-sm font-medium text-foreground hover:bg-accent/10 hover:text-accent transition-colors duration-150"
                          >
                            2024
                          </a>
                          <a
                            href="#projecten-2025"
                            className="block px-4 py-2.5 text-sm font-medium text-foreground hover:bg-accent/10 hover:text-accent transition-colors duration-150"
                          >
                            2025
                          </a>
                          <a
                            href="#projecten-2026"
                            className="block px-4 py-2.5 text-sm font-medium text-foreground hover:bg-accent/10 hover:text-accent transition-colors duration-150"
                          >
                            2026
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-1 font-bold transition-all duration-200 ${
                    isScrolled 
                      ? "text-foreground/80 hover:text-primary" 
                      : "text-white hover:text-accent hover:-translate-y-1"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="#contact" className={`font-bold transition-all duration-200 ${
              isScrolled 
                ? "text-foreground/80 hover:text-primary" 
                : "text-white hover:text-accent hover:-translate-y-1"
            }`}>
              Contact
            </a>
            <Button
              variant="accent-bottom"
              size="default"
              className="rounded-sm border-b-[2px] shadow-none hover:shadow-none"
            >
              Personeel aanvragen
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
      </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border animate-fade-in">
            <nav className="flex flex-col py-4 px-4">
              {navItems.map((item) => {
                if (item.name === "Voor opdrachtgevers") {
                  return (
                    <div key={item.name} className="border-b border-border/50">
                      <a
                        href={item.href}
                        className="py-3 text-foreground/80 hover:text-primary font-medium block"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                      <div className="pl-4 pb-2 flex flex-col">
                        <Link
                          to="/diensten"
                          className="py-2 text-foreground/60 hover:text-primary text-sm"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Diensten
                        </Link>
                        <a
                          href="#offerte-aanvragen"
                          className="py-2 text-foreground/60 hover:text-primary text-sm"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Offerte aanvragen
                        </a>
                      </div>
                    </div>
                  );
                }
                if (item.name === "Projecten") {
                  return (
                    <div key={item.name} className="border-b border-border/50">
                      <a
                        href={item.href}
                        className="py-3 text-foreground/80 hover:text-primary font-medium block"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                      <div className="pl-4 pb-2 flex flex-col">
                        <a
                          href="#projecten-2023"
                          className="py-2 text-foreground/60 hover:text-primary text-sm"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          2023
                        </a>
                        <a
                          href="#projecten-2024"
                          className="py-2 text-foreground/60 hover:text-primary text-sm"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          2024
                        </a>
                        <a
                          href="#projecten-2025"
                          className="py-2 text-foreground/60 hover:text-primary text-sm"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          2025
                        </a>
                        <a
                          href="#projecten-2026"
                          className="py-2 text-foreground/60 hover:text-primary text-sm"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          2026
                        </a>
                      </div>
                    </div>
                  );
                }
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="py-3 text-foreground/80 hover:text-primary font-medium border-b border-border/50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                );
              })}
              <a
                href="#contact"
                className="py-3 text-foreground/80 hover:text-primary font-medium border-b border-border/50"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="pt-4">
                <Button
                  variant="accent-bottom"
                  className="w-full rounded-sm border-b-[2px] shadow-none hover:shadow-none"
                >
                  Personeel aanvragen
                </Button>
              </div>
            </nav>
          </div>
        )}
    </header>
    </>
  );
};

export default Header;
