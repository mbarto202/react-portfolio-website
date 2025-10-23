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
        <article className="portfolio_item">
          <h3>Weather iOS App</h3>
          <p className="portfolio_description">
            A mobile weather application built with React Native and
            OpenWeatherMap API, styled to mimic native iOS design.
          </p>
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

        <article className="portfolio_item">
          <h3>BartoBuild</h3>
          <p className="portfolio_description">
            A fitness coaching website built with React and AWS. Features
            serverless backend (Lambda + API Gateway), DynamoDB, and SES for
            contact handling.
          </p>
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
      </div>
    </section>
  );
};

export default Portfolio;
