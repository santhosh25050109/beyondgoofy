import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";

const healthcareCategories = [
  "MTP",
  "Weight Loss",
  "Gynaecology",
  "Vaginismus",
  "Mental Health",
  "Sexual Health",
  "PCOS",
  "HPV & Cervical Cancer",
  "Egg Freezing",
  "IVF & Fertility",
];

const Expertise = () => {
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
    <section ref={sectionRef} className="py-20 lg:py-32">
      <div className="container px-4 lg:px-8">
        <div
          className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Restricted Categories We've Scaled
          </span>
          <h2 className="mt-4 text-2xl md:text-4xl lg:text-5xl font-bold font-display">
            We've Successfully Run Ads For{" "}
            <span className="text-gradient">Sensitive Healthcare Categories</span>
          </h2>
          <p className="mt-4 text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Categories that get most agencies banned. We've scaled them profitably.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {healthcareCategories.map((category, index) => (
              <div
                key={category}
                className="group p-4 lg:p-5 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <p className="text-sm lg:text-base font-medium text-foreground">{category}</p>
              </div>
            ))}
          </div>

          <div
            className={`mt-12 lg:mt-16 p-6 lg:p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 text-center transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-lg lg:text-xl font-display font-semibold text-foreground mb-2">
              This experience is battle-tested, rare, and hard to replicate.
            </p>
            <p className="text-muted-foreground">
              We've seen bans, rejections, and scaled past them all.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
