import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../css/Hero.css";
import photo2 from "../images/slider1.png";
import photo3 from "../images/slider2.png";
import photo1 from "../images/slider3.png";
import 'animate.css';
import AnimationComponent from "./AnimationComponent";

function Hero() {
  return (
    <>
      <div id="heroSection">
        <Carousel fade>
          <Carousel.Item>
              <img
                src={photo1}
                className="d-block w-100 img-fluid "
                alt="carousel"
              />
            <div className="layer"></div>
            <div
              className="carousel-caption d-none d-sm-block top-35 carousel-text"
            >
              <AnimationComponent animationClass="animate__fadeInUp">
              <h3 >Embrace Peace in Every Thread</h3>
              <p>
                Discover our range of durable, lightweight fiber products
                inspired by the wisdom of Buddha.
              </p>
              </AnimationComponent>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={photo2}
              className="d-block w-100 img-fluid "
              alt="carousel"
            />
            <div className="layer"></div>
            <div className="carousel-caption d-none d-sm-block top-35 carousel-text">
            <AnimationComponent animationClass="animate__fadeInUp">
              <h3>Lightweight Fibers for Everyday Elegance</h3>
              <p>
                Experience the blend of luxury and affordability with our
                lightweight fiber products, perfect for elevating your everyday
                style."
              </p>
              </AnimationComponent>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={photo3}
              className="d-block w-100  img-fluid "
              alt="carousel"
            />
            <div className="layer"></div>
            <div className="carousel-caption d-none d-sm-block top-35 carousel-text">
            <AnimationComponent animationClass="animate__fadeInUp">
              <h3>Where Tradition Meets Innovation</h3>
              <p>
                Experience the perfect blend of ancient craftsmanship and modern
                technology in our lightweight and affordable fiber products.
              </p>
              </AnimationComponent>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default Hero;
