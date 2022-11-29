import React from "react";
import backArrow from "../../assets/back-arrow.svg";
import logo from "../../assets/logo.svg";
import search from "../../assets/search.svg";
import cart from "../../assets/cart.svg";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const goHomeHandler = () => {
    navigate("/");
  };
  const goBackHandler = () => {
    navigate(-1);
  };
  return (
    <Container>
      <div className="back" onClick={goBackHandler}>
        <img src={backArrow} alt="back-arrow" />
        <h3>Back</h3>
      </div>
      <div className="logo-container">
        <img src={logo} onClick={goHomeHandler} alt="logo" />
      </div>
      <div className="utils">
        <img src={search} alt="logo" />
        <img src={cart} alt="logo" />
      </div>
    </Container>
  );
};

export default Header;
