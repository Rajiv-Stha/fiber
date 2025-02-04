import React from 'react'
import {Link} from "react-router-dom"
import styles from "../css/productCard.module.css"
const ProductCard = ({ imageUrl, title, desc, id }) => {
   
  return (
   <>
   <Link to={`/productDetails/${id}`}>

  
     <div className={styles.cardStyle}>
      <img src={imageUrl} alt={title} className={styles.imageStyle} />
      <div className={styles.contentStyle}>
        <h2 className={styles.titleStyle}>{title}</h2>
        <p className={styles.descriptionStyle}>{desc}</p>
      </div>
    </div>
    </Link>
   </>
  )
}

export default ProductCard;
