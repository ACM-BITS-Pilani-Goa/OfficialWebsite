import styled from "styled-components";

const TeamWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  background-color: white;
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
  }
`;

export default TeamWrapper;
