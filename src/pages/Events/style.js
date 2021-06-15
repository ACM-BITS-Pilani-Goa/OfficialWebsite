import styled from "styled-components";
import img1 from "./img/img1.jpeg";

const AboutUsWrapper = styled.div`
  .animate:hover {
    animation: bounce 0.5s infinite;
    -webkit-animation: bounce 0.5s infinite;
    -moz-animation: bounce 0.5s infinite;
  }
  @-webkit-keyframes bounce {
    0%,
    100% {
      -webkit-transform: translateY(0);
    }
    50% {
      -webkit-transform: translateY(-10px);
    }
  }
  @-moz-keyframes bounce {
    0%,
    100% {
      -moz-transform: translateY(0);
    }
    50% {
      -moz-transform: translateY(-10px);
    }
  }
  @-o-keyframes bounce {
    0%,
    100% {
      -o-transform: translateY(0);
    }
    50% {
      -o-transform: translateY(-10px);
    }
  }
  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }
  .Bdome {
    background: rgb(0, 0, 0);
    background: radial-gradient(
        circle,
        rgba(0, 0, 0, 0.7),
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),
      url(${img1});
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
`;

export default AboutUsWrapper;
