import React from "react";
import "../css/AboutHero.css";
import { Link } from "react-router-dom";
import AnimationComponent from '../components/AnimationComponent'

function AboutHero() {
  return (
    <>
      <div className=" bgAbout">
        <div className="container ">
        <AnimationComponent animationClass="animate__zoomIn">
          <div className="content d-flex justify-content-center flex-column align-items-center my-5">
            <h1 className="text-center size">
              Crafting Tomorrow's Landscapes with Sustainable Fiber Innovations.
            </h1>
            <p className="text-center size2">
              By integrating recyclable and renewable materials, this concept
              aims to create aesthetically pleasing and ecologically balanced
              landscapes that support resilient ecosystems.
            </p>
            <Link to="/contact" className="btn btn-btn2">
              Connect with us
            </Link>
          </div>
          </AnimationComponent>
        </div>
      </div>
    </>
  );
}

export default AboutHero;
