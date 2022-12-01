import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  margin: 1rem 0;
  grid-gap: 1rem;
  h3 {
    margin: 0.5rem 0;
  }
  .document-container {
    display: flex;
    height: 100px;
    justify-self: end;
    width: 150px;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    input {
      display: none;
    }
    #doc {
      width: 100%;
    }
    #delete-doc {
      position: relative;
      z-index: 10;
      top: -30px;
      height: 20px;
      right: 25px;
      cursor: pointer;
      display: ${(props) => (props.isDoc ? "block" : "none")};
    }
  }
`;
