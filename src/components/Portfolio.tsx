import { useEffect, useRef, useState } from "react";

const brands = [
  { name: "Shumee", style: "font-bold text-orange-500" },
  { name: "Proactive for Her", style: "font-light tracking-wide text-indigo-400" },
  { name: "YourStory", style: "font-black uppercase tracking-tight text-red-500" },
  { name: "Food Darzee", style: "font-semibold text-yellow-500" },
  { name: "LearnApp", style: "font-medium text-slate-300" },
  { name: "One800", style: "font-bold text-emerald-400" },
  { name: "Birdsong", style: "font-light tracking-widest text-foreground" },
  { name: "Brigade REAP", style: "font-bold text-amber-500" },
  { name: "Aroleap", style: "font-semibold text-slate-200" },
];

const industries = [
  "D2C & Ecommerce",
  "Healthcare & Wellness",
  "Real Estate",
  "Fintech",
  "EdTech",
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
            Brands We've Scaled
          </span>
          <h2 className="mt-4 text-2xl md:text-4xl lg:text-5xl font-bold font-display">
            55+ Brands <span className="text-gradient">Scaled Globally</span>
          </h2>
          <p className="mt-4 text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Performance-led strategies across diverse industries worldwide.
          </p>
        </div>

        {/* Brand Marquee */}
        <div className="overflow-hidden mb-8 lg:mb-12">
          <div className="flex animate-marquee">
            {/* First set of brands */}
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="flex-shrink-0 mx-3 lg:mx-5 px-6 lg:px-10 py-5 lg:py-7 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors duration-300 flex items-center justify-center min-w-[140px] lg:min-w-[180px]"
              >
                <span className={`text-lg lg:text-xl whitespace-nowrap ${brand.style}`}>
                  {brand.name}
                </span>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {brands.map((brand) => (
              <div
                key={`${brand.name}-duplicate`}
                className="flex-shrink-0 mx-3 lg:mx-5 px-6 lg:px-10 py-5 lg:py-7 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors duration-300 flex items-center justify-center min-w-[140px] lg:min-w-[180px]"
              >
                <span className={`text-lg lg:text-xl whitespace-nowrap ${brand.style}`}>
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Industries */}
        <div
          className={`flex flex-wrap justify-center gap-3 lg:gap-4 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {industries.map((industry) => (
            <span
              key={industry}
              className="px-4 lg:px-6 py-2 lg:py-3 rounded-full bg-primary/10 text-primary text-sm lg:text-base font-medium"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
