import React from 'react'
import styles from './heroSection.module.css'

export default function HeroSection() {
  return (
    <div className={`${styles.cover} relative`} >
        <div className={styles.content} >
            <p className={styles.title} >Mixers</p>
            <p className={styles.description} >Many of mixers with different shapes and colors, and high quality conforming to the requirements of the Saudi market and passed all the test.  </p>
        </div>
    </div>
  )
}
