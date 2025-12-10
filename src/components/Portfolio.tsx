import { useEffect, useRef, useState } from "react";
const brands = [{
  name: "Birdsong Life",
  logo: "🦅"
}, {
  name: "Shumee Toys",
  logo: "🧸"
}, {
  name: "Proactive For Her",
  logo: "💪"
}, {
  name: "Aroleap",
  logo: "🎯"
}, {
  name: "Ola Krutrim",
  logo: "🤖"
}, {
  name: "B For Bottoms",
  logo: "👶"
}, {
  name: "The Shorts Project",
  logo: "🩳"
}];
const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.2
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return <section id="portfolio" ref={sectionRef} className="py-24 lg:py-32">
      <div className="container px-4 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {brands.map((brand, index) => <div key={brand.name} className={`group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:scale-105 text-center ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`} style={{
          transitionDelay: `${index * 100}ms`
        }}>
              
              <div className="font-medium text-foreground">{brand.name}</div>
            </div>)}
          
          {/* Placeholder for potential 8th brand */}
          <div className={`p-8 rounded-2xl border-2 border-dashed border-border flex flex-col items-center justify-center transition-all duration-500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`} style={{
          transitionDelay: "700ms"
        }}>
            <div className="text-4xl mb-4 text-muted-foreground">+</div>
            <div className="text-sm text-muted-foreground">Your Brand?</div>
          </div>
        </div>
      </div>
    </section>;
};
export default Portfolio;