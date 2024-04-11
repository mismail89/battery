import React from 'react'
import '../styles/cart.css';
export default function mbnpost() {
  return (
    <div className='flex flex-col'>
        <div className='main-cart-div flex py-5'>
            <div className='main-cart-section py-12'>
                <div className='card-img'>
                    <img src="/images/cart1.webp" alt="" />
                </div>
                <div className='card-text py-5'>
                    <h1 className='py-3'>Battery Services Dubai</h1>
                    <p>We provide Best Battery Changing services in Dubai and all over UAE. We offer a wide selection of high-quality Vehicle batteries to suit your needs..</p>
                    <a href="" className='py-5 px-12'>Read More</a>
                </div>
            </div>
            <div className='main-cart-section py-12'>
                <div className='card-img'>
                    <img src="/images/cart2.webp" alt="" />
                </div>
                <div className='card-text py-5'>
                    <h1 className='py-3'>Jump Start Dubai</h1>
                    <p>Car won't start? Dead battery and need a quick jump? We are best jump start services provider in Dubai and all over UAE. We offer for a fast, safe & reliable jump start service in Dubai.</p>
                    <a href="" className='py-5 px-6'>Read More</a>
                </div>
            </div>
            <div className='main-cart-section py-12'>
                <div className='card-img'>
                    <img src="/images/cart3.webp" alt="" />
                </div>
                <div className='card-text py-5'>
                    <h1 className='py-3'>
At Your Location in 25 Mins.</h1>
                    <p>Customer-Centric Approach: Your satisfaction is our top priority. We listen to your needs, communicate transparently, and tailor our services to deliver the best possible experience.</p>
                    <a href="" className='py-5 px-12'>Read More</a>
                </div>
            </div>

        </div>
    </div>
  )
}
