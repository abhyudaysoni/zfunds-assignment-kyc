import React from "react";
import styled from "styled-components";

export const Container = styled.button`
  background: #052f5f;
  color: white;
  border: none;
  padding: 1rem;
`;

const Button = (props) => {
  return (
    <Container
      className={props.className}
      id={props.id}
      onClick={props.onClick}
    >
      {props.children}
    </Container>
  );
};

export default Button;
