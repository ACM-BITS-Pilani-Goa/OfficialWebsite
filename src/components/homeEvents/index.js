import { Link } from "react-router-dom";
import React from "react";
import HomeEventWrapper from "./style";
import Zoom from "react-reveal/Zoom";
import config from "react-reveal/globals";

config({ ssrFadeout: true });

const HomeEvent = () => {
  return (
    <HomeEventWrapper>
      <div className="section" id="events">
        <div className="section-title">
          <span>Events</span>
        </div>
        <div className="section-row">
          <div className="events-container">
            <Zoom>
              <div className="event-container container odd-event">
                <div className="event-title">
                  {" "}
                  <span> Foundations Laid </span>
                </div>
                <div className="event-body">
                  <p>
                    After a lot of discussions and ideas shared, we finally came
                    together with this organization. After a lot of discussions
                    and ideas shared, we finally came together with this
                    organization. After a lot of discussions and ideas shared,
                    we finally came together with this organization.
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
                <div className="event-footer">
                  <Link to="/events">Read More</Link>
                </div>
              </div>
            </Zoom>
            <hr />
          </div>
        </div>
      </div>
    </HomeEventWrapper>
  );
};
export default HomeEvent;
