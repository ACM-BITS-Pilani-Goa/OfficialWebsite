import styled from "styled-components";
import BDOME from "../../images/Bdome.png";
const HomeWrapper = styled.div`
  .ACMlogo {
    position: "absolute";
    align-self: "center";
    width: "200px";
  }

  .Bdome {
    background-image: url(${BDOME});
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
`;

export default HomeWrapper;
