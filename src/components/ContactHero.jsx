import React, { useState } from "react";
import "../css/ContactHero.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AnimationComponent from "./AnimationComponent";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    message: "",
  });

  const [formError, setFormError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.name ||
      !formData.address ||
      !formData.email ||
      !formData.message
    ) {
      setFormError("Please fill out all fields");
      return;
    }

    // Reset form error
    setFormError("");

    // Submit form data
    console.log(formData);
    // You can send the form data to a server or handle it accordingly


    // Show modal
    setShow(true);

    // Reset form fields
    setFormData({
      name: "",
      address: "",
      email: "",
      message: "",
    });

    // Hide success message after a certain time (e.g., 5 seconds)
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  const handleClose = () => setShow(false);

  return (
    <>
      <div className="container">
      <AnimationComponent animationClass="animate__zoomIn">
        <div className="d-flex justify-content-center flex-column mt-5 ">
          <h1 className="text-center popular-brands-heading">Contact Us</h1>
          <p className="text-center justify">
            Get in Touch Today to Explore Sustainable Fiber Solutions for Your Next Project!
          </p>
        </div>
        </AnimationComponent>
        <AnimationComponent animationClass="animate__slideInUp">
        <div className="row border-form ">
          <div className="col-lg-6 py-4 bg-dark boder">
            <div className="info mt-2 p-4">
              <h4 className="text-light">Contact Information</h4>
              <p className="text-light">
                For inquiries, or more information, please reach out to us. Our team is here to help and looks forward to connecting with you.
              </p>
              <h4 className="text-light">Phone no.</h4>
              <p className="text-light">
                <i className="fa-solid fa-phone"></i> 985-7021757 <br /><i className="fa-solid fa-phone mt-2"></i> 9847296228
              </p>
              <h4 className="text-light">Email</h4>
              <p className="text-light">
                <i className="fa-solid fa-envelope"></i> Fiber123@gmail.com
              </p>
              <h4 className="text-light">Office Location</h4>
              <p className="text-light">
                <i className="fa-solid fa-location-dot"></i> Tilottama-3,
                Sitarice mill, Rupandehi, Nepal
              </p>
              <h4 className="text-light">Factory Location</h4>
              <p className="text-light">
                <i className="fa-solid fa-location-dot"></i> Madhawaliya,
                Tilottama-16, Rupandehi,Nepal
              </p>
              <div className="d-flex gap-3 links">
                <a href="https://www.facebook.com/buddhafiber/" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-facebook facebook"></i>
                </a>
                <a href="" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-instagram instagram"></i>
                </a>
                <a href="https://wa.me/9857021757?text=Anyone available to chat?" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-whatsapp whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 p-4 d-flex flex-column justify-content-center gap-2 ">
            <p style={{ fontSize: "35px" }}>Get In Touch</p>
            <form className="" onSubmit={handleSubmit}>
              <div className="form-group text-dark mt-2">
                <label htmlFor="name">Name*</label>
                <input
                  type="text"
                  className="form-control mt-2"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group text-dark">
                <label className="mt-2" htmlFor="address">
                  Address*
                </label>
                <input
                  type="text"
                  className="form-control mt-2"
                  id="address"
                  name="address"
                  placeholder="Enter your address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group text-dark">
                <label className="mt-2" htmlFor="email">
                  Email*
                </label>
                <input
                  type="email"
                  className="form-control mt-2"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group text-dark">
                <label className="mt-2" htmlFor="message">
                  Message*
                </label>
                <textarea
                  className="form-control mt-2"
                  id="message"
                  name="message"
                  rows="4.5"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-btn2 mt-3">
                Submit
              </button>
              {successMessage && (
                <p className="text-success mt-3">{successMessage}</p>
              )}
              {formError && <p className="text-danger mt-3">{formError}</p>}
            </form>
          </div>
        </div>
        </AnimationComponent>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title style={{color:"green"}}>Success</Modal.Title>
          </Modal.Header>
          <Modal.Body>Form submitted successfully ! Thankyou for contacting us.</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <div className="mt-5 pb-5 justify-content-center">
      <AnimationComponent animationClass="animate__zoomIn">
          <div className="d-flex justify-content-center flex-column ">
            <h1 className="text-center popular-brands-heading ">
              Our Location
            </h1>
            <p className="text-center justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vitae
              obcaecati aliquam.
            </p>
          </div>
          </AnimationComponent>
          <div className="row">
            <div className="col-md-6">
      <AnimationComponent animationClass="animate__slideInLeft">    
              <div className="map mt-4">
                <h2 className="text-center">Office location</h2>
                <iframe
                  className="border mt-2"
                  style={{ width: "100%" }}
                  title="Somarjun Tech"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d398.8716417139028!2d83.46612548157923!3d27.65557334380777!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996858491387e4d%3A0x6baf5d03c945a80e!2sSomarjun%20Pratisthan!5e0!3m2!1sen!2snp!4v1711607789888!5m2!1sen!2snp"
                  height="380"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              </AnimationComponent>
            </div>
            <div className="col-md-6">
      <AnimationComponent animationClass="animate__slideInRight">    
              <div className="map mt-4">
                <h2 className="text-center">Factory location</h2>
                <iframe
                  className="border mt-2"
                  style={{ width: "100%" }}
                  title="Somarjun Tech"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d398.8716417139028!2d83.46612548157923!3d27.65557334380777!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996858491387e4d%3A0x6baf5d03c945a80e!2sSomarjun%20Pratisthan!5e0!3m2!1sen!2snp!4v1711607789888!5m2!1sen!2snp"
                  height="380"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              </AnimationComponent>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
