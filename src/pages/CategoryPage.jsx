import { ChevronRight } from "lucide-react"

const categories = {
  Furniture: {
    items: [
      {
        name: "FRP Table",
        description: "Sizes available: 30x48, 24x30x78",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        name: "FRP Chair",
        description: "Size: 30x48",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        name: "FRP Chair",
        description: "Premium comfort",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  },
  Sanitary: {
    items: [
      {
        name: "Bath Tub",
        description: "Luxury bathroom solutions",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        name: "Dustbin",
        description: "Durable waste management",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        name: "Motu Patlu",
        description: "Special collection",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  },
  Agriculture: {
    items: [
      {
        name: "FRP Chair",
        description: "Weather resistant",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        name: "FRP Chair",
        description: "Heavy duty",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        name: "FRP Products",
        description: "Agricultural solutions",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  },
}

export default function CategoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* <h1 className="text-3xl font-bold text-gray-900 mb-8">Product Categories</h1> */}

        <div className="space-y-12">
          {Object.entries(categories).map(([category, { items }]) => (
            <div key={category} className="space-y-6">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-semibold text-blue-600">{category}</h2>
                <ChevronRight className="w-5 h-5 text-blue-600" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-gray-200"
                  >
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                      <button className="mt-4 text-blue-600 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                        View Details
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

