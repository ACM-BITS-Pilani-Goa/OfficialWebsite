import React from "react";
import { FaGithub } from "react-icons/fa";
import ResourceCardWrapper from "./styles";

const ResourceCard = ({
  name = "",
  title = "TEAM Resource",
  link_github = "#",
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
          <b>{title}</b>
        </p>
        <p className="tap">(TAP TO VIEW MORE)</p>
      </div>
      <div className="socialIconContainer">
        <div className="icon">
          <a aria-label="Github" href={link_github}>
            <FaGithub color="#000" />
          </a>
        </div>
      </div>
    </ResourceCardWrapper>
  );
};

export default ResourceCard;
