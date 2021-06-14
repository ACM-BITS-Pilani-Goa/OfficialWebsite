import React from "react";
import AboutUsWrapper from "./style";

export default function AboutUs() {
  return (
    <>
      <AboutUsWrapper>
        <div className="pimg1"></div>

        <section className="section section-light">
          <h2>About Us</h2>
          <br />
          <p>
            We are the Association for Computing Machinery (ACM), Student
            Chapter, <br />
            Birla Institute of Technology and Science, Pilani, K. K. Birla Goa
            campus.
            <br />
            <br />
            The world of computing is vast and fast paced where you can find new
            and interesting things to learn everyday. We aim to serve as a
            dynamic hub of activities for the students of BITS Goa, where they
            meet, interact, learn from each other and nurture themselves in the
            process. Staying up-to-date and learning multiple skills is the best
            way to stay in this competition.
          </p>
        </section>

        <div className="pimg2">
          <div className="ptext">
            <span className="border trans"></span>
          </div>
        </div>

        <section className="section section-dark">
          <h2>Our Vision</h2>
          <br />
          <p>
            We envision a community, irrespective of barriers of branch, where
            interest and passion for computers and technology are the only
            criterion and where we use our knowledge and skills to advance the
            profession and make a positive impact.
          </p>
        </section>
      </AboutUsWrapper>
    </>
  );
}
