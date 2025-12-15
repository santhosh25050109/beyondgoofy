import { useEffect, useRef, useState } from "react";
import { Target, Users, MessageSquare } from "lucide-react";

import { Palette, Globe, ShoppingCart } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Performance Marketing",
    description:
      "Gen-AI assisted campaign structuring, creative testing, and scaling across Meta, Google, LinkedIn & X. AI for insights, humans for strategy.",
  },
  {
    icon: Users,
    title: "Influencer Marketing",
    description:
      "UGC-first influencer programs designed to feed performance ads. Barter & paid collaborations, creator sourcing, and AI-assisted content analysis.",
  },
  {
    icon: Palette,
    title: "Graphic Designing",
    description:
      "High-converting ad creatives built for speed and scale. Static ads, carousels, reels thumbnails with AI-assisted design workflows.",
  },
  {
    icon: MessageSquare,
    title: "Social Media Management",
    description:
      "Content systems that support performance. Reels strategy, content calendars, AI-assisted captioning, and brand storytelling.",
  },
  {
    icon: ShoppingCart,
    title: "Shopify Development",
    description:
      "Conversion-focused Shopify builds. Performance-ready storefronts, landing pages for paid traffic, CRO-backed layouts, and mobile optimization.",
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
    <section id="services" ref={sectionRef} className="py-16 lg:py-32">
      <div className="container px-4 lg:px-8">
        <div
          className={`text-center mb-10 lg:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="mt-4 text-2xl md:text-4xl lg:text-5xl font-bold font-display">
            AI-Powered Solutions for <span className="text-gradient">Global Growth</span>
          </h2>
          <p className="mt-4 text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Full-stack marketing services powered by Gen-AI workflows and 
            delivered by senior strategists at offshore rates.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group p-5 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 lg:mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 lg:w-7 lg:h-7 text-primary" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold font-display mb-3 lg:mb-4">{service.title}</h3>
              <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
