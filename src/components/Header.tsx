import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoHeroStilstand from "@/assets/logo-hero-stilstand.png";
import logoHeaderScrolled from "@/assets/logo-header-scrolled.png";
import logoZwartScherp from "@/assets/logo-horizontaal-zwart-scherp.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpdrachtgeversOpen, setIsOpdrachtgeversOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isDienstenPage = location.pathname === "/diensten";
  const isOffertePage = location.pathname === "/offerte";
  const isContactPage = location.pathname === "/contact";
  const isProjectenPage = location.pathname === "/projecten";
  const isWerkenBijPage = location.pathname === "/werken-bij";
  const isVacaturePage = location.pathname.startsWith("/vacatures/");
  const isPrivacyPage = location.pathname === "/privacyverklaring";
  const isAlgemeneVoorwaardenPage = location.pathname === "/algemene-voorwaarden";
  // Alle pagina's behalve de homepage krijgen grijze header bij stilstand (inclusief 404 pagina)
  const isSpecialPage = location.pathname !== "/";

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
    { name: "Werken bij TAP", href: "/aanmelden", isLink: true },
    { name: "Voor opdrachtgevers", href: "/voor-opdrachtgevers", isLink: true },
    { name: "FAQ", href: "/#faq", isLink: false },
  ];

  return (
    <>
      {isSpecialPage && !isScrolled && (
        <div
          className="fixed top-0 left-0 right-0 h-24 bg-[#333333] z-[90]"
          aria-hidden="true"
        />
      )}
      <header
        className={`fixed z-[100] rounded-xl sm:rounded-2xl transition-all duration-300 ${
          isScrolled
            ? "top-4 sm:top-4 left-1/2 -translate-x-1/2 w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] max-w-[95%] sm:max-w-[85%] bg-background backdrop-blur-md border border-border/50 shadow-lg"
            : isSpecialPage
            ? "top-4 sm:top-4 left-1/2 -translate-x-1/2 w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] max-w-[95%] bg-background md:bg-[#333333] backdrop-blur-md md:backdrop-blur-none border border-border/50 md:border-transparent shadow-lg md:shadow-none"
            : "top-4 sm:top-4 left-1/2 -translate-x-1/2 w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] max-w-[95%] md:max-w-[95%] bg-background md:bg-transparent backdrop-blur-md md:backdrop-blur-none border border-border/50 md:border-transparent shadow-lg md:shadow-none"
        }`}
      >
      <div className={`flex items-center justify-between h-16 sm:h-16 py-2 w-full ${
        isScrolled ? "px-3 sm:px-6 lg:px-6 xl:px-8" : "px-3 sm:px-6 lg:px-6 xl:px-8"
      }`}>
          {/* Logo */}
          <Link to="/" className="flex items-center">
            {/* Desktop logo - changes based on scroll */}
            <img 
              src={isScrolled ? logoHeaderScrolled : logoHeroStilstand}
              alt="TAP Crew" 
              className={`hidden md:block w-auto transition-all duration-300 ${
                isScrolled ? "h-10 sm:h-12 md:h-14" : "h-14 sm:h-18 md:h-20"
              }`}
            />
            {/* Mobile logo - always black */}
            <img 
              src={logoZwartScherp}
              alt="TAP Crew" 
              className="md:hidden w-auto transition-all duration-300 h-10"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
            {navItems.map((item) => {
              if (item.name === "Voor opdrachtgevers") {
                return (
                  <div
                    key={item.name}
                    className="relative group"
                    onMouseEnter={() => setIsOpdrachtgeversOpen(true)}
                    onMouseLeave={() => setIsOpdrachtgeversOpen(false)}
                  >
                    <Link
                      to={item.href}
                      className={`flex items-center gap-1.5 font-bold transition-all duration-200 ${
                        isScrolled 
                          ? isOpdrachtgeversOpen ? "text-primary" : "text-foreground/80 hover:text-primary"
                          : isOpdrachtgeversOpen ? "text-accent" : "text-white hover:text-accent hover:-translate-y-1"
                      }`}
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpdrachtgeversOpen ? 'rotate-180' : ''}`} />
                    </Link>
                    {isOpdrachtgeversOpen && (
                      <div 
                        className="absolute top-full left-0 pt-1 w-56 z-50"
                        onMouseEnter={() => setIsOpdrachtgeversOpen(true)}
                        onMouseLeave={() => setIsOpdrachtgeversOpen(false)}
                      >
                        <div className="bg-background border border-border/50 rounded-lg shadow-xl backdrop-blur-md overflow-hidden">
                          <Link
                            to="/horeca-crew"
                            className="block px-4 py-2.5 text-sm font-medium text-foreground hover:bg-accent/10 hover:text-accent transition-colors duration-150"
                          >
                            Horeca Crew
                          </Link>
                          <Link
                            to="/hospitality-crew"
                            className="block px-4 py-2.5 text-sm font-medium text-foreground hover:bg-accent/10 hover:text-accent transition-colors duration-150"
                          >
                            Hospitality Crew
                          </Link>
                          <Link
                            to="/service-crew"
                            className="block px-4 py-2.5 text-sm font-medium text-foreground hover:bg-accent/10 hover:text-accent transition-colors duration-150"
                          >
                            Service Crew
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              if (item.isLink) {
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`font-bold transition-all duration-200 ${
                      isScrolled 
                        ? "text-foreground/80 hover:text-primary"
                        : "text-white hover:text-accent hover:-translate-y-1"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              }
              // Handle FAQ link - navigate to homepage then scroll
              if (item.name === "FAQ") {
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      if (location.pathname !== "/") {
                        navigate("/");
                        setTimeout(() => {
                          const faqElement = document.getElementById("faq");
                          if (faqElement) {
                            faqElement.scrollIntoView({ behavior: "smooth", block: "start" });
                          }
                        }, 100);
                      } else {
                        const faqElement = document.getElementById("faq");
                        if (faqElement) {
                          faqElement.scrollIntoView({ behavior: "smooth", block: "start" });
                        }
                      }
                    }}
                    className={`flex items-center gap-1 font-bold transition-all duration-200 ${
                      isScrolled 
                        ? "text-foreground/80 hover:text-primary" 
                        : "text-white hover:text-accent hover:-translate-y-1"
                    }`}
                  >
                    {item.name}
                  </a>
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
            <Link to="/contact">
              <Button
                variant="accent-bottom"
                size="default"
                className="rounded-sm border-b-[2px] shadow-none hover:shadow-none"
              >
                Contact
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? "text-foreground" : "text-foreground md:text-white"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-7 h-7 sm:w-6 sm:h-6" /> : <Menu className="w-7 h-7 sm:w-6 sm:h-6" />}
          </button>
      </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border animate-fade-in">
            <nav className="flex flex-col py-4 px-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
              {navItems.map((item) => {
                if (item.name === "Voor opdrachtgevers") {
                  return (
                    <div key={item.name} className="border-b border-border/50">
                      <Link
                        to={item.href}
                        className="py-3 text-foreground/80 hover:text-primary font-medium block"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      <div className="pl-4 pb-2 flex flex-col">
                        <Link
                          to="/horeca-crew"
                          className="py-2 text-foreground/60 hover:text-primary text-sm"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Horeca Crew
                        </Link>
                        <Link
                          to="/hospitality-crew"
                          className="py-2 text-foreground/60 hover:text-primary text-sm"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Hospitality Crew
                        </Link>
                        <Link
                          to="/service-crew"
                          className="py-2 text-foreground/60 hover:text-primary text-sm"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Service Crew
                        </Link>
                      </div>
                    </div>
                  );
                }
                if (item.isLink) {
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="py-3 text-foreground/80 hover:text-primary font-medium border-b border-border/50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
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
                href="/#faq"
                className="py-3 text-foreground/80 hover:text-primary font-medium border-b border-border/50"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  if (location.pathname !== "/") {
                    navigate("/");
                    setTimeout(() => {
                      const faqElement = document.getElementById("faq");
                      if (faqElement) {
                        faqElement.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    }, 100);
                  } else {
                    const faqElement = document.getElementById("faq");
                    if (faqElement) {
                      faqElement.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }
                }}
              >
                FAQ
              </a>
              <div className="pt-4">
                <Link to="/contact">
                  <Button
                    variant="accent-bottom"
                    className="w-full rounded-sm border-b-[2px] shadow-none hover:shadow-none"
                  >
                    Contact
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
    </header>
    </>
  );
};

export default Header;
