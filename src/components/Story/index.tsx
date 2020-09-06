import React from "react";
import "./style.scss";

export const Story = () => {
  return (
    <section className="section-stories">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src="/videos/video.mp4" type="video/mp4" />
          <source src="/videos/video.webm" type="video/webm" />
          Your browser is not supported!
        </video>
      </div>

      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">We make people genuinely happy</h2>
      </div>

      <div className="grid-layout">
        <div className="story">
          <figure className="story__shape">
            <img
              src="/img/nat-8.jpg"
              alt="Person on a tour"
              className="story__img"
            />
            <figcaption className="story__caption">Mary Smith</figcaption>
          </figure>

          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              I had the best week ever with my family
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              possimus deleniti sit ab qui iusto esse illo, aliquam aliquid
              quidem beataeLorem ipsum dolor sit amet consectetur adipisicing
              elit. Nesciunt possimus deleniti sit ab qui iusto esse illo, Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              possimus deleniti sit
            </p>
          </div>
        </div>

        <div className="story">
          <figure className="story__shape">
            <img
              src="/img/nat-9.jpg"
              alt="Person on a tour"
              className="story__img"
            />
            <figcaption className="story__caption">Jack Wilson</figcaption>
          </figure>

          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              WOW! My life is completely different now
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              possimus deleniti sit ab qui iusto esse illo, aliquam aliquid
              quidem beataeLorem ipsum dolor sit amet consectetur adipisicing
              elit. Nesciunt possimus deleniti sit ab qui iusto esse illo, Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              possimus deleniti sit
            </p>
          </div>
        </div>

        <div className="u-center-text u-margin-top-huge">
          <a href="#stories" className="btn-text">
            Read all stories &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};
