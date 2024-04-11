import React from 'react'
import '../styles/card.css'
import '../styles/mbn.css'
export default function mbcard() {
  return (
    
    <>
    <div className='flex flex-col'>
        <div className='main-dash-text'>
            <h1>-Car Battery Changing in Dubai</h1>
        </div>
        <div className='main-card-div flex py-5'>
            <div className='mbn-card-section py-12'>
                <div className='card-img'>
                    <img src="/images/bt1.jpg" alt="battery installation near me" />
                </div>
                <div className='card-text py-5'>
                    <h1 className='py-3'>24/7 battery Roadside Assistance</h1>
                    <p>Expertise: Our team comprises highly skilled technicians with extensive experience in diagnosing and resolving battery-related issues across a wide range of vehicles.

Convenience: We understand that your time is precious. That's why we bring our services directly to your location, whether you're at home, work, or stranded on the roadside.</p>
                    <a href="" className='py-5 px-12' id='bttn'>Read More</a>
                </div>
            </div>
            <div className='mbn-card-section py-12'>
                <div className='card-img'>
                    <img src="/images/bt2.jpg" alt="car battery change service" />
                </div>
                <div className='card-text py-5'>
                    <h1 className='py-3'>German Brands Batteries</h1>
                    <p>At 800 Battery Repair Service, we envision a future where car battery breakdowns are no longer a source of stress for drivers in Dubai. Through innovation, exceptional service, and a commitment to excellence, we strive to redefine the standards of convenience and reliability in the automotive service industry.</p>
                    <a href="" className='py-5 px-6'>Read More</a>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
