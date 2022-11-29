import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: black;
  opacity: 80%;
  z-index: 50;
  height: 100vh;
`;

const Backdrop = ({ onClick }) => {
  return <Container onClick={onClick}></Container>;
};

export default Backdrop;
