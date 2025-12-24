import { useEffect, useRef, useState } from "react";
import { Rocket, Dumbbell, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CALENDLY_LINK = "https://calendly.com/santhosh-chidambaram/performance-marketing-discovery-call";

const visionItems = [
  {
    icon: Heart,
    title: "More Healthcare Companies",
    description: "Expanding our reach to serve more femtech, fertility, and mental health brands.",
  },
  {
    icon: Dumbbell,
    title: "Protein & Fitness Brands",
    description: "Aggressively expanding into the protein and fitness D2C space.",
  },
  {
    icon: Rocket,
    title: "India's Most Trusted",
    description: "Becoming India's most trusted growth partner for regulated categories.",
  },
];

const FutureVision = () => {
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
    <section ref={sectionRef} className="py-20 lg:py-32 bg-secondary/30">
      <div className="container px-4 lg:px-8">
        <div
          className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Vision 2026
          </span>
          <h2 className="mt-3 sm:mt-4 text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold font-display">
            Where We're{" "}
            <span className="text-gradient">Headed</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
            {visionItems.map((item, index) => (
              <div
                key={item.title}
                className={`p-6 lg:p-8 rounded-2xl bg-card border border-border text-center transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold font-display mb-2">{item.title}</h3>
                <p className="text-sm lg:text-base text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className={`text-center transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-lg lg:text-xl text-muted-foreground mb-6">
              Want to grow with us?
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg group glow-primary">
              <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
                Book a Call
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureVision;
