import React from 'react'
import { IoStar } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";
import { FaDotCircle } from "react-icons/fa";
import Mban from '../components/mban'
import Mbnpost from '../components/mbnpost';
import Mbcard from '../components/mbcard';
import "../styles/line.css";
import '../styles/logos.css';
import '../styles/contentabout.css';

import Bottocard from '../components/bottomcard'
export default function battery() {
  const stylee = {
    backgroundImage: 'url(./images/tpt.webp)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    }

  const style = {
    marginTop: '15px',
    
  }
  return (

    <>
    <Mban />
    <Mbnpost />
    <div className='flex main-battttery ' style={style}>
        <div className='main-flex'>
            <div className='main-flex-text'>
                <h1>We provide mobile battery Changing services according to your need. just call us we will be with you within 30 minutes.</h1>
            </div>
            <div className='main-button-flex'>
                <a href="tel:+971509553340" className='rounded-md'>+971509553340</a>
            </div>
        </div>
    </div>
    <div className='flex flex-col'>
        <div className='main-logo-header py-12'>
            <h1>- Battery Brands</h1>
        </div>
        <div className='main-logo-div'>
        <div className='flex main-logo-div-img'>
                <img src="/images/r1.webp" alt="car battery replacement" />
                <img src="/images/r2.webp" alt="car battery replacement dubai" />
                <img src="/images/r3.jpg" alt="battery replacement near me" />
                <img src="/images/r4.webp" alt="car battery replacement" />
            </div>
            <div className='flex main-logo-div-img'>
                <img src="/images/r5.webp" alt="car battery replacement" />
                <img src="/images/r6.webp" alt="mobile battery replacement near me" />
                <img src="/images/r7.webp" alt="car battery change service" />
                <img src="/images/g3.png" alt="" />
            </div>
            <div className='flex main-logo-div-img'>
                <img src="/images/r9.webp" alt="roadside battery replacement" />
                <img src="/images/r10.webp" alt="vehicle battery" />
                <img src="/images/r11.webp" alt="battery dubai" />
                <img src="/images/r12.webp" alt="battery change service" />
            </div>
           
           
        </div>
    </div>
    <div className='last-about-content'>
        <div className='content-heading-about-page'>
            <h1>Car Battery Change Services</h1>
        </div>
        <div className='about-content-heading'>
            <p>car battery replacement,
car battery replacement dubai,
car battery,
auto battery replacement,
800 battery,
car battery near me,
auto battery near me,
vehicle battery replacement,
automobile battery replacement,
automobile batteries near me,
vehicle batteries near me,
vehicle battery near me,
battery replacement battery,
battery replacement near me,
battery change near me,
car battery change near me,
car battery service,
car battery replacement service,
car battery change dubai,
battery dubai,
battery replacement service,
battery change service,
battery service near me,
800 battery dubai,
bmw battery replacement,
car battery service near me,
car battery replacement sharjah,
vehicle battery replacement near me,
auto battery service,
bmw battery change,
battery change car near me,
auto battery replacement service,
battery replacement for car near me,
replacement battery for bmw,
battery installation near me,
car battery installation near me,
mobile battery replacement near me,
mobile battery replacement,
car battery replacement service near me,
mobile car battery replacement near me,
car battery delivery and installation,
roadside battery replacement,
battery replacement sharjah,
car battery change service,</p>
        </div>
    </div>
    <Bottocard />
    </>
  )
}
