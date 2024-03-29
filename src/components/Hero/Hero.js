import React from 'react'
import bg from '../../assets/HeroSection-bg-image.jpg';
import './Hero.css'

function Hero() {
  return (
    <div className='hero-sec'>
        <img src={bg} alt="early night sky image" />
        <div className='overlay'>
            <h1>Bran's Travel Blog
            </h1>
            <h2>See where I have been</h2>
        </div>
    </div>
  )
}

export default Hero