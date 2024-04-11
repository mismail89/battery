import React from 'react';
import '../styles/footer.css';
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import '../styles/footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (

    <>
    <div className='main-footer'>
    <div className='main-footer-div'>
      <div className='footer-about'>
        <h1>About Us</h1>
        <p>If you are looking for the best battery Replacement and Change services in Dubai, We are best battery Change and suppliers who can provide you with high-quality batteries at affordable prices. </p>
      </div>
      <div className='footer-pages'>
        <h1>Pages</h1>
        <Link to={'/battery-replacement'}>
        <a href="">Battery Services</a>
        </Link>
        <Link to={'/about'}>
        <a href="">About Us</a>
        </Link>
        <Link to={'/jumpstart'}>
        <a href="">Jump Start</a>
        </Link>
        <Link to={'/contact'}>
        <a href="">Contact Us</a>
        </Link>
      </div>
      <div className='footer-services'>
        <h1>Our Services</h1>
        <Link to={'/battery-replacement'}>
        <a href="">Battery Services</a>
        </Link>
        <Link to={'/jumpstart'}>
        <a href="">Jump Start</a>
        </Link>
      </div>
      <div className='footer-icons'>
        <div className='heading-last'>
        <h1>Social Media Links</h1>
        </div>
        <div className='icons-last'>
        <a href=""><CiFacebook /></a>
        <a href=""><FaXTwitter /></a>
        <a href=""><FaInstagramSquare /></a>
        <a href="https://wa.me/+971509553340"><FaWhatsapp /></a>
        </div>
        <div className='main-footer-last-copyright' id='not-displaying'>
    <a href="https://innovative-technologies.net/">© Developed & SEO By Innovative Technology</a>
    </div>
      </div>
    </div>
    <div className='main-footer-last-copyright' id='show-in-large'>
    <a href="https://innovative-technologies.net/">© Developed & SEO By Innovative Technology</a>
    </div>
    </div>
    </>
  )
}