import styled from "styled-components";

export const Container = styled.footer`
  margin-top: 24px;
  height: 250px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 360px) {
    justify-content: center;
    padding: 0px 16px;
  }
`;

export const CompanyFooterInfo = styled.div`
  display: flex;
  flex: 1;
  width: 1440px;

  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 360px) {
    width: 360px;

    flex-direction: column;
    justify-content: center;
  }
`;

export const CompanyFooterLogo = styled.img`
  margin-right: 120px;

  @media (max-width: 360px) {
    margin-right: 0;
    margin-top: 48px;
  }
`;

export const FooterLinks = styled.div`
  a {
    text-decoration: none;
    font-size: 14px;
    color: #3d3d3d;

    @media (max-width: 360px) {
      max-width: 328px;
      text-align: center;
    }

    & + a {
      margin-left: 30px;
    }
  }

  @media (max-width: 360px) {
    display: flex;
    margin-top: 32px;
    margin-bottom: 24px;

    align-items: center;
    justify-content: center;
  }
`;

export const FooterSocialLinksContainer = styled.div`
  height: 150px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 360px) {
    height: 50px;
  }
`;

export const FooterSocialButton = styled.button`
  height: 45px;
  width: 45px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  & + button {
    margin-left: 16px;
  }

  background-color: #ffffff;

  border: 1px solid #dfdfdf;
`;

export const CopyrightFooterInfo = styled.div`
  padding: 32px;
  p {
    opacity: 0.6;
    color: #3d3d3d;
    font-size: 12px;

    @media (max-width: 360px) {
      text-align: center;
    }
  }

  @media (max-width: 360px) {
    margin-top: 24px;
    border-top: 1px solid #dfdfdf;
    padding: 24px;
  }
`;
