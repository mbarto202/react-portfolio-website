import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/demo-pic.png";
import IMG2 from "../../assets/demo-pic2.png";
import IMG3 from "../../assets/demo-pic3.PNG";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2 className="title">Portfolio</h2>
      <div className="portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_img">
            <img src={IMG2} alt="Weather App" />
          </div>
          <h3>Weather App</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/mbarto202/react-weather-app"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="http://weathermb.com"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_img">
            <img src={IMG1} alt="Far Out Fairway" />
          </div>
          <h3>Far Out Fairway</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/WCU-CSC476-F20/team-project-2-team-t"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="https://play.unity.com/mg/other/team-project-2-build-1"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_img">
            <img src={IMG3} alt="Labyrinth Game" />
          </div>
          <h3>Labyrinth Game</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/WCU-CSC476-F20/team-project-1-team-t/tree/master"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="https://play.unity.com/mg/other/crazy-labyrinth-team-t"
              className="btn btn-primary"
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
