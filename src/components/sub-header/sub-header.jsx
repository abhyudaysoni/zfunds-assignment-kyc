import React from "react";
import { Container } from "./styles";

const SubHeader = ({ heading, subHeading, description }) => {
  return (
    <Container>
      <div className="heading">
        <h2>{heading}</h2>
        <p>{description}</p>
      </div>
      <div className="sub-heading">
        <h3>{subHeading}</h3>
      </div>
    </Container>
  );
};

export default SubHeader;
