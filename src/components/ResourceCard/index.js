import React from "react";
import { FaGithub, FaGlobe, FaBloggerB } from "react-icons/fa";
import ResourceCardWrapper from "./styles";

const ResourceCard = ({
  name = "",
  desc = "TEAM Resource",
  link = "#",
  img = "https://picsum.photos/200",
  icon = "",
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
          <a href={link} target="_blank" rel="noreferrer">
            {icon == "FaGithub" ? (
              <FaGithub color="#000" />
            ) : icon == "FaGlobe" ? (
              <FaGlobe color="#0e7cc1" />
            ) : icon == "FaBloggerB" ? (
              <FaBloggerB color="#0e7cc1" />
            ) : (
              <i className="fab fa-wpforms" />
            )}
          </a>
        </div>
      </div>
    </ResourceCardWrapper>
  );
};

export default ResourceCard;
