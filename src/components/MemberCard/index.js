import React from "react";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";
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
            <a href="http://sougata-sen.com/" target="_blank" rel="noreferrer">
              {(() => {
                switch (name) {
                  case "Sougata Sen":
                    return <FaGlobe color="#0e7cc1" />;
                }
              })()}
            </a>
            <a
              aria-label="LinkedIn"
              href={link_linkedin}
              target="_blank"
              rel="noreferrer"
            >
              {(() => {
                switch (name == "Sougata Sen") {
                  case false:
                    return <FaLinkedin color="#0e7cc1" />;
                }
              })()}
            </a>
          </div>
          <div className="icon">
            <a
              aria-label="Github"
              href={link_github}
              target="_blank"
              rel="noreferrer"
            >
              {(() => {
                switch (name == "Sougata Sen") {
                  case false:
                    return <FaGithub color="#000" />;
                }
              })()}
            </a>
          </div>
        </div>
      </div>
    </MemberCardWrapper>
  );
};

export default MemberCard;
