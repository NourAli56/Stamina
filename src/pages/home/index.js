import React from 'react'
import TopBar from '../../components/layout/TopBar'
import Navbar from '../../components/layout/Navbar'
import styles from '../../components/layout/layout.module.css'
import HeroSection from '../../components/hero-section'
import ContentHome from '../../components/content-home'
import Footer from '../../components/layout/Footer'

export default function Home() {
  return (
    <div className='relative'>
        
        <HeroSection />
        <ContentHome />
        
    </div>
  )
}
