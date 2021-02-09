import React from "react";

import { Container, ProfileContainer, ContentInformation } from "./style";

const CaresInformation = () => (
  <Container>
    <ProfileContainer />
    <ContentInformation>
      <a href="/">Sarah’s day care available now in North Sydney</a>
      <p>Wednesday, Thursday, Friday - 7:30 - 5:30</p>
    </ContentInformation>
  </Container>
);

export default CaresInformation;
