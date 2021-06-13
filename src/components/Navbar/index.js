import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavWrapper from "./styles";
import ACMnav from '../../images/ACM logo.svg'

class Navbar extends Component {

  constructor(props) {
    super(props)

    this.state = {
      click: false
    }
  }

  handleClick = () => { this.setState({ click: !this.state.click }); }
  closeMobileMenu = () => { this.setState({ click: false }); }

  handleScroll = () => {
    if (window.scrollY > 20) {
      document.querySelector(".navbar").className = "navbar scroll";
    } else {
      document.querySelector(".navbar").className = "navbar";
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }



  render() {
    return (
      <NavWrapper>
        <nav className="navbar">
          <Link to="/" className="navbar-logo" onClick={this.closeMobileMenu}>
            <img src={ACMnav} style={{width: '50%'}}/>
          </Link>
          <div className="menu-icon" onClick={this.handleClick}>
            <i className={this.state.click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={this.state.click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={this.closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/aboutUs" className="nav-links" onClick={this.closeMobileMenu}>
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact-us"
                className="nav-links"
                onClick={this.closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </NavWrapper>
    );
  }
};

export default Navbar;
