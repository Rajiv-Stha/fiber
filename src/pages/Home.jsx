import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
// import ProductCategories from "../components/ProductCategories";
// import LatestProduct from "../components/LatestProduct";
import TailoredSolutions from "../components/TailoredSolutions";
// import Bestsellers from "../components/Bestsellers";
function Home() {
  return (
    <>
      <Hero />
      {/* <ProductCategories /> */}
      <Features />
      {/* <LatestProduct /> */}
      {/* <Bestsellers /> */}
      <TailoredSolutions />
    </>
  );
}

export default Home;
