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
          date="16/06/2021"
          iconStyle={{ background: "rgb(33, 150, 243)" }}
        >
          <div className="event-content">
            <h3>Chapter Launch</h3>
            <p>ACM BITS Pilani Goa Chaoter Started</p>
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
              queries answered without having to put up messages on plethora of
              groups. <a href="/resources">Read More</a>
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
            <h3>GitHub Oragnisation Launched</h3>
            <p>
              We launched a GitHub organisation to accumulate best repositories
              available. <a href="/resources">Read More</a>
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
