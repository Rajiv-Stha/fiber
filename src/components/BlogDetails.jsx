import React, { useEffect, useState } from "react";
import "../css/BlogDetails.css";
import { Link, useParams } from "react-router-dom";
import chair from "../images/chair.jpeg";
import { Container } from "react-bootstrap";
import blogData from '../BlogData.json'

function BlogDetails() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    useEffect(()=>{
        const fetchedData = blogData.find((items) => items.id === parseInt(id));
        setBlog(fetchedData);
        
    }, [id]);
    if(!blog){
        return <div>Loading...</div>
    }
    const blogDataLength = blogData.length;
    const latest1 = blogDataLength -1;
    // console.log(blogData[latest1].id);
    // const { id } = useParams();
    // const [blog, setProduct] = useState(null);
    // useEffect(() => {
    //   const fetchedProduct = blogData.find((item) => item.id === parseInt(id));
    //   setProduct(fetchedProduct);
    // }, [id]);
  
    // if (!blog) {
    //   return <div>Loading...</div>;
    // }
  return (
    <>
      <div className="bg-secondary">
        <div className=" container Hero text-center text-light py-5">
          <h1>{blog.blogTitle}</h1>
          <p>
            {blog.blogDesc}
          </p>
          <div className="returnPage   border2">
          <Link className="navv2" to="/">
            Home
          </Link>
          <i className="fa-solid fa-greater-than mx-2 navv2"></i>
          <Link className="navv2 " to="/Blogs">
            Blogs
          </Link>
          </div>
        </div>
      </div>
      <Container className="mb-5">
        <div className="row">
          <div className="col-xl-8 mt-5  d-flex flex-column justify-content-center  px-css  ">
            <div className="d-flex">
              <div className="d-flex headContent">
                <i className="fa-solid fa-clock mt-1 mx-2"></i>
                <p> {blog.readTime}</p>
              </div>
              <div className="d-flex mx-4 headContent">
                <i className="fa-solid fa-calendar-days mt-1 mx-2"></i>
                <p className="">{blog.publishDate}</p>
              </div>
            </div>
            <img src={blog.blogImg} alt="blog" className="mainBlogImg" />
            <div className=" mt-3 ">
              <h2>
                {blog.blogTitle}
              </h2>
              <p className="text-justify">
               {blog.Description}
              </p>
            </div>
          </div>
          <div className=" border1 col-xl-4">
          <h2 className="  mt-5 text-center">Our Latest Blogs</h2>
          <div className="  d-flex flex-wrap align-items-center justify-content-center gap-4 mt-4">
            
            <Link to={`/blogs/blogdetails/${blogData[latest1].id}`}  className="blog-box ">
            
                <img className="blog-img" src={chair} alt="chair"  />
                <div className="blog-box2 d-flex align-items-center flex-column">
                {/* <div className="layerBlog"></div> */}
                    <h5 className="text-center text-center1 ">{blogData[latest1].blogTitle}</h5>
                    <p className="text-center">{blogData[latest1].blogDesc}</p>
                    <Link to={`/blogs/blogdetails/${blogData[latest1].id}`} className="BlogseeMore" >See More</Link>
                    </div>
                   
            </Link>
            <Link to={`/blogs/blogdetails/${blogData[latest1-1].id}`}  className="blog-box">
            
                <img className="blog-img" src={chair} alt="chair"  />
                <div className="blog-box2 d-flex align-items-center flex-column">
                {/* <div className="layerBlog"></div> */}
                <h5 className="text-center text-center1 ">{blogData[latest1 - 1].blogTitle}</h5>
                <p className="text-center">{blogData[latest1 - 1].blogDesc}</p>
                <Link to={`/blogs/blogdetails/${blogData[latest1-1].id}`} className="BlogseeMore" >See More</Link>

                </div>
            </Link>
            <Link to={`/blogs/blogdetails/${blogData[latest1-2].id}`} className="blog-box">
            
                <img className="blog-img" src={chair} alt="chair"  />
                <div className="blog-box2 d-flex align-items-center flex-column">
                
                {/* <div className="layerBlog"></div> */}
                <h5 className="text-center text-center1 ">{blogData[latest1 - 2].blogTitle}</h5>
                <p className="text-center">{blogData[latest1 - 2].blogDesc}</p>
                <Link to={`/blogs/blogdetails/${blogData[latest1-2].id}`} className="BlogseeMore" >See More</Link>

                </div>

            </Link>
          </div>
          </div>

        </div>
      </Container>
    </>
  );
}

export default BlogDetails;
