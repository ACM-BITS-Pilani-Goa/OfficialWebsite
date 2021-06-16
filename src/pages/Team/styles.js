import styled from "styled-components";

const TeamWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  // background-color: rgb(33, 194, 236);
  background-image: linear-gradient(
    180deg,
    rgba(33, 194, 236, 1) 0%,
    rgba(33, 194, 236, 0) 8%
  );
  .holder {
    display: flex;
    justify-content: space-evenly;
    position: relative;
    width: 100%;
    max-width: 1400px;
    flex-wrap: wrap;
  }
  .heading {
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
    font-size: 3rem;
    color: #0e7cc1;
  }
`;

export default TeamWrapper;
