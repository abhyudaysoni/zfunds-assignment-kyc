import styled from "styled-components";

export const Container = styled.form`
  padding: 1rem;
  max-width: 600px;
  margin: auto;
  .declaration-items {
    display: flex;
    flex-direction: column;
    .item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0.5rem 0;
      p {
        font-weight: 500;
      }
      img {
        cursor: pointer;
        height: 30px;
      }
    }
  }
`;
