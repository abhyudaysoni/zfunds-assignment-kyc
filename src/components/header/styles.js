import styled from "styled-components";

export const Container = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  padding: 1rem;
  box-shadow: 1px 1px 5px gray;
  .back {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    justify-self: start;
  }
  .back > * {
    margin: 0.5rem;
  }
  .logo-container {
    display: flex;
    justify-self: center;
    justify-content: center;
    align-items: center;
    img {
      cursor: pointer;
    }
  }
  .utils {
    display: flex;
    justify-self: end;
    align-items: center;
    justify-content: space-between;
  }
  .utils > * {
    margin: 0.5rem;
  }
`;
