import styled from "styled-components";
import img1 from "../../images/image1.jpeg";
import img2 from "../../images/image2.jpeg";
import img3 from "../../images/image3.jpg";

const AboutUsWrapper = styled.div`
  body,
  html {
    height: 100%;
    margin: 0;
    margin-top: 20px;
    font-size: 16px;
    font-family: "Lato", sans-serif;
    font-weight: 400;
    // line-height: 1.8em;
    color: #666;
  }

  .pimg1,
  .pimg2,
  .pimg3 {
    position: relative;
    opacity: 0.9;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    /*
      fixed = parallax
      scroll = normal
    */
    background-attachment: fixed;
  }

  .pimg1 {
    background-image: url("${img1}");
    min-height: 400px;
  }

  .pimg2 {
    background-image: url("${img2}");
    /*min-height:400px;*/
    min-height: 400px;
  }

  .pimg3 {
    background-image: url("${img3}");
    min-height: 400px;
  }

  .section {
    font-size: 1.2rem;
    padding: 50px 80px;
    text-align: center;
  }

  .section-light {
    background-color: #b8c6db;
    background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);
    color: #666;
  }

  .section-dark {
    background-color: #282e34;
    color: #ddd;
  }

  .ptext {
    position: absolute;
    top: 50%;
    width: 100%;
    color: #000;
    letter-spacing: 8px;
    text-transform: uppercase;
  }

  .ptext .border {
    background-color: #111;
    color: #fff;
    padding: 20px;
  }

  .ptext .border.trans {
    background-color: transparent;
  }

  .heading {
    display: flex;
    font-size: 2.2rem;
    justify-content: center;
  }

  .main-text {
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 768px) {
    .section {
      padding: 100px 40px;
    }
  }

  @media (max-width: 390px) {
    .pimg1,
    .pimg2,
    .pimg3 {
      background-attachment: scroll;
      // display: none;
    }
  }
`;

export default AboutUsWrapper;
