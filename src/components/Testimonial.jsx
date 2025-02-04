import React from "react";
import "../css/Testimonial.css";
import Testimonial1 from "../images/Testimonial1.png";
import Testimonial2 from "../images/Testimonial2.png";

import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import AnimationComponent from "./AnimationComponent";

function Testimonial() {
  const Testimonial = [
    {
      id: 1,
      name:"Hari Thapa",
      kura:"I recently purchased made with Buddha Fiber, and I have to say, I'm extremely impressed",
      image:Testimonial2,
      animation:"animate__fadeInLeft"

    },
    {
      id: 2,
      name:"Kabita Bhattrai",
      kura:"I highly recommend products made with Buddha Fiber to anyone looking for quality, sustainability.",
      image:Testimonial1,
      animation:"animate__zoomIn"

    },
    {
      id: 3,
      name:"Sanjeev Shrestha",
      kura:"Knowing that it's made with eco-friendly, sustainable fibers add an extra layer of satisfaction every time I use it.",
      image:Testimonial2,
      animation:"animate__fadeInRight"

    }
  ]
  return (
    <div className="container">
      <MDBContainer className="py-5">
        <MDBRow className="d-flex justify-content-center mb-5">
      <AnimationComponent animationClass="animate__zoomIn">
          <div className="d-flex justify-content-center flex-column ">
            <h1 className="text-center popular-brands-heading">Testimonial</h1>
            <p className="text-center ">
            we provide eco-friendly and sustainable materials offering unmatched comfort and durability. Highly recommend for anyone seeking a high quality lifestyle.
            </p>
          </div>
          
          </AnimationComponent>
          <MDBCol md="10" xl="8" className="text-center"></MDBCol>
        </MDBRow>
        <MDBRow className="text-center d-flex align-items-stretch">
          {Testimonial.map((people, index)=>(
          <MDBCol key={index} md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
            <AnimationComponent animationClass={people.animation}>
            <MDBCard className="testimonial-card">
              <div
                className="card-up"
                style={{ backgroundColor: "#24aae2" }}
              ></div>
              <div className="avatar mx-auto bg-white">
                <img src={people.image} className="rounded-circle img-fluid" style={{height:"100px"}} />
              </div>
              <MDBCardBody>
                <h4 className="mb-4">{people.name}</h4>
                <hr />
                <p className="dark-grey-text mt-4">
                  <MDBIcon fas icon="quote-left" className="pe-2" />
                  {people.kura}
                </p>
              </MDBCardBody>
            </MDBCard>
            </AnimationComponent>
          </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Testimonial;
