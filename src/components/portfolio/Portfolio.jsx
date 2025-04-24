import React from "react";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2 className="title">Portfolio</h2>
      <p className="portfolio_intro">
        Here are a few projects that showcase my full-stack experience, frontend
        design, and collaboration skills.
      </p>
      <div className="portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_img placeholder-img">Image Placeholder</div>
          <h3>Trainer App</h3>
          <div className="portfolio_item-cta">
            <a
              href="#"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="#"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_img placeholder-img">Image Placeholder</div>
          <h3>BirdieTrackr</h3>
          <div className="portfolio_item-cta">
            <a
              href="#"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="#"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_img placeholder-img">Image Placeholder</div>
          <h3>React Weather App</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/mbarto202/react-weather-app"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="#"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
