import React from 'react'
import styles from './productDetails.module.css'

export default function TableDetails({ oneProduct }) {
    const data = [
        {
            id: 2,
            key: "Cartridge",
            value: "Ceramic Sedal"
        },
        {
            id: 3,
            key: "Lever",
            value: "Single Lever"
        },
        {
            id: 4,
            key: "Type",
            value: "Flusher Tap"
        },
        {
            id: 5,
            key: "Temperature",
            value: "Hot and Cold"
        },
        {
            id: 6,
            key: "Material",
            value: "Brass 59 - 62"
        },
    ]
    return (
        <div className={styles.tableDetails} >
            <div className={` ${styles.oneTableDetails} d-flex items-center`} >
                <p className={styles.leftTable} >Brand</p>
                <p className={styles.rightTable}>{oneProduct?.brand?.name}</p>
            </div>
            {
                oneProduct?.properties?.map((datum) => (
                    <div className={` ${styles.oneTableDetails} d-flex items-center`} >
                        <p className={styles.leftTable} >{datum.name}</p>
                        <p className={styles.rightTable}>{ datum?.property_values[0]?.value},....</p>
                       

                    </div>
                ))
            }

        </div>
    )
}


