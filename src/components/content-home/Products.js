import React, { useEffect } from 'react';
import styles from './contentHome.module.css';
import img1 from '../../assets/Images/Group 1171277507.svg';
import img2 from '../../assets/Images/Group 1171277508.svg';
import img3 from '../../assets/Images/Group 1171277509.svg';
import img4 from '../../assets/Images/Group 1171277510.svg';
import img5 from '../../assets/Images/Group 1171277511.svg';
import img6 from '../../assets/Images/Group 1171277512.svg';
import img7 from '../../assets/Images/Group 1171277513.svg';
import SinglePagenation from '../general/Pagination/SinglePagenation';
import { useNavigate } from 'react-router-dom';
import CardProduct from './CardProduct';

export default function Products({ products ,pageCount,onPageChange}) {
    const navigate = useNavigate()
    const images = [img1, img2, img3, img4, img5, img6, img7];
    const gotToDetails = (id) => {
        navigate(`/product/${id}`)
    }
    return (
        <div className={styles.allProducts}>
            {console.log('products pppppp',products)}
            {console.log('pageCount pppppp',pageCount)}
            <div className={`${styles.divProduct} d-flex items-start gap-10`}>
                {
                    products?.map((product, index) => (
                        <CardProduct index={index} images={images} product={product} gotToDetails={gotToDetails} />
                    ))
                }
            </div>
            <br />
            <SinglePagenation pageCount={pageCount} changePage={onPageChange} />
            <br />
        </div>
    );
}
