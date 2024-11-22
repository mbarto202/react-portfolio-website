import React from "react";
import "./header.css";
import Particles from "react-tsparticles";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import { loadFull } from "tsparticles";

const Header = () => {
  const particlesInit = async (main) => {
    console.log("Particles Loaded");
    await loadFull(main);
  };

  const particlesOptions = {
    fpsLimit: 60,
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
      opacity: {
        value: 0.5,
        random: true,
      },
      size: {
        value: 3,
        random: true,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "bounce",
        attract: {
          enable: false,
        },
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
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
        push: {
          quantity: 4,
        },
      },
    },
  };

  return (
    <header>
      <Particles
        className="particles"
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
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
