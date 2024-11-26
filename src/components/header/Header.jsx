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
    particles: {
      number: { value: 100 },
      size: { value: 3 },
      move: { enable: true, speed: 1 },
      shape: { type: "circle" },
      color: { value: "#fa8072" },
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
