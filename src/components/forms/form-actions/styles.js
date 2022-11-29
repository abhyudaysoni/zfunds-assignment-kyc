import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  .next {
    border-radius: 10px;
    width: 100%;
    margin: 1rem 0;
    max-width: 300px;
  }
  .skip {
    background: white;
    color: gray;
    text-transform: uppercase;
    width: 100%;
    margin: 0;
    padding: 0;
    max-width: 300px;
  }
`;
