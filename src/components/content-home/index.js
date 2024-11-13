import React, { useEffect, useState } from 'react'
import styles from './contentHome.module.css'
import Filter from './Filter'
import Products from './Products';
import { useDispatch } from 'react-redux';
import {  loadProductsByCategory } from '../../redux/actions/ActionProducts';
import { useSelector } from "react-redux"
import { loadCategories } from '../../redux/actions/ActionCategories';
import ReactLoading from 'react-loading';

export default function ContentHome() {
    let dispatch = useDispatch()
    const { productsData, loadingProducts } = useSelector(state => state.productsState)
    const { categories, loadingCategories } = useSelector(state => state.categoriesState)
    const [selectedColor, setSelectedColor] = useState('');
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(loadCategories())
    }, []);
    useEffect(() => {
        if (categories?.length > 0) {
            dispatch(loadProductsByCategory(categories[0].slug, page))
        }
    }, [categories, page])

    const handleColorChange = (color) => {
        setSelectedColor(color);
        setPage(1);
    };
    const handlePageChange = ({ selected }) => {
        setPage(selected + 1);
    };
    console.log('selectedColor', selectedColor)
    const filteredColors = productsData?.products?.data?.filter(product => {
        if (!selectedColor) return true;
        return product.colors?.some(color => color.slug === selectedColor);
    }) || [];
    return (
        <div className={`${styles.contentHome} d-flex items-start justify-between`} >
            {console.log('filteredColors',filteredColors)}
            <Filter handleColorChange={handleColorChange} loadingProducts={loadingProducts} loadingCategories={loadingCategories} productsData={productsData} categories={categories} />
            {
                loadingProducts ? <div className='loadingg' > <ReactLoading type="cylon" color="#f79e10" height={'7%'} width={'7%'} /></div> :
                    <Products products={filteredColors} pageCount={productsData?.products?.meta?.total} onPageChange={handlePageChange} />
            }

        </div>
    )
}
