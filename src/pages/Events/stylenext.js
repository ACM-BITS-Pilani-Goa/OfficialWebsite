import styled from "styled-components";

const EventsWrapperMain = styled.div`
  background-image: linear-gradient(
    180deg,
    rgba(33, 194, 236, 1) 0%,
    rgba(33, 194, 236, 0) 10%
  );
  .heading {
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
    font-size: 3rem;
    color: #0e7cc1;
  }
  .section {
    // min-height: 90vh;
    padding: 3vh 0vh 3vh 0vh;
    width: 100%;
  }

  .section > .section-row {
    display: flex;
    align-items: center;
    margin: 0;
    flex-direction: column;
    width: 100%;
  }

  .section-image img {
    height: 250px;
    width: 250px;
  }

  #events {
    /* background: #1e2529; */
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 9vh;
    // background: #081526;
    // color: #f5f5f5;
  }

  .events-container {
    display: flex;
    // margin-top: 3vh;
    flex-direction: column;
    // background: #081526;
    padding: 3vh 15vh 3vh 15vh;
    width: 100%;
  }

  .event-title {
    font-size: 2.2em;
    margin-bottom: 1rem;
    margin-top: 1.5rem;
    color: #0e7cc1;
  }

  .event-footer {
    font-size: 1.2em;
    padding-top: 3vh;
  }

  .event-image {
    max-height: 50vh;
    max-width: 60vw;
    // border: 1px solid grey;
    // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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

  @media all and (min-width: 1251px) {
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

  @media all and (max-width: 1250px) {
    .events-container {
      flex-flow: row wrap;
    }

    .events-container {
      display: flex;
      // margin-top: 3vh;
      flex-direction: column;
      // background: #081526;
      padding: 3vh 10vh 3vh 10vh;
      width: 100%;
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

    .events-container {
      display: flex;
      // margin-top: 3vh;
      flex-direction: column;
      // background: #081526;
      padding: 3vh 7vh 3vh 5vh;
      width: 100%;
    }
    .show-on-mobile {
      display: block;
    }
  }
`;
export default EventsWrapperMain;
