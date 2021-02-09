import styled from "styled-components";

import profileImage from "../../assets/ProfileImage.svg";

export const Container = styled.div`
  height: 112px;
  width: 1440px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #dfdfdf;
`;

export const ProfileContainer = styled.div`
  height: 65px;
  width: 65px;

  background: url(${profileImage});
  margin-right: 32px;
`;

export const ContentInformation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  p {
    color: black;
    margin-left: 2px;
  }
`;
