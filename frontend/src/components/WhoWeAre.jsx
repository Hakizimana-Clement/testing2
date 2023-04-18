import React from "react";
import Slide from "react-reveal/Slide";

export default function WhoWeAre() {
  return (
    <>
      <section className="whoWeAre  row">
        <div className="col-lg-6 whoWeAre-part1">
          <h1> Igitenge style for everyone</h1>
          <p>
            Igitenge style is for all people that wants to wear best African wax
            print fabric with beautiful colorful pieces that contain a variety
            of patterns and designs. We become best for you in choosing best
            igitenge wear to it.
          </p>
        </div>
        <Slide right duration={1700}>
          <div className="col-lg-6 whoWeAre-part2">
            <div className="whoWeAre-image">
              <img
                className="img-fluid"
                src="https://images.unsplash.com/photo-1481325545291-94394fe1cf95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=546&q=95"
                alt="african-wax-fabric"
              />
            </div>
          </div>
        </Slide>
      </section>
    </>
  );
}
