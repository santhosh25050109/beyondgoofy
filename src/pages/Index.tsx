import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import WhyDifferent from "@/components/WhyDifferent";
import FutureVision from "@/components/FutureVision";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Beyond Goofy | #1 Healthcare Performance Marketing Agency in Bangalore</title>
        <meta
          name="description"
          content="India's leading healthcare performance marketing agency. We scale healthcare, D2C, protein & fitness brands on Meta & Google compliantly. Expertise in MTP, IVF, mental health, PCOS, and more."
        />
        <meta
          name="keywords"
          content="healthcare marketing, performance marketing, healthcare ads, D2C marketing, fitness marketing, protein brand marketing, Meta ads healthcare, Google ads healthcare, Bangalore marketing agency, femtech marketing, fertility marketing, mental health marketing"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Beyond Goofy | #1 Healthcare Performance Marketing Agency" />
        <meta property="og:description" content="Scaling healthcare brands where most agencies get banned. Performance marketing for healthcare, D2C, and fitness brands." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://beyondgoofy.com" />
      </Helmet>

      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Expertise />
        <Services />
        <Portfolio />
        <WhyDifferent />
        <FutureVision />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
