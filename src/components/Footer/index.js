import React from "react";
import FooterWrapper from "./styles";

/*const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Heading className="topFix">Contact Us @</Heading>
          <FooterLink href="admin@bitsg.acm.org">
            <i className="far fa-envelope">
              <span style={{ marginLeft: "10px" }}>Email</span>
            </i>
          </FooterLink>
          <FooterLink href="https://www.linkedin.com/company/acm-bits-pilani-goa-chapter">
            <i className="fab fa-linkedin-in">
              <span style={{ marginLeft: "10px" }}>LinkedIn</span>
            </i>
          </FooterLink>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;*/

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="head">
        <h2 style={{ color: "white", borderBottom: "2px solid white" }}>
          ACM BITS Pilani Goa Chapter
        </h2>
      </div>
      <div className="divide">
        <div className="left-half">
          <p style={{ color: "white" }} className="fontL">
            <b>Contact us:</b>
          </p>
          <p>
            {" "}
            <i style={{ color: "white" }} className="fab fa-linkedin-in">
              <span style={{ marginLeft: "10px" }}>
                BITS Goa ACM on Linkedin
              </span>
            </i>
          </p>
          <p>
            <i style={{ color: "white" }} className="far fa-envelope">
              <span style={{ marginLeft: "10px" }}>admin@bitsg.acm.org</span>
            </i>
          </p>
        </div>
        <div className="right-half">
          <p style={{ color: "white" }} className="fontR">
            <b>Where to find us?</b>
          </p>
          <p style={{ color: "white" }}>
            <a
              style={{ color: "white", textDecoration: "none" }}
              href="https://www.google.com/maps/d/u/0/viewer?ie=UTF8&t=m&oe=UTF8&msa=0&mid=1hWnxlejcCPxEN84cH8goANCl0nM&ll=15.390011999999993%2C73.87745600000001&z=17"
            >
              <i className="fa fa-map-marker" aria-hidden="true">
                {"  "} BITS Pilani K.K. Birla Goa Campus
              </i>
            </a>
          </p>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
