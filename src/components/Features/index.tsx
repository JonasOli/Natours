import React from "react";
import "./style.scss";

export const Feature = () => {
  return (
    <section className="section-features">
      <div className="section-features__grid grid-layout">
        <div className="feature-box">
          <i className="feature-box__icon icon-basic-world" />
          <h3 className="heading-tertiary">Explore the world</h3>
          <p className="feature-box__text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
            dolor laudantium assumenda
          </p>
        </div>
        <div className="feature-box">
          <i className="feature-box__icon icon-basic-compass" />
          <h3 className="heading-tertiary">Meet nature</h3>
          <p className="feature-box__text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
            dolor laudantium assumenda
          </p>
        </div>
        <div className="feature-box">
          <i className="feature-box__icon icon-basic-map" />
          <h3 className="heading-tertiary">Find your way</h3>
          <p className="feature-box__text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
            dolor laudantium assumenda
          </p>
        </div>
        <div className="feature-box">
          <i className="feature-box__icon icon-basic-heart" />
          <h3 className="heading-tertiary">Live a heathier life</h3>
          <p className="feature-box__text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
            dolor laudantium assumenda
          </p>
        </div>
      </div>
    </section>
  );
};
