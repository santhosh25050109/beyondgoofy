import { useEffect, useRef, useState } from "react";
import { Search, Beaker, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Identify Trends",
    description:
      "We research your market, audience, and competitors to find the opportunities that others miss.",
  },
  {
    icon: Beaker,
    number: "02",
    title: "Test Creatives",
    description:
      "Rapid testing of ad creatives, messaging, and audiences to find what resonates and converts.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Scale Performance",
    description:
      "Once we find winners, we scale aggressively while maintaining efficiency and profitability.",
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
    <section id="process" ref={sectionRef} className="py-24 lg:py-32 bg-secondary/30">
      <div className="container px-4 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Our Process
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold font-display">
            How We <span className="text-gradient">Deliver Results</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line (desktop only) */}
            <div className="hidden md:block absolute top-20 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />

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
                    <div className="w-20 h-20 rounded-2xl bg-card border border-border flex items-center justify-center mb-6 mx-auto group-hover:border-primary/50 transition-colors">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>

                {/* Arrow between steps (mobile only) */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-6 md:hidden">
                    <ArrowRight className="w-6 h-6 text-primary rotate-90" />
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
