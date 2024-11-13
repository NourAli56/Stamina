import React from 'react'
import hour from '../../assets/Icons/clock.svg'
import facebook from '../../assets/Icons/Facebook=Outline.svg'
import twitter from '../../assets/Icons/Twitter=Outline.svg'
import instagram from '../../assets/Icons/Instagram=Outline.svg'
import linkdIn from '../../assets/Icons/Linkedin=Outline.svg'
import call from '../../assets/Icons/call.svg'
import sms from '../../assets/Icons/sms.svg'
import styles from './layout.module.css'

export default function TopBar() {
    return (
        <div className={`${styles.topBar} d-flex items-center justify-between`} >
            <div className='d-flex items-center gap-10' >
                <img src={hour} />
                <span className='text-white font-size-12' >Sun to Thu 9:00 am to 6:00 pm </span>
                <div className='d-flex items-center gap-10 margin-left-25' >
                    <img src={facebook} />
                    <img src={twitter} />
                    <img src={instagram} />
                    <img src={linkdIn} />
                </div>
            </div>
            <div className={`${styles.rightTopBar} d-flex items-center gap-10`}>
                <div className='d-flex items-center gap-10'>
                    <img src={call} />
                    <span className='text-white font-size-12'>+966 - 112 426 668</span>
                </div>
                <div className='d-flex items-center gap-10 margin-left-25'>
                    <img src={sms} />
                    <span className='text-white font-size-12' >info@stamina.com.sa</span>
                </div>
            </div>
        </div>
    )
}
