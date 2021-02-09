import styled from "styled-components";

export const Container = styled.section`
  height: 508px;
  width: 1440px;
  background-color: #f2f2f2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NannyShareDailyImage = styled.img`
  height: 96px;
  width: 216px;
`;

export const NannyShareDailyContent = styled.div`
  height: 156px;
  max-width: 784px;
  margin-top: 40px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    color: #3d3d3d;
  }

  p {
    margin-top: 40px;
    color: #3d3d3d;
    text-align: center;
    line-height: 28px;
  }
`;
