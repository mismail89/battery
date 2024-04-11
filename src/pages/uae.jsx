import React from 'react'
import '../styles/about.css';
import Bottocard from '../components/bottomcard'
import '../styles/post.css'
import Contentabout from '../components/contentabout';
import '../styles/logos.css';
import '../styles/contentabout.css';

export default function about() {
    const style = {
        marginTop: '15px'
      }
      const Styyle = {
        backgroundImage: 'url("/images/rep.webp")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    color: "white"
      }
      const Colorr = {
        color: 'whiteeee'
      }
      const anystyle = {
        width: "90%"
      }
  return (
    
    <>
    <div className='main-about-page' style={Styyle}>
        <div id='tttttp'>
        <h1 className='h1tag' id='h11tag'>Car Battery Replacement in Sharjah, Ajman & UAE</h1>
        </div>
    </div>
    {/* //////// start post  /////////// */}
    <div className='flex py-10'>
    <div className='main-post-page'>
    <div className='post-text'>
        <div className='post-upper-text'>
            <h1>Are you experiencing car battery troubles in Sharjah or Ajman?</h1>
            <h2 className='py-4' >Don't let a dead battery ruin your day. Explore our comprehensive guide to battery replacement services in Sharjah and Ajman, where we highlight reliable options to get you back on the road swiftly and hassle-free.</h2>
            <p className='py-1'>Don't let a faulty battery disrupt your plans. Choose our recommended battery replacement services in Sharjah and Ajman for professional, reliable, and efficient solutions tailored to your vehicle's needs. Experience convenience, quality, and peace of mind with our trusted service providers, we are providing best services in sharjah and ajman to save your time and money</p>
        </div>
       
        <div className='lower-text-post py-4'>
            <a href="" className='flex py-4 px-4 lg:py-4 lg:px-8'>Mobile Battery Replacement</a>
        </div>
    </div>
    <div className='post-img'>
        <img src="/images/jp.png" alt="car battery replacement in uae" />
    </div>

    </div>
    </div>
    {/* ////////end poset /////////////// */}
    <div className='flex' style={style}>
        <div className='main-flex'>
            <div className='main-flex-text'>
                <h1>Experience seamless car battery replacement services in Sharjah and Ajman, ensuring swift assistance and reliable solutions for your vehicle's power needs.</h1>
            </div>
            <div className='main-button-flex'>
                <a href="" className='rounded-md'>+971509553340</a>
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
    <Bottocard />
    <div className='last-about-content'>
        <div className='content-heading-about-page'>
            <h1>Car Battery Change Services</h1>
        </div>
        <div className='about-content-heading'>
            <p>We believe in providing only the best to our customers. That's why we provide a wide range of high quality batteries from trusted brands. Rest assured that your vehicle will receive a battery that meets the highest standards of performance and reliabilityOur team consists of experienced professionals who are experienced in all types of battery replacement. With years of experience under their belts, they ensure that work is done smoothly and efficiently:</p>
        </div>
    </div>
    <div className='last-about-content'>
        <div className='content-heading-about-page'>
            <h1>Responsive Customer Service:</h1>
        </div>
        <div className='about-content-heading'>
            <p>Have a question or need help? Our friendly customer service team is here to help. Whether it's a simple inquiry or an emergency, you can count on us to provide fast and reliable assistanceWe believe in providing affordable solutions without compromising on quality. Our competitive prices ensure you get the best value for your money when it comes to car battery replacement servicesWe work with top battery brands to ensure our customers have access to the best products on the market. From reliable performance to long-lasting durability, our batteries are guaranteed to meet your vehicle's needs.</p>
        </div>
    </div>
    </>
  )
}
