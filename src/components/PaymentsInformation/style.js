import styled from "styled-components";

export const Container = styled.section`
  height: 648px;
  width: 1440px;
  background-color: #f2f2f2;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PaymentImage = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 336px;
  width: 456px;
  margin-right: 44px;
`;

export const PaymentContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 336px;
  width: 456px;

  h2 {
    color: #3d3d3d;
    margin-bottom: 40px;
  }

  p {
    color: #3d3d3d;
    max-width: 484px;
    line-height: 28px;
  }

  a {
    margin-top: 40px;
    color: #5e20a4;
    font-weight: 500;
  }
`;
