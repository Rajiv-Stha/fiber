import React from "react";
import "../css/BlogBanner.css";
import AnimationComponent from "./AnimationComponent";

function BlogBanner() {
  return (
    <div className="bgBlog">
      <div className="container ">
      <AnimationComponent animationClass="animate__zoomIn">
        <div className="content d-flex justify-content-center flex-column align-items-center my-5">
          <h1 className="text-center size">
            Unraveling the Intricate Fiber Story: Insights into Sustainable
            Creations.
          </h1>
          <p className="text-center size3">
          Delves into the world of eco-friendly fiber technologies and their role in sustainable design. This narrative explores the innovative use of recyclable and renewable materials, highlighting their potential to create beautiful, environmentally responsible products that promote ecological balance and sustainability.
          </p>
        </div>
        </AnimationComponent>
      </div>
    </div>
  );
}

export default BlogBanner;
