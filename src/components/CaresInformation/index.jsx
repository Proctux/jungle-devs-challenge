import React from "react";

import profileImage from "../../assets/ProfileImage.svg";

import { Container, ProfileImage, ContentInformation } from "./style";

const CaresInformation = () => (
  <Container>
    <ProfileImage src={profileImage} />
    <ContentInformation>
      <a href="/">Sarah’s day care available now in North Sydney</a>
      <p>Wednesday, Thursday, Friday - 7:30 - 5:30</p>
    </ContentInformation>
  </Container>
);

export default CaresInformation;
