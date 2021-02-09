import React from "react";
import { FiPlay } from "react-icons/fi";

import Header from "../Header";
import backgroundImage from "../../assets/Image.svg";

import {
  HeaderContainer,
  Image,
  HeaderContent,
  ContentContainer,
  ContentImage,
  ImageContainer,
  VideoPlayInfo,
} from "./style";

const Hero = () => (
  <HeaderContainer>
    <Image src={backgroundImage} />
    <Header />
    <HeaderContent>
      <ContentContainer>
        <h1>Easily create or join a local nanny share with Hapu</h1>

        <p>
          Hapu is Airbnb for nanny share. Share your home, nanny and costs and
          create new flexible, affordable solutions in childcare.
        </p>

        <VideoPlayInfo>
          <div>
            <FiPlay size={24} color="white" />
          </div>

          <a href="/">See hapu in action (27 seconds)</a>
        </VideoPlayInfo>
      </ContentContainer>
      <ImageContainer>
        <ContentImage />
      </ImageContainer>
    </HeaderContent>
  </HeaderContainer>
);

export default Hero;
