import styled from "styled-components";

import headerImage from "../../assets/ImageHeader.svg";
import backgroundImage from "../../assets/Image.svg";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 616px;

  @media (max-width: 360px) {
    width: 360px;
    height: 540px;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  @media (max-width: 360px) {
    max-width: 360px;
  }
`;

export const ContentContainer = styled.div`
  width: 600px;

  margin-right: 184px;

  h1 {
    max-width: 490px;

    @media (max-width: 360px) {
      max-width: 320px;
      font-size: 32px;
      text-align: center;
    }
  }

  p {
    margin-top: 24px;
    max-width: 520px;
    line-height: 24px;

    @media (max-width: 360px) {
      max-width: 328px;
      text-align: center;
    }
  }

  @media (max-width: 360px) {
    width: 360px;
    display: flex;

    flex-direction: column;
    margin-right: 0;
  }
`;

export const Content = styled.div`
  width: 600px;

  @media (max-width: 360px) {
    max-width: 360px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const VideoPlayInfo = styled.div`
  margin-top: 52px;
  display: flex;
  align-items: center;

  div {
    display: flex;
    background-color: #00c88c;
    height: 48px;
    width: 48px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    padding-left: 4px;
  }

  a {
    margin-left: 16px;
    line-height: 24px;
    color: #fff;
  }

  @media (max-width: 360px) {
    margin-left: 16px;
  }
`;

export const Image = styled.img`
  position: absolute;
  width: 1433px;
  height: 616px;
  left: 0px;
  top: 0px;
  z-index: -1;

  background: url(${backgroundImage}) no-repeat center;
  background-color: #5e20a4;
  mix-blend-mode: overlay;

  @media (max-width: 360px) {
    width: 360px;
    height: 540px;

    background: url(${backgroundImage}) no-repeat center;
    background-size: cover;
    background-color: #5e20a4;
  }
`;

export const ImageContainer = styled.div`
  width: 400px;
`;

export const ContentImage = styled.div`
  height: 290px;
  width: 316px;
  display: flex;
  background: url(${headerImage});

  @media (max-width: 360px) {
    display: none;
  }
`;
