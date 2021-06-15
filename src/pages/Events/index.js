import React from "react";
import Zoom from "react-reveal/Zoom";
import config from "react-reveal/globals";

config({ ssrFadeout: true });
// import AboutUsWrapper from "./style";
import ACMlogo from "../../images/ACM logo textRight.svg";
import EventsWrapperMain from "./stylenext";

export default function AboutUs() {
  return (
    <>
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
            <h1 className="heading" style={{ marginTop: "8vw" }}>
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
              <hr />
              <Zoom>
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
            </div>
          </div>
        </div>
      </EventsWrapperMain>
    </>
  );
}
