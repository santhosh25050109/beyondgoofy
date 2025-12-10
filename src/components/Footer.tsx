import { Linkedin } from "lucide-react";
const footerLinks = [{
  label: "About",
  href: "#about"
}, {
  label: "Services",
  href: "#services"
}, {
  label: "Portfolio",
  href: "#portfolio"
}, {
  label: "Process",
  href: "#process"
}, {
  label: "Contact",
  href: "#contact"
}];
const Footer = () => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <footer className="py-16 border-t border-border">
      <div className="container px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="text-2xl font-bold font-display text-foreground">
              Beyond<span className="text-primary">Goofy</span>
            </a>
            <p className="mt-4 text-muted-foreground max-w-sm">
              A boutique performance marketing agency that focuses on real results 
              through honest communication and influencer partnerships.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold font-display mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map(link => <li key={link.href}>
                  <button onClick={() => handleNavClick(link.href)} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </button>
                </li>)}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold font-display mb-4">Contact</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a href="mailto:santhosh@beyondgoofy.com" className="hover:text-foreground transition-colors">
                  santhosh@beyondgoofy.com
                </a>
              </li>
              <li>
                <a href="tel:+919876543210" className="hover:text-foreground transition-colors">+91 9597746622</a>
              </li>
              <li>Bangalore, India</li>
            </ul>

            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              <a href="https://www.linkedin.com/company/beyond-goofy/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Beyond Goofy. All rights reserved.</p>
          <p>Built with passion for performance marketing.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;