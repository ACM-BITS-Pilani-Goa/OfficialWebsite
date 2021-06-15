import React from "react";
import ResourceWrapper from "./style";
// import CollapsibleTable from "../../components/table/index";
import ResourceCard from "../../components/ResourceCard";
import githubpic from "../../images/github.jpg";
import wiki from "../../images/wiki.jpg";
import blog from "../../images/coming.jpeg";
import form from "../../images/form.jpg";
import Footer from "../../components/Footer/index";
import Navbar from "../../components/Navbar";

export default function Resource() {
  const resources = [
    {
      name: "GitHub",
      desc: "Forks of best open source resources maintained actively in one place.",
      link: "https://github.com/ACM-BITS-Pilani-Goa",
      img: `${githubpic}`,
      icon: "FaGithub",
    },
    {
      name: "BITS Wiki",
      desc: "All the information related to BITS Goa accumulated in one place.",
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
    {
      name: "Form",
      desc: "Subscription form to join ACM Technews mailing lists.",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSdLmpVQfhBI3GI5xM9gIMqv-dNoH72zrQq5kMHBn4i11_TlsA/viewform?usp=sf_link",
      img: `${form}`,
      icon: "FaForm",
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
    <>
    <Navbar />
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
      <Footer />
    </>
  );
}
