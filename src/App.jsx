import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import WorkingSection from "./Components/WorkingSection";
import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio";
import PriceingPlans from "./Components/PriceingPlans";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";
// import Testimonails from "./Components/Testimonails";

import BlogSection from "./Components/BlogSection";
import Contact from "./Components/Contact";
import GetStart from "./Components/GetStart";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WorkingSection />
      <Services />
      <Portfolio />
      {/* <Testimonails /> */}
      <PriceingPlans />
      <Blog />
      <Footer />

      <BlogSection />
      <Contact />
      <GetStart />
    </>
  );
};

export default App;
