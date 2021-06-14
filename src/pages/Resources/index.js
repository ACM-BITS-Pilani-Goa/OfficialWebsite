import React from "react";
import ResourceWrapper from "./style";
import CollapsibleTable from "../../components/table/index";

export default function Resource() {
  return (
    <>
      <ResourceWrapper>
        <div className="resourcePic">
          <div className="base">
            <h1 className="white">Resources Below!</h1>
          </div>
        </div>
        <CollapsibleTable />
      </ResourceWrapper>
    </>
  );
}
