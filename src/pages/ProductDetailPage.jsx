import React, { useEffect, useState } from 'react'
import styles from "../css/ProductDetails.module.css"
import data from "../Products.json"
import { useParams } from 'react-router-dom'

const ProductDetailPage = () => {

  const {id} = useParams()
  const [product, setProduct]= useState({})
  useEffect(()=>{
    const existingProduct  = data.find(p=>p.id === id)
    if(existingProduct){
      setProduct(existingProduct)
    }
  },[[id, data]])
  

  return (
    <>
         <div className={styles.product_detail_page}>
      <header className={styles.header}>
        <h1>{product.title}</h1>
      </header>
      <main className={styles.main_content}>
        <div className={styles.product_image}>
          <img src={product.img || "/placeholder.svg"} alt={product.name} />
        </div>
        <div className={styles.product_info}>
          <h2>Product Description</h2>
          <p>{product.desc}</p>
          <h3>Key Features</h3>
          <ul className={styles.feature_list}>
            {product.features?.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </main>
    </div>
 
    </>
  )
}

export default ProductDetailPage
