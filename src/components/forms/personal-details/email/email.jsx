import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const [domain, setDomain] = useState(personal.email.split("@")[1]);
  const [email, setEmail] = useState(personal.email.split("@")[0]);
  const dispatch = useDispatch();
  const emailHandler = (e) => {
    setEmail(e.target.value);
    dispatch(changeEmail(e.target.value + domain));
    if (e.target.value === "") {
      dispatch(changeEmail(""));
    }
  };
  const domainSelector = (e) => {
    if (e.target.value === domain) {
      setDomain("");
      return;
    }
    setDomain(e.target.value);
    setEmail("");
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
            placeholder={domain || "E-mail ID"}
            required
          />
          {domain && <p>{domain ? domain : ""}</p>}
        </div>
      </div>
      <div className="options-container">
        {domainArray.map((domainItem, index) => (
          <Button
            key={index}
            value={domainItem}
            className={domain === domainItem ? "active" : ""}
            onClick={domainSelector}
          >
            {domainItem}
          </Button>
        ))}
      </div>
    </Container>
  );
};

export default Email;
