import React from "react";
import Timeline from "../../components/Timeline/index";
import ACMlogoHome from "../../images/ACM logo textRight.svg";
import HomeWrapper from "./style";
import AboutUs from "../../components/aboutUs/index";
// import Confetti from "../../components/Confetti";
// import HomeEvent from "../../components/homeEvents";
import Footer from "../../components/Footer/index";
import Navbar from "../../components/Navbar";

export default function Home({ load }) {
  return (
    <>
      <HomeWrapper>
        <div
          className="loadBackground"
          style={{ display: load ? "flex" : "none" }}
        >
          <img
            src={ACMlogoHome}
            className="bannerset"
            width="50%"
            style={{ justify: "center" }}
          />
          <div className>
            <div className="lds-facebook">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>{" "}
      </HomeWrapper>
      <div style={{ display: load ? "none" : " " }}>
        <Navbar />
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
          {/* <HomeEvent /> */}
          <Timeline />
          {/* <Confetti /> */}
        </HomeWrapper>
        <Footer />
      </div>
    </>
  );
}
