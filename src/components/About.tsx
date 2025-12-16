import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Persoonlijke aanpak met vaste contactpersoon",
  "Breed netwerk van ervaren evenementenpersoneel",
  "Flexibele inzet: op korte termijn beschikbaar",
  "Gespecialiseerde krachten voor elke klus",
];

const stats = [
  { value: "500+", label: "Evenementen ondersteund" },
  { value: "200+", label: "Crewleden in ons netwerk" },
  { value: "24/7", label: "Beschikbaarheid" },
  { value: "15+", label: "Jaar ervaring" },
];

const About = () => {
  return (
    <section id="over-ons" className="relative overflow-hidden">
      {/* Top Swoosh */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0L1440 0L1440 20C1440 20 1080 80 720 80C360 80 0 20 0 20L0 0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>

      <div className="gradient-teal section-padding pt-32">
        <div className="container-custom px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase mb-4">
                <span className="text-accent text-xl">•</span>
                <span className="text-accent">Over ons</span>
              </div>
              <h2 className="heading-lg text-primary-foreground mb-6">
                Uitzendbureau gespecialiseerd in evenementenpersoneel
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
                Al meer dan 15 jaar leveren wij ervaren personeel voor de op- en afbouw van 
                evenementen. Ons brede netwerk van betrouwbare crewleden en flexibele aanpak 
                zorgen ervoor dat u altijd de juiste mensen op de juiste plek heeft.
              </p>
              
              {/* Benefits */}
              <ul className="space-y-4 mb-8">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-primary-foreground/90">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button variant="hero" size="lg">
                Bekijk onze referenties
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-primary-foreground/20"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-4xl lg:text-5xl font-black text-accent block mb-2">
                    {stat.value}
                  </span>
                  <span className="text-primary-foreground/80">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
