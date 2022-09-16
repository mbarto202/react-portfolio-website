import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/demo-pic.png'
import IMG2 from '../../assets/demo-pic2.png'

const Portfolio = () => {
  return (
    <section id = 'portfolio'>
      <h2>Portfolio</h2>
      <div className='container portfolio_container'>
        <article className='portfolio_item'>
          <div className='portfolio_img'>
            <img src= {IMG2} alt=''/>
          </div>
          <h3>Weather App</h3>
          <div className='portfolio_item-cta'>
            <a href="https://github.com/mbarto202/react-weather-app"  className='btn' target='_blank'>Github</a>
            <a href="https://github.com/mbarto202"  className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_img'></div>
          <h3>Labyrinth</h3>
          <div className='portfolio_item-cta'>
            <a href="https://github.com/WCU-CSC476-F20/team-project-1-team-t/tree/master"  className='btn' target='_blank'>Github</a>
            <a href="https://github.com/mbarto202"  className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_img'>
            <img src= {IMG1} alt=''/>
          </div>
          <h3>Far Out Fairway</h3>
          <div className='portfolio_item-cta'>
            <a href="https://github.com/WCU-CSC476-F20/team-project-2-team-t"  className='btn' target='_blank'>Github</a>
            <a href="https://play.unity.com/mg/other/team-project-2-build-1"  className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio