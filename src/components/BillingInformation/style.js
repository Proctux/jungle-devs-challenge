import styled from "styled-components";

export const Container = styled.section`
  height: 876px;
  width: 1440px;
  background-color: #f2f2f2;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 360px) {
    width: 360px;
    height: 476px;
  }
`;

export const BillingContent = styled.div`
  height: 220px;
  max-width: 784px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    color: #3d3d3d;

    @media (max-width: 360px) {
      max-width: 243px;
      text-align: center;
    }
  }

  p {
    margin-top: 40px;
    color: #3d3d3d;
    text-align: center;

    @media (max-width: 360px) {
      max-width: 328px;
      text-align: center;
      margin-top: 16px;
      margin-bottom: 24px;
    }
  }

  a {
    margin-top: 40px;
    color: #5e20a4;
    font-weight: 500;

    @media (max-width: 360px) {
      margin-top: 0;
      text-align: center;
    }
  }

  @media (max-width: 360px) {
    max-width: 328px;
    width: 360px;
  }
`;

export const BillingImage = styled.img`
  margin-top: 64px;
  height: 392px;
  width: 984px;

  @media (max-width: 360px) {
    display: none;
  }
`;
