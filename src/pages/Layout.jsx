import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <div className="whatsappBtn">
  <div className="tooltip1">Hello, how can I help you?</div>
  <a href="https://wa.me/9857021757?text=Anyone available to chat?" target="_blank">
    <i className="fa-brands fa-square-whatsapp whatsapp2 hlo"></i>
  </a>
</div>

      <Footer />
    </>
  );
}

export default Layout;
