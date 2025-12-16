import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const cases = [
  {
    title: "Personeel voor groot muziekfestival",
    category: "Festival",
    description: "Levering van 40+ ervaren crewleden voor opbouw en afbouw van een 3-daags festival met 5 podia en 50.000 bezoekers.",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop",
    stats: { value: "40+", label: "Crewleden" },
  },
  {
    title: "Personeel voor corporate event",
    category: "Corporate",
    description: "Flexibele inzet van gespecialiseerd personeel voor opbouw en afbouw van zakelijk evenement voor 2000 personen.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
    stats: { value: "100%", label: "Tevredenheid" },
  },
  {
    title: "Crew voor beursstand opbouw",
    category: "Beurs",
    description: "Snelle levering van ervaren monteurs en crewleden voor efficiënte opbouw en afbouw van meerdere beursstands.",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop",
    stats: { value: "15+", label: "Crewleden" },
  },
];

const Cases = () => {
  return (
    <section id="cases" className="section-padding bg-background">
      <div className="container-custom px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase mb-4">
              <span className="text-accent text-xl">•</span>
              <span className="text-accent">Projecten</span>
            </div>
            <h2 className="heading-lg text-foreground mb-4">
              Recente projecten
            </h2>
            <p className="text-body">
              Ontdek hoe wij verschillende evenementen hebben ondersteund met 
              ervaren personeel voor opbouw en afbouw. Van festivals tot corporate events.
            </p>
          </div>
          <Button variant="outline" size="lg">
            Alle cases bekijken
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Cases Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <article
              key={caseItem.title}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={caseItem.image}
                  alt={caseItem.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-medium rounded-full">
                    {caseItem.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {caseItem.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {caseItem.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <span className="text-2xl font-bold text-accent">
                      {caseItem.stats.value}
                    </span>
                    <span className="text-sm text-muted-foreground ml-2">
                      {caseItem.stats.label}
                    </span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary group-hover:text-accent group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
