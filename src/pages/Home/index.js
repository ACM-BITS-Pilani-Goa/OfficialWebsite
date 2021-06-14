import React from "react";
import Timeline from "../../components/Timeline/index";
import ACMlogoHome from "../../images/ACM logo textRight.svg";
import HomeWrapper from "./style";
import AboutUs from "../../components/aboutUs/index";

export default function Home() {
  return (
    <>
      <HomeWrapper>
        <div className="Bdome">
          <img
            src={ACMlogoHome}
            className="banner"
            width="50%"
            style={{ justify: "center" }}
          />
        </div>
        <AboutUs />
        <Timeline />
      </HomeWrapper>
    </>
  );
}
