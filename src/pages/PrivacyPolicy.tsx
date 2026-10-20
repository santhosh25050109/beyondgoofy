import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    heading: "1. Information We Collect",
    body: [
      "When you visit beyondgoofy.com, we may collect basic information such as your browser type, device, pages visited, and referral source. This helps us understand how the site is used and improve the experience.",
      "If you book a strategy call, reach out on email, phone, or WhatsApp, or connect with us through Calendly or LinkedIn, we may collect your name, email address, phone number, company name, and details about your business or marketing goals that you choose to share.",
    ],
  },
  {
    heading: "2. How We Use Your Information",
    body: [
      "We use the information you share to respond to your enquiry, schedule and prepare for strategy calls, send relevant updates or proposals you have asked for, and improve our website and services.",
      "We do not sell or rent your personal information to third parties. We only share information with trusted service providers (such as scheduling and email tools) to the extent needed to operate our business and serve you.",
    ],
  },
  {
    heading: "3. Cookies and Analytics",
    body: [
      "Our website may use cookies and similar technologies to understand traffic patterns and improve performance. You can control or disable cookies through your browser settings; the site remains accessible if you choose to restrict them.",
    ],
  },
  {
    heading: "4. Data Security",
    body: [
      "We take reasonable technical and organisational measures to protect the personal information we hold against loss, misuse, or unauthorised access. No method of transmission over the internet is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    heading: "5. Data Retention",
    body: [
      "We retain personal information only as long as needed for the purposes described in this policy, to comply with legal obligations, or to resolve disputes. You may request deletion of your information at any time by writing to us.",
    ],
  },
  {
    heading: "6. Your Rights",
    body: [
      "You may ask us to access, correct, update, or delete the personal information we hold about you. You may also opt out of marketing communications at any time by replying to any email or writing to santhosh@beyondgoofy.com.",
    ],
  },
  {
    heading: "7. Third-Party Links",
    body: [
      "Our website links to third-party sites such as Calendly and LinkedIn. We are not responsible for the privacy practices or content of those sites. We encourage you to review their privacy policies before sharing information with them.",
    ],
  },
  {
    heading: "8. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. Continued use of the website after changes are posted constitutes acceptance of the updated policy.",
    ],
  },
  {
    heading: "9. Contact Us",
    body: [
      "If you have questions about this Privacy Policy or how we handle your data, contact us at santhosh@beyondgoofy.com or call +91 95977 46622.",
    ],
  },
];

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Beyond Goofy</title>
        <meta
          name="description"
          content="Privacy Policy for Beyond Goofy, India's healthcare performance marketing agency. Learn how we collect, use, and protect your personal information."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://beyondgoofy.com/privacy-policy" />
        <meta property="og:title" content="Privacy Policy | Beyond Goofy" />
        <meta
          property="og:description"
          content="How Beyond Goofy collects, uses, and protects your personal information."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/privacy-policy" />
      </Helmet>

      <main className="min-h-screen">
        <Navbar />
        <div className="pt-28 pb-16 sm:pt-32 lg:pt-40">
          <div className="container px-4 lg:px-8 max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4">
              Privacy Policy
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground mb-8 sm:mb-10">
              Last updated: October 2026
            </p>

            <p className="text-sm sm:text-base text-muted-foreground mb-10">
              Beyond Goofy ("we", "our", "us") respects your privacy. This
              Privacy Policy explains what information we collect when you use
              beyondgoofy.com, how we use it, and the choices you have.
            </p>

            <div className="space-y-8 sm:space-y-10">
              {sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-lg sm:text-2xl font-bold font-display mb-3">
                    {section.heading}
                  </h2>
                  <div className="space-y-3">
                    {section.body.map((paragraph, i) => (
                      <p
                        key={i}
                        className="text-sm sm:text-base text-muted-foreground leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default PrivacyPolicy;
