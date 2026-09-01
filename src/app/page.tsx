import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/WhyUs";
import WhatWeDo from "@/components/WhatWeDo";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <WhatWeDo />
      <Services />
      <Pricing />
      <HowItWorks />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
