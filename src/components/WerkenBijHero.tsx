import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import werkenBijImage from "@/assets/werken-bij-tap-hero.png";

const WerkenBijHero = () => {
  return (
    <section className="w-full bg-secondary py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Section - Image */}
          <div className="relative order-2 lg:order-1">
            <img
              src={werkenBijImage}
              alt="Werken bij TAP - Event crew"
              className="w-full h-auto rounded-lg sm:rounded-xl shadow-2xl"
            />
          </div>

          {/* Right Section - Text Content */}
          <div className="order-1 lg:order-2 p-6 sm:p-8 md:p-10 lg:p-12 space-y-6 sm:space-y-8 relative">
            <div>
              <span className="text-accent text-sm sm:text-base font-semibold tracking-wide uppercase">
                WERKEN BIJ TAP
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight">
              KLAAR OM TE STRALEN?
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed max-w-xl">
              Bij TAP sta je midden in de actie: achter de bar, bij de entree of op de vloer. Geen standaard bijbaan, maar werken op toffe evenementen, met een team dat weet van aanpakken. Jij kiest wanneer je werkt en wij regelen de rest. Werk flexibel, sociaal, professioneel én verdien er ook nog eens lekker mee.
            </p>
            
            <div className="pt-4">
              <Link to="/aanmelden">
                <Button
                  variant="accent-bottom"
                  size="xl"
                  className="px-8 text-base sm:text-lg"
                >
                  TAP ME IN!
                </Button>
              </Link>
            </div>

            {/* Decorative wavy lines - bottom right */}
            <div className="relative mt-8 lg:mt-12">
              <div className="absolute right-0 bottom-0 opacity-20">
                <svg
                  width="120"
                  height="60"
                  viewBox="0 0 120 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-accent"
                >
                  <path
                    d="M0 30 Q30 10, 60 30 T120 30"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                  />
                  <path
                    d="M0 40 Q30 20, 60 40 T120 40"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                  />
                  <path
                    d="M0 50 Q30 30, 60 50 T120 50"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WerkenBijHero;
