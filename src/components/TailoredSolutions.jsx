import React, { useEffect } from "react";
import "../css/TailoredSolutions.css";
import photo from "../images/about.jpg";
import school from "../images/school.jpg";
import streets from "../images/streets.jpg";
import park from "../images/park.jpg";
import AnimationComponent from "./AnimationComponent";
import { FaSchool,FaTree } from "react-icons/fa6";
import { IoIosRestaurant } from "react-icons/io";
import { FaHome } from "react-icons/fa";

import { icons } from "lucide-react";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { GiFarmer } from "react-icons/gi";






function TailoredSolutions() {
  const Organization = [
    {
      id: 1,
      image:"https://img.icons8.com/3d-fluency/94/school-building.png",
      icons: <FaSchool size={60}/>,

      heading: "SCHOOL",
     

      description:
        "Our mission is based on a number of fundamental ideas that are intended to promote sustainable and moral business practices while offering their clients excellent products and customer service. We want to inspire industry towards sustainable practices, from sourcing to packaging.",
        animation:"animate__fadeInLeft"
    },
    {
      id: 2,
      icons:<IoIosRestaurant size={60}/>,
      heading: "CANTEEN",
      description:
        "The vision of Buddha Fibre is to make our customer satisfied; customer satisfaction is our first priority. We supply customers with luxurious, environmentally responsible products while leading a global movement towards a cleaner, more sustainable fabric market. ",
        animation:"animate__fadeInLeft"
      },
    {
      id: 3,
      image: park,
      icons:<FaTree size={60}/>,
      heading: "PARKS",
      description:
        "We are guided by a set of core values that shape every aspect of our business, from product development to customer relations. These values are the foundation of our commitment to sustainability, quality, Education and Awareness, customer focus and ethical practices.",
        animation:"animate__zoomIn"
    },
    {
      id: 4,
      image: photo,
      icons:<HiBuildingOffice2 size={60} />,

      heading: "OFFICES",
      description:
        "We are guided by a set of core values that shape every aspect of our business, from product development to customer relations. These values are the foundation of our commitment to sustainability, quality, Education and Awareness, customer focus and ethical practices.",
        animation:"animate__zoomIn"

    },
    {
      id: 5,
      image: park,
      icons:<GiFarmer size={60} />,

      heading: "AGRICULTURE",
      description:
        "We are guided by a set of core values that shape every aspect of our business, from product development to customer relations. These values are the foundation of our commitment to sustainability, quality, Education and Awareness, customer focus and ethical practices.",
        animation:"animate__fadeInRight"

    },
    {
      id: 6,
      image: park,
      heading: "HOME",
      icons:<FaHome size={60} />,

      description:
        "We are guided by a set of core values that shape every aspect of our business, from product development to customer relations. These values are the foundation of our commitment to sustainability, quality, Education and Awareness, customer focus and ethical practices.",
        animation:"animate__fadeInRight"
    },
  ];

  return (
    <>
      <div className="container my-5">
        <div className="d-flex flex-column">
        <AnimationComponent animationClass="animate__zoomIn">
              <h1 className="text-center popular-brands-heading">
                Sector We Serve
              </h1>

              <p className="text-center">
                At Buddha Fiber Udhyog, our versatile FRP products suit diverse
                nizations, ensuring durability and aesthetic appeal.
              </p>
              </AnimationComponent>

              <div className="row  flex-wrap mt-5 text-center ">
                {Organization.map((item, index) => (
                  <div
                    key={index}
                    className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12 mt-2"
                  >
                    <AnimationComponent animationClass={item.animation}>
                    <div className="org flex flex-col gap-2 items-center justify-center">
                      {item.icons}
                      <h4>{item.heading}</h4>
                    </div>
                    </AnimationComponent>
                  </div>
                ))}
              </div>
          </div>
        </div>
    </>
  );
}

export default TailoredSolutions;
