import styled from "styled-components";

const TimelineWrapper = styled.div`
  display: flex;
  background-color: #b8c6db;
  background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);

  flex-direction: column;
  font-size: 1.1rem;
  padding: 100px 80px;
  justify-content: center;
  // align-items: center;

  .timeline-main {
    width: 100%;
    // max-width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .heading {
    display: flex;
    font-size: 35px;
    margin-bottom: 40px;
  }

  @media screen and (max-width: 992px) {
    .timeline-main {
      max-width: 70%;
    }
  }

  @media screen and (max-width: 768px) {
    .timeline-main {
      max-width: none;
    }
  }
`;

export default TimelineWrapper;
