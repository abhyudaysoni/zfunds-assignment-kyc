import React, { useState } from "react";
import { useDispatch } from "react-redux";
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
  const [domain, setDomain] = useState(domainArray[0]);
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const emailHandler = (e) => {
    setEmail(e.target.value);
    dispatch(changeEmail(e.target.value + domain));
  };
  const domainSelector = (e) => {
    setDomain(e.target.value);
    dispatch(changeEmail(email + e.target.value));
  };
  return (
    <Container>
      <div className="form-item">
        <label htmlFor="email">Email ID: </label>
        <div className="custom-input">
          <input
            type="email"
            id="email"
            value={email}
            onChange={emailHandler}
            placeholder={domain}
          />
          {email && <p>{email ? domain : ""}</p>}
        </div>
      </div>
      <div className="options-container">
        {domainArray.map((domain, index) => (
          <Button key={index} value={domain} onClick={domainSelector}>
            {domain}
          </Button>
        ))}
      </div>
    </Container>
  );
};

export default Email;
