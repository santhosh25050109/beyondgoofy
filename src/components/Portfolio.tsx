import { useEffect, useRef, useState } from "react";

const industries = [
  { name: "D2C & Ecommerce" },
  { name: "Healthcare & Wellness" },
  { name: "Real Estate" },
  { name: "Fintech" },
  { name: "EdTech" },
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
    <section id="portfolio" ref={sectionRef} className="py-16 lg:py-32">
      <div className="container px-4 lg:px-8">
        <div
          className={`text-center mb-10 lg:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Industries We Serve
          </span>
          <h2 className="mt-4 text-2xl md:text-4xl lg:text-5xl font-bold font-display">
            55+ Brands <span className="text-gradient">Scaled Globally</span>
          </h2>
          <p className="mt-4 text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Performance-led strategies across diverse industries worldwide.
          </p>
        </div>

        {/* Marquee container */}
        <div className="overflow-hidden">
          <div className="flex animate-marquee">
            {/* First set of industries */}
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="flex-shrink-0 mx-2 lg:mx-4 px-5 lg:px-8 py-4 lg:py-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors duration-300"
              >
                <div className="font-medium text-sm lg:text-base text-foreground whitespace-nowrap">
                  {industry.name}
                </div>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {industries.map((industry) => (
              <div
                key={`${industry.name}-duplicate`}
                className="flex-shrink-0 mx-2 lg:mx-4 px-5 lg:px-8 py-4 lg:py-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors duration-300"
              >
                <div className="font-medium text-sm lg:text-base text-foreground whitespace-nowrap">
                  {industry.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;