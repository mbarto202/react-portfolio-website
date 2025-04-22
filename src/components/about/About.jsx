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
          Hi, I'm Michael — a passionate software engineer with hands-on
          experience building full-stack applications using React, Next.js,
          TypeScript, and Firebase. I currently work as a Software Engineer at
          NeonDevTech, where I collaborate with a team to deliver scalable,
          real-world solutions across both web and mobile platforms.
        </p>
        <p className="otherInfo">
          I thrive in agile environments, love solving technical challenges, and
          take pride in writing clean, maintainable code. Outside of tech, I
          enjoy bodybuilding, personal training, and hiking to stay sharp
          mentally and physically.
        </p>
      </div>
    </section>
  );
};

export default About;
