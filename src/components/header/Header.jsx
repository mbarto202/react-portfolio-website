import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <div className='titleBg'> 
          <h2 className='name'>Hello, I'm <span style={{ color: 'salmon' }}>Michael</span>. I'm a Software Engineer</h2>
        </div>
        <CTA />
        <HeaderSocial />

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header