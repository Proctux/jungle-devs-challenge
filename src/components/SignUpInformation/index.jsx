import React from "react";

import signUpIcon from "../../assets/Union.svg";

import {
  Container,
  SignUpButton,
  SignUpButtonIcon,
  SignUpButtonContent,
} from "./style";

const SignUpInformation = () => (
  <Container>
    <h2>Become a nanny share host</h2>

    <p>Takes less than 5 minutes to get started</p>

    <SignUpButton>
      <SignUpButtonIcon src={signUpIcon} />
      <SignUpButtonContent>
        <p>Create Your Nanny Share</p>
        <p>Takes less than 5 minutes</p>
      </SignUpButtonContent>
    </SignUpButton>

    <a href="/">Or browse local nanny-shares</a>
  </Container>
);

export default SignUpInformation;
