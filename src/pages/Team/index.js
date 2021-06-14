import React from "react";
import MemberCard from "../../components/MemberCard";
import TeamWrapper from "./styles";
import JayantPic from "../../images/jayant.jpg";
import DeveshPic from "../../images/devesh.jpg";
import AviralPic from "../../images/aviral.jpg";
import AasthaPic from "../../images/aastha.jpeg";
import RitvijPic from "../../images/ritvij.jpg";
import SidhantPic from "../../images/sidhant.jpeg";
import ArnavPic from "../../images/arnav.jpeg";
import SiddhiPic from "../../images/siddhi.jpg";

const Team = () => {
  const members = [
    {
      name: "Jayant",
      title: "",
      linkeding: "",
      github: "",
      img: `${JayantPic}`,
    },
    {
      name: "Aastha",
      title: "",
      linkeding: "",
      github: "",
      img: `${AasthaPic}`,
    },
    {
      name: "Aviral",
      title: "",
      linkeding: "",
      github: "",
      img: `${AviralPic}`,
    },
    {
      name: "Dev",
      title: "",
      linkeding: "",
      github: "",
      img: `${JayantPic}`,
    },
    {
      name: "Siddhi",
      title: "",
      linkeding: "",
      github: "",
      img: `${SiddhiPic}`,
    },
    {
      name: "Sidhant",
      title: "",
      linkeding: "",
      github: "",
      img: `${SidhantPic}`,
    },
    {
      name: "Ritvij",
      title: "",
      linkeding: "",
      github: "",
      img: `${RitvijPic}`,
    },
    {
      name: "Devesh",
      title: "",
      linkeding: "",
      github: "",
      img: `${DeveshPic}`,
    },
    {
      name: "Arnav",
      title: "",
      linkeding: "",
      github: "",
      img: `${ArnavPic}`,
    },
    {
      name: "Mehul",
      title: "",
      linkeding: "",
      github: "",
      img: `${JayantPic}`,
    },
    {
      name: "Kanishq",
      title: "",
      linkeding: "",
      github: "",
      img: `${JayantPic}`,
    },
    {
      name: "Vaibhav",
      title: "",
      linkeding: "",
      github: "",
      img: `${JayantPic}`,
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
