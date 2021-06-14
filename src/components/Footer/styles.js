import styled from "styled-components";

export const FooterWrapper = styled.div`
  padding: 20px 80px;
  align-items: center;
  background: black;
  position: absolute;
  width: 100%;

  h1,
  h2 {
    color: white;
    text-align: center;
  }
  svg {
    display: block;
    margin: 20px auto;
  }
  .footer-section {
    display: flex;
    margin: 0px 400px;
  }
  .footer-column {
    flex: 50%;
    text-align: center;
  }
  @media all and (max-width: 768px) {
    h1 {
      margin: 0 0 0 10px;
    }
    .footer-section {
      display: block;
      margin: 0;
    }
    .footer-column {
      margin: 50px 0;
    }
  }
`;
