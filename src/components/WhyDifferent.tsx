import { useEffect, useRef, useState } from "react";
import { Shield, Clock, Users, TrendingUp, MessageCircle, Heart } from "lucide-react";

const differentiators = [
  {
    icon: Users,
    title: "Only 8 Brands",
    description: "We limit our roster to ensure every client gets dedicated attention and strategic focus.",
  },
  {
    icon: MessageCircle,
    title: "Honest Communication",
    description: "No sugarcoating. We tell you what's working, what's not, and what needs to change.",
  },
  {
    icon: Clock,
    title: "No Long Contracts",
    description: "We earn your business every month. No lock-ins, just results that keep you coming back.",
  },
  {
    icon: TrendingUp,
    title: "Results-Focused",
    description: "We optimize for what matters: revenue, conversions, and sustainable growth.",
  },
  {
    icon: Shield,
    title: "Transparent Pricing",
    description: "No hidden fees or surprise charges. You know exactly what you're paying for.",
  },
  {
    icon: Heart,
    title: "We Pick Our Clients",
    description: "We only work with brands we genuinely believe in. Your success is our reputation.",
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
    <section ref={sectionRef} className="py-24 lg:py-32 bg-secondary/30">
      <div className="container px-4 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold font-display">
            What Makes Us <span className="text-gradient">Different</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {differentiators.map((item, index) => (
            <div
              key={item.title}
              className={`group flex gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-bold font-display mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
