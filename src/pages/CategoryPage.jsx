import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import productData from "../newProducts.json";

export default function CategoryPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-4">
      <div className="container mx-auto px-4 py-12">
        <div className="space-y-12 flex flex-column gap-6">
          {Object.entries(productData).map(([category, products]) => (
            <div key={category} className="space-y-6">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-semibold text-blue-600 capitalize">{category.replace(/([A-Z])/g, ' $1')}</h2>
                <ChevronRight className="w-5 h-5 text-blue-600" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product, index) => (
                  <div
                    key={index}
                    className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-gray-200"
                  >
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
                      <p className="text-sm text-gray-600">
                        {product.description ? product.description[0] : "No description available"}
                      </p>
                      <Link to={`/category/${category}/${index}`}>
                        <button className="mt-4 text-blue-600 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                          View Details <ChevronRight className="w-4 h-4" />
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
