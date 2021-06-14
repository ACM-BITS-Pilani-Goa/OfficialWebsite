import React from "react";
import Timeline from "../../components/Timeline/index";
import ACMlogoHome from "../../images/ACM logo textRight.svg";
import HomeWrapper from "./style";
import AboutUs from "../../components/aboutUs/index";
import HomeEvent from "../../components/homeEvents";

export default function Home() {
  return (
    <>
      <HomeWrapper>
        <div className="Bdome">
          <img
            src={ACMlogoHome}
            className="banner"
            style={{ width: "50%", justify: "center" }}
          />
        </div>
        <AboutUs />
        <HomeEvent />
        <Timeline />
      </HomeWrapper>
    </>
  );
}
