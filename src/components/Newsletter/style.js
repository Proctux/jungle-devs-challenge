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

    @media (max-width: 360px) {
      text-align: center;
      max-width: 292px;
    }
  }

  p:nth-child(2) {
    margin-bottom: 74px;

    @media (max-width: 360px) {
      margin-bottom: 32px;
      text-align: center;
      max-width: 328px;
    }
  }

  @media (max-width: 360px) {
    width: 360px;
    height: 600px;
  }
`;

export const FormContainer = styled.div`
  form {
    display: flex;
    flex-direction: row;
    margin-bottom: 24px;
  }

  @media (max-width: 360px) {
    form {
      width: 360px;

      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: 12px;
      margin-bottom: 12px;
    }
  }
`;

export const InputContainer = styled.div`
  max-width: 245px;
  margin-bottom: 64px;

  @media (max-width: 360px) {
    width: 360px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 0px;
  }
`;
