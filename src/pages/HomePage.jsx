import React from "react";
import Hero from "../components/molecules/Hero";
import Package from "../components/molecules/Package";
import Portfolio from "../components/molecules/Portfolio";
import Testimonial from "../components/molecules/Testimonial";
import Tools from "../components/molecules/Tools";
import Works from "../components/molecules/Works";
import Clients from "../components/molecules/Clients";
import CallAction from "../components/molecules/CallAction";

function HomePage() {
  return (
    <div>
      <Hero />
      <Package />
      <Tools/>
      <Works/>
      <Portfolio />
      <Testimonial />
      <Clients/>
      <CallAction/>
    </div>
  );
}

export default HomePage;
