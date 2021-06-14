import styled from "styled-components";

export const Box = styled.div`
  padding: 20px 20px;
  align-items: center;
  background: black;
  position: absolute;
  width: 100%;

  @media (max-width: 1000px) {
    padding: 20px 20px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  /* background: red; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  margin-left: 60px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 50px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 0px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: blue;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 20px;
  color: #fff;
  padding-top: -10px;
  margin-bottom: 40px;
  font-weight: bold;
`;
