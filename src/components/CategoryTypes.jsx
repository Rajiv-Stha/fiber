import React, { useState } from 'react';
import '../css/CategoryTypes.css';
// import bathTub from '../images/BathTubs.png';
import { Link, useLocation } from 'react-router-dom';
import { NavLink } from 'react-bootstrap';


function CategoryTypes() {
    const location = useLocation();
    return (
        <div className='container'>
            <div className=" my-2 d-flex gap-1 justify-content-center flex-wrap  py-2">
                <Link
                    // className={`col-md-2 mt-1 btn  categoryBtn `}
                    className={`col-md-2 mt-1 btn categoryBtn ${location.pathname === '/productCategory/furniture' ? 'activeLink' : ''}`}
                    style={{ fontSize: '18px'}}
                    to="/productCategory/furniture"
                >
                    Furniture
                </Link>
                {/* <NavLink
                    to="/productCategory/furniture"
                    style={{ fontSize: "17px" }}
                    className={(e) => {
                      return e.isActive
                        ? "aqua paddingg  nav-link"
                        : "nav-link paddingg hover active";
                    }}
                  >
                    Home
                  </NavLink> */}
                {/* <div className="col-md-1"></div> */}
                <Link
                    className={`col-md-2 mt-1 btn categoryBtn ${location.pathname === '/productCategory/schoolFurniture' ? 'activeLink' : ''}`}
                    style={{ fontSize: '18px' }}
                    to="/productCategory/schoolFurniture"
                >
                    School furniture
                </Link>
                {/* <div className="col-md-1"></div> */}

                <Link
                   className={`col-md-2 mt-1 btn categoryBtn  ${location.pathname === '/productCategory/bath' ? 'activeLink' : ''}`}
                    style={{ fontSize: '18px' }}
                    to="/productCategory/bath"
                >
                    Bath and Sanitary
                </Link>
                {/* <div className="col-md-1"></div> */}

                <Link
                    className={`col-md-2 mt-1 btn categoryBtn ${location.pathname === '/productCategory/agriculture' ? 'activeLink' : ''}`}
                    style={{ fontSize: '18px'  }}
                    to="/productCategory/agriculture"
                >
                    Agriculture
                </Link>
                {/* <div className="col-md-1"></div> */}


            </div>
        </div>
    );
}

export default CategoryTypes;
