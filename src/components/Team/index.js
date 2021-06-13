import React from "react";
import MemberCard from "../MemberCard";
import TeamWrapper from "./styles";

const Team = () => {
  return (
    <TeamWrapper>
      <div className="holder">
        <MemberCard
          name="SHINCHAN NOHARA"
          title="CHIEF COORDINATOR"
          link_linkedin="https://bit.ly/2TsVvDn"
          link_mail="https://bit.ly/2TsVvDn"
          link_github="https://bit.ly/2TsVvDn"
          img="https://picsum.photos/200"
        />
        <MemberCard
          name="MITSI NOHARA"
          title="SUB COORDINATOR"
          link_linkedin="https://bit.ly/2TsVvDn"
          link_mail="https://bit.ly/2TsVvDn"
          link_github="https://bit.ly/2TsVvDn"
          img="https://picsum.photos/200"
        />
        <MemberCard
          name="HIROSHI NOHARA"
          title="MARKETING"
          link_linkedin="https://bit.ly/2TsVvDn"
          link_mail="https://bit.ly/2TsVvDn"
          link_github="https://bit.ly/2TsVvDn"
          img="https://picsum.photos/200"
        />
      </div>
    </TeamWrapper>
  );
};

export default Team;
