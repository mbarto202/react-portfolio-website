import React from "react";
import { tsParticles } from "@tsparticles/engine";
import Particles from "@tsparticles/react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  const particlesInit = (engine) => {
    console.log("Particles Init Called");
    tsParticles.init(engine);
  };

  const particlesOptions = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#fa8072",
      },
      shape: {
        type: "circle",
      },
      size: {
        value: 3,
      },
      move: {
        enable: true,
        speed: 1,
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        onClick: {
          enable: true,
          mode: "push",
        },
      },
    },
  };

  return (
    <header>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="particles"
      />
      <div className="container header__container">
        <h2 className="header__title">
          Hello, I'm <span>Michael</span>. I'm a Software Engineer
        </h2>
        <CTA />
        <HeaderSocials />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
