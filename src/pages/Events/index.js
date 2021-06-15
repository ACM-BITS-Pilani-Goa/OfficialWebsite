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
                      After a lot of discussions and ideas shared, we finally
                      
                      <br />
                      came together with this organization. 
                      <br />
                      <br /> We plan out events and activities which will bring students together with the industry professionals associated with ACM.
                      <br/>
                      <br /> <a href="https://github.com/ACM-BITS-Pilani-Goa" target="blank">Github organisation</a> that accumulates best tech-repositories available.
                      <br/>
                      <br /> Subscribe to ACM Tech-Newsletters <a href="https://docs.google.com/forms/d/e/1FAIpQLSdLmpVQfhBI3GI5xM9gIMqv-dNoH72zrQq5kMHBn4i11_TlsA/viewform" target="blank">here</a>.
                      <br/>
                      <br /> <a href="https://wiki.bitsg.hosting.acm.org/wiki/index.php/Main_Page" target="blank">Wiki</a> as one-stop portal to get all your queries answered without having to put up messages on a plethora of groups.
                      
                    </p>
                    <img className="event-image" src={`${ACMlogo}`} />
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
    </>
  );
}
