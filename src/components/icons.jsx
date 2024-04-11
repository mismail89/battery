import React from 'react'
import { AiFillCheckSquare } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";
import '../styles/icons.css';
export default function icons() {
  return (
    
    
    <div className='flex main-icnos-data flex-col'>
            <div className='top-heading-section py-12'>
                <h1>Why Choose Us</h1>
            </div>
        <div className='main-home-icons-section py-20'>
            <div className='main-icons-card '>
                <div className='icon-img'>
                    <h1 className='py-4  text-red-400'><AiFillCheckSquare /></h1>
                </div>
                <div className='icons-text-div'>
                    <h2>Expertise</h2>
                    <p>Our team comprises skilled technicians with extensive experience in tyre services and battery Changing.</p>
                </div>
            </div>
            <div className='main-icons-card'>
                <div className='icon-img'>
                    <h1 className='py-4  text-red-400'><AiFillCheckSquare /></h1>
                </div>
                <div className='icons-text-div'>
                    <h2>Quality Products</h2>
                    <p>We partner with renowned tyre and battery brands, ensuring you receive products that meet the highest quality standards.</p>
                </div>
            </div>
            <div className='main-icons-card'>
                <div className='icon-img'>
                    <h1 className='py-4 text-red-400'><AiFillCheckCircle /></h1>
                </div>
                <div className='icons-text-div'>
                    <h2>Safety First</h2>
                    <p>We prioritize your safety on the road. Our services contribute to the overall reliability and performance of your vehicle.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
