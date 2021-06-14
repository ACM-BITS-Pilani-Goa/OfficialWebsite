import styled from "styled-components";
import resource from "./img/resource.jpeg";

const ResourceWrapper = styled.div`
  .resourcePic {
    background-image: url(${resource});
    opacity: 1;
    height: 50vh;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 1;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .white {
    color: white;
  }
  .base {
    background: red;
    border-radius: 10px;
  }
`;

export default ResourceWrapper;
