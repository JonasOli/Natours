/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./style.scss";

export const About = () => {
  return (
    <main>
      <section className="section-about">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">
            Exiting tours for adventurous people
          </h2>
        </div>

        <div className="section-about__description grid-layout">
          <div>
            <h3 className="heading-tertiary u-margin-bottom-small">
              You're going to fall in love with nature
            </h3>
            <p className="paragraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Inventore dolor laudantium assumenda debitis sint minus mollitia
              molestias natus eaque. Sapiente veritatis, dolorem distinctio
              nobis accusantium sint ratione sunt obcaecati quos?
            </p>

            <h3 className="heading-tertiary u-margin-bottom-small">
              Live adventures like you never have before
            </h3>
            <p className="paragraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Inventore dolor laudantium assumenda debitis sint minus mollitia
              molestias natus eaque.
            </p>

            <a href="#about" className="btn-text">
              Learn more &rarr;
            </a>
          </div>

          <div className="composition">
            <img
              src="/img/nat-1-large.jpg"
              alt="Photo 1"
              className="composition__photo composition__photo--p1"
            />
            <img
              src="/img/nat-2-large.jpg"
              alt="Photo 2"
              className="composition__photo composition__photo--p2"
            />
            <img
              src="/img/nat-3-large.jpg"
              alt="Photo 3"
              className="composition__photo composition__photo--p3"
            />
          </div>
        </div>
      </section>
    </main>
  );
};
