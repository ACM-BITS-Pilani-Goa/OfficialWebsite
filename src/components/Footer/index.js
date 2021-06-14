import React from "react";
import { FooterWrapper } from "./styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <h1>ACM BITS Pilani Goa chapter</h1>
      <svg
        width="309"
        height="2"
        viewBox="0 0 309 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line y1="1.02563" x2="308.002" y2="1.02563" stroke="white" />
      </svg>
      <div className="footer-section">
        <div className="footer-column">
          <h2>Contact us:</h2>
          <a href="https://www.linkedin.com/company/acm-bits-pilani-goa-chapter">
            <i
              className="fab fa-linkedin"
              style={{ marginTop: "20px", color: "white", fontSize: "27px" }}
            >
              <span
                style={{ marginLeft: "10px", color: "white", fontSize: "20px" }}
              >
                BITS Goa ACM on Linkedin
              </span>
            </i>
          </a>
          <a href="admin@bitsg.acm.org" style={{ marginRight: "37px" }}>
            <i
              className="fas fa-envelope"
              style={{ marginTop: "20px", color: "white", fontSize: "27px" }}
            >
              <span
                style={{ marginLeft: "10px", color: "white", fontSize: "20px" }}
              >
                admin@bitsg.acm.org
              </span>
            </i>
          </a>
        </div>
        <div className="footer-column">
          <h2>Where to find us:</h2>
          <i
            className="fas fa-map-marker-alt"
            style={{ marginTop: "20px", color: "white", fontSize: "27px" }}
          >
            <span
              style={{ marginLeft: "10px", color: "white", fontSize: "20px" }}
            >
              BITS Pilani, K.K. Birla Goa campus,
              <br />
              Zuarinagar, Sancoale, Goa
            </span>
          </i>
        </div>
      </div>
    </FooterWrapper>
  );
};
export default Footer;
