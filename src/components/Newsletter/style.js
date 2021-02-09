import styled from "styled-components";

export const Container = styled.div`
  width: 1440px;
  background-color: #f2f2f2;
  color: #3d3d3d;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    margin-top: 64px;
    margin-bottom: 16px;
  }

  p {
    margin-bottom: 74px;
  }
`;

export const InputContainer = styled.div`
  form {
    display: flex;
    flex-direction: table-row;
    margin-bottom: 64px;
  }
`;
