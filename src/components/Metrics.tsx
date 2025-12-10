import { useEffect, useRef, useState } from "react";
import { TrendingUp, Briefcase } from "lucide-react";

const sectors = [
  "Apparel",
  "Skincare", 
  "Real Estate",
  "Healthcare",
  "Fitness",
  "Education"
];

const Metrics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-secondary/30">
      <div className="container px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* ROAS Card */}
            <div
              className={`p-8 lg:p-10 rounded-2xl bg-card border border-border transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">
                    Avg D2C Clients
                  </p>
                  <h3 className="text-3xl lg:text-4xl font-bold font-display text-gradient">
                    ROAS 3.5+
                  </h3>
                </div>
              </div>
              <p className="text-muted-foreground">
                Consistent high-performance campaigns delivering exceptional returns for our D2C partners.
              </p>
            </div>

            {/* Sectors Card */}
            <div
              className={`p-8 lg:p-10 rounded-2xl bg-card border border-border transition-all duration-700 delay-150 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Briefcase className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">
                    Sectors We've Worked With
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {sectors.map((sector, index) => (
                  <span
                    key={sector}
                    className={`px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm transition-all duration-500 ${
                      isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                    }`}
                    style={{ transitionDelay: `${200 + index * 100}ms` }}
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
