import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const CALENDLY_LINK = "https://calendly.com/santhosh-chidambaram/performance-marketing-discovery-call";
const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.2
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return <section id="contact" ref={sectionRef} className="py-20 lg:py-32">
      <div className="container px-4 lg:px-8">
        <div className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Let's Talk
          </span>
          <h2 className="mt-3 sm:mt-4 text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold font-display">
            Ready to Scale Your{" "}
            <span className="text-gradient">Healthcare Brand?</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-2">Book a free strategy call. No fluff, no sales pitch. Just honest insights on how we can help you grow.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main CTA Card */}
          <div className={`p-8 lg:p-12 rounded-2xl bg-card border border-border mb-8 text-center transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold font-display mb-4">
              Book a Free Strategy Call
            </h3>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">30 minutes. No commitment. We'll discuss your goals, challenges, and how we can help you scale compliantly.</p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-lg group glow-primary">
              <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
                Book a Free Strategy Call
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Contact Details */}
          <div className={`grid md:grid-cols-3 gap-4 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <a href="mailto:santhosh@beyondgoofy.com" className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Email</div>
                <div className="font-medium text-foreground">santhosh@beyondgoofy.com</div>
              </div>
            </a>

            <a href="tel:+919597746622" className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Phone</div>
                <div className="font-medium text-foreground">+91 95977 46622</div>
              </div>
            </a>

            <div className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Location</div>
                <div className="font-medium text-foreground">Bangalore, India</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;