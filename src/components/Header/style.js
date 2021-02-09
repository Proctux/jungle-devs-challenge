import styled from "styled-components";

import logo from "../../assets/logo.svg";

export const Container = styled.header`
  display: flex;
  flex-direction: row;

  width: 1440px;
  height: 80px;
  padding: 0 20px;
`;

export const HeaderLogoContainer = styled.div`
  height: 80px;
  width: 64px;
  background-color: #00c88c;
  border-radius: 0 0 32px 32px;
  margin-left: 20px;
  margin-right: 38px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderLogo = styled.div`
  background: url(${logo}) no-repeat;
  background-size: 28px;
  height: 80px;
  width: 80px;
  margin-top: 64px;
  margin-left: 18px;
`;

export const HeaderInfo = styled.div`
  display: flex;
  flex: 1;
  height: 80px;
  align-items: center;

  a {
    text-decoration: none;
    color: #ffffff;
    margin-right: 28px;
  }
`;

export const HeaderLinks = styled.div`
  flex: 1;
`;
