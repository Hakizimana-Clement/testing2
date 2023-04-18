import React from "react";
import Fade from "react-reveal/Fade";
export default function AboutUs() {
  return (
    <section className="row About-content" id="aboutUs">
      <Fade left>
        <div className="col-lg-6 about-message">
          <h1>About us</h1>
          <p>
            We are here to show you that there many styles you can wear igitenge
            and you have ability to choose the size according to your size. And
            we give you the latest updates about all about ibitenge (igitenge in
            plural). 😊
          </p>
        </div>
      </Fade>
      <Fade right>
        <div className=" about-image col-lg-6">
          <img
            src="https://images.unsplash.com/photo-1642872597460-278924cb13dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
            alt="ankara"
          />
        </div>
      </Fade>
    </section>
  );
}
