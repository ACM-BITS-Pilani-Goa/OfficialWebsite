import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import TimelineWrapper from "./styles";
import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {
  return (
    <TimelineWrapper>
      <div className="heading">UPCOMING EVENTS</div>
      <VerticalTimeline>
        <VerticalTimelineElement
          contentStyle={{ background: "rgb(33, 150, 243)" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="date here"
          iconStyle={{ background: "rgb(123, 100, 100)" }}
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
        </VerticalTimelineElement>
      </VerticalTimeline>
    </TimelineWrapper>
  );
};

export default Timeline;
