import { useEffect, useRef, useState } from "react";
import { Cpu, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CALENDLY_LINK = "https://calendly.com/santhosh-chidambaram/performance-marketing-discovery-call";

const Metrics = () => {
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
    <section ref={sectionRef} className="py-14 lg:py-28 bg-secondary/30">
      <div className="container px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Positioning Statement */}
          <div
            className={`text-center mb-8 lg:mb-12 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center justify-center gap-4 mb-6 lg:mb-8">
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <Cpu className="w-6 h-6 lg:w-7 lg:h-7 text-primary" />
              </div>
            </div>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold font-display mb-4 lg:mb-6">
              We are not a large agency.<br />
              We are not a freelancer network.
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
              We are a <strong className="text-foreground">lean, Gen-AI powered growth team</strong> helping 
              global brands scale faster without burning cash.
            </p>
          </div>

          {/* CTA Card */}
          <div
            className={`p-6 lg:p-12 rounded-2xl bg-card border border-border text-center transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center justify-center gap-3 mb-4 lg:mb-6">
              <Users className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
              <span className="text-xs lg:text-sm text-muted-foreground uppercase tracking-wider">
                Trusted by Global Brands
              </span>
            </div>
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold font-display mb-3 lg:mb-4">
              Hire an offshore performance marketing team trusted by global brands.
            </h3>
            <p className="text-base lg:text-lg text-muted-foreground mb-6 lg:mb-8">
              Save 75% on costs. Scale without compromise.
            </p>
            <Button asChild size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-6 lg:px-8 py-5 lg:py-6 text-base lg:text-lg group">
              <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
                Book a Strategy Call
                <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
