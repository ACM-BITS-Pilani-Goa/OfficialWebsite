import React from "react";
import ResourceWrapper from "./style";
// import CollapsibleTable from "../../components/table/index";
import ResourceCard from "../../components/ResourceCard";
import githubpic from "../../images/github.jpg";
import wiki from "../../images/wiki.jpg";
import blog from "../../images/coming.jpeg";

export default function Resource() {
  const resources = [
    {
      name: "GitHub",
      desc: "Forks of best open source resources maintained in one place.",
      link: "https://github.com/ACM-BITS-Pilani-Goa",
      img: `${githubpic}`,
      icon: "FaGithub",
    },
    {
      name: "Wiki",
      desc: "Information.",
      link: "https://wiki.bitsg.hosting.acm.org/wiki/index.php/Main_Page",
      img: `${wiki}`,
      icon: "FaGlobe",
    },
    {
      name: "Blog",
      desc: "Coming soon",
      link: "#",
      img: `${blog}`,
      icon: "FaGlobe",
    },
  ];

  const resourceList = resources.map((resource, index) => (
    <ResourceCard
      key={index}
      name={resource.name}
      desc={resource.desc}
      link={resource.link}
      img={resource.img}
      icon={resource.icon}
    />
  ));

  return (
    <div>
      <ResourceWrapper>
        <div className="holding" style={{ marginTop: "8vw" }}>
          <h1 className="heading">Resources</h1>
          <br />
          <br />
          {resourceList}
        </div>
        {/*<CollapsibleTable />*/}
      </ResourceWrapper>
    </div>
  );
}
