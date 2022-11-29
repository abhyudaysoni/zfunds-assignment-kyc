import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeEmail } from "../../../../store/personal-slice";
import Button from "../../../UI/button";
import { Container } from "./styles";

const domainArray = [
  "@gmail.com",
  "@yahoo.com",
  "@yahoo.co.in",
  "@rediffmail.com",
];

const Email = () => {
  const personal = useSelector((state) => state.personal);
  const dispatch = useDispatch();
  const emailHandler = (e) => {
    dispatch(changeEmail(e.target.value));
  };
  const domainSelector = () => {};
  return (
    <Container>
      <div className="bio-item">
        <label htmlFor="email">Email ID: </label>
        <input
          type="email"
          id="email"
          value={personal.email}
          onChange={emailHandler}
        />
      </div>
      <div className="options-container">
        {domainArray.map((domain, index) => (
          <Button key={index} onClick={domainSelector}>
            {domain}
          </Button>
        ))}
      </div>
    </Container>
  );
};

export default Email;
