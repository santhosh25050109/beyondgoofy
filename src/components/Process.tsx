import { useEffect, useRef, useState } from "react";
import { Search, Beaker, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Insight Discovery",
    description:
      "AI + data to identify winning angles and opportunities. We research your market before spending a dollar.",
  },
  {
    icon: Beaker,
    number: "02",
    title: "Creative Testing",
    description:
      "Influencer-led + in-house content tested aggressively. UGC, static ads, and video — all performance-optimized.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Performance Scaling",
    description:
      "Budget allocation, ROAS optimization, and constant iteration. We scale what works, cut what doesn't.",
  },
];

const Process = () => {
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
    <section id="process" ref={sectionRef} className="py-16 lg:py-32 bg-secondary/30">
      <div className="container px-4 lg:px-8">
        <div
          className={`text-center mb-10 lg:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Our Approach
          </span>
          <h2 className="mt-4 text-2xl md:text-4xl lg:text-5xl font-bold font-display">
            AI-Powered. Creative-First. <span className="text-gradient">Performance-Driven.</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 relative">
            {/* Connecting line (desktop only) */}
            <div className="hidden md:block absolute top-16 lg:top-20 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />

            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Step card */}
                <div className="text-center">
                  {/* Icon with number */}
                  <div className="relative inline-flex">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-card border border-border flex items-center justify-center mb-4 lg:mb-6 mx-auto group-hover:border-primary/50 transition-colors">
                      <step.icon className="w-6 h-6 lg:w-8 lg:h-8 text-primary" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-primary text-primary-foreground text-xs lg:text-sm font-bold flex items-center justify-center">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-lg lg:text-xl font-bold font-display mb-2 lg:mb-3">{step.title}</h3>
                  <p className="text-sm lg:text-base text-muted-foreground">{step.description}</p>
                </div>

                {/* Arrow between steps (mobile only) */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-4 lg:my-6 md:hidden">
                    <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 text-primary rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
