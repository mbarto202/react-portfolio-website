import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

//keep main nav bar maybe switch to top(home, about, contact me)
//two main buttons(services, check in)
//scroll icon on left

const Header = () => {
  return (
    <header>
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
