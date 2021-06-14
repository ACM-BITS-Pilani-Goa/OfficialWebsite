import styled from "styled-components";

const MemberCardWrapper = styled.div`
  height: 250px;
  width: 300px;
  background: white;
  border-radius: 5px;
  box-shadow: 0 7px 30px -15px #1a2638;
  overflow: hidden;
  z-index: 0;
  transform: scale(0.9);

  &:hover {
    .teamCardInner {
      transform: translateY(-75px);
      opacity: 1;
    }
  }

  .teamCardInner {
    background: linear-gradient(
        0deg,
        rgba(44, 43, 43, 1),
        rgba(44, 43, 43, 0.7),
        rgba(44, 43, 43, 0.4),
        rgba(44, 43, 43, 0)
      ),
      url(${(props) => props.img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    transition: transform 0.3s;
    border-radius: 5px;
    box-shadow: 0 7px 30px -15px #1a2638;
    position: relative;
  }

  .name {
    padding: 5px;
    margin-top: 150px;
    text-align: center;
    font-size: 1.5rem;
    color: rgb(223, 223, 223);
  }

  .post {
    text-align: center;
    color: rgb(224, 224, 230);
    margin-bottom: 0.2rem;
    line-height: 1;
    font-size: 1rem;
  }

  .tap {
    text-align: center;
    color: rgb(209, 209, 209);
    font-size: 0.6rem;
  }

  .socialIconContainer {
    z-index: -1;
    background: white;
    position: relative;
    bottom: 55px;
  }

  .socialIconWrapper {
    display: flex;
    justify-content: center;
    position: relative;
  }

  .icon {
    margin: 0 0.5rem 0;
    font-size: 2rem;
    padding: 0;
    position: relative;
  }

  .icon:hover {
    transform: scale(1.05, 1.05);
  }

  @media screen and (max-width: 768px) {
    min-width: 45%;
    margin-left: 0.2rem;
    margin-right: 0.2rem;
  }
`;

export default MemberCardWrapper;
