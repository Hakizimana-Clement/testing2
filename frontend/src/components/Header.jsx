import React from "react";
import WelcomingMessage from "./WelcomingMessage";
import Carousel from "./Carousel";
export default function Header() {
  return (
    <section className="sub-main row ">
      <WelcomingMessage />
      <Carousel />
    </section>
  );
}
