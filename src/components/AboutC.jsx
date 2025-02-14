import React from "react";
import img1 from "../images/about.jpg";
import { Container } from "react-bootstrap";
import "../css/AboutC.css";
import AnimationComponent from "./AnimationComponent";

function AboutC() {
  return (
    <>
      <Container className="aboutsection">
        <div className="row pb-5">
          <div className="col-lg-6 d-flex justify-content-center mt-2  flex-column">
          <AnimationComponent animationClass="animate__fadeInLeft">
            <h1 className="">
              <span className="aboutBorder">About Us</span>
            </h1>
            <p className="mt-2">
              {" "}
              We are supported by trained & experienced staff, whose valuable
              support & dedication, in fiber industries has enriched the
              company’s repute. They undertake the responsibility of fabricating
              FRP products by taking into consideration of shape and loading
              conditions be it mechanical, electrical, thermal or chemical and
              the industry in which they are to be used.
            </p>
            </AnimationComponent>
          </div>
          <div className="col-lg-6  mt-3">
          <AnimationComponent animationClass="animate__fadeInRight" >
          <img src={img1} className="img1 object-fit-contain" alt="company people" />
          </AnimationComponent>
          </div>
        </div>
      </Container>
    </>
  );
}

export default AboutC;
