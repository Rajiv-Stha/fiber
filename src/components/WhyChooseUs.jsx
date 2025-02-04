import React from "react";
import "../css/WhyChooseUs.css";

import { FaMedal } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import { FaCoins } from "react-icons/fa6";
import { FaUmbrellaBeach } from "react-icons/fa";
import { MdSentimentSatisfiedAlt } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { GiStrong } from "react-icons/gi";
import { MdDesignServices } from "react-icons/md";
import AnimationComponent from "./AnimationComponent";


function WhyChooseUs() {
  const Reasons = [
    {
      id: 1,
      heading: "Sustainability",
      description:
        "We use eco-friendly materials such as organic cotton, bamboo, and recycled fibers, and our manufacturing processes are designed to minimize environmental impact.",
      icon: FaLeaf,
      animation:"animate__fadeInLeft"

    },
    {
      id: 2,
      heading: "Customer Satisfaction",
      description:"We uphold transparency and honesty in every transaction. Trust that your informed decision is based on accurate, comprehensive, and verified material and process information.",
      icon: MdSentimentSatisfiedAlt,
      animation:"animate__fadeInLeft"

    },

    {
      id: 3,
      heading: "Exceptional Quality",
      description:
        "Dedicated to delivering the highest quality, ensuring durability, softness, and comfort. Trust Buddha Fiber for long-term satisfaction and lasting investment.",
      icon: FaMedal,
      animation:"animate__fadeInRight"

    },
    {
      id: 4,
      heading: "Transparent and Honest",
      description:
        "We uphold transparency and honesty in every interaction. Trust our products for informed decisions rooted in accurate information on materials, processes, and values.",
      icon: FaLeaf,
      animation:"animate__fadeInRight"

    },
    {
      id: 5,
      heading: "Honest Production",
      description:"From sourcing raw materials to production, we uphold ethical standards. Choose items to promote fair labor practices, enhancing worker well-being.",
      icon: VscWorkspaceTrusted,
      animation:"animate__fadeInLeft"

    },

    {
      id: 6,
      heading: "Superior Quality",
      description:
        "Our products crafted with highest quality standards, ensuring durability, comfort, exceptional softness, and long-lasting performance you can expect.",
      icon: GiStrong,
      animation:"animate__fadeInLeft"

    },
    {
      id: 7,
      heading: "Innovative Design",
      description:
        "We invest in Research and Development for innovative textile solutions. Our designs are stylish, and optimized for functionality and sustainability.  ",
      icon: MdDesignServices,
      animation:"animate__fadeInRight"

    },
    {
      id: 8,
      heading: "Building a Better Future",
      description:
      "Choosing Buddha Fiber means joining a movement for a sustainable future. Your support creates environmental and social impacts, making a difference.",
      icon: FaUmbrellaBeach,
      animation:"animate__fadeInRight"

    },
  ];
  return (
    <>
      <div className="container mt-5 ">
      <AnimationComponent animationClass="animate__zoomIn">
        <div className="d-flex justify-content-center flex-column ">
          <h1 className="text-center popular-brands-heading">
            Why Choose Our Products?
          </h1>
          <p className="text-center W-20">
          Choosing Buddha Fiber products offers a multitude of benefits, making them the ideal choice for consumers who prioritize sustainability, quality, and ethical practices. Here's why you should choose our products:
          </p>
        </div>
        </AnimationComponent>
        <div className="row mb-5">
          {Reasons.map((data, index) => {
            return (
              <div key={index} className="margin col-lg-3 col-md-4 ">
                <AnimationComponent animationClass={data.animation}>
                <div className="container reason d-flex justify-content-center align-items-center flex-column">
                  <span className="icon">
                    {data.icon && <data.icon className="reasonIcon" />}
                  </span>
                  <p className="mt-2 feature text-center">{data.heading}</p>
                  <p className="text-center text-justify">{data.description}</p>
                </div>
                </AnimationComponent>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default WhyChooseUs;
