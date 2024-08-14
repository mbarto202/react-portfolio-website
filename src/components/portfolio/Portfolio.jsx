import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/demo-pic.png'
import IMG2 from '../../assets/demo-pic2.png'
import IMG3 from '../../assets/demo-pic3.PNG'

const Portfolio = () => {
  return (
    <section id = 'portfolio'>
      <h2>Portfolio</h2>
      <div className='container portfolio_container'>
        <article className='portfolio_item'>
          <div className='portfolio_img'>
            <img src= {IMG2} alt=''/>
          </div>
          <h3><span style={{ position:'relative', right: '6px' }}>Weather App</span></h3>
          <div className='portfolio_item-cta'>
            <div className='gh'><a href="https://github.com/mbarto202/react-weather-app"  className='btn' target='_blank'>Github</a></div>
            <div className='demo'><a href="http://weathermb.com"  className='btn btn-primary' target='_blank'>Live Demo</a></div>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_img'>
            <img src= {IMG1} alt=''/>
          </div>
          <h3>Far Out Fairway</h3>
          <div className='portfolio_item-cta'>
            <div className='gh'><a href="https://github.com/WCU-CSC476-F20/team-project-2-team-t"  className='btn' target='_blank'>Github</a></div>
            <div className='demo'><a href="https://play.unity.com/mg/other/team-project-2-build-1"  className='btn btn-primary' target='_blank'>Live Demo</a></div>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_img'>
            <img src={IMG3} alt=''/>
          </div>
          <h3><span style={{ position:'relative', right: '9px' }}>Labyrinth Game</span></h3>
          <div className='portfolio_item-cta'>
            <div className='gh'><a href="https://github.com/WCU-CSC476-F20/team-project-1-team-t/tree/master"  className='btn' target='_blank'>Github</a></div>
            <div className='demo'><a href="https://play.unity.com/mg/other/crazy-labyrinth-team-t"  className='btn btn-primary' target='_blank'>Live Demo</a></div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio