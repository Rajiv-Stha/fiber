import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import productData from "../newProducts.json";

export default function CategoryEachDetail() {
  const { categoryName } = useParams();
  const products = productData[categoryName] || [];
  console.log(products)

  return (
    <div className="min-h-screen bg-gray-50 py-4">
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-2 mb-8">
          <Link to="/category" className="text-blue-600 flex items-center gap-1">
            <ChevronLeft className="w-5 h-5 my-2" /> Back to Categories
          </Link>
        </div>
        <h2 className="text-3xl font-semibold text-blue-600 capitalize mb-6">
          {categoryName.replace(/([A-Z])/g, " $1")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.length > 0 ? (
            products.map((product, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-gray-200"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={product.image[0] || "/placeholder.svg"}
                    alt={product.name}
                    className="!object-contain w-full !h-full group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-600">
                    {product.description ? product.description[0] : "No description available"}
                  </p>
                  <Link to={`/category/${categoryName}/${index}`}>
                    <button className="mt-4 text-blue-600 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                      View Details <ChevronRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No products available in this category.</p>
          )}
        </div>
      </div>
    </div>
  );
}
