import React from "react";
import ButtonWrapper from "./styles";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <ButtonWrapper>
      <Link to="sign-up">
        <button className="btn">Sign Up</button>
      </Link>
    </ButtonWrapper>
  );
};

export default Button;
