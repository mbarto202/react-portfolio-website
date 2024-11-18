import React from "react";
import "./about.css";
import htmlIcon from "../../assets/html5logo.png";
import cssIcon from "../../assets/cssLogo.png";
import jsIcon from "../../assets/jsLogo.png";
import reactIcon from "../../assets/reactlogo.webp";
import csharpIcon from "../../assets/cshLogo.png";
import javaIcon from "../../assets/jLogo.png";
import pythonIcon from "../../assets/pyLogo.png";

const About = () => {
  return (
    <section id="about">
      <h2 className="title">About Me</h2>
      <div className="skills_Content">
        <img className="skillIcon" src={htmlIcon} alt="HTML Icon" />
        <img className="skillIcon" src={jsIcon} alt="JavaScript Icon" />
        <img className="skillIcon" src={cssIcon} alt="CSS Icon" />
        <img className="skillIcon" src={reactIcon} alt="React Icon" />
        <img className="skillIcon" src={javaIcon} alt="Java Icon" />
        <img className="skillIcon" src={pythonIcon} alt="Python Icon" />
        <img className="skillIcon" src={csharpIcon} alt="C# Icon" />
      </div>
      <div className="about_Content">
        <p className="intro">
          Hello, my name is Michael and I am a software developer. I found my
          passion for software development soon after starting my journey at
          West Chester University. I quickly grasp new concepts, while bringing
          my own ideas to the table.
        </p>
        <p className="otherInfo">
          My hobbies outside of coding include bodybuilding, personal training,
          and hiking.
        </p>
      </div>
    </section>
  );
};

export default About;
