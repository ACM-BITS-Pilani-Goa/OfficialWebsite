import styled from "styled-components";

const FooterWrapper = styled.div`
  .head {
    display: flex;
    justify-content: center;
    text-decoration: underline;
    background: black;
    padding-top: 30px;
    padding-bottom: 35px;
  }
  .divide {
    display: flex;
    justify-content: center;
    background: black;
    padding-bottom: 35px;
  }
  .left-half {
    margin-right: 69px;
  }
  .right-half {
    margin-left: 69px;
  }
  .fontL {
    font-size: 18px;
    font-weight: 900;
    display: flex;
    justify-content: center;
  }
  .fontR {
    display: flex;
    justify-content: center;
    font-size: 18px;
    font-weight: 900;
  }
`;

export default FooterWrapper;
