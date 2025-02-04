import React from "react";
import "../css/MissionAndVision.css";
// import photo from '../images/about.jpg'
import { GiBullseye } from "react-icons/gi";
import { FaEye } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import AnimationComponent from "./AnimationComponent";



function MissionAndVision() {
  const Target = [
    {
      id: 1,
      icon: GiBullseye,
      heading: "MISSION",
      description:
        "Our mission is based on a number of fundamental ideas that are intended to promote sustainable and moral business practices while offering their clients excellent products and customer service. We want to inspire industry towards sustainable practices, from sourcing to packaging.",
        animation:"animate__fadeInLeft"
    },
    {
      id: 2,
      icon: FaEye,
      heading: "VISION",
      description:
        "The vision of Buddha Fiber is to make our customer satisfied; customer satisfaction is our first priority. We supply customers with luxurious, environmentally responsible products while leading a global movement towards a cleaner, more sustainable fabric market. ",
        animation:"animate__zoomIn"

    },
    {
      id: 3,
      icon: IoDiamondOutline,
      heading: "VALUES",
      description:
        "We are guided by a set of core values that shape every aspect of our business, from product development to customer relations. These values are the foundation of our commitment to sustainability, quality, Education and Awareness, customer focus and ethical practices.",
        animation:"animate__fadeInRight"

    },
  ];
  return (
    <>
      <div className="container mt-5">
      <AnimationComponent animationClass="animate__zoomIn">
        <div className="d-flex justify-content-center flex-column ">
          <h1 className="text-center popular-brands-heading">
            Our Mission, Vision & Values
          </h1>
        </div>
        </AnimationComponent>
        <div className="row pb-5 mt-2">
          {Target.map((value, index) => (
            <div key={index} className="col-lg-4 mt-4  ">
              <AnimationComponent animationClass={value.animation}>
              <div className="container d-flex flex-column align-items-center  justify-content-center card-image">
                {value.icon && <value.icon className="bullsEye" />}
                <h4 className="target">{value.heading}</h4>
                <p className="text-center ">{value.description}</p>
              </div>
              </AnimationComponent>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MissionAndVision;
