import styled from "styled-components";

export const Container = styled.footer`
  margin-top: 24px;
  height: 250px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const CompanyFooterInfo = styled.div`
  display: flex;
  flex: 1;
  width: 1440px;

  justify-content: space-evenly;
  align-items: center;
`;

export const CompanyFooterLogo = styled.img`
  margin-right: 120px;
`;

export const FooterLinks = styled.div`
  a {
    text-decoration: none;
    font-size: 14px;
    color: #3d3d3d;

    & + a {
      margin-left: 30px;
    }
  }
`;

export const FooterSocialLinksContainer = styled.div`
  height: 150px;

  display: flex;
  align-items: center;
  justify-content: center;
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
  }
`;
