import styled from "styled-components";

const LoadWrapper = styled.div`
  .loadBackground {
    background-color: #b8c6db;
    background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);
    height: 100vh;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .bannerset {
    animation: bounce 0.5s infinite;
    -webkit-animation: bounce 0.5s infinite;
    -moz-animation: bounce 0.5s infinite;
  }

  @media screen and (max-width: 768px) {
    .banner {
      width: 80%;
    }
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

  .lds-facebook {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-facebook div {
    display: inline-block;
    position: absolute;
    left: 8px;
    width: 16px;
    background: #fff;
    animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }
  .lds-facebook div:nth-child(1) {
    left: 8px;
    animation-delay: -0.24s;
  }
  .lds-facebook div:nth-child(2) {
    left: 32px;
    animation-delay: -0.12s;
  }
  .lds-facebook div:nth-child(3) {
    left: 56px;
    animation-delay: 0;
  }
  @keyframes lds-facebook {
    0% {
      top: 8px;
      height: 64px;
    }
    50%,
    100% {
      top: 24px;
      height: 32px;
    }
  }
`;

export default LoadWrapper;
