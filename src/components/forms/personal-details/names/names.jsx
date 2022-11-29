import React from "react";
import { Container } from "./styles";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  changeFatherName,
  changeMotherName,
} from "../../../../store/personal-slice";

const Names = () => {
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
      <div className="form-item">
        <label htmlFor="fName">Father's Name: </label>
        <input
          type="text"
          id="fName"
          value={personal.fatherName}
          onChange={fNameHandler}
          placeholder="Father's Name"
        />
      </div>
      <div className="form-item">
        <label htmlFor="mName">Mother's Name: </label>
        <input
          type="text"
          id="mName"
          value={personal.motherName}
          onChange={mNameHandler}
          placeholder="Father's Name"
        />
      </div>
    </Container>
  );
};

export default Names;
