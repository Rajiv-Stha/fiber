import React from "react";
import AboutHero from "../components/AboutHero";
import AboutC from "../components/AboutC";
import MissionAndVision from "../components/MissionAndVision";
import WhyChooseUs from "../components/WhyChooseUs";
import Team from "../components/Team";
import Testimonial from "../components/Testimonial";

function AboutUs() {
  return (
    <>
      <AboutHero />
      <AboutC />
      <MissionAndVision />
      <Team />
      <WhyChooseUs />
      <Testimonial />
    </>
  );
}

export default AboutUs;
