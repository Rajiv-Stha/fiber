import "./App.css";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import ScrollToTop from "./components/ScrollToTop";
import ProductDetailPage from "./pages/ProductDetailPage";
import BlogDetails from "./components/BlogDetails";
import ProductCatagoryPage from "./pages/ProductCatagoryPage";
import Furniture from "./components/Furniture";
import SchoolFurniture from "./components/SchoolFurniture";
import Bath from "./components/Bath";
import Agriculture from "./components/Agriculture";
import "@fontsource/montserrat"; 
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/400-italic.css";
import "@fontsource/poppins"; 
import "@fontsource/poppins/200.css"; 
import "@fontsource/poppins/200-italic.css"; 

function App() {
  
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="products" element={<Products />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            {/* <Route
              path="products/productDetails/:id"
              element={<ProductDetailPage />}
            /> */}
            <Route path="/productDetails/:id" element={<ProductDetailPage/>} />
                        <Route
              path="blogs/BlogDetails/:id"
              element={<BlogDetails/>}
            />
            <Route
            path="productCategory"
            element={<ProductCatagoryPage/>}
            />
            <Route 
            path="productCategory/furniture"
            element={<Furniture/>}
            />
            <Route 
            path="productCategory/SchoolFurniture"
            element={<SchoolFurniture/>}
            />
            <Route 
            path="productCategory/Bath"
            element={<Bath/>}
            />
            <Route 
            path="productCategory/Agriculture"
            element={<Agriculture/>}
            />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
