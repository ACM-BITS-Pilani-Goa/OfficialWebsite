import styled from "styled-components";

const EventsWrapperMain = styled.div`
  .section {
    min-height: 90vh;
    padding: 3vh;
  }

  .section > .section-row {
    display: flex;
    align-items: center;
    margin: 0;
  }

  .section-image img {
    height: 250px;
    width: 250px;
  }

  .section-row {
    flex-direction: column;
  }

  #events {
    /* background: #1e2529; */
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 9vh;
    background: #081526;
    color: #f5f5f5;
  }

  .events-container {
    display: flex;
    margin-top: 3vh;
    flex-direction: column;
  }

  .event-title {
    font-size: 2.2em;
  }

  .event-footer {
    font-size: 1.2em;
    padding-top: 3vh;
  }

  .event-image {
    max-height: 28vh;
    max-width: 60vw;
    border: 1px solid grey;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  @-moz-document url-prefix() {
    .event-image {
      height: 100% !important;
      width: 100% !important;
    }
  }

  .event-body {
    font-size: 1.3em;
    padding-top: 1.5vh;
    display: flex;
  }
  .event-body p {
    padding-right: 10vw;
  }

  @media all and (min-width: 769px) {
    .even-event .event-body {
      flex-direction: row-reverse;
    }
    .even-event .event-body p {
      padding-left: 10vw;
      padding-right: 0;
    }
    .even-event .event-footer {
      text-align: right;
    }
  }

  @media all and (max-width: 768px) {
    .events-container {
      flex-flow: row wrap;
    }
    /* .event-title {
        text-align: center;
    } */
    .event-body {
      flex-flow: row wrap;
    }
    .event-body p {
      padding-right: 2vw;
      padding-bottom: 1vh;
    }
    .event-footer {
      padding-top: 4vh;
    }
    .event-container {
      margin-left: 0vw;
      margin-right: 0vw;
    }
    .event-image {
      margin-top: 3vh;
    }
  }

  hr {
    border-top: 1px solid #37474f !important;
    width: 100%;
  }

  .img-caption {
    padding-top: 1vh;
    text-align: center;
    text-transform: uppercase;
  }

  .show-on-mobile {
    display: none;
  }

  .section-title {
    text-align: center;
    font-size: 3em !important;
    font-weight: 800;
    padding-bottom: 0.4em;
    font-family: "Monoton", cursive;
  }

  .achievements-container {
    min-height: 90vh;
    padding-top: 5vh;
  }

  .event-section {
    min-height: 90vh;
  }

  .achievement-image {
    max-width: 100%;
    max-height: 30vh;
  }

  .achievement {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .achievement div {
    padding: 0 1vw;
  }

  .achievement-body {
    font-size: 1.7em;
  }

  .odd-achievement {
    flex-direction: row-reverse;
  }

  @media all and (max-width: 768px) {
    .section-image {
      display: none;
    }

    .show-on-mobile {
      display: block;
    }
  }
`;
export default EventsWrapperMain;
