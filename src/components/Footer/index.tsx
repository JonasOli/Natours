import React from "react";
import "./style.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <picture className="footer__logo">
          <source
            srcSet="/img/logo-green-small-1x.png 1x, /img/logo-green-small-2x.png 2x"
            media="(max-width: 37.5em)"
          />
          <img
            srcSet="/img/logo-green-1x.png 1x, /img/logo-green-2x.png 2x"
            alt="Full logo"
            className="footer__logo"
          />
        </picture>
      </div>
      <div className="grid-layout footer__grid">
        <div className="footer__navigation">
          <ul className="footer__list">
            <li className="footer__item">
              <a href="/" className="footer__link">
                Company
              </a>
            </li>
            <li className="footer__item">
              <a href="/" className="footer__link">
                Contact us
              </a>
            </li>
            <li className="footer__item">
              <a href="/" className="footer__link">
                Carrers
              </a>
            </li>
            <li className="footer__item">
              <a href="/" className="footer__link">
                Privacy policy
              </a>
            </li>
            <li className="footer__item">
              <a href="/" className="footer__link">
                Terms
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__copyright">
          Built by{" "}
          <a href="/" className="footer__link">
            Jonas Oliveira
          </a>
        </div>
      </div>
    </footer>
  );
};
