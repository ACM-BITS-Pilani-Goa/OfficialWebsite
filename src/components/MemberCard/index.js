import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import MemberCardWrapper from "./styles";

const MemberCard = ({
  name = "",
  title = "TEAM MEMBER",
  link_linkedin = "#",
  link_github = "#",
  img = "https://picsum.photos/200",
}) => {
  return (
    <MemberCardWrapper img={img}>
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
        <div className="socialIconWrapper">
          <div className="icon">
            <a aria-label="LinkedIn" href={link_linkedin}>
              <FaLinkedin />
            </a>
          </div>
          <div className="icon">
            <a aria-label="Github" href={link_github}>
              <FaGithub color="#000" />
            </a>
          </div>
        </div>
      </div>
    </MemberCardWrapper>
  );
};

export default MemberCard;
