import styled from "styled-components";

export const Container = styled.header`
  display: ${(props) => (props.isHome ? "flex" : "grid")};
  ${(props) => (props.isHome ? "justify-content: space-between" : "")};
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  padding: 1rem;
  border-bottom: 5px solid #d4e6fa;
  .back {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    justify-self: start;
    font-size: 0.8rem;
  }
  .back > * {
    margin: 0.3rem;
  }
  .logo-container {
    display: flex;
    justify-self: center;
    justify-content: center;
    align-items: center;
    img {
      cursor: pointer;
      height: 100%;
      width: 100%;
    }
  }
  .utils {
    display: flex;
    justify-self: end;
    align-items: center;
    justify-content: space-between;
  }
  .utils > * {
    min-width: 20px;
    cursor: pointer;
    margin: 0.5rem;
  }
  @media (min-width: 1000px) {
    height: 100px;
    .back {
      font-size: 1rem;
    }
    .logo-container {
      width: 120px;
      img {
      }
    }
    .utils > * {
      margin: 1rem;
    }
  }
`;
