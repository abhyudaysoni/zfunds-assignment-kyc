import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Container } from "./styles";
import {
  changeFatherName,
  changeMotherName,
} from "../../../store/personal-slice";
import Email from "./email/email";

const Bio = () => {
  const personal = useSelector((state) => state.personal);
  const dispatch = useDispatch();
  const fNameHandler = (e) => {
    dispatch(changeFatherName(e.target.value));
  };
  const mNameHandler = (e) => {
    dispatch(changeMotherName(e.target.value));
  };

  return (
    <Container>
      <div className="bio-item">
        <label htmlFor="fName">Father's Name: </label>
        <input
          type="text"
          id="fName"
          value={personal.fatherName}
          onChange={fNameHandler}
        />
      </div>
      <div className="bio-item">
        <label htmlFor="mName">Mother's Name: </label>
        <input
          type="text"
          id="mName"
          value={personal.motherName}
          onChange={mNameHandler}
        />
      </div>
      <Email />
    </Container>
  );
};

export default Bio;
