import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import TimelineWrapper from "./styles";
import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {
  return (
    <TimelineWrapper>
      <div className="heading">EVENTS</div>
      <VerticalTimeline>
        <VerticalTimelineElement
          contentStyle={{ background: "rgb(33, 150, 243)" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="21/06/2021"
          iconStyle={{ background: "rgb(33, 150, 243)" }}
        >
          <div className="event-content">
            <h3>Chapter Launch</h3>
            <p>ACM BITS Pilani Goa Chapter Started</p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: "rgb(33, 150, 243)" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date=""
          iconStyle={{ background: "rgb(33, 150, 243)" }}
        >
          <div className="event-content">
            <h3>BITS Wiki Launched</h3>
            <p>
              We launched a Wiki to act as one-stop portal to get all your
              queries answered without having to put up messages on a plethora
              of groups. The wiki has topics for major FAQs.
              <br></br>
              <a
                target="_blank"
                href="http://wiki.bitsg.hosting.acm.org/"
                rel="noreferrer"
              >
                Check it out!
              </a>
            </p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: "rgb(33, 150, 243)" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date=""
          iconStyle={{ background: "rgb(33, 150, 243)" }}
        >
          <div className="event-content">
            <h3>GitHub Organisation Launched</h3>
            <p>
              We launched a GitHub organisation to accumulate best Students
              related open source repositories available, in one place.{" "}
              <br></br>
              <a
                target="_blank"
                href="https://github.com/ACM-BITS-Pilani-Goa"
                rel="noreferrer"
              >
                Check it out!
              </a>
            </p>
          </div>
        </VerticalTimelineElement>
        {/* <VerticalTimelineElement
          date="date here"
          iconStyle={{ background: "rgb(33, 150, 243)" }}
        >
          <h3>TITLE HERE</h3>
          <p>EVENT DETAILS HERE</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: "rgb(33, 150, 243)" }}
          date="date here"
          iconStyle={{ background: "rgb(33, 150, 243)" }}
        >
          <h3>TITLE HERE</h3>
          <p>EVENT DETAILS HERE</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="date here"
          iconStyle={{ background: "rgb(33, 150, 243)" }}
        >
          <h3>TITLE HERE</h3>
          <p>EVENT DETAILS HERE</p>
        </VerticalTimelineElement> */}
      </VerticalTimeline>
    </TimelineWrapper>
  );
};

export default Timeline;
