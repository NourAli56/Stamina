import React, { useEffect, useState } from 'react'
import styles from '../contentHome.module.css'
import ReactLoading from 'react-loading';

export default function Colors({ handleColorChange, loadingProducts, productsData }) {
    const [openColors, setOpenColors] = useState(true);

    const colorFilter = productsData?.products?.filters?.find(filter => filter?.slug === "color")?.values || [];
    
    const getColor = (colorSlug, name) => {
        switch (colorSlug) {
            case 'white-red':
                return '#ffffff';
            case 'black-yellow':
                return '#000000';
            case 'red-pink':
                return '#ff007f';
            case 'action-color-2':
                return '#ff4500';
            default:
                return name;
        }
    };

    return (
        <>
            <div
                onClick={() => setOpenColors(!openColors)}
                style={{ marginBottom: "15px", cursor: "pointer" }}
                className='d-flex items-center justify-between'>
                <p className={styles.title}>Colors</p>
                <i className={`${styles.arrow} ${openColors ? "fa fa-chevron-down" : "fa fa-chevron-up"}`} ></i>
            </div>
            {openColors && loadingProducts ? (
                <ReactLoading type="cylon" color="#f79e10" height={'7%'} width={'7%'} />
            ) : (
                <div className={styles.divColor}>
                    {colorFilter?.map((color, index) => (
                        <div 
                            className={styles.oneColor} 
                            key={index}
                            onClick={() => handleColorChange(color.slug)} 
                        >
                            <div
                                style={{ backgroundColor: getColor(color.slug, color.name.toLowerCase()) }}
                                className={styles.circleColor}>
                            </div>
                            <p className={styles.nameColor}>{color.name}</p>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}
