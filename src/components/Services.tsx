import { useEffect, useRef, useState } from "react";
import { Target, BarChart3, RefreshCw, LineChart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CALENDLY_LINK = "https://calendly.com/santhosh-chidambaram/performance-marketing-discovery-call";

const services = [
  {
    icon: Target,
    title: "Performance Marketing",
    description: "Meta Ads & Google Ads for healthcare, D2C, and wellness brands. We know the policies, the workarounds, and the scaling strategies.",
    features: ["Meta Ads", "Google Ads", "Account Structuring", "Policy Compliance"],
  },
  {
    icon: RefreshCw,
    title: "Retention Marketing",
    description: "Beyond acquisition. We build systems that increase customer lifetime value and reduce churn for sustainable growth.",
    features: ["CRO", "Funnel Optimization", "LTV Growth", "Email/WhatsApp Flows"],
  },
];

const Services = () => {
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
    <section id="services" ref={sectionRef} className="py-20 lg:py-32 bg-secondary/30">
      <div className="container px-4 lg:px-8">
        <div
          className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="mt-4 text-2xl md:text-4xl lg:text-5xl font-bold font-display">
            We Do ONLY What{" "}
            <span className="text-gradient">We're Best At</span>
          </h2>
          <p className="mt-4 text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            No branding. No social media management. No fluff. Pure growth & revenue.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`group p-8 lg:p-10 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 lg:w-8 lg:h-8 text-primary" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold font-display mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className={`text-center transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg group glow-primary">
              <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
                Talk to Us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
