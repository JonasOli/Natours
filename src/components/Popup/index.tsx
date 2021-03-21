import React from "react";
import "./style.scss";

export const Popup = () => {
  return (
    <section className="popup" id="popup">
      <div className="popup__content">
        <div className="popup__left">
          <img className="popup__img" src="img/nat-8.jpg" alt="Tour" />
          <img className="popup__img" src="img/nat-9.jpg" alt="Tour" />
        </div>
        <div className="popup__right">
          <a href="#section-tours" className="popup__close">
            &times;
          </a>
          <h2 className="heading-secondary u-margin-bottom-small">
            Start bookin now
          </h2>
          <h3 className="heading-tertiary u-margin-bottom-small">Important</h3>
          <p className="popup__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae illo,
            expedita tempore consequuntur provident exercitationem et fuga
            voluptates laborum sunt repellendus, quidem tempora quod. Laboriosam
            hic voluptatem aliquid dolore quisquam!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Vitae illo, expedita tempore
            consequuntur provident exercitationem et fuga voluptates laborum
            sunt repellendus, quidem tempora quod. Laboriosam hic voluptatem
            aliquid dolore quisquam!Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Vitae illo, expedita tempore consequuntur
            provident exercitationem et fuga voluptates laborum sunt
            repellendus, quidem tempora quod. Laboriosam hic voluptatem aliquid
            dolore quisquam!Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Vitae illo, expedita tempore consequuntur provident
            exercitationem et fuga voluptates laborum sunt repellendus, quidem
            tempora quod. Laboriosam hic voluptatem aliquid dolore
            quisquam!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Vitae illo, expedita tempore consequuntur provident exercitationem
            et fuga voluptates laborum sunt repellendus, quidem tempora quod.
            Laboriosam hic voluptatem aliquid dolore quisquam!
          </p>
          <a href="/" className="btn btn--green">
            Book now
          </a>
        </div>
      </div>
    </section>
  );
};
