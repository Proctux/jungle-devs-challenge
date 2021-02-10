import styled from "styled-components";

export const Container = styled.section`
  height: 632px;
  width: 1440px;
  padding-top: 120px;
  padding-bottom: 120px;
  padding-left: 228px;
  padding-right: 128px;
  background-color: #f2f2f2;

  display: flex;
  justify-content: center;
  flex-direction: row;

  @media (max-width: 360px) {
    width: 360px;
    height: 792px;
    display: flex;
    align-items: center;
    flex-direction: column-reverse;

    padding-left: 0px;
    padding-right: 0px;
  }
`;

export const WorkingContent = styled.div`
  height: 1000px;
  width: 444px;
  margin-right: 56px;

  h2 {
    color: #3d3d3d;
    max-width: 250px;

    @media (max-width: 360px) {
      text-align: center;
    }
  }

  p {
    margin-top: 40px;
    margin-bottom: 40px;
    font-size: 16px;
    line-height: 24px;
    color: #3d3d3d;

    @media (max-width: 360px) {
      max-width: 328px;
      text-align: center;
      margin-top: 16px;
      margin-bottom: 24px;
    }

    a {
      font-weight: 500;
      color: #5e20a4;
    }
  }

  a {
    font-weight: 500;
    color: #5e20a4;
  }

  @media (max-width: 360px) {
    width: 360px;
    height: 436px;
    margin-right: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const ImageSection = styled.img`
  height: 392px;
  width: 584px;

  @media (max-width: 360px) {
    width: 304px;
    height: 204px;
    margin-bottom: 24px;
  }
`;
