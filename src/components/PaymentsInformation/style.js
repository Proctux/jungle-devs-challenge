import styled from "styled-components";

export const Container = styled.section`
  height: 648px;
  width: 1440px;
  background-color: #f2f2f2;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 360px) {
    width: 360px;
    height: 800px;

    flex-direction: column;
  }
`;

export const PaymentImage = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 336px;
  width: 456px;
  margin-right: 44px;

  @media (max-width: 360px) {
    margin-right: 0;
    margin-top: 64px;
    width: 312px;
    height: 230px;
  }
`;

export const PaymentContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 336px;
  width: 456px;

  h2 {
    color: #3d3d3d;
    margin-bottom: 40px;

    @media (max-width: 360px) {
      max-width: 226px;
      text-align: center;
      margin-bottom: 16px;
      margin-top: 40px;
    }
  }

  p {
    color: #3d3d3d;
    max-width: 484px;
    line-height: 28px;

    @media (max-width: 360px) {
      max-width: 328px;
      text-align: center;
    }
  }

  a {
    margin-top: 40px;
    color: #5e20a4;
    font-weight: 500;

    @media (max-width: 360px) {
      margin-top: 24px;
      text-align: center;
    }
  }

  @media (max-width: 360px) {
    width: 360px;
    align-items: center;
    margin-bottom: 64px;
  }
`;
