import React from "react";
import AboutUsWrapper from "./style";

export default function AboutUs() {
  return (
    <>
      <AboutUsWrapper>
        <div className="pimg1"></div>

        <section className="section section-light">
          <h2>Some intro about us...</h2>
          <p>
            We are the Association for Computing Machinery (ACM), Student
            Chapter, Birla Institute of Technology and Science, Pilani, Goa
            campus.
          </p>
        </section>

        <div className="pimg2">
          <div className="ptext">
            <span className="border trans"></span>
          </div>
        </div>

        <section className="section section-dark">
          <h2>The Goal</h2>
          <p>
            The chapter aims at serving as a dynamic hub of activites for the
            students of BITS Goa, where they meet, interact, learn from each
            other and nuture themselves in the process. It aims to foster a
            sense of innovation and creativity among computer science
            enthusiasts.
          </p>
        </section>
      </AboutUsWrapper>
    </>
  );
}
