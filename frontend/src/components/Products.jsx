import React from "react";
import CardImage from "./CardImage";
import Slide from "react-reveal/Slide";

export default function Products() {
  return (
    <section className="products" id="products">
      <Slide bottom>
        <h1>Our Products</h1>
      </Slide>
      <CardImage />
    </section>
  );
}
