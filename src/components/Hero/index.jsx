import React, { useCallback, useState } from "react";
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

const Hero = () => {
  const [isOn, setIsOn] = useState(true);

  const handleToggleButton = useCallback(() => {
    setIsOn(!isOn);
  }, [isOn]);

  return (
    <HeaderContainer>
      <Image src={backgroundImage} />
      <Header onSelect={handleToggleButton} isSelected={isOn} />
      <HeaderContent>
        <ContentContainer>
          {isOn ? (
            <>
              <h1>Easily create or join a local nanny share with Hapu</h1>

              <p>
                Hapu is Airbnb for nanny share. Share your home, nanny and costs
                and create new flexible, affordable solutions in childcare.
              </p>
            </>
          ) : (
            <>
              <h1>Create the childcare you need at a price you can afford</h1>

              <p>
                Connect with other local families to share a nanny from as low
                as $10.00/hr each. Create your family profile today to get
                started.
              </p>
            </>
          )}

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
};

export default Hero;
