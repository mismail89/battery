import React from 'react'
import Hero from './hero'
import Line from '../components/line'
import Post from '../components/post'
import Card from '../components/card'
import Cart from '../components/cart'
import Icons from '../components/icons'
import Logos from '../components/logos'
import Services from '../components/services'
import Bottomcard from '../components/bottomcard'
import Footer from '../components/footer';
import Mbcard from '../components/mbcard';
import Contentabout from '../components/contentabout';
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import '../styles/rapo.css'
export default function () {
  /////// start email js here //////

      
  const form = useRef();
  const [Value, setVaue ] = useState("Call Me Back")
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_dll45hr', 'template_rnzm67b', form.current, {
        publicKey: '1Y0KkhzfAwPeJKCSw',
      })
      setVaue("success")
      .then(
        () => {
          setVaue("Successfully sent")
        },
        (error) => {
          
        },
      );
  };


///////end email js here ////////
  return (
    <>

    <Hero />
    <Line />
    <div className='main-form-contact-home'>
        <div className='main-contact'>
            <div className='form-text'>
                <h1>Have any question contact us</h1>
            </div>
            <form className='form-inputs' onSubmit={sendEmail} ref={form}>
                <input type="text" placeholder='Name' name='from_name'/>
                <input type="text" placeholder='Email' name='from_email'/>
                <input type="text" placeholder='Phone' name='message'/>
                <input type="submit" value={Value} id='send' />
            </form>
        </div>
        
    </div>
    <Cart />
    <Card />
    <Post />
    
    <Icons />
    <Logos />
    <Contentabout />
    <Bottomcard />
    </>
  )
}
