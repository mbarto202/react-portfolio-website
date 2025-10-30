import React from "react";
import { useInView } from "react-intersection-observer";
import "./about.css";

import htmlIcon from "../../assets/html5logo.png";
import cssIcon from "../../assets/cssLogo.png";
import jsIcon from "../../assets/jsLogo.png";
import reactIcon from "../../assets/reactlogo.webp";
import csharpIcon from "../../assets/cshLogo.png";
import javaIcon from "../../assets/jLogo.png";
import pythonIcon from "../../assets/pyLogo.png";

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      id="about"
      ref={ref}
      className={`about-section ${inView ? "fadeIn" : ""}`}
    >
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
          Hi, I'm Michael, a passionate full stack software engineer with real
          world experience developing and deploying applications across web and
          mobile platforms. I have worked on client facing projects through
          NeonDevTech, where I collaborated with other developers to build
          scalable, production ready solutions using technologies like React,
          Node.js, and AWS. I am continuously expanding my skills through
          personal projects that combine frontend design, backend development,
          and cloud integration, always focused on writing clean, efficient code
          that delivers real impact.
        </p>
        <p className="otherInfo">
          Outside of tech, I enjoy bodybuilding, personal training, and hiking
          to stay sharp mentally and physically.
        </p>
      </div>
    </section>
  );
};

export default About;
