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
`;

export const WorkingContent = styled.div`
  height: 1000px;
  width: 444px;
  margin-right: 56px;

  h2 {
    color: #3d3d3d;
    max-width: 250px;
  }

  p {
    margin-top: 40px;
    margin-bottom: 40px;
    font-size: 16px;
    line-height: 24px;
    color: #3d3d3d;

    a {
      font-weight: 500;
      color: #5e20a4;
    }
  }

  a {
    font-weight: 500;
    color: #5e20a4;
  }
`;

export const ImageSection = styled.img`
  height: 392px;
  width: 584px;
`;
