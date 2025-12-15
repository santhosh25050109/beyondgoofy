import { useEffect, useRef, useState } from "react";
import { DollarSign, Clock, Users, Zap, Globe, TrendingDown } from "lucide-react";

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
    <section ref={sectionRef} className="py-24 lg:py-32 bg-secondary/30">
      <div className="container px-4 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Why Offshore With Us
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold font-display">
            Global Offshore Hiring, <span className="text-gradient">Tailored for Marketing</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Inspired by global offshore hiring models, but specifically designed for performance marketing teams.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Cost Comparison */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* US/UK Pricing */}
            <div
              className={`p-8 rounded-2xl bg-card border border-border transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                  <Globe className="w-6 h-6 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-bold font-display">US / UK Agency Pricing</h3>
              </div>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <span>Average monthly retainer: <strong className="text-foreground">$6,000 – $10,000</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <span>Long-term contracts required</span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <span>Limited flexibility & junior account managers</span>
                </li>
              </ul>
            </div>

            {/* Beyond Goofy Pricing */}
            <div
              className={`p-8 rounded-2xl bg-card border-2 border-primary transition-all duration-700 delay-150 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-display">Beyond Goofy (India-Based)</h3>
              </div>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <TrendingDown className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Average monthly retainer: <strong className="text-primary">$2,000</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong className="text-foreground">No long contracts</strong> — earn your trust monthly</span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong className="text-foreground">Senior strategists + execution</strong> included</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Results */}
          <div
            className={`grid sm:grid-cols-3 gap-6 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="p-6 rounded-xl bg-primary/10 border border-primary/20 text-center">
              <div className="text-3xl font-bold font-display text-primary mb-2">75%</div>
              <p className="text-sm text-muted-foreground">Cost Savings</p>
            </div>
            <div className="p-6 rounded-xl bg-primary/10 border border-primary/20 text-center">
              <div className="text-3xl font-bold font-display text-primary mb-2">Same</div>
              <p className="text-sm text-muted-foreground">Tools & Performance Standards</p>
            </div>
            <div className="p-6 rounded-xl bg-primary/10 border border-primary/20 text-center">
              <div className="text-3xl font-bold font-display text-primary mb-2">Faster</div>
              <p className="text-sm text-muted-foreground">Time-zone Advantage</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
