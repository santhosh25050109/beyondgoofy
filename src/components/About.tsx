import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "11+", label: "Months Avg. Retention" },
  { value: "Boutique", label: "Agency (Bangalore)" },
  { value: "7/10", label: "Clients See Improved Results" },
];

const About = () => {
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
    <section
      id="about"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-secondary/30"
    >
      <div className="container px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Section header */}
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-medium uppercase tracking-wider">
                About Us
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold font-display">
                A Boutique Agency That{" "}
                <span className="text-gradient">Actually Cares</span>
              </h2>
            </div>

            {/* Content */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We're not your typical marketing agency. At Beyond Goofy, we intentionally 
                  limit ourselves to working with <strong className="text-foreground">only 8 brands at a time</strong>.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  This means every client gets our full attention, not a junior account manager 
                  who's juggling 50 other accounts. We believe in quality over quantity, 
                  honest communication, and results that actually matter.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  No long-term contracts. No hidden fees. Just real performance marketing 
                  backed by the power of authentic influencer partnerships.
                </p>
              </div>

              {/* Stats */}
              <div className="grid gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`p-6 rounded-xl bg-card border border-border transition-all duration-500 hover:border-primary/50 ${
                      isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-10"
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="text-4xl font-bold text-primary font-display">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
