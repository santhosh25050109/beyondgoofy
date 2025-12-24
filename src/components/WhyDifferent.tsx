import { useEffect, useRef, useState } from "react";
import { Shield, Zap, Users, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CALENDLY_LINK = "https://calendly.com/santhosh-chidambaram/performance-marketing-discovery-call";

const differentiators = [
  {
    icon: Shield,
    title: "Compliance Mastery",
    description: "We know the policies inside-out. No account bans, no disapprovals — just sustainable scaling.",
  },
  {
    icon: Zap,
    title: "Founder-Led Operations",
    description: "No junior account managers. Senior strategists who've seen bans, rejections, and scaled past them.",
  },
  {
    icon: Users,
    title: "Operator Mindset",
    description: "We think like founders, not agencies. Your P&L is our priority — not vanity metrics.",
  },
  {
    icon: TrendingUp,
    title: "ROAS-Driven Systems",
    description: "Every rupee tracked. Every campaign optimized. Proven systems for profitable growth.",
  },
];

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
    <section ref={sectionRef} className="py-20 lg:py-32 bg-secondary/30">
      <div className="container px-4 lg:px-8">
        <div
          className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Our Approach
          </span>
          <h2 className="mt-4 text-2xl md:text-4xl lg:text-5xl font-bold font-display">
            No Buzzwords. No AI Jargon.{" "}
            <span className="text-gradient">Pure Results.</span>
          </h2>
          <p className="mt-4 text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            We speak the language of outcomes: revenue, ROAS, and compliant scaling.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
            {differentiators.map((item, index) => (
              <div
                key={item.title}
                className={`p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg lg:text-xl font-bold font-display mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div
            className={`p-8 lg:p-10 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 text-center transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-lg lg:text-xl font-display text-foreground mb-2">
              "These guys have already solved the problems we're struggling with."
            </p>
            <p className="text-muted-foreground text-sm">
              — What our clients say when they find us
            </p>
          </div>

          {/* CTA */}
          <div
            className={`text-center mt-12 transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg group glow-primary">
              <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
                Book a Strategy Call
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
