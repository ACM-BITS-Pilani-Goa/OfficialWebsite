import React, { useEffect } from "react";
import styled from "styled-components";
import Timeline from "../../components/Timeline/index";
import ACMlogoHome from "../../images/ACM logo textRight.svg";
import HomeWrapper from "./style";
import AboutUs from "../../components/aboutUs/index";
// import Confetti from "../../components/Confetti";
// import HomeEvent from "../../components/homeEvents";
import Footer from "../../components/Footer/index";
import Navbar from "../../components/Navbar";

export default function Home({ load, BDOME, setload }) {
  useEffect(async () => {
    await setTimeout(() => setload(false), 3000);
  }, []);
  let display;
  if (load) {
    display = "flex";
  } else {
    display = "none";
  }

  let displayother;
  if (load) {
    displayother = "none";
  } else {
    displayother = " ";
  }
  const BdomeWrap = styled.div`
    .Bdome {
      background: rgb(0, 0, 0);
      background: radial-gradient(
          circle,
          rgba(0, 0, 0, 0.5),
          rgba(0, 0, 0, 0.3),
          rgba(0, 0, 0, 0.2)
        ),
        url("${BDOME}");
      opacity: 1;
      height: 100vh;
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      z-index: -1;
      justify-content: center;
      align-items: center;
      display: flex;
    }

    @media (max-width: 390px) {
      .Bdome {
        background-attachment: scroll;
      }
    }
  `;
  return (
    <>
      <HomeWrapper>
        <div className="loadBackground" style={{ display: display }}>
          <img
            src={ACMlogoHome}
            className="bannerset"
            width="50%"
            style={{ justify: "center" }}
          />
          <div>
            <div className="lds-facebook">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>{" "}
      </HomeWrapper>
      <div style={{ display: displayother }}>
        <Navbar />
        <HomeWrapper>
          <BdomeWrap>
            <div className="Bdome">
              <img
                src={ACMlogoHome}
                className="banner"
                width="50%"
                style={{ justify: "center" }}
              />
            </div>
          </BdomeWrap>
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
