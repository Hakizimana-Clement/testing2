import React from "react";
import BlogSection from "./BlogSection";
import Fade from "react-reveal/Fade";

export default function Blog() {
  return (
    <section className="blog-section" id="blog">
      <Fade top>
        <h1>FORM THE BLOG</h1>
      </Fade>
      <BlogSection />
    </section>
  );
}
