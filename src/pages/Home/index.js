import React from "react";
import Timeline from "../../components/Timeline/index";
import ACMlogoHome from "../../images/ACM logo textRight.svg";
import HomeWrapper from './style';

export default function Home() {
  return (
    <>
    <HomeWrapper>
      <div className="Bdome">
        <img src={ACMlogoHome} style={{ width: "50%", justify: "center" }} />
      </div>
      <Timeline />
      </HomeWrapper> 
    </>
  );
}
