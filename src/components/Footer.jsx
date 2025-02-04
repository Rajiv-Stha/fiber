import React from "react";
import "../css/Footer.css";
import logo from "../images/logo@1300x.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="bg-dark pt-5 pb-2">
        <div className="container borderr">
          <div className="row ">
            <div className="col-lg-5 col-md-12 mt-4 border-right">
              <Link to="/">
                <img className="logoFooter" src={logo} alt="logo" />
              </Link>{" "}
              <br /> <br />
              <p className="text-white" style={{ textAlign: "justify" }}>
                Buddha fiber Industries has made a name for itself as a leading
                producer, distributor, and exporter, transparent, and GRP/FRP
                sheets. Along with doors, road markers, chairs, tea tables,
                rainwater gutters, dustbins, stools, and school benches and
                desks, we deal in Fiber-Reinforced plastic (FRP) items. We
                inspired to create high-quality, eco-friendly textiles that
                promote well-being for both individuals and the planet.
              </p>
              <Link to="/about" className="btn btn-btn">
                LEARN MORE
              </Link>
            </div>
            <div className="col-lg-1 hide"></div>
            <div className="col-lg-2 col-md-4 mt-4 text-light lists padding ">
              <div>
                <h2 className="mb-5 head">Pages</h2>
                <div className="d-flex flex-column gap-4">
                  <li>
                    {" "}
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/products">Products</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/blogs">Blogs</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 mt-4 text-light lists padding ">
              <div>
                <h2 className="mb-5 head">Products</h2>
                <div className="d-flex flex-column gap-4">
                  <li>
                    {" "}
                    <Link to="/productCategory/furniture">Furniture</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/productCategory/schoolFurniture">School Furniture</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/productCategory/bath">Bath and Sanitary</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/productCategory/agriculture">Agriculture</Link>
                  </li>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 gap-5 mt-4 text-light lists padding ">
              <div>
                <h2 className="mb-5 head">Contact</h2>
                <div className="d-flex flex-column ">
                  <li>
                  
                    <p>
                      Phone: <br />
                      <span className="emailSize">
                      985-7021757 <br />
                      9847296228
                      </span>
                    </p>
                  </li>
                  <li>
                    <p className="">
                      Email: <span className="emailSize">buddhafiber@gmail.com</span> 
                    </p>
                  </li>
                  <li>
                   
                    <p>
                      Address: <br /><span className="emailSize">Tilottama-3, Sitarice mill, Rupandehi, Nepal</span>
                    </p>
                  </li>
                  <div className="social-media d-flex gap-3 mt-2">
                    <a
                      href="https://www.facebook.com/buddhafiber/"
                      target="__blank"
                    >
                      <i className="fa-brands fa-facebook facebook"></i>
                    </a>
                    <a href="#" target="__blank">
                      <i className="fa-brands fa-instagram instagram"></i>
                    </a>
                    <a href="https://wa.me/9857021757?text=Anyone available to chat?" target="__blank">
                      <i className="fa-brands fa-whatsapp whatsapp"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-4 text-center">
          <p className="text-white font1">
            © 2024 Buddha Fiber Udhyog. All rights reserved. <br /> <span style={{fontSize:'15px'}}> Designed and Developed By <a href="https://tech.somarjun.com/" target="__blank" style={{textDecoration:'none', color:'#ff8000'}}> Somarjun Tech Company.</a></span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
