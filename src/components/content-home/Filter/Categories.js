import React, { useEffect, useState } from 'react'
import styles from '../contentHome.module.css'
import { useDispatch } from 'react-redux';
import { loadProductsByCategory } from '../../../redux/actions/ActionProducts';
import ReactLoading from 'react-loading';

export default function Categories({loadingCategories, categories }) {
    let dispatch = useDispatch();
    const [openCategories, setOpenCategories] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleRadioChange = (categorySlug) => {
        setSelectedCategory(categorySlug);
        dispatch(loadProductsByCategory(categorySlug));
    };
    useEffect(() => {
        if (categories?.length > 0) {
            setSelectedCategory(categories[0].slug); 
        }
    }, [categories]);
    return (
        <>
            <div onClick={() => setOpenCategories(!openCategories)}
                style={{ marginBottom: "8px", cursor: "pointer" }} className='d-flex items-center justify-between' >
                <p className={styles.title}>Category</p>
                <i className={`${styles.arrow} ${openCategories ? "fa fa-chevron-down" : "fa fa-chevron-up"}`}></i>
            </div>

            {openCategories &&
            loadingCategories?
            <ReactLoading type="cylon" color="#f79e10" height={'7%'} width={'7%'} />:
                categories?.map((category, index) => (
                    <div style={{ marginBottom: "5px" }} className='d-flex items-center gap-10' key={category?.id}>
                        <input
                            checked={selectedCategory === category.slug} 
                            onChange={() => handleRadioChange(category.slug)} 
                            className={styles.checkbox} type='radio' />
                        <span style={{ color: "rgba(48, 55, 63, 1)" }} >{category?.name}</span>
                    </div>
                ))}
        </>
    );
}
