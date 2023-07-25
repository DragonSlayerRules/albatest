import React from "react";
import Hero from "../components/molecules/Hero";
import Package from "../components/molecules/Package";
import Portfolio from "../components/molecules/Portfolio";
import Testimonial from "../components/molecules/Testimonial";

function HomePage() {
  return (
    <div>
      <Hero />
      <Package />
      <Portfolio />
      <Testimonial />
    </div>
  );
}

export default HomePage;
