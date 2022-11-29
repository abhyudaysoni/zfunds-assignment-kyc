import styled from "styled-components";

export const Container = styled.form`
  padding: 1rem;
  .form-item {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
  }
  input {
    max-width: 500px;
  }
  .docs {
    display: flex;
    flex-direction: column;
  }
  .break {
    height: 2px;
    background: gray;
    width: 100%;
    margin: 1rem 0;
  }
`;
