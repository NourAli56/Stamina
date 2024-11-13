import React from 'react'
import styles from './contentHome.module.css';

export default function CardProduct({images,width,product,gotToDetails,index}) {
    return (
        <div className={width ? styles.oneProduct1:styles.oneProduct} onClick={() => gotToDetails(product?.slug)} key={product?.id}>
            <div>
                <img className={styles.imgProduct} src={images[index % images.length]} alt={`Product ${index + 1}`} />
            </div>
            <div className='d-flex items-center justify-between'>
                <span>{product?.name}</span>
                {product?.brand?.name && <div className={styles.productCategory}>{product?.brand?.name}</div>}
            </div>
            <span>{product?.category_id}</span>
            <div className='d-flex items-center gap-10'>
                {
                    product?.colors?.map((color) => {
                        const primaryColor = color?.slug?.split('-')[0];
                        return (
                            <div key={color.slug} style={{ backgroundColor: primaryColor }} className={styles.circleProductColor}></div>
                        );
                    })
                }
            </div>
        </div>
    )
}
