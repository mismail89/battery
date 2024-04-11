import React from 'react'
import '../styles/card.css'
import { Link } from 'react-router-dom'
export default function card() {
  return (

    <div className='flex flex-col'>
        <div className='main-dash-text'>
            <h1>-Battery Replacement Services</h1>
        </div>
        <div className='main-card-div flex py-5'>
            <div className='main-card-section py-12'>
                <div className='card-img'>
                    <img src="/images/card1.webp" alt="bmw battery replacement" />
                </div>
                <div className='card-text py-5'>
                    <h1 className='py-3'>Battery Change Services</h1>
                    <p>car battery Changing is our top priority service in Dubai. We deal with the Change of every brand of battery like Amaron, Varta, Bosch and Exide etc.</p>
                    <a href="tel:+971509553340" className='py-5 px-12' id='bttn'>Call Now</a>
                </div>
            </div>
            <div className='main-card-section py-12'>
                <div className='card-img'>
                    <img src="/images/card2.webp" alt="car battery service" />
                </div>
                <div className='card-text py-5'>
                    <h1 className='py-3'>Battery Replacement</h1>
                    <p>When a battery Replacement is necessary, we offer a wide range of high quality batteries from leading manufacturers. Our experts helps you to choose the right battery.</p>
                    <a href="tel:+971509553340" className='py-5 px-6'>050 955 3340</a>
                </div>
            </div>
        </div>
    </div>
  )
}
