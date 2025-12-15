import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "55+", label: "Brands Scaled Globally" },
  { value: "75%", label: "Cost Savings vs US/UK" },
  { value: "Gen-AI", label: "Powered Workflows" },
];

const About = () => {
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
    <section
      id="about"
      ref={sectionRef}
      className="py-16 lg:py-32 bg-secondary/30"
    >
      <div className="container px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Section header */}
            <div className="text-center mb-10 lg:mb-16">
              <span className="text-primary text-sm font-medium uppercase tracking-wider">
                About Us
              </span>
              <h2 className="mt-4 text-2xl md:text-4xl lg:text-5xl font-bold font-display">
                Built for Modern Brands That{" "}
                <span className="text-gradient">Care About Results</span>
              </h2>
            </div>

            {/* Content */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-4 lg:space-y-6">
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                  Beyond Goofy is a boutique performance marketing agency built for modern brands 
                  that care about <strong className="text-foreground">efficiency, speed, and results</strong>.
                </p>
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                  We blend Gen-AI workflows, creative-first media buying, and offshore execution 
                  from India to deliver enterprise-level performance at a fraction of global agency costs.
                </p>
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                  No bloated retainers. No long-term lock-ins. We don't just run ads, 
                  we build <strong className="text-foreground">repeatable growth systems</strong>.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 md:grid-cols-1 gap-3 lg:gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`p-4 lg:p-6 rounded-xl bg-card border border-border transition-all duration-500 hover:border-primary/50 ${
                      isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-10"
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="text-2xl lg:text-4xl font-bold text-primary font-display">
                      {stat.value}
                    </div>
                    <div className="text-xs lg:text-base text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
