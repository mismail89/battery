import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import '../styles/bottomcard.css';
export default function bottomcard() {
  return (
    <div className='flex flex-col'>
        <div className='header-last'>
        <h1 className='text-blue-900'>- Get In Touch</h1>
        </div>
        <div className='last-div-cart py-12'>
        
            <div className='main-last-cart'>
                <div className='last-cart-img'>
                    <a className='py-14 bg-slate-200 text-blue-600 hover:bg-blue-600 hover:text-white' href='https://g.co/kgs/EoobtFC'><p><FaLocationDot /></p></a>
                </div>
                <div className='last-cart-text'>
                    <h1>Address</h1>
                    <p>i rise tower - Barsha Heights - Dubai - United Arab Emirates</p>
                </div>
            </div>
    
        
            <div className='main-last-cart'>
                <div className='last-cart-img'>
                    <a className='py-14 bg-slate-200 text-blue-600 hover:bg-blue-600 hover:text-white' href='mailto:admin@800smartbattery.com'><p><MdEmail /></p></a>
                </div>
                <div className='last-cart-text'>
                    <h1>Mail Us</h1>
                    <p>admin@800smartbattery.com</p>
                </div>
            </div>
        
        
            <div className='main-last-cart'>
                <div className='last-cart-img'>
                    <a className='py-14 bg-slate-200 text-blue-600 hover:bg-blue-600 hover:text-white' href='tel:+971509553340'><p><IoCall /></p></a>
                </div>
                <div className='last-cart-text'>
                    <h1>Call Us</h1>
                    <p>+971509553340</p>
                </div>
            </div>
        </div>
    </div>
    

  )
}
