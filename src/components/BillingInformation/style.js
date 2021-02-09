import styled from "styled-components";

export const Container = styled.section`
  height: 876px;
  width: 1440px;
  background-color: #f2f2f2;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  }

  p {
    margin-top: 40px;
    color: #3d3d3d;
    text-align: center;
  }

  a {
    margin-top: 40px;
    color: #5e20a4;
    font-weight: 500;
  }
`;

export const BillingImage = styled.img`
  margin-top: 64px;
  height: 392px;
  width: 984px;
`;
