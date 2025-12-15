import { useEffect, useRef, useState } from "react";
import { DollarSign, Clock, Users, Zap, Globe, TrendingDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CALENDLY_LINK = "https://calendly.com/santhosh-chidambaram/performance-marketing-discovery-call";

const WhyDifferent = () => {
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
    <section ref={sectionRef} className="py-16 lg:py-32 bg-secondary/30">
      <div className="container px-4 lg:px-8">
        <div
          className={`text-center mb-10 lg:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Why Offshore With Us
          </span>
          <h2 className="mt-4 text-2xl md:text-4xl lg:text-5xl font-bold font-display">
            Global Offshore Hiring, <span className="text-gradient">Tailored for Marketing</span>
          </h2>
          <p className="mt-4 text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Inspired by global offshore hiring models, but specifically designed for performance marketing teams.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Cost Comparison */}
          <div className="grid md:grid-cols-2 gap-4 lg:gap-8 mb-8 lg:mb-12">
            {/* US/UK Pricing */}
            <div
              className={`p-6 lg:p-8 rounded-2xl bg-card border border-border transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex items-center gap-3 mb-4 lg:mb-6">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-muted flex items-center justify-center">
                  <Globe className="w-5 h-5 lg:w-6 lg:h-6 text-muted-foreground" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold font-display">US / UK Agency Pricing</h3>
              </div>
              <ul className="space-y-3 lg:space-y-4 text-sm lg:text-base text-muted-foreground">
                <li className="flex items-start gap-3">
                  <DollarSign className="w-4 h-4 lg:w-5 lg:h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <span>Average monthly retainer: <strong className="text-foreground">$6,000 to $10,000</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-4 h-4 lg:w-5 lg:h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <span>Long-term contracts required</span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="w-4 h-4 lg:w-5 lg:h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <span>Limited flexibility & junior account managers</span>
                </li>
              </ul>
            </div>

            {/* Beyond Goofy Pricing */}
            <div
              className={`p-6 lg:p-8 rounded-2xl bg-card border-2 border-primary transition-all duration-700 delay-150 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex items-center gap-3 mb-4 lg:mb-6">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Zap className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold font-display">Beyond Goofy (India-Based)</h3>
              </div>
              <ul className="space-y-3 lg:space-y-4 text-sm lg:text-base text-muted-foreground">
                <li className="flex items-start gap-3">
                  <TrendingDown className="w-4 h-4 lg:w-5 lg:h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Average monthly retainer: <strong className="text-primary">$2,000</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-4 h-4 lg:w-5 lg:h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong className="text-foreground">No long contracts</strong>, earn your trust monthly</span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="w-4 h-4 lg:w-5 lg:h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong className="text-foreground">Senior strategists + execution</strong> included</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Results */}
          <div
            className={`grid grid-cols-3 gap-3 lg:gap-6 mb-8 lg:mb-12 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="p-4 lg:p-6 rounded-xl bg-primary/10 border border-primary/20 text-center">
              <div className="text-xl lg:text-3xl font-bold font-display text-primary mb-1 lg:mb-2">75%</div>
              <p className="text-xs lg:text-sm text-muted-foreground">Cost Savings</p>
            </div>
            <div className="p-4 lg:p-6 rounded-xl bg-primary/10 border border-primary/20 text-center">
              <div className="text-xl lg:text-3xl font-bold font-display text-primary mb-1 lg:mb-2">Same</div>
              <p className="text-xs lg:text-sm text-muted-foreground">Tools & Standards</p>
            </div>
            <div className="p-4 lg:p-6 rounded-xl bg-primary/10 border border-primary/20 text-center">
              <div className="text-xl lg:text-3xl font-bold font-display text-primary mb-1 lg:mb-2">Faster</div>
              <p className="text-xs lg:text-sm text-muted-foreground">Time-zone Advantage</p>
            </div>
          </div>

          {/* CTA Button */}
          <div
            className={`text-center transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 lg:px-8 py-5 lg:py-6 text-base lg:text-lg group">
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

export default WhyDifferent;
