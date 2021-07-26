import React, { useEffect } from "react";
import Zoom from "react-reveal/Zoom";
import config from "react-reveal/globals";
import Footer from "../../components/Footer/index";
config({ ssrFadeout: true });
// import AboutUsWrapper from "./style";
import ACMlogo from "../../images/ACM text logo.svg";
import EventsWrapperMain from "./stylenext";
import Navbar from "../../components/Navbar";
import ACMlogoHome from "../../images/ACM logo textRight.svg";
import AboutUsWrapper from "./style";
import GettingStartedWith from "../../images/getStart.jpeg";

export default function AboutUs({ load, setload }) {
  useEffect(async () => {
    await setTimeout(() => setload(false), 3000);
  }, []);
  let display;
  if (load) {
    display = "flex";
  } else {
    display = "none";
  }

  let displayother;
  if (load) {
    displayother = "none";
  } else {
    displayother = " ";
  }
  return (
    <>
      <AboutUsWrapper>
        <div className="loadBackground" style={{ display: display }}>
          <img
            src={ACMlogoHome}
            className="bannerset"
            width="50%"
            style={{ justify: "center" }}
          />
          <div>
            <div className="lds-facebook">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>{" "}
      </AboutUsWrapper>
      <div style={{ display: displayother }}>
        <Navbar />
        {/* <AboutUsWrapper>
        <div className="Bdome">
          <div
            className="animate"
            style={{
              display: "flex",
              justifyContent: "center",
              color: "#E1F5FE",
              //fontFamily: "times, Times New Roman, times-roman, georgia, serif",
              fontSize: "96px",
              fontWeight: "bold",
              textTransform: "uppercase",
              fontFamily: "Monoton, cursive",
            }}
          >
            Events
          </div>
        </div>
      </AboutUsWrapper> */}
        <EventsWrapperMain>
          <div className="section" id="events">
            <div className="section-row">
              <h1 className="heading" style={{ marginTop: "11vw" }}>
                Events
              </h1>
              <div className="events-container">
                <Zoom>
                  <div
                    className="event-container container odd-event"
                    style={{ paddingBottom: "20px" }}
                  >
                    <div className="event-title">
                      {" "}
                      <span> Foundations Laid </span>
                    </div>
                    <div className="event-body">
                      <p>
                        As of 22nd June 2021, we have officially launched the
                        ACM BITS Pilani Goa Student Chapter.
                        <br />
                        More than 2 months in setup and registration, we pledge
                        to actively work to create a hub of computer science
                        enthusiasts solely based on passion and interest.
                        <br />
                        <br /> We plan out events and activities which will
                        bring students together with the industry professionals
                        associated with ACM.
                        <br />
                        <br />{" "}
                        <a
                          href="https://github.com/ACM-BITS-Pilani-Goa"
                          target="blank"
                        >
                          GitHub organisation <br />
                        </a>{" "}
                        Accumulation of best student related repositories
                        available.
                        <br />
                        <br /> Subscribe to ACM Tech-Newsletters to receive
                        latest TechNews thrice a week directly in your inbox. By
                        subscribing to our mailing list you{"'"}ll also receive
                        updates about ACM Call for Papers, Grants and
                        Scholarships.{" "}
                        <a
                          href="https://docs.google.com/forms/d/e/1FAIpQLSdLmpVQfhBI3GI5xM9gIMqv-dNoH72zrQq5kMHBn4i11_TlsA/viewform"
                          target="blank"
                        >
                          Subscribe here.
                        </a>
                        <br />
                        <br />{" "}
                        <a
                          href="https://wiki.bitsg.hosting.acm.org/wiki/index.php/Main_Page"
                          target="blank"
                        >
                          Wiki
                          <br />
                        </a>{" "}
                        A one-stop portal to get all your queries answered
                        without having to put up messages on a plethora of
                        groups.
                      </p>
                      <img className="event-image" src={`${ACMlogo}`} />
                    </div>
                  </div>
                </Zoom>
                <hr />
                <Zoom>
                  <div
                    className="event-container container odd-event"
                    style={{ paddingBottom: "20px" }}
                  >
                    <div className="event-title">
                      {" "}
                      <span> Getting Started With Series </span>
                    </div>
                    <div className="event-body">
                      <p>
                        <b>Explore. Explore. Explore!</b>
                        <br></br>
                        You must{"'"}ve heard this word year-round from your
                        seniors. But how exactly do you start exploring a field?
                        Receiving good guidance and mentorship is really crucial
                        and effective to excel in a technological field swiftly.
                        ACM BITS Goa is glad to help you with that with our
                        first event - {"'"}
                        Getting started with{"'"} series.
                        <br />
                        It is a 5 day series of technological talks where
                        seniors from our college would share their experiences
                        and challenges they faced as a beginner in a field and
                        how to overcome them. They will talk about a brief
                        overview of the field, the current technologies and
                        scope, upcoming technologies and future markets, and
                        pursuing the field as a career.
                        <br />
                        <br /> There will be a live QnA session at the end of
                        each talk, so you{"'"}re free to ask any queries about
                        the tech field or the topic you{"'"}re iffy about!
                        <br />
                        The event will be streamed live on{" "}
                        <a
                          href="https://www.youtube.com/channel/UC59ImqI7UeT8k4oKjfvfybA"
                          target="blank"
                        >
                          our Youtube Channel <br />
                        </a>{" "}
                      </p>
                      <img
                        className="event-image"
                        src={`${GettingStartedWith}`}
                      />
                    </div>
                  </div>
                </Zoom>
                <hr />
                {/*<Zoom>
                <div
                  className="event-container container even-event"
                  style={{ paddingBottom: "20px" }}
                >
                  <div className="event-title">
                    {" "}
                    <span> Foundations Laid </span>
                  </div>
                  <div className="event-body">
                    <p>
                      After a lot of discussions and ideas shared, we finally
                      <br />
                      After a lot of discussions and ideas shared, we together
                      with this organization.
                      <br /> After a lot of discussions and ideas shared, we
                      finally came together with this organization.
                    </p>
                    <img className="event-image" src={`${ACMlogo}`} />
                  </div>
                </div>
              </Zoom>
              */}
              </div>
            </div>
          </div>
        </EventsWrapperMain>
        <Footer none="none" />
      </div>
    </>
  );
}
