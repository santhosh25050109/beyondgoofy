import { useEffect, useRef, useState } from "react";
import { Quote, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
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
    <section id="testimonials" ref={sectionRef} className="py-24 lg:py-32">
      <div className="container px-4 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold font-display">
            What Our Clients <span className="text-gradient">Say</span>
          </h2>
        </div>

        <div
          className={`max-w-4xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Main testimonial card */}
          <div className="relative p-8 md:p-12 rounded-3xl bg-card border border-border">
            {/* Quote icon */}
            <div className="absolute -top-6 left-8">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>

            {/* Stats highlight */}
            <div className="mb-8 pt-4">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
                <span className="text-4xl font-bold text-primary font-display">7/10</span>
                <span className="text-lg text-foreground">
                  clients see improved results with us
                </span>
              </div>
            </div>

            {/* Quote text */}
            <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
              "Working with Beyond Goofy transformed our marketing approach. They didn't just 
              run ads—they became true partners in our growth. Their honest feedback and 
              data-driven strategies helped us scale efficiently while maintaining profitability."
            </blockquote>

            {/* Attribution */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="font-bold text-foreground">Happy Client</div>
                <div className="text-muted-foreground">D2C Brand Founder</div>
              </div>

              <Button
                variant="outline"
                asChild
                className="border-border hover:bg-secondary"
              >
                <a
                  href="https://www.linkedin.com/company/beyond-goofy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  See More on LinkedIn
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Social proof bar */}
          <div className="mt-12 grid grid-cols-3 gap-4 text-center">
            <div className="p-4 rounded-xl bg-secondary/50">
              <div className="text-2xl font-bold text-primary font-display">11+</div>
              <div className="text-sm text-muted-foreground">Months Avg. Retention</div>
            </div>
            <div className="p-4 rounded-xl bg-secondary/50">
              <div className="text-2xl font-bold text-primary font-display">100%</div>
              <div className="text-sm text-muted-foreground">Transparent Reporting</div>
            </div>
            <div className="p-4 rounded-xl bg-secondary/50">
              <div className="text-2xl font-bold text-primary font-display">0</div>
              <div className="text-sm text-muted-foreground">Hidden Fees</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
