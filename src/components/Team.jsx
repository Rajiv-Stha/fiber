// import React from 'react'
// import '../css/Team.css'

// function Team() {
//     const Team=[
//         {
//             id:1,
//             img:team1,
//             name:"John Doe",
//             post:"CEO / FOUNDER",

//         },
//         {
//             id:2,
//             img:team1,
//             name:"John Doe",
//             post:"CEO / FOUNDER",
//             iconsF:<i class="fa-brands fa-facebook"></i>,
//             iconsI:<i class="fa-brands fa-instagram"></i>,
//             iconsW:<i class="fa-brands fa-whatsapp"></i>

//         },
//         {
//             id:3,
//             img:team1,
//             name:"John Doe",
//             post:"CEO / FOUNDER",
//             iconsF:<i class="fa-brands fa-facebook"></i>,
//             iconsI:<i class="fa-brands fa-instagram"></i>,
//             iconsW:<i class="fa-brands fa-whatsapp"></i>

//         },
//         {
//             id:4,
//             img:team1,
//             name:"John Doe",
//             post:"CEO / FOUNDER",
//             iconsF:<i class="fa-brands fa-facebook"></i>,
//             iconsI:<i class="fa-brands fa-instagram"></i>,
//             iconsW:<i class="fa-brands fa-whatsapp"></i>

//         },

//     ]
//   return (
//     <>
//     <div className="container my-5">
//     <div className='d-flex justify-content-center flex-column ' >
//                 <h1 className='text-center popular-brands-heading '>Our Team</h1>
//                 <p className='text-center justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vitae obcaecati aliquam.</p>
//     </div>
//     <div className="row  ">
//         {Team.map((data, index)=>{
//             return(

//         <div key={index} className="col-lg-3 col-md-4 team ">
//             <div className="d-flex justify-content-center align-items-center flex-column gap-4">
//         <img src={data.img} alt="CEO" className='teamPicture'/>
//         <h3 className='mt-2'>{data.name}</h3>
//         <p>{data.post}</p>
//         <div className="d-flex social gap-3">

//         <a href="" target='__blank'>{data.iconsF}</a>
//         <a href="" target='__blank'>{data.iconsI}</a>
//         <a href="" target='__blank'>{data.iconsW}</a>
//         </div>

//     </div>
//     </div>
//           )})}

//     </div>
//     </div>
//     </>
//   )
// }

// export default Team

import React from "react";
import "../css/WhyChooseUs.css";
import { FaShieldAlt } from "react-icons/fa";
import { BsPaletteFill } from "react-icons/bs";
import { FaMedal } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import { FaEarthAfrica } from "react-icons/fa6";
import { LuFlower } from "react-icons/lu";
import { FaCoins } from "react-icons/fa6";
import { FaUmbrellaBeach } from "react-icons/fa";
import team1 from "../images/team1.webp";
import "../css/Team.css";
import AnimationComponent from "./AnimationComponent";

function WhyChooseUs() {
  const Reasons = [
    {
      id: 1,
      name: "JOHN DOE",
      post: "CEO / FOUNDER",
      iconsF: <i className="fa-brands fa-facebook facebook"></i>,
      iconsI: <i className="fa-brands fa-instagram instagram"></i>,
      iconsW: <i className="fa-brands fa-whatsapp whatsapp"></i>,
      animation:"animate__fadeInLeft"

    },
    {
      id: 2,
      name: "JOHN DOE",
      post: "CEO / FOUNDER",
      iconsF: <i className="fa-brands fa-facebook facebook"></i>,
      iconsI: <i className="fa-brands fa-instagram instagram"></i>,
      iconsW: <i className="fa-brands fa-whatsapp whatsapp"></i>,
      animation:"animate__zoomIn"

    },
    {
      id: 3,
      name: "JOHN DOE",
      post: "CEO / FOUNDER",
      iconsF: <i className="fa-brands fa-facebook facebook"></i>,
      iconsI: <i className="fa-brands fa-instagram instagram"></i>,
      iconsW: <i className="fa-brands fa-whatsapp whatsapp"></i>,
      animation:"animate__zoomIn"

      
    },
    {
      id: 4,
      name: "JOHN DOE",
      post: "CEO / FOUNDER",
      iconsF: <i className="fa-brands fa-facebook facebook"></i>,
      iconsI: <i className="fa-brands fa-instagram instagram"></i>,
      iconsW: <i className="fa-brands fa-whatsapp whatsapp"></i>,
      animation:"animate__fadeInRight"

    },
  ];
  return (
    <>
      <div className="container mt-5 ">
      <AnimationComponent animationClass="animate__zoomIn">
        <div className="d-flex justify-content-center flex-column ">
          <h1 className="text-center popular-brands-heading ">Our Team</h1>
          <p className="text-center justify">
          Empowering Change Through Sustainable Fibers.meet our team member.
          </p>
        </div>
        </AnimationComponent>
        <div className="row mb-5">
          {Reasons.map((data, index) => {
            return (
              <div key={index} className="margin col-lg-3 col-md-4 ">
                 <AnimationComponent animationClass={data.animation}>
                <div
                  className="container box2 text-light  d-flex justify-content-center align-items-center flex-column"
                  style={{
                    border: "2px solid rgb(218, 213, 213)",
                    backgroundColor: "black",
                  }}
                >
                 
                  <img
                    src={team1}
                    alt=""
                    className="teamPicture"
                    style={{ height: "250px", width: "450px", objectFit:"contain" }}
                  />
                  
                  <h5 className="mt-4">{data.name}</h5>
                  <p className="teamPost" style={{fontSize:'13px'}}>{data.post}</p>
                  {/* <div className="d-flex social gap-3 ">
                    <a href="" target="__blank">
                      {data.iconsF}
                    </a>
                    <a href="" target="__blank">
                      {data.iconsI}
                    </a>
                    <a href="" target="__blank">
                      {data.iconsW}
                    </a>
                  </div> */}
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
