import { Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CALENDLY_LINK = "https://calendly.com/santhosh-chidambaram/performance-marketing-discovery-call";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="py-12 sm:py-16 lg:py-20 border-t border-border bg-secondary/20">
      <div className="container px-4 lg:px-8">
        {/* Main CTA */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-display mb-3 sm:mb-4">
            Ready to Scale Your Healthcare Brand?
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground mb-5 sm:mb-6 px-2">
            Join the healthcare brands that trust us with their growth.
          </p>
          <Button asChild size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg group">
            <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
              Book a Free Strategy Call
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 mb-8 lg:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <a href="#" className="text-lg sm:text-xl lg:text-2xl font-bold font-display text-foreground">
              Beyond<span className="text-primary">Goofy</span>
            </a>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm lg:text-base text-muted-foreground max-w-sm">
              India's #1 Healthcare Performance Marketing Agency. Scaling healthcare, D2C, and fitness brands compliantly.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold font-display mb-3 sm:mb-4 text-sm lg:text-base">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-xs sm:text-sm lg:text-base text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold font-display mb-3 sm:mb-4 text-sm lg:text-base">Contact</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm lg:text-base text-muted-foreground">
              <li>
                <a href="mailto:santhosh@beyondgoofy.com" className="hover:text-primary transition-colors break-all">
                  santhosh@beyondgoofy.com
                </a>
              </li>
              <li>
                <a href="tel:+919597746622" className="hover:text-primary transition-colors">
                  +91 95977 46622
                </a>
              </li>
              <li>Bangalore, India</li>
            </ul>

            {/* Social Links */}
            <div className="mt-4 sm:mt-6 flex gap-4">
              <a
                href="https://www.linkedin.com/company/beyond-goofy/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 sm:pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Beyond Goofy. All rights reserved.</p>
          <p className="text-primary font-medium">Healthcare Performance Marketing Specialists</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
