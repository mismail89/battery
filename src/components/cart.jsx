import React from 'react'
import '../styles/cart.css';
export default function cart() {
  return (
    <>
    <div className='flex flex-col'>
        <div className='main-cart-div flex py-5'>
            <div className='main-cart-section py-12'>
                <div className='card-img'>
                    <img src="/images/cart1.webp" alt="car battery replacement," />
                </div>
                <div className='card-text py-5'>
                    <h1 className='py-3'>Battery Change Service</h1>
                    <p>Car battery Replacement Dubai service is the no.1 battery change service provider in the different areas of UAE, like Dubai, Sharjah, and Ajman.</p>
                    <a href="tel:+971509553340" className='py-5 px-12'>Call Now</a>
                </div>
            </div>
            <div className='main-cart-section py-12'>
                <div className='card-img'>
                    <img src="/images/cart2.webp" alt="800 battery dubai" />
                </div>
                <div className='card-text py-5'>
                    <h1 className='py-3'>Mobile Battery Replacement Service</h1>
                    <p>Our mobile car battery Changing service is available across Dubai, Sharjah, and Ajman, or simply give us a call for a convenient home visit.</p>
                    <a href="tel:+971509553340" className='py-5 px-6'>Book Now</a>
                </div>
            </div>
            <div className='main-cart-section py-12'>
                <div className='card-img'>
                    <img src="/images/cart3.webp" alt="bmw battery replacement" />
                </div>
                <div className='card-text py-5'>
                    <h1 className='py-3'>Battery Jump Start Services</h1>
                    <p>If your car's battery not working well on road site, Just call us for a jump start we provide best jump start services in Dubai and all over UAE. Our experts will be with you within 30 minutes.</p>
                    <a href="tel:+971509553340" className='py-5 px-12'>Call now</a>
                </div>
            </div>

        </div>
    </div>
    </>
  )
}
