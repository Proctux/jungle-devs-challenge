import React from "react";
import { GrFacebookOption, GrTwitter, GrInstagram } from "react-icons/gr";

import completLogo from "../../assets/CompletLogo.svg";

import {
  Container,
  CompanyFooterInfo,
  CompanyFooterLogo,
  CopyrightFooterInfo,
  FooterLinks,
  FooterSocialLinksContainer,
  FooterSocialButton,
} from "./style";

const FooterInformation = () => (
  <Container>
    <CompanyFooterInfo>
      <CompanyFooterLogo src={completLogo} />

      <FooterLinks>
        <a href="/">Share Your Nanny</a>
        <a href="/">Our Story</a>
        <a href="/">Blog</a>
        <a href="/">Terms and Privacy</a>
      </FooterLinks>

      <FooterSocialLinksContainer>
        <FooterSocialButton>
          <GrFacebookOption color="#3d3d3d" opacity={0.7} />
        </FooterSocialButton>

        <FooterSocialButton>
          <GrTwitter color="#3d3d3d" opacity={0.7} />
        </FooterSocialButton>

        <FooterSocialButton>
          <GrInstagram color="#3d3d3d" opacity={0.7} />
        </FooterSocialButton>
      </FooterSocialLinksContainer>
    </CompanyFooterInfo>
    <CopyrightFooterInfo>
      <p>Copyright © 2017 Hapu PTY Limited All rights reserved</p>
    </CopyrightFooterInfo>
  </Container>
);

export default FooterInformation;
