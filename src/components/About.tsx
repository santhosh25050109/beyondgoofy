import { useEffect, useRef, useState } from "react";
import { Shield, Ban, Scale, AlertTriangle } from "lucide-react";

const expertise = [
  { icon: AlertTriangle, label: "Keyword Sensitivity" },
  { icon: Shield, label: "Policy-Heavy Platforms" },
  { icon: Ban, label: "Algorithm Restrictions" },
  { icon: Scale, label: "Account Structuring" },
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
      className="py-20 lg:py-32 bg-secondary/30"
    >
      <div className="container px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Section header */}
            <div className="text-center mb-12 lg:mb-16">
              <span className="text-primary text-sm font-medium uppercase tracking-wider">
                Why We're Different
              </span>
              <h2 className="mt-4 text-2xl md:text-4xl lg:text-5xl font-bold font-display">
                We Deeply Understand{" "}
                <span className="text-gradient">Healthcare Advertising Complexities</span>
              </h2>
              <p className="mt-4 text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
                Most agencies run generic ads. We've spent years mastering the art of scaling 
                sensitive healthcare categories on Meta & Google — without getting banned.
              </p>
            </div>

            {/* Expertise grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12 lg:mb-16">
              {expertise.map((item, index) => (
                <div
                  key={item.label}
                  className={`p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-500 text-center ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-medium text-foreground">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Main content */}
            <div
              className={`p-8 lg:p-12 rounded-2xl bg-card border border-border transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold font-display mb-4">
                    Battle-Tested. Rare. Hard to Replicate.
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We're not generalists pretending to understand healthcare. We're specialists 
                    who have successfully run ads for categories that most agencies won't touch.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Our team knows how to structure accounts to prevent bans, navigate policy-heavy 
                    platforms, and ethically bypass algorithm restrictions that kill most healthcare campaigns.
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="p-4 lg:p-6 rounded-xl bg-primary/10 border border-primary/20 text-center">
                      <div className="text-2xl lg:text-4xl font-bold text-primary font-display">₹1.5+ Cr</div>
                      <p className="text-xs lg:text-sm text-muted-foreground mt-1">Monthly Ad Spend</p>
                    </div>
                    <div className="p-4 lg:p-6 rounded-xl bg-primary/10 border border-primary/20 text-center">
                      <div className="text-2xl lg:text-4xl font-bold text-primary font-display">₹5+ Cr</div>
                      <p className="text-xs lg:text-sm text-muted-foreground mt-1">Monthly Revenue</p>
                    </div>
                    <div className="p-4 lg:p-6 rounded-xl bg-primary/10 border border-primary/20 text-center col-span-2">
                      <div className="text-2xl lg:text-4xl font-bold text-primary font-display">ROAS-Driven</div>
                      <p className="text-xs lg:text-sm text-muted-foreground mt-1">Proven Growth Systems</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
