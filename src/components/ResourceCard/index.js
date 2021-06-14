import React from "react";
import { FaGithub } from "react-icons/fa";
import ResourceCardWrapper from "./styles";

const ResourceCard = ({
  name = "",
  desc = "TEAM Resource",
  link = "#",
  img = "https://picsum.photos/200",
}) => {
  return (
    <ResourceCardWrapper img={img}>
      <div
        className="teamCardInner"
        style={{
          height: `inherit`,
          padding: `0`,
          margin: `0`,
          overflow: `hidden`,
        }}
      >
        <p className="name">{name}</p>
        <p className="post">
          <b>{desc}</b>
        </p>
        <p className="tap">Tap to view link</p>
      </div>
      <div className="socialIconContainer">
        <div className="icon">
          <a aria-label="Github" href={link}>
            <FaGithub color="#000" />
          </a>
        </div>
      </div>
    </ResourceCardWrapper>
  );
};

export default ResourceCard;
