import React from 'react'
import './portfolio.css'

const Portfolio = () => {
  return (
    <section id = 'portfolio'>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        <article className='portfolio_item'>
          <div className='portfolio_img'></div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com/mbarto202"  className='btn' target='_blank'>Github</a>
          <a href="https://github.com/mbarto202"  className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_img'></div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com/mbarto202"  className='btn' target='_blank'>Github</a>
          <a href="https://github.com/mbarto202"  className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_img'></div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com/mbarto202"  className='btn' target='_blank'>Github</a>
          <a href="https://github.com/mbarto202"  className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio