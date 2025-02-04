import React, { useState } from 'react'
import CategoryTypes from './CategoryTypes'
import CategoryHeading from './CategoryHeading'
import jsonData from '../Products.json'
import { Link } from 'react-router-dom'

function Furniture() {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };
  const products = jsonData[0].products;
  return (
    
    <>
    <CategoryHeading/>
    <CategoryTypes/>
    <div className="container pb-2 d-flex flex-column justify-content-center align-items-center">
    <div className="container row justify-content-center pt-2">
            {products.slice(0, showAll ? products.length : 8).map((data, index) => {
              return (
                <div
                  key={index}
                  className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4"
                >
                  <div className="card menu-item">
                    <div className="img-section">
                      <img
                        className="card-img-top card-img-topp card-img-top2 img-fluid"
                        src={data.image1}
                        alt="Espresso"
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{data.title}</h5>
                      <p>{data.desFront}</p>
                      <Link
                        to={`/products/productDetails/${data.id}`}
                        className="seeMore"
                      >
                        See More..
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {products.length>9 && (
          <div className="d-flex justify-content-center mt-2">
            <button
              className="btn btn-btn2 btn-primary"
              onClick={toggleShowAll}
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
          ) }
    </div>
    </>
  )
}

export default Furniture
