import React from "react";
import LightSpeed from "react-reveal/LightSpeed";
import Fade from "react-reveal/Fade";
import ContactForm from "./ContactForm";
export default function ContactUs() {
  return (
    <section>
      <div className="row contact" id="contactUs">
        <Fade bottom>
          <h1>Contact us</h1>
        </Fade>
        <Fade left duration={2800}>
          <div>
            <LightSpeed duration={2500}>
              <h3>Get In Touch</h3>
            </LightSpeed>
            <p>
              If you have any questions or need help, please fill
              <br /> out the form below. We do our best to response <br /> as
              soon as possible.
            </p>
          </div>
          <div className=" col-lg-4 ">
            <ContactForm />
          </div>
        </Fade>
        <Fade right duration={2800}>
          <div className="col-lg-8  contact-image">
            <img
              className="hidden-mobile"
              src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt="contact-us"
            />
          </div>
        </Fade>
      </div>
    </section>
  );
}
