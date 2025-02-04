import React from "react";
import ProductCard from "../components/productCard";
import styles from "../css/productCard.module.css"
import { Link } from "react-router-dom";
import data from "../Products.json"
// import ProductTypes from "../components/ProductTypes";
// import ProductHero from "../components/ProductHero";

function Products() {
  return (
    <>
      {/* <ProductHero /> */}
      <div className={styles.productCard_wrapper}>
      {data.map((d)=>{
        return <ProductCard id={d.id} imageUrl={d.img} title={d.title} desc={d.desc}/>;
      })}

    

      </div>
      {/* <ProductTypes /> */}
     
    </>
  );
}
export default Products;
