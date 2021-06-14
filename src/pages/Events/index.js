import React from "react";
import Zoom from "react-reveal/Zoom";
import config from "react-reveal/globals";

config({ ssrFadeout: true });
import AboutUsWrapper from "./style";
import EventsWrapperMain from "./stylenext";

export default function AboutUs() {
  return (
    <>
      <AboutUsWrapper>
        <div className="pimg1"></div>
      </AboutUsWrapper>
      <EventsWrapperMain>
        <div className="section" id="events">
          <div className="section-title">
            <span>Events</span>
          </div>
          <div className="section-row">
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
                      came together with this organization. After a lot of
                      discussions and ideas shared, we finally came together
                      with this organization. After a lot of discussions and
                      ideas shared, we finally came together with this
                      organization.
                      <br />
                      <br />
                      After a lot of discussions and ideas shared, we together
                      with this organization.
                      <br />
                      <br /> After a lot of discussions and ideas shared, we
                      finally came together with this organization.
                    </p>
                    <img
                      className="event-image"
                      src="https://images.unsplash.com/photo-1623443726108-176440e143e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
                      alt=""
                    />
                  </div>
                </div>
              </Zoom>
              <hr />
            </div>
          </div>
        </div>
      </EventsWrapperMain>
    </>
  );
}
