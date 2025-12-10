import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
const CALENDLY_LINK = "https://calendly.com/santhosh-chidambaram/performance-marketing-discovery-call";
const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.querySelector("#portfolio");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      
      {/* Subtle glow effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="container relative z-10 px-4 lg:px-8 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Boutique Agency • Bangalore</span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up-delay-1 text-4xl md:text-5xl lg:text-7xl font-bold font-display leading-tight mb-6">
            Performance Marketing{" "}
            <span className="text-gradient">Powered by Influencers</span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-up-delay-2 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            We don't do fluff. We focus on real results with honest communication, 
            working exclusively with brands we believe in.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg group">
              <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
                Book a Free Strategy Call
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToPortfolio} className="border-border hover:bg-secondary px-8 py-6 text-lg">
              See Our Work
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-muted-foreground" />
        </div>
      </div>
    </section>;
};
export default Hero;