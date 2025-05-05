import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa"; // ✅ Updated icon import

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footerLogo">
        Michael Barto
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footerSocials">
        <a
          href="https://www.linkedin.com/in/michael-barto-6a2365230/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/mbarto202"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>

      <div className="footerCopyright">
        <small>© 2025 Michael Barto. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
