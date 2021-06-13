import styled from "styled-components";

const TimelineWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .timeline-main {
    max-width: 70%;
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
