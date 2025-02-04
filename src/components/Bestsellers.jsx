import React, { useRef, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import img6 from "../images/img6.jpg";
import { Card, Button } from "react-bootstrap";
import "../css/Bestsellers.css";

function Bestsellers() {
  const cardInformation = [
    {
      id: 1,
      title: "pillow",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, perferendis.",
      img: img1,
    },
    {
      id: 2,
      title: "pillow",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, perferendis.",
      img: img2,
    },
    {
      id: 3,
      title: "pillow",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, perferendis.",
      img: img3,
    },
    {
      id: 4,
      title: "pillow",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, perferendis.",
      img: img4,
    },
    {
      id: 5,
      title: "pillow",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, perferendis.",
      img: img5,
    },
    {
      id: 6,
      title: "pillow",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, perferendis.",
      img: img6,
    },
    {
      id: 7,
      title: "pillow",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, perferendis.",
      img: img2,
    },
  ];

  const scrollRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setShowLeftButton(scrollLeft > 0);
        setShowRightButton(scrollLeft < scrollWidth - clientWidth);
      }
    };
    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial check
    }
    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scroll = (scrollOffset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollOffset, behavior: "smooth" });
    }
  };

  return (
    <Container className="pb-5">
      <div className="d-flex justify-content-center flex-column">
        <h1 className="text-center mx-3 popular-brands-heading">
          Top Selling Product
        </h1>
        <p className="text-center">Lorem ipsum dolor sit amet consectetur.?</p>
      </div>
      <div className="slider2 mt-5 pb-5 position-relative">
        {showLeftButton && (
          <button className="scroll-button left" onClick={() => scroll(-300)}>
            &#9664;
          </button>
        )}
        <div className="slide-track2" ref={scrollRef}>
          <div className="card-container2 d-flex gap-2">
            {cardInformation.map((data, index) => (
              <Card key={index} style={{ width: "18rem", height: "28rem" }}>
                <Card.Img
                  variant="top"
                  style={{ height: "15rem" }}
                  src={data.img}
                />
                <Card.Body>
                  <div className="d-flex justify-content-center">
                    <Card.Title>{data.title}</Card.Title>
                  </div>
                  <div className="text-center">
                    <Card.Text>{data.text}</Card.Text>
                  </div>
                  <div className="d-flex justify-content-center mt-2">
                    <Button className="btn-btn" href="/">
                      See More
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
        {showRightButton && (
          <button className="scroll-button right" onClick={() => scroll(300)}>
            &#9654;
          </button>
        )}
      </div>
    </Container>
  );
}

export default Bestsellers;
