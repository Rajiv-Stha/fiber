import React, { useState } from "react";
import "../css/BlogContent.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import BlogData from "../BlogData.json";
import { Link } from "react-router-dom";
import AnimationComponent from "./AnimationComponent";

function BlogContent() {
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(3);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = BlogData.slice(indexOfFirstBlog, indexOfLastBlog);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Pagination numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(BlogData.length / blogsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container mb-4">
      <AnimationComponent animationClass="animate__slideInUp">
      <div className="d-flex justify-content-center flex-column">
        <h1 className="text-center popular-brands-heading mt-5">
          Popular Blogs
        </h1>
        <p className="text-center">
          Jump into the latest trends and reviews as top bloggers explore the
          benefits and unique qualities of Buddha Fiber. From sustainable living
          tips to fashion-forward advice, see why everyone is outstanding about
          this eco-friendly material.
        </p>
      </div>
      </AnimationComponent>

      <div className="row mb-5">
        {currentBlogs.map((data, index) => {
          return (
            <div key={index} className="col-lg-4 col-md-6 mt-4">
              <AnimationComponent animationClass={data.animation}>
              <Card style={{ width: "100%" }}>
                <Card.Img variant="top" src={data.blogImg} />
                <Card.Body>
                  <Card.Title>{data.blogTitle}</Card.Title>
                  <Card.Text>{data.blogDesc}</Card.Text>
                  <div className="d-flex gap-4">
                    <Link
                      to={`/blogs/blogdetails/${data.id}`}
                      className="btn color"
                    >
                      Click for details
                    </Link>
                    <p className="mt-2">{data.blogTime}</p>
                  </div>
                </Card.Body>
              </Card>
              </AnimationComponent>
            </div>
          );
        })}
      </div>

      <div className="d-flex justify-content-center mt-4">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <Button
                style={{ color: "#24aae2", borderColor: "#24aae2" }}
                className="page-link"
                onClick={() => paginate(currentPage - 1)}
              >
                <i className="fa-solid fa-less-than"></i> Previous
              </Button>
            </li>
            {pageNumbers.map((number) => (
              <li
                key={number}
                className={`page-item ${
                  currentPage === number ? "active" : ""
                }`}
              >
                <Button
                  className="page-link"
                  onClick={() => paginate(number)}
                  style={{
                    backgroundColor: "#24aae2",
                    color: "black",
                    marginRight: "5px",
                    marginLeft: "5px",
                    borderColor: "#24aae2",
                  }}
                >
                  {number}
                </Button>
              </li>
            ))}
            <li
              className={`page-item ${
                currentPage === pageNumbers.length ? "disabled" : ""
              }`}
            >
              <Button
                style={{ color: "#24aae2", borderColor: "#24aae2" }}
                className="page-link"
                onClick={() => paginate(currentPage + 1)}
              >
                Next <i className="fa-solid fa-greater-than"></i>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default BlogContent;
