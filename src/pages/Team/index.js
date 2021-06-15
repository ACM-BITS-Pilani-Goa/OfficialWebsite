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
      title: "Chair",
      linkedin: "https://www.linkedin.com/in/jayant-chaudhary-a567741a7/",
      github: "https://github.com/jayant1616",
      img: `${jayant}`,
    },
    {
      name: "Aastha",
      title: "Vice-Chair",
      linkedin: "https://in.linkedin.com/in/aastha-rastogi",
      github: "https://github.com/astelrastogi",
      img: `${aastha}`,
    },
    {
      name: "Aviral",
      title: "Treasurer",
      linkedin: "https://www.linkedin.com/in/aviral-kumar-goel/",
      github: "https://github.com/Aviral09",
      img: `${aviral}`,
    },
    {
      name: "Dev",
      title: "",
      linkedin: "https://www.linkedin.com/in/dev-goel-833a25197/",
      github: "https://github.com/devgoel186",
      img: `${dev}`,
    },
    {
      name: "Siddhi",
      title: "",
      linkedin: "https://in.linkedin.com/in/siddhi-parashar-168a29193",
      github: "https://github.com/siddhipiddi",
      img: `${siddhi}`,
    },
    {
      name: "Devesh",
      title: "",
      linkedin: "https://www.linkedin.com/in/devesh-kumar-529982198/",
      github: "https://github.com/Devesh21700Kumar",
      img: `${devesh}`,
    },
    {
      name: "Sidhant",
      title: "",
      linkedin: "https://in.linkedin.com/in/sidhantchoudhary",
      github: "https://github.com/sidhant0720",
      img: `${sidhant}`,
    },
    {
      name: "Ritvij",
      title: "",
      linkedin: "https://in.linkedin.com/in/rks-1410",
      github: "https://github.com/ritvij14",
      img: `${ritvij}`,
    },
    {
      name: "Arnav",
      title: "",
      linkedin: "https://www.linkedin.com/in/arnav-jain-101118213",
      github: "https://github.com/arnavj05",
      img: `${arnav}`,
    },
    {
      name: "Mehul",
      title: "",
      linkedin: "https://in.linkedin.com/in/mehul-gupta-a123011a0",
      github: "https://github.com/sombr3ro",
      img: `${mehul}`,
    },
    {
      name: "Kanishq",
      title: "",
      linkedin: "https://in.linkedin.com/in/kanishqkhandelwal",
      github: "https://github.com/kanishq1",
      img: `${kanishq}`,
    },
    {
      name: "Vaibhav",
      title: "",
      linkedin: "https://in.linkedin.com/in/vaibhav-ganatra-78a634193",
      github: "https://github.com/Vaibhav-Ganatra",
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
