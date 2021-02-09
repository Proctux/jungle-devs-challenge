import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 80px;

  h2 {
    color: #3d3d3d;
    font-size: 28px;
    margin-bottom: 16px;
  }

  p {
    color: #3d3d3d;
    font-size: 18px;
  }

  a {
    font-weight: 500;
  }
`;

export const SignUpButton = styled.button`
  height: 68px;
  width: 304px;
  margin-top: 32px;
  margin-bottom: 24px;

  background-color: #5e20a4;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 4px;
  border: 0;
`;

export const SignUpButtonIcon = styled.img`
  margin-right: 20px;
`;

export const SignUpButtonContent = styled.div`
  p {
    color: #ffffff;
    font-size: 16px;
  }
  p:nth-child(2) {
    font-size: 12px;
  }
`;
