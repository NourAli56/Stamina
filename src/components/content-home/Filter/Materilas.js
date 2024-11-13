import React, { useState } from 'react'
import styles from '../contentHome.module.css'
import ReactLoading from 'react-loading';

export default function Materilas({loadingProducts, productsData }) {
    const [openMaterial, setOpenMaterial] = useState(true)
    const materialsFilter = productsData?.products?.filters?.find(filter => filter?.slug === "material")?.values || [];
    return (
        <>
            <div onClick={() => setOpenMaterial(!openMaterial)}
                style={{ marginBottom: "15px", cursor: "pointer" }} className='d-flex items-center justify-between' >
                <p className={styles.title} >Material</p>
                <i className={`${styles.arrow} ${openMaterial ? "fa fa-chevron-down" : "fa fa-chevron-up"} `} ></i>
            </div>
            {
                openMaterial &&loadingProducts?<ReactLoading type="cylon" color="#f79e10" height={'7%'} width={'7%'} />:
                <>
                    {materialsFilter?.map((mateial) => (
                        <div style={{ marginBottom: "5px" }} className='d-flex items-center gap-10'>
                            <input className={styles.checkbox} type='checkbox' />
                            <span style={{ color: "rgba(48, 55, 63, 1)" }} >{mateial?.name}</span>
                        </div>
                    ))}
                </>
            }
        </>
    )
}
