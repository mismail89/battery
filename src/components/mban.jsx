import React from 'react'
import '../styles/mban.css'
export default function mban() {
  const css = {
  backgroundImage: 'url(./images/card1.webp)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  }
  
  
  const cooolor = {
    color: 'blue'
  }
  return (
    <div className='mainmban' style={css}>
      <div className='allmban'>
        <h2 >800 Battery Changing in Dubai</h2>
        <h1 >We provide best 800 Battery Change Services in Dubai and All over UAE.</h1>
        <a href="tel:+971509553340">+971509553340</a>
      </div>
    </div>
  )
}
