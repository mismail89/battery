import React from 'react'
import { IoStar } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";
import { FaDotCircle } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
export default function hero() {
    const stylee = {
    backgroundImage: 'url(./images/battery-replacement.webp)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
    }
    
  return (
    <>
    <div className='main-hero-section flex h-screen ' style={stylee}>
    <div className='main-heading-right-card'>
        <div className='paragraph-main'><p>AVAILABLE 24 HOURS A DAY, ALL WEEK</p></div>
        <div className='header-main'><h1>Quick Car Battery Replacement Services in Dubai, Sharjah & Ajman</h1></div>
        <div className='main-icons-div'>

    <div className='main-id'><p className='flex flex-row'><h1><TiTick /></h1>Free Delievery & Installation</p> <p><h1><TiTick /></h1>At Your Location in 25 Mins.</p></div>
    <div><p><h1><TiTick /></h1>German Brands Batteries &nbsp; &nbsp; &nbsp;</p> <p id='chota-karna'><h1><TiTick /></h1>24/7 Mobile Service &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p></div>
    <div><p><h1><TiTick /></h1>Affordable Prices &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p> <p id='chota-karna'><h1><TiTick /></h1>100% Satisfaction &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p></div>
        </div>
    </div>
    <div className='right-div'>
        <div className='top-right'>
            <h1>Batteries
Starting From</h1>
<h2>AED 149*</h2>
<p>Get back on the road with confidence - 800 smart Battery offers high-quality car batteries starting at just 149 AED. Enquire Now!</p>
        </div>
        <div className='bottom-right'>
            <a href="https://wa.me/+971509553340"><h1><FaWhatsapp /></h1><h2>Whatsapp</h2></a>
            <a href="tel:+971509553340"><h1><IoIosCall /></h1><h2>Call Now</h2></a>
        </div>
    </div>
    </div>
    </>
  )
}
