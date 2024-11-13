import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import img1 from '../../assets/Images/Group 1171277507.svg'
import img2 from '../../assets/Images/Group 1171277508.svg'
import img3 from '../../assets/Images/Group 1171277509.svg'
import img4 from '../../assets/Images/Group 1171277510.svg'
import styles from './productDetails.module.css'
import TableDetails from './TableDetails';
import compare from '../../assets/Icons/Compare.svg'
import FavouriteProduct from './FavouriteProduct';
import { useSelector } from "react-redux"
import { emptyOneProducts, loadOneProducts } from '../../redux/actions/ActionProducts';
import { useDispatch } from 'react-redux';
import ReactLoading from 'react-loading';

export default function ProductsDetails() {
    let { id } = useParams()
    const { oneProduct, loadingOneProduct } = useSelector(state => state.productsState)
    let dispatch = useDispatch()
    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(loadOneProducts(id))
        return (() => {
            dispatch(emptyOneProducts())
        })
    }, [])
    return (
        <div className={styles.divDetails} >
            {
                !loadingOneProduct ?
                    <>
                        <div className={`d-flex items-start justify-between ${styles.innerDetails}`} >
                            <div style={{ flexDirection: "column" }} className='d-flex items-center justify-center' >
                                <img src={img1} />
                                <div style={{ marginTop: "20px" }} className='d-flex items-center gap-10' >
                                    <img src={img2} />
                                    <img src={img3} />
                                    <img src={img4} />
                                </div>
                            </div>
                            <div className={styles.divInfo} >
                                <p className={styles.title} >{oneProduct?.name}</p>
                                <p className={styles.description} >{oneProduct?.overview}... </p>
                                <TableDetails oneProduct={oneProduct} />

                                {/*Here the item has already stored in redux ^_^ */}

                                <button className={styles.compareButton} >
                                    <span style={{ marginRight: "10px" }} >Add to compare</span>
                                    <img src={compare} />
                                </button>
                            </div>
                        </div>
                        <FavouriteProduct />
                    </> : <div style={{ width: "100%" }} className='loadingg' > <ReactLoading type="cylon" color="#f79e10" height={'7%'} width={'7%'} /></div>

            }

        </div>
    )
}
