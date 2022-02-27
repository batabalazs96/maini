import React from 'react'
import styles from "./ProductEntry.module.scss"
export const ProductEntry = ({ imgSrc, price, name, badges, discountPrice }: any) => {

    return (
        <div className={styles.product_card} >
            <a href="#" className=""><img className={styles.product_card_img} src={imgSrc} alt="Card image cap" /></a>
            <div className="product-img-badges">
                {badges!=="" ? (badges.split(',').map((badge:any)=>{
                    return(
                        <div className="img-badge">
                            {badge}
                        </div>
                    )
                })) : ""}
            </div>
            <div className="product-card-body d-flex flex-column align-items-center">
                <a href="#" className="">{name}</a>
                {discountPrice? <p className="card-text"><span className="originalPrice">{price}</span> {discountPrice} Ft</p> : <p className="card-text">{price} Ft</p>}
            </div>
        </div>
    )
}
