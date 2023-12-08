import React, { Component }  from 'react';
import { useState } from 'react';
import "./portfolio.scss";
import data from './data';
export default function Portfolio() {
  const [experience, setExperience] = useState("MD");
  const experiences = Object.values(data);
  const [active, setActive] = useState(false)
  const handleExperience = (val) => {
    setExperience(val)
  }
  return (
    <div className="portfolio" id="portfolio">
      <span class="Title title-position">
        TRUSTED
        <br />
        BY MANY<span class="Dashes">//</span>
      </span>

      <div class="Red-highlighting red-highlight-position hide-mobile">
        I believe good design is where art, community, and technology fuse to
        create magic
      </div>

      <span class="Quotation quotation-position-1 hide-mobile">
        Jump down the rabbit hole with me and lets get started on a new project
        together.
        <br />
        Contact me through any of the following.
        <br />
        <br />
        I’ve designed for the following companies. However, when I’m not pixel
        pushing, you
        <br />
        can catch me working on web3 stealth startups or personal projects.
      </span>

      <div className="portfolio-section">
        {experiences.map((company) => (
          <div
            key={company.key}
            onClick={() => { handleExperience(company.key); setActive(true) }}
            className="box mongodb-position"
          >
            <div className="box-wrapper">
              <div className="image-box">
                <img
                  src={`images/black portfolio images/${company.image}`}
                  alt={company.company}
                  className="mongodb-image image image-hover"
                />
                <img
                  src={`images/white portfolio images/${company.image}`}
                  alt={company.company}
                  className=" image"
                />
              </div>
              <span className="portfolio-title hide-mobile">
                {company.company}
              </span>
              <span className="portfolio-position hide-mobile">
                {company.position}
              </span>
              {company.render && company.render()}
            </div>
          </div>
        ))}
      </div>
      <span class="Quotation quotation-position-2 hide-mobile">
        Curious about my work? Fall into the
        <a class="Black-button black-button-sizing" href="#contact">
          Rabit Hole ↓
        </a>
      </span>
      {active && (
        <div className="experience-description hide-desktop">
          <span class="experience-company">
            {data[experience].company}
            <span className="experience-dash">
              // {data[experience].position}
            </span>
          </span>
          <hr />
          <p className="experience-duty">{data[experience].description}</p>
          <hr />
        </div>
      )}
    </div>
  );
}
