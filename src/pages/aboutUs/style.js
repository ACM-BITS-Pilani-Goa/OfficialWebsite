import styled from "styled-components";
import img1 from "./img/image1.jpeg";
import img2 from "./img/image2.jpeg";
import img3 from "./img/image3.jpg";

const AboutUsWrapper = styled.div`
  body,
  html {
    height: 100%;
    margin: 0;
    margin-top: 20px;
    font-size: 16px;
    font-family: "Lato", sans-serif;
    font-weight: 400;
    line-height: 1.8em;
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
    text-align: center;
    padding: 50px 80px;
  }

  .section-light {
    background-color: #f4f4f4;
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
    text-align: center;
    color: #000;
    font-size: 27px;
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

  @media (max-width: 568px) {
    .pimg1,
    .pimg2,
    .pimg3 {
      background-attachment: scroll;
    }
  }
`;

export default AboutUsWrapper;
