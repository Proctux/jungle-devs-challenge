import styled from "styled-components";

export const Container = styled.section`
  height: 112px;
  width: 1440px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #dfdfdf;
`;

export const ProfileImage = styled.img`
  height: 65px;
  width: 65px;

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

  a {
    color: #5e20a4;
    font-weight: 500;
  }
`;
