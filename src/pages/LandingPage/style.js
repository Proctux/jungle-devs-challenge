import styled from "styled-components";

import backgroundImage from "../../assets/Image.svg";
import headerImage from "../../assets/ImageHeader.svg";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 616px;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  width: 600px;

  margin-right: 184px;

  h1 {
    max-width: 490px;
  }

  p {
    margin-top: 24px;
    max-width: 520px;
    line-height: 24px;
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
`;

export const Image = styled.img`
  position: absolute;
  width: 1440px;
  height: 616px;
  left: 0px;
  top: 0px;
  z-index: -1;

  background: url(${backgroundImage}) #5e20a4;
  color: #5e20a4;
  mix-blend-mode: overlay;
`;

export const ImageContainer = styled.div`
  width: 400px;
`;

export const ContentImage = styled.div`
  height: 290px;
  width: 316px;
  display: flex;
  background: url(${headerImage});
`;
