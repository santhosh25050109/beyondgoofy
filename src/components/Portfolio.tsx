import { useEffect, useRef, useState } from "react";

const healthcareClients = [
  { name: "Proactive For Her", category: "Femtech" },
  { name: "Elevate Now", category: "Mental Health" },
  { name: "Food Darzee", category: "Nutrition" },
  { name: "Aroleap", category: "Fitness" },
  { name: "Ferra", category: "Fitness" },
];

const targetAudience = [
  "Healthcare Startups",
  "Clinics",
  "Femtech Brands",
  "Mental Health Platforms",
  "Fertility & IVF Centres",
  "Protein & Fitness D2C",
];

const Portfolio = () => {
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
    <section id="portfolio" ref={sectionRef} className="py-20 lg:py-32">
      <div className="container px-4 lg:px-8">
        <div
          className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Healthcare & D2C Clients
          </span>
          <h2 className="mt-4 text-2xl md:text-4xl lg:text-5xl font-bold font-display">
            Trusted By Leading{" "}
            <span className="text-gradient">Healthcare Brands</span>
          </h2>
          <p className="mt-4 text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            From femtech to fertility, mental health to nutrition — we've scaled them all.
          </p>
        </div>

        {/* Client Marquee */}
        <div className="overflow-hidden mb-12 lg:mb-16">
          <div className="flex animate-marquee">
            {/* First set of clients */}
            {healthcareClients.map((client) => (
              <div
                key={client.name}
                className="flex-shrink-0 mx-4 lg:mx-6 px-8 lg:px-12 py-6 lg:py-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors duration-300 min-w-[200px] lg:min-w-[260px]"
              >
                <p className="text-xl lg:text-2xl font-bold font-display text-foreground mb-1">
                  {client.name}
                </p>
                <p className="text-sm text-primary">{client.category}</p>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {healthcareClients.map((client) => (
              <div
                key={`${client.name}-duplicate`}
                className="flex-shrink-0 mx-4 lg:mx-6 px-8 lg:px-12 py-6 lg:py-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors duration-300 min-w-[200px] lg:min-w-[260px]"
              >
                <p className="text-xl lg:text-2xl font-bold font-display text-foreground mb-1">
                  {client.name}
                </p>
                <p className="text-sm text-primary">{client.category}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Target Audience */}
        <div
          className={`transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-center text-muted-foreground mb-6">
            We work with founders who care about ROI, compliance & scale:
          </p>
          <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
            {targetAudience.map((audience) => (
              <span
                key={audience}
                className="px-5 lg:px-6 py-2.5 lg:py-3 rounded-full bg-primary/10 text-primary text-sm lg:text-base font-medium border border-primary/20"
              >
                {audience}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
