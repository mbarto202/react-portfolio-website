import React from "react";
import { useInView } from "react-intersection-observer";
import "./portfolio.css";

const Portfolio = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      id="portfolio"
      ref={ref}
      className={`portfolio-section ${inView ? "fadeIn" : ""}`}
    >
      <h2 className="title">Portfolio</h2>
      <p className="portfolio_intro">
        Here are a few projects that showcase my full-stack experience, frontend
        design, mobile app development, and collaboration skills.
      </p>
      <div className="portfolio_container">
        {/* Cards stay the same */}
        <article className="portfolio_item">
          <div className="portfolio_img placeholder-img">Image Placeholder</div>
          <h3>BartoBuild</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/mbarto202/bartobuild-website"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_img placeholder-img">Image Placeholder</div>
          <h3>BirdieTrackr</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/jbanning22/BirdieTrackr"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_img placeholder-img">Image Placeholder</div>
          <h3>Weather iOS App</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/mbarto202/react-native-weather-ios"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
