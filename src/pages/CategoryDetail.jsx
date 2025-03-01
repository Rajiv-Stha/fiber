import { useEffect, useState } from "react";
import productData from "../newProducts.json";
import { useParams } from "react-router-dom";
export default function CategoryDetails() {
  const { category1, category2 } = useParams();
  console.log(category1, category2);
  const [selectedImage, setSelectedImage] = useState(0);
  const [ProductCategory, setProductCategory] = useState({});

  useEffect(() => {
    // Find the product based on category1 and category2
    const foundProduct = productData[category1][category2];
    setProductCategory(foundProduct);
  }, [category1, category2]);

  console.log(ProductCategory);
  /**
   * 1. import products from the products json file
   * 2. create a state to store the active product details
   * 3. find the specific product through category name and index (we can get it througth url) and  store it in the state
   * 4. use the data below of the details from the active product state  (replace the hard coded values with state values)
   *
   */

  const product = {
    name: "FRP Table",
    sizes: ['30"X48"', '24"X30"X18"'],
    material: "Fiber Reinforced Plastic (FRP)",
    types: ["Canteen", "Meeting", "Study"],
    use: "Home offices, retail stores, exhibitions, educational institutions, events or picnics, workspace, meeting rooms, dining room",
    description: [
      "Buddha Fiber offers a lightweight",
      "durable, and long-lasting solution for various settings.",
      "Its modern design makes it suitable for indoor and outdoor spaces, providing a stylish and practical addition to any environment.",
    ],
    features: [
      "Durability and portability",
      "Low Maintenance",
      "Eco-Friendly",
      "Comfort and Design Flexibility",
    ],
  };

  // const images = [
  //   "https://images.pexels.com/photos/1748864/pexels-photo-1748864.jpeg?auto=compress&cs=tinysrgb&w=1200",
  //   "https://images.pexels.com/photos/3138839/pexels-photo-3138839.jpeg?auto=compress&cs=tinysrgb&w=1200",
  //   "https://images.pexels.com/photos/269176/pexels-photo-269176.jpeg?auto=compress&cs=tinysrgb&w=1200",
  //   "https://images.pexels.com/photos/937490/pexels-photo-937490.jpeg?auto=compress&cs=tinysrgb&w=1200",
  // ];

  const images = ProductCategory?.image || [];
  return (
    <div
      style={{
        backgroundColor: "#f9fafb",
        padding: "50px 20px",
        minHeight: "100vh",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Breadcrumb */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "#718096",
            marginBottom: "32px",
          }}
        >
          <a
            href="#"
            style={{
              color: "inherit",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            Home
          </a>
          <span style={{ fontSize: "12px" }}>&gt;</span>
          <a
            href="#"
            style={{
              color: "inherit",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            Furniture
          </a>
          <span style={{ fontSize: "12px" }}>&gt;</span>
          <span style={{ color: "#3182ce" }}>{ProductCategory?.name}</span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "32px",
          }}
        >
          {/* Product Images */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <div
              style={{
                position: "relative",
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid #e2e8f0",
                aspectRatio: "1",
              }}
            >
              <img
                src={
                  images[selectedImage] || "/placeholder.svg"
                }
                alt={`Image`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "16px",
              }}
            >
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  style={{
                    border:
                      selectedImage === index
                        ? "2px solid #3182ce"
                        : "2px solid transparent",
                    borderRadius: "8px",
                    overflow: "hidden",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Thumbnail ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "32px" }}
          >
            <div>
              <h1
                style={{
                  fontSize: "36px",
                  fontWeight: "bold",
                  color: "#1a202c",
                  marginBottom: "16px",
                }}
              >
                {ProductCategory.name}
              </h1>
              <p style={{ fontSize: "18px", color: "#4a5568" }}>
                {ProductCategory?.description?.join(" ")}
              </p>
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  borderBottom: "2px solid #e2e8f0",
                  paddingBottom: "8px",
                }}
              >
                <button
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "#3182ce",
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                  }}
                >
                  Specifications
                </button>
                {/* <button
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "#718096",
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                  }}
                >
                  Features
                </button> */}
              </div>
              <div style={{ marginTop: "16px" }}>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginBottom: "8px",
                  }}
                >
                  Material
                </h3>
                <p style={{ color: "#4a5568" }}>{ProductCategory?.material}</p>
              </div>

              <div style={{ marginTop: "16px" }}>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginBottom: "8px",
                  }}
                >
                  Features
                </h3>
                {ProductCategory?.features?.map((size, index) => (
                  <div
                    key={index}
                    style={{
                      color: "#4a5568",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        backgroundColor: "#3182ce",
                        borderRadius: "50%",
                      }}
                    ></div>
                    {size}
                  </div>
                ))}
              </div>

              <div style={{ marginTop: "16px" }}>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginBottom: "8px",
                  }}
                >
                  Available Sizes
                </h3>
                {ProductCategory?.sizes?.map((size, index) => (
                  <div
                    key={index}
                    style={{
                      color: "#4a5568",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        backgroundColor: "#3182ce",
                        borderRadius: "50%",
                      }}
                    ></div>
                    {size}
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "16px" }}>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginBottom: "8px",
                  }}
                >
                  Types
                </h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "8px",
                  }}
                >
                  {ProductCategory?.types?.map((type, index) => (
                    <div
                      key={index}
                      style={{
                        color: "#4a5568",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          backgroundColor: "#3182ce",
                          borderRadius: "50%",
                        }}
                      ></div>
                      {type}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginBottom: "16px",
                }}
              >
                Uses
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {ProductCategory?.use?.split(", ").map((use, index) => (
                  <span
                    key={index}
                    style={{
                      padding: "8px 16px",
                      backgroundColor: "#ebf8ff",
                      color: "#3182ce",
                      borderRadius: "16px",
                      fontSize: "14px",
                    }}
                  >
                    {use}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", gap: "16px" }}>
              {/* <button
                style={{
                  flex: 1,
                  padding: "12px",
                  fontSize: "16px",
                  color: "#fff",
                  backgroundColor: "#3182ce",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Request Quote
              </button>
              <button
                style={{
                  flex: 1,
                  padding: "12px",
                  fontSize: "16px",
                  color: "#3182ce",
                  backgroundColor: "#fff",
                  border: "1px solid #3182ce",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Download Brochure
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
