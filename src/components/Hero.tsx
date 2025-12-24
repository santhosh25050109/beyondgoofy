import { ArrowRight, ChevronDown, Shield, TrendingUp } from "lucide-react";
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
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Subtle glow effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] lg:w-[700px] h-[500px] lg:h-[700px] bg-primary/8 rounded-full blur-[150px]" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(45,212,191,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container relative z-10 px-4 lg:px-8 pt-24">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-primary/10 border border-primary/20 mb-6 lg:mb-8 healthcare-pulse">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">#1 Healthcare Performance Marketing Agency in Bangalore</span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up-delay-1 text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-display leading-[1.1] mb-6">
            Scaling Healthcare Brands{" "}
            <span className="text-gradient">Where Most Agencies</span>{" "}
            <span className="text-gradient">Get Banned</span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-up-delay-2 text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-4 px-2">
            Performance marketing for healthcare, D2C, protein & fitness brands.
          </p>
          
          <p className="animate-fade-up-delay-2 text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 lg:mb-10 px-2">We don't do branding. We don't do social media. We do revenue & growth  ethically bypassing ad restrictions on Meta & Google.<strong className="text-foreground">revenue & growth</strong> — ethically bypassing ad restrictions on Meta & Google.
          </p>

          {/* Trust indicators */}
          <div className="animate-fade-up-delay-3 flex flex-wrap items-center justify-center gap-6 lg:gap-10 mb-8 lg:mb-10">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="text-sm lg:text-base text-muted-foreground">₹1.5+ Cr Monthly Ad Spend</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="text-sm lg:text-base text-muted-foreground">₹5 Cr+ Monthly Revenue Generated</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="animate-fade-up-delay-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold group glow-primary">
              <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
                Book a Free Strategy Call
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToPortfolio} className="w-full sm:w-auto border-border hover:border-primary hover:bg-primary/5 px-8 py-6 text-lg">
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