import React from 'react'
import './about.css'
import htmlIcon from '../../assets/html5logo.png'
import cssIcon from '../../assets/cssLogo.png'
import jsIcon from '../../assets/jsLogo.png'
import reactIcon from '../../assets/reactlogo.webp'
import csharpIcon from '../../assets/cshLogo.png'
import javaIcon from '../../assets/jLogo.png'
import pythonIcon from '../../assets/pyLogo.png'

const About = () => {
  return (
    <section id = 'about'>
      <h2>About Me</h2>
      <div className='skills_Content'>
        <p>
          Front End Back End
          <hr className='line'></hr>
          <hr className='vLine'></hr>
          <div className="htmlIcon">
            <img src = {htmlIcon} alt = "html icon"/>
          </div>
          <div className="jsIcon">
            <img src = {jsIcon} alt = "js icon"/>
          </div>
          <div className="cssIcon">
            <img src = {cssIcon} alt = "css icon"/>
          </div>
          <div className="reactIcon">
            <img src = {reactIcon} alt = "react icon"/>
          </div>
          <div className="javaIcon">
            <img src = {javaIcon} alt = "java icon"/>
          </div>
          <div className="pythonIcon">
            <img src = {pythonIcon} alt = "python icon"/>
          </div>
          <div className="csharpIcon">
            <img src = {csharpIcon} alt = "c# icon"/>
          </div>
        </p>
      </div>
      
      <div className="about_Content">
        <p className='intro'>
            Hello, my name is Michael and I am a front-end developer. I found my passion for web development soon after graduating 
            from my university. I quickly grasp new concepts, while bringing my own ideas to the table.
        </p>
        <p className='otherInfo'>
            When I'm not coding, I will usually go to the gym, spend time with friends, or play my favorite game, Borderlands 2.
        </p>
      </div>
    </section>
  )
}

export default About