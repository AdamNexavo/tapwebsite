import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "TAP Crew | Pagina niet gevonden";
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="section-padding bg-background">
          <div className="container-custom px-4 sm:px-6 lg:px-6 xl:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center py-16 sm:py-24">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground mb-6 sm:mb-8">
                  404
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 mb-8 sm:mb-12 leading-relaxed">
                  De pagina die u probeert te bezoeken bestaat niet (meer).
                </p>
                <Link 
                  to="/" 
                  className="inline-block text-accent hover:text-accent/80 underline text-base sm:text-lg font-semibold transition-colors"
                >
                  Bezoek www.tapcrew.nl opnieuw
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
