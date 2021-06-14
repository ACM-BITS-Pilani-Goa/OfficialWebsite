import React from "react";
import AboutUsWrapper from "./style";
import Zoom from "react-reveal/Zoom";
import config from "react-reveal/globals";

config({ ssrFadeout: true });

export default function AboutUs() {
  return (
    <>
      <AboutUsWrapper>
        {/* <div className="pimg1"></div> */}

        <section className="section section-light">
          <Zoom>
            <div className="heading">WHO ARE WE?</div>

            <br />
            <p className="main-text">
              We are the Association for Computing Machinery (ACM), Student
              Chapter of BITS Pilani, K. K. Birla Goa campus.
              <br />
              <br />
              The world of computing is vast and fast paced where you can find
              new and interesting things to learn everyday. We aim to serve as a
              dynamic hub of activities for the students of BITS Goa, where they
              meet, interact, learn from each other and nurture themselves in
              the process. Staying up-to-date and learning multiple skills is
              the best way to stay in this competition.
            </p>
          </Zoom>
        </section>

        {/* <div className="pimg2">
          <div className="ptext">
            <span className="border trans"></span>
          </div>
        </div> */}

        <section className="section section-dark">
          <div className="heading">OUR VISION</div>
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
