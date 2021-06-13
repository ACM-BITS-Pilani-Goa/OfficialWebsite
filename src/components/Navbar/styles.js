import styled from "styled-components";

const NavWrapper = styled.div`
  position: relative;
  z-index: 99;
  .navbar {
    background: rgb(0, 0, 0, 0);
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: fixed;
    width: 100%;
  }
  .scroll {
    background-color: rgb(2, 0, 36);
    background-image: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(9, 9, 121, 1) 34%,
      rgba(0, 212, 255, 1) 100%
    );
    box-shadow: 0 7px 30px -15px #1a2638;
  }

  .navbar-logo {
    color: #000;
    justify-self: start;
    margin-left: 20px;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
  }
  .fa-firstdraft {
    margin-left: 0.5rem;
    font-size: 1.6rem;
  }
  .nav-menu {
    display: grid;
    grid-template-columns: repeat(5, auto);
    grid-gap: 10px;
    list-style: none;
    text-align: center;
    width: 85vw;
    justify-content: end;
    margin-right: 2rem;
  }
  .nav-item {
    display: flex;
    align-items: center;
    height: 80px;
    position: relative;
  }
  .nav-item::after {
    content: "";
    height: 3px;
    width: 0%;
    background: #ff0000;
    position: absolute;
    top: 60px;
    transition: 0.5s;
  }
  .nav-item:hover::after {
    width: 100%;
  }
  .nav-links {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
  }

  .fa-bars {
    color: #fff;
  }
  .nav-links-mobile {
    display: none;
  }
  .menu-icon {
    display: none;
  }
  @media screen and (max-width: 960px) {
    .NavbarItems {
      position: relative;
    }
    .scroll {
      z-index: -1;
    }
    .nav-menu {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 90vh;
      position: absolute;
      top: 80px;
      left: -100%;
      opacity: 1;
      transition: all 0.4s ease;
    }
    .nav-menu.active {
      background: #242222;
      left: 0;
      opacity: 1;
      transition: all 0.4s ease;
      z-index: 1;
    }
    .nav-links {
      text-align: center;
      padding: 2rem;
      width: 100%;
      display: table;
    }
    .nav-links:hover {
      background-color: #1888ff;
      border-radius: 0;
    }
    .navbar-logo {
      display: none;
    }
    .menu-icon {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
    }
    .fa-times {
      color: #fff;
      font-size: 2rem;
    }
    .nav-links-mobile {
      display: block;
      text-align: center;
      padding: 1.5rem;
      margin: 2rem auto;
      border-radius: 4px;
      width: 80%;
      background: #1888ff;
      text-decoration: none;
      color: #fff;
      font-size: 1.5rem;
    }
    .nav-links-mobile:hover {
      background: #fff;
      color: #1888ff;
      transition: 250ms;
    }
    button {
      display: none;
    }
  }
`;

export default NavWrapper;
