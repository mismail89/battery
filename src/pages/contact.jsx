import React from 'react'
import '../styles/post.css'
import Bottomcard from '../components/bottomcard'
import '../styles/contact.css'
import '../styles/logos.css';
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';


export default function contact() {
    const Styyle = {
        backgroundImage: 'url("/images/jp.webp")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
      }
      const colorr = {
        color: 'black'
      }
      /////// start email js here //////
      
        const form = useRef();
        const [Value, setVaue ] = useState("Call Me Back")
        const [loading, setloading] = useState(false)
        const sendEmail = (e) => {
          setloading(true)
          e.preventDefault();
            
          emailjs
            .sendForm('service_dll45hr', 'template_rnzm67b', form.current, {
              publicKey: '1Y0KkhzfAwPeJKCSw',
            })
            setloading(false)
            setVaue("success")
            .then(
              () => {
                
                  setVaue("successFull");
                
              }
            );
        };
      

      ///////end email js here ////////
  return (
    <>
     <div className='main-about-page' style={Styyle}>
        <h1 style={colorr}>Contact Us</h1>
    </div>
    <div className='main-form-contact'>
        <div className='main-contact'>
            <div className='form-text'>
                <h1>Have any question contact us</h1>
          </div>
            <form className='form-inputs' onSubmit={sendEmail} ref={form}>
                <input type="text" placeholder='Name' name='from_name'/>
                <input type="text" placeholder='Email' name='from_email'/>
                <input type="text" placeholder='Phone' name='message'/>
                <input type="submit" value={loading ? "Loading": Value} id='send'/>
            </form>
        </div>
    </div>
    <div className='main-map'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14452.57888005949!2d55.1776!3d25.096962!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x69eedf53c30a93db%3A0x98f2e385c4f5912b!2s800%20smart%20battery%20service!5e0!3m2!1sen!2s!4v1709546507960!5m2!1sen!2s" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <Bottomcard />
    </>
  )
}
