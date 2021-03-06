import React from "react";
import "./style.scss";

export const Navigation = () => {
  return (
    <section className="navigation">
      <input
        type="checkbox"
        name=""
        id="navi-toggle"
        className="navigation__checkbox"
      />

      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="/" className="navigation__link">
              <span>01</span> About Natours
            </a>
          </li>
          <li className="navigation__item">
            <a href="/" className="navigation__link">
              <span>02</span> Your benefits
            </a>
          </li>
          <li className="navigation__item">
            <a href="/" className="navigation__link">
              <span>03</span> Popular benefits
            </a>
          </li>
          <li className="navigation__item">
            <a href="/" className="navigation__link">
              <span>04</span> Stories
            </a>
          </li>
          <li className="navigation__item">
            <a href="/" className="navigation__link">
              <span>05</span> Book now
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};
