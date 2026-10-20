import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    heading: "1. About Beyond Goofy",
    body: [
      "Beyond Goofy is a performance marketing agency based in Bangalore, India, specialising in healthcare, D2C, protein, fitness, and wellness brands. These Terms govern your use of beyondgoofy.com and any engagement that begins through it.",
    ],
  },
  {
    heading: "2. Use of This Website",
    body: [
      "You agree to use this website only for lawful purposes. You may not attempt to interfere with the operation of the site, gain unauthorised access to any system, or use the content for commercial purposes without our written permission.",
    ],
  },
  {
    heading: "3. No Professional Advice",
    body: [
      "Content on this website, including case studies, metrics, and marketing insights, is provided for general information only. It does not constitute medical, legal, financial, or advertising compliance advice. Outcomes described reflect specific client engagements and are not a guarantee of similar results for every business. Advertising in regulated categories such as healthcare carries platform policies and legal obligations that should be evaluated case by case.",
    ],
  },
  {
    heading: "4. Intellectual Property",
    body: [
      "All content on this website, including text, graphics, logos, and the Beyond Goofy name, is owned by or licensed to us and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from it without prior written consent.",
    ],
  },
  {
    heading: "5. Client Engagements",
    body: [
      "Scope of work, deliverables, fees, timelines, and ownership of ad accounts and creative assets are governed by the specific agreement signed with each client. Nothing on this website forms a contract between us and any visitor unless we confirm it in writing.",
    ],
  },
  {
    heading: "6. Third-Party Services",
    body: [
      "This website links to third-party services such as Calendly and LinkedIn. Your use of those services is subject to their own terms and policies. We are not responsible for their content, availability, or practices.",
    ],
  },
  {
    heading: "7. Limitation of Liability",
    body: [
      "To the fullest extent permitted by law, Beyond Goofy shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website or reliance on its content. The website is provided on an as-is basis without warranties of any kind.",
    ],
  },
  {
    heading: "8. Governing Law",
    body: [
      "These Terms are governed by the laws of India. Any disputes arising in connection with this website or our services shall be subject to the exclusive jurisdiction of the courts of Bangalore, Karnataka.",
    ],
  },
  {
    heading: "9. Changes to These Terms",
    body: [
      "We may update these Terms of Service from time to time. Changes will be posted on this page with an updated effective date, and continued use of the website constitutes acceptance of the updated Terms.",
    ],
  },
  {
    heading: "10. Contact Us",
    body: [
      "Questions about these Terms can be sent to santhosh@beyondgoofy.com or by calling +91 95977 46622.",
    ],
  },
];

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Beyond Goofy</title>
        <meta
          name="description"
          content="Terms of Service for Beyond Goofy, India's healthcare performance marketing agency. Read the terms that govern the use of our website and services."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://beyondgoofy.com/terms-of-service" />
        <meta property="og:title" content="Terms of Service | Beyond Goofy" />
        <meta
          property="og:description"
          content="The terms that govern the use of the Beyond Goofy website and services."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/terms-of-service" />
      </Helmet>

      <main className="min-h-screen">
        <Navbar />
        <div className="pt-28 pb-16 sm:pt-32 lg:pt-40">
          <div className="container px-4 lg:px-8 max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4">
              Terms of Service
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground mb-8 sm:mb-10">
              Last updated: October 2026
            </p>

            <p className="text-sm sm:text-base text-muted-foreground mb-10">
              Welcome to Beyond Goofy. By accessing or using beyondgoofy.com,
              you agree to these Terms of Service. Please read them carefully.
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

export default TermsOfService;
