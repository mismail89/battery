import React from 'react'
import Services from '../components/services';
import '../styles/jump.css';
import Contentabout from '../components/contentabout';
import Bottocard from '../components/bottomcard';
import '../styles/post.css' 
import '../styles/logos.css';
import '../styles/contentabout.css';

export default function jumpstart() {
  return (
    <>
    <div className='flex py-10'>
    <div className='main-post-page'>
    <div className='post-text'>
        <div className='post-upper-text'>
            <h1>Jumpstart services with 800 battery in Dubai</h1>
            <h2 className='py-4'>Our team consists of experienced professionals who are equipped with knowledge in handling different types of vehicles. Rest assured, your car is in safe hands.</h2>
            <p className='py-1'>Car batteries, which are notoriously unpredictable, can fail at the simplest of times. Whether you’re rushing to a meeting or heading off on a weekend adventure, a flat jumper battery can throw a wrench into your plans. This is where the importance of reliable jump start services becomes clear In the heart of Dubai, where the rhythm of the city never sleeps, car problems can be a major inconvenience. Here at 800 Battery we specialize in jump start services, providing drivers with a lifeline in the face of unexpected battery failures.</p>
        </div>
    

        <div className='lower-text-post py-4'>
            <a href="" className='flex py-4 px-4 lg:py-4 lg:px-8'>Mobile Battery Changing</a>
        </div>
    </div>
    <div className='post-img'>
        <img src="/images/jp.png" alt="" />
    </div>
    </div>
    </div>
    
    {/* //////// start content about //////// */}
    <div className='last-about-content'>
        <div className='content-heading-about-page'>
            <h1>The technology behind Jumpstart services:</h1>
        </div>
        <div className='about-content-heading'>
            <p>In addition to jump start services, the 800 battery provides comprehensive emergency roadside assistance. Whether it's a flat tire or an empty gas tank, we're here to help you get moving again, wherever you are. We leverage the latest technology to determine your location and quickly dispatch the nearest available technician. Don't just take our word for it, hear from our satisfied customers who have experienced the efficiency and professionalism of 800 Battery Quick Start Services. Discover the advanced tools and technologies used by 800 Battery, ensuring a safe and effective repair for your vehicle:</p>
        </div>
    </div>
    <div className='last-about-content'>
        <div className='content-heading-about-page'>
            <h1>Tips to avoid car battery problems:</h1>
        </div>
        <div className='about-content-heading'>
            <p>Learn practical tips for maintaining a healthy car battery and reducing the likelihood of encountering frequent battery service scenarios .In the age of environmental awareness, we at 800battery strive to incorporate environmentally friendly practices into our operations. Discover 800battery's transparent pricing model, which offers value for money compared to other quick start services on the market. For both technicians and customers, it is important to understand safety procedures during roadside hot rod service. We provide insights to ensure safe operations:</p>
        </div>
    </div>
    {/* //////// end content about ////////  */}
    

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
    <Bottocard />
    </>
  )
}
