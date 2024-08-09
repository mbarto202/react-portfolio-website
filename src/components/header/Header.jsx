import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <div className='titleBg'> 
          <h1 className='name'>Michael Barto</h1>
          <h5 className="title">Software Engineer</h5>
        </div>
        <CTA />
        <HeaderSocial />

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header