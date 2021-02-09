import React from "react";

import Button from "../Button";

import {
  Container,
  HeaderInfo,
  HeaderLogoContainer,
  HeaderLogo,
  HeaderLinks,
} from "./style";

const Header = () => (
  <Container>
    <HeaderLogoContainer>
      <HeaderLogo />
    </HeaderLogoContainer>
    <HeaderInfo>
      <HeaderLinks>
        <a href="/">Create Your Nanny Share</a>
        <a href="/">Browse Shares</a>
        <a href="/">Our Story</a>
      </HeaderLinks>

      <Button
        height="44px"
        width="244px"
        backgroundColor="#00C88C"
        borderRadius="4px"
        color="#fff"
        type="button"
        marginRight="24px"
      >
        Become a Nanny Share Host
      </Button>
      <a href="/">Sign in</a>
    </HeaderInfo>
  </Container>
);

export default Header;
