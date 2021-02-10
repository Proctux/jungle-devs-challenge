import styled from "styled-components";

export const Container = styled.section`
  height: 112px;
  width: 1440px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #dfdfdf;

  @media (max-width: 360px) {
    height: 216px;
    width: 360px;
    display: flex;
    flex-direction: column;
  }
`;

export const ProfileImage = styled.img`
  height: 65px;
  width: 65px;

  margin-right: 32px;

  @media (max-width: 360px) {
    height: 56px;
    width: 56px;
    margin-right: 0;
  }
`;

export const ContentInformation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  p {
    color: black;
    margin-left: 2px;

    @media (max-width: 360px) {
      max-width: 286px;
      font-size: 14px;
      margin-left: 0;
    }
  }

  a {
    color: #5e20a4;
    font-weight: 500;

    @media (max-width: 360px) {
      max-width: 200px;
      font-size: 14px;
      text-align: center;
      margin-bottom: 12px;
    }
  }

  @media (max-width: 360px) {
    display: flex;
    flex-direction: column;
    width: 360px;
    margin-top: 16px;
  }
`;
