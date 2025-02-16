import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import productData from "../newProducts.json";
import AnimationComponent from "./AnimationComponent";


export default function ProductCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const allProducts = Object.entries(productData).flatMap(([category, products]) =>
    products.map((product, index) => ({ ...product, category, index }))
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <AnimationComponent animationClass="animate__zoomIn">
        <div  className="d-flex justify-content-center flex-column">
            <h1 className="text-center mx-3 mt-4 popular-brands-heading">
              Products
            </h1>
            <p className="text-center">
            You can find all products here.
            </p>
        </div>
        </AnimationComponent>
      <Slider {...settings}>
        {allProducts.map((product, index) => (
          <div key={index} className="px-2">
            <div className="group bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.image[0] || "/placeholder.svg"}
                  alt={product.name}
                  className="!object-contain w-full !h-full group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 truncate">
                  {product.description ? product.description[0] : "No description available"}
                </p>
                <Link to={`/category/${product.category}/${product.index}`}>
                  <button className="mt-4 text-blue-600 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
