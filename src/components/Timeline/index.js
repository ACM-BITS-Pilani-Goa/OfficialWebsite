import React from "react";
import { Chrono } from "react-chrono";
import TimelineWrapper from "./styles";

const Timeline = () => {
  const items = [
    {
      title: "Day 1",
      cardTitle: "Item 1",
      cardSubtitle: "Lorem Ipsum",
      cardDetailedText:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, placeat doloribus. Recusandae id error ipsum assumenda quis consequuntur, vel sapiente quas suscipit accusamus nesciunt reiciendis at sit iusto similique. Explicabo.",
      //   media: {
      //     type: "IMAGE",
      //     source: {
      //       url: "https://picsum.photos/seed/djhakjsd/1000/1000",
      //     },
      //   },
    },
    {
      title: "Day 2",
      cardTitle: "Item 2",
      cardSubtitle: "Lorem Ipsum",
      cardDetailedText:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, placeat doloribus. Recusandae id error ipsum assumenda quis consequuntur, vel sapiente quas suscipit accusamus nesciunt reiciendis at sit iusto similique. Explicabo.",
    },
    {
      title: "Day 3",
      cardTitle: "Item 3",
      cardSubtitle: "Lorem Ipsum",
      cardDetailedText:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, placeat doloribus. Recusandae id error ipsum assumenda quis consequuntur, vel sapiente quas suscipit accusamus nesciunt reiciendis at sit iusto similique. Explicabo.",
    },
    {
      title: "Day 4",
      cardTitle: "Item 4",
      cardSubtitle: "Lorem Ipsum",
      cardDetailedText:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, placeat doloribus. Recusandae id error ipsum assumenda quis consequuntur, vel sapiente quas suscipit accusamus nesciunt reiciendis at sit iusto similique. Explicabo.",
    },
  ];
  return (
    <TimelineWrapper>
      <div className="heading">UPCOMING EVENTS</div>
      <div className="timeline-main">
        <Chrono
          theme={{
            primary: "#141823",
            secondary: "#9FE2BF",
            cardBgColor: "#f0e7da",
          }}
          hideControls
          scrollable={false}
          cardHeight="100px"
          items={items}
          mode="VERTICAL_ALTERNATING"
          useReadMore={false}
        />
      </div>
    </TimelineWrapper>
  );
};

export default Timeline;
