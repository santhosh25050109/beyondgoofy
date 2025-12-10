import { useEffect, useRef, useState } from "react";

const brands = [
  { name: "Yourstory" },
  { name: "Ola Krutrim" },
  { name: "Shumee Toys" },
  { name: "Birdsonglife" },
  { name: "Beauty & Co" },
  { name: "Food Daarze" },
  { name: "Aroleap" },
  { name: "Brigade Reap" },
  { name: "Elevate Now" },
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
    <section id="portfolio" ref={sectionRef} className="py-24 lg:py-32">
      <div className="container px-4 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Our Work
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold font-display">
            Brands We've <span className="text-gradient">Grown</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We're proud to partner with innovative brands across various industries.
          </p>
        </div>

        {/* Marquee container */}
        <div className="overflow-hidden">
          <div className="flex animate-marquee">
            {/* First set of brands */}
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="flex-shrink-0 mx-4 px-8 py-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors duration-300"
              >
                <div className="font-medium text-foreground whitespace-nowrap">
                  {brand.name}
                </div>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {brands.map((brand) => (
              <div
                key={`${brand.name}-duplicate`}
                className="flex-shrink-0 mx-4 px-8 py-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors duration-300"
              >
                <div className="font-medium text-foreground whitespace-nowrap">
                  {brand.name}
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