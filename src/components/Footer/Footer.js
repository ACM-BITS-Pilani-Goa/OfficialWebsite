import React from "react";
import { Box, Container, Row, FooterLink, Heading } from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Heading className="topFix">Contact Us</Heading>
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
export default Footer;
