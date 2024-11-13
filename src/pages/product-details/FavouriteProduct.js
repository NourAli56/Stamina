import React from 'react'
import styles from './productDetails.module.css'
import img1 from '../../assets/Images/Group 1171277507.svg';
import img2 from '../../assets/Images/Group 1171277508.svg';
import img3 from '../../assets/Images/Group 1171277509.svg';
import img4 from '../../assets/Images/Group 1171277510.svg';
import CardProduct from '../../components/content-home/CardProduct';

export default function FavouriteProduct() {
    const images = [img1, img2, img3, img4];
    const data = [
        {
            "id": "67253cf2f809030a7b07cd88",
            "name": "YN-4109",
            "slug": "yn-4109",
            "category_id": "67253cccf809030a7b07cd57",
            "colors": [
                {
                    "id": "672544e2f809030a7b07cf7f",
                    "name": "Black Yellow",
                    "slug": "black-yellow",
                    "color_image": "https://via.placeholder.com/400x400.png/0066aa?text=Black+Yellow+odit",
                    "product_image": []
                },
                {
                    "id": "672544e5f809030a7b07cf83",
                    "name": "Purple",
                    "slug": "purple",
                    "color_image": "https://via.placeholder.com/400x400.png/0000ff?text=Purple+in",
                    "product_image": []
                }
            ]
        },
        {
            "id": "67253cf7f809030a7b07cd89",
            "name": "IE-1610",
            "slug": "ie-1610",
            "category_id": "67253ce7f809030a7b07cd82",
            "brand": {
                "id": "67253ce9f809030a7b07cd86",
                "name": "Lima",
                "slug": "lima",
                "image": "https://www.stamina.babkisanresturant.com/storage/images/brands/67253ce9f809030a7b07cd86/originals/1731444904-متبل-باذنجان.jpg"
            },
            "colors": [
                {
                    "id": "672544e0f809030a7b07cf7c",
                    "name": "White Red",
                    "slug": "white-red",
                    "color_image": "https://via.placeholder.com/400x400.png/00cc77?text=White+Red+qui",
                    "product_image": []
                },
                {
                    "id": "672544e2f809030a7b07cf7f",
                    "name": "Black Yellow",
                    "slug": "black-yellow",
                    "color_image": "https://via.placeholder.com/400x400.png/0066aa?text=Black+Yellow+odit",
                    "product_image": []
                },
                {
                    "id": "672544e4f809030a7b07cf81",
                    "name": "White",
                    "slug": "white",
                    "color_image": "https://via.placeholder.com/400x400.png/00aacc?text=White+eum",
                    "product_image": []
                }
            ]
        },
        {
            "id": "67253cfef809030a7b07cd8a",
            "name": "YC-4118",
            "slug": "yc-4118",
            "category_id": "67253cd0f809030a7b07cd5e",
            "brand": {
                "id": "67253ce9f809030a7b07cd86",
                "name": "Lima",
                "slug": "lima",
                "image": "https://www.stamina.babkisanresturant.com/storage/images/brands/67253ce9f809030a7b07cd86/originals/1731444904-متبل-باذنجان.jpg"
            },
            "colors": [
                {
                    "id": "672544e2f809030a7b07cf7f",
                    "name": "Black Yellow",
                    "slug": "black-yellow",
                    "color_image": "https://via.placeholder.com/400x400.png/0066aa?text=Black+Yellow+odit",
                    "product_image": []
                }
            ]
        },
        {
            "id": "67253d03f809030a7b07cd8b",
            "name": "FB-6169",
            "slug": "fb-6169",
            "category_id": "67253ccff809030a7b07cd5d",
            "colors": [
                {
                    "id": "672544e2f809030a7b07cf7f",
                    "name": "Black Yellow",
                    "slug": "black-yellow",
                    "color_image": "https://via.placeholder.com/400x400.png/0066aa?text=Black+Yellow+odit",
                    "product_image": []
                }
            ]
        },
    ]
    return (
        <div style={{ marginTop: "100px" }} >
            <p className={styles.title}>You May Also Like</p>
            <br></br>
            <div style={{flexWrap: "wrap"}} className={` d-flex items-start gap-10`}>
                {
                    data.map((product, index) => (
                        <CardProduct index={index} images={images} width='23%' product={product} gotToDetails={()=>{}} />
                    ))
                }
            </div>
            <br></br> <br></br> <br></br>
        </div>
    )
}
