import React from "react";
import MemberCard from "../../components/MemberCard";
import TeamWrapper from "./styles";

const Team = () => {
  const members = [
    {
      name: "Jayant",
      title: "",
      linkeding: "",
      github: "",
      img: "",
    },
    {
      name: "Aastha",
      title: "",
      linkeding: "",
      github: "",
      img: "",
    },
    {
      name: "Aviral",
      title: "",
      linkeding: "",
      github: "",
      img: "",
    },
    {
      name: "Dev",
      title: "",
      linkeding: "",
      github: "",
      img: "",
    },
    {
      name: "Siddhi",
      title: "",
      linkeding: "",
      github: "",
      img: "",
    },
    {
      name: "Sidhant",
      title: "",
      linkeding: "",
      github: "",
      img: "",
    },
    {
      name: "Ritvij",
      title: "",
      linkeding: "",
      github: "",
      img: "",
    },
    {
      name: "Devesh",
      title: "",
      linkeding: "",
      github: "",
      img: "",
    },
    {
      name: "Arnav",
      title: "",
      linkeding: "",
      github: "",
      img: "",
    },
    {
      name: "Mehul",
      title: "",
      linkeding: "",
      github: "",
      img: "",
    },
    {
      name: "Kanishq",
      title: "",
      linkeding: "",
      github: "",
      img: "",
    },
    {
      name: "Vaibhav",
      title: "",
      linkeding: "",
      github: "",
      img: "",
    },
  ];

  const memberList = members.map((member, index) => (
    <MemberCard
      key={index}
      name={member.name}
      title={member.title}
      link_linkedin={member.linkedin}
      link_github={member.github}
      img={member.img}
    />
  ));

  return (
    <TeamWrapper>
      <div className="holder" style={{ marginTop: "8vw" }}>
        <h1 className="heading">Founding Team</h1>
        <br />
        <br />
        {memberList}
      </div>
    </TeamWrapper>
  );
};

export default Team;
