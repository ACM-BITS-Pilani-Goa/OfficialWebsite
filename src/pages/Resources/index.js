import React from "react";
import ResourceWrapper from "./style";
// import CollapsibleTable from "../../components/table/index";
import ResourceCard from "../../components/ResourceCard";

export default function Resource() {
  const resources = [
    {
      name: "Meth-420",
      title: "",
      linkeding: "",
      github: "",
    },
    {
      name: "BITS-F169",
      title: "",
      linkeding: "",
      github: "",
    },
    {
      name: "Meth-420",
      title: "",
      linkeding: "",
      github: "",
    },
    {
      name: "BITS-F169",
      title: "",
      linkeding: "",
      github: "",
    },
  ];
  return (
    <>
      <ResourceWrapper>
        <div className="resourcePic">
          <div className="base">
            <h1 className="white">Resources Below!</h1>
          </div>
        </div>
        <div className="holder" style={{ marginTop: "8vw" }}>
          {resources.map((resource, index) => (
            <ResourceCard
              key={index}
              name={resource.name}
              title={resource.title}
              link_github={resource.github}
            />
          ))}
        </div>
        ));
        {/*<CollapsibleTable />*/}
      </ResourceWrapper>
    </>
  );
}
