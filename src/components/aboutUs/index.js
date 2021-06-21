import React from "react";
import AboutUsWrapper from "./style";
import { Zoom } from "react-reveal";
import config from "react-reveal/globals";

config({ ssrFadeout: true });

export default function AboutUs() {
  return (
    <>
      <AboutUsWrapper>
        <section className="section section-light">
          <Zoom>
            <div>
              <div className="heading">WHO ARE WE?</div>
              <br />
            </div>
          </Zoom>
          <Zoom bottom>
            <div>
              <p className="main-text">
                We are the Association for Computing Machinery (ACM), Student
                Chapter <br /> BITS Pilani, K. K. Birla Goa campus.
              </p>
              <br />
              <p className="main-text">
                The world of computing is vast and fast paced where you can find
                new and interesting things to learn everyday. We aim to serve as
                a dynamic hub of activities for the students of BITS Goa, where
                they meet, interact, learn from each other and nurture
                themselves in the process. <br /><br />
                Our chapter will serve as node of activity for ACM members and
                the computing community at large, offering seminars, lectures,
                and the opportunity to meet peers and experts in many fields of
                interest.
              </p>
            </div>
          </Zoom>
        </section>
        <div className="pimg1"></div>
        {/* <div className="pimg1"></div> */}
        {/* <div className="pimg2">
          <div className="ptext">
            <span className="border trans"></span>
          </div>
        </div> */}
        <section className="section section-dark">
          <Zoom>
            <div>
              <div className="heading">OUR VISION</div>
              <br />
            </div>
          </Zoom>
          <Zoom bottom>
            <div>
              <p>
                We envision a community, irrespective of barriers of branch,
                where interest and passion for computers and technology are the
                only criterion and where we use our knowledge and skills to
                advance the profession and make a positive impact.
              </p>
            </div>
          </Zoom>
        </section>
        <div className="pimg2">
          <div className="ptext">
            <span className="border trans"></span>
          </div>
        </div>
      </AboutUsWrapper>
    </>
  );
}
