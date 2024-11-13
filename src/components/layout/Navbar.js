import React, { useEffect, useState } from 'react'
import logo from '../../assets/brands/logo.png'
import { Link } from 'react-router-dom'
import search from '../../assets/Icons/search-normal.svg'
import styles from './layout.module.css'
import arrowDown from '../../assets/Icons/Symbol.svg'
import axios from 'axios'

export default function Navbar() {
    const [activeLink, setActiveLink] = useState('');
    const [categories, setCategories] = useState([]);
    const [showCategories, setShowCategories] = useState(false);
    const links = [
        {
            id: 1,
            name: "Home",
            url: ""
        },
        {
            id: 2,
            name: "Our Products",
            url: "ourProducts"

        },
        {
            id: 3,
            name: "About Us",
            url: "aboutUs"
        },
        {
            id: 4,
            name: "Contact Us",
            url: "contactUs"
        },
        {
            id: 5,
            name: "Spaces",
            url: "spaces"
        }

    ]

    useEffect(() => {
        axios.get(`https://www.stamina.babkisanresturant.com/api/categories`)
            .then((res) => {
                console.log('res', res);
                setCategories(res?.data?.data)
            })
            .catch((err) => {
                console.log('error', err);
            });
    }, []);

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <div className={` ${styles.navbar} d-flex items-center justify-between `}>
            <img className={styles.logo} src={logo} />
            <div className={` ${styles.links} d-flex items-center`}>
                {
                    links.map((link) => (
                        <Link to='/' onClick={() => handleLinkClick(link.url)} onMouseEnter={() => { if(link.url === 'ourProducts') setShowCategories(true)}}
                        onMouseLeave={() => {if(link.url === 'ourProducts') setShowCategories(false)}}>
                            <span className={activeLink === link.url ? styles.activeLink : styles.spanLink}>{link.name}</span>
                        </Link>
                    ))
                }
                {showCategories && (
                    <div className={styles.categories} onMouseEnter={() => setShowCategories(true)} onMouseLeave={() => setShowCategories(false)}>
                        {
                            categories?.map((category)=>(
                                <p className={styles.category}>{category?.name}</p> 
                            ))
                        }
                    </div>
                )}
            </div>
            <div className={`${styles.boxSearch} d-flex items-center gap-10`}>
                <img src={search} />
                <input placeholder='Search here ...' className={styles.inputSearch} />
            </div>
        </div>
    );
}
