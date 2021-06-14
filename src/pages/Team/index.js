import React from "react";
import MemberCard from "../../components/MemberCard";
import jayant from "../../images/jayant.jpg";
import aviral from "../../images/aviral.jpg";
import aastha from "../../images/aastha.jpeg";
import dev from "../../images/dev.jpeg";
import siddhi from "../../images/siddhi.jpg";
import sidhant from "../../images/sidhant.jpeg";
import ritvij from "../../images/ritvij.jpg";
import devesh from "../../images/devesh.jpg";
import arnav from "../../images/arnav.jpeg";
import mehul from "../../images/mehul.jpeg";
import kanishq from "../../images/kanishq.jpg";
import vaibhav from "../../images/vaibhav.jpg";
import TeamWrapper from "./styles";

const Team = () => {
  const members = [
    {
      name: "Jayant",
      title: "",
      linkeding: "",
      github: "",
      img: `${jayant}`,
    },
    {
      name: "Aastha",
      title: "",
      linkeding: "",
      github: "",
      img: `${aastha}`,
    },
    {
      name: "Aviral",
      title: "",
      linkeding: "",
      github: "",
      img: `${aviral}`,
    },
    {
      name: "Dev",
      title: "",
      linkeding: "",
      github: "",
      img: `${dev}`,
    },
    {
      name: "Siddhi",
      title: "",
      linkeding: "",
      github: "",
      img: `${siddhi}`,
    },
    {
      name: "Sidhant",
      title: "",
      linkeding: "",
      github: "",
      img: `${sidhant}`,
    },
    {
      name: "Ritvij",
      title: "",
      linkeding: "",
      github: "",
      img: `${ritvij}`,
    },
    {
      name: "Devesh",
      title: "",
      linkeding: "",
      github: "",
      img: `${devesh}`,
    },
    {
      name: "Arnav",
      title: "",
      linkeding: "",
      github: "",
      img: `${arnav}`,
    },
    {
      name: "Mehul",
      title: "",
      linkeding: "",
      github: "",
      img: `${mehul}`,
    },
    {
      name: "Kanishq",
      title: "",
      linkeding: "",
      github: "",
      img: `${kanishq}`,
    },
    {
      name: "Vaibhav",
      title: "",
      linkeding: "",
      github: "",
      img: `${vaibhav}`,
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
