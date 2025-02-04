import React, { useEffect } from "react";
import "../css/Features.css";
import trust from "../images/trust.jpg";
import premium from "../images/premium.jpg";
import strong from "../images/strong.jpg";
import quality from "../images/quality.jpg";
import best from "../images/best.png";
import longlasting from "../images/longlasting.jpg";
import { Col, Row } from "react-bootstrap";
import AnimationComponent from "./AnimationComponent";

function Features() {
  const FeaturesData = [
    {
      id: 1,
      image: trust,
      heading: "Trust & Quality",
      description:
        "Communicating trust and quality attracts discerning customers valuing these attributes.",
      animation:"animate__fadeInLeft"
    },
    {
      id: 2,
      image: strong,
      heading: "Durable & Light",
      description:
        "Buddha Fiber: Durable, lightweight products attract customers via clear communication.",
      animation:"animate__fadeInLeft"
    },
    {
      id: 3,
      image: premium,
      heading: "Premium Bathware",
      description:
        "Referring to high-end, skillfully crafted bathroom fixtures with unique designs.",
        animation:"animate__zoomIn"
    },
    {
      id: 4,
      image: best,
      heading: "Super Strong",
      description:
        "We denote super-strong, durable materials, often inspired by nature or spirituality.",
        animation:"animate__zoomIn"
    },
    {
      id: 5,
      image: quality,
      heading: "Cheap & Best",
      description:
        "We provide value: affordable products without compromising quality standards.",
        animation:"animate__fadeInRight"
    },
    {
      id: 6,
      image: longlasting,
      heading: "Premium Quality",
      description:
        "We deliver top-quality products crafted with finest materials, exceeding expectations.",
        animation:"animate__fadeInRight"

    },
  ];
  return (
    <>
      <div className="container mt-5">
        <AnimationComponent animationClass="animate__zoomIn">
        <div  className="d-flex justify-content-center flex-column">
            <h1 className="text-center mx-3 popular-brands-heading">
              Our Special Features
            </h1>
            <p className="text-center">
            What Makes Buddha Fiber Unique?
            </p>
        </div>
        </AnimationComponent>

            <Row className="text mt-5">
              {FeaturesData.map((data, index) => (
                <Col key={index} sm={12} md={3} lg={2} className="zoom">
                  <AnimationComponent animationClass={data.animation}>
                    
                  <img
                    src={data.image}
                    className="img-fluid imgfeatures"
                    alt="img"
                  />
                  <h5 className="text-center">{data.heading}</h5>
                  <p className="text-center">{data.description}</p>
              
                   </AnimationComponent>
                </Col>
              ))}
            </Row>


      </div>
    </>
  );
}

export default Features;
