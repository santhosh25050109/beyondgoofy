import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyDifferent from "@/components/WhyDifferent";
import Portfolio from "@/components/Portfolio";
import Metrics from "@/components/Metrics";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Beyond Goofy | Performance Marketing Powered by Influencers</title>
        <meta
          name="description"
          content="Beyond Goofy is a boutique performance marketing agency specializing in influencer marketing, Meta & Google ads, and social media management. We work with only 8 brands to ensure dedicated attention and real results."
        />
        <meta
          name="keywords"
          content="performance marketing, influencer marketing, digital marketing agency, Meta ads, Google ads, social media management, D2C marketing"
        />
      </Helmet>

      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <WhyDifferent />
        <Portfolio />
        <Metrics />
        <Process />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
