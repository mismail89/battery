import React from 'react'
import { IoIosCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
export default function sticky() {
  return (
    <div className='sticky'>
        <div className='main-sticky'>
        
        <div className='icon-sticky'>
        <a href="https://wa.me/+971509553340"><h1><FaWhatsapp /></h1><h2>Whatsapp</h2></a>
        <a href="tel:+971509553340"><h1><IoIosCall /></h1><h2>Call Now</h2></a>
        </div>
        </div>
    </div>
  )
}
