import React from "react";
import FooterInformation from "../FooterInformation";
import SignUpInformation from "../SignUpInformation";

import { Container } from "./style";

const Footer = () => (
  <Container>
    <SignUpInformation />
    <FooterInformation />
  </Container>
);

export default Footer;
