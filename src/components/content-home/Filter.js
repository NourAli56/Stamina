import React, { useState } from 'react'
import styles from './contentHome.module.css'
import Categories from './Filter/Categories'
import Colors from './Filter/Colors'
import Materilas from './Filter/Materilas'

export default function Filter({handleColorChange,loadingProducts,loadingCategories, productsData,categories }) {
    return (
        <div className={styles.filter} >
            <Categories loadingCategories={loadingCategories} categories={categories} />
            <div className={styles.line} ></div>
            <Colors handleColorChange={handleColorChange} loadingProducts={loadingProducts} productsData={productsData} />
            <div className={styles.line} ></div>
            <Materilas loadingProducts={loadingProducts} productsData={productsData} />
        </div>
    )
}
