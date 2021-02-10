import styled from "styled-components";

export const Container = styled.section`
  height: 508px;
  width: 1440px;
  background-color: #f2f2f2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 360px) {
    width: 360px;
    height: 524px;
  }
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

    @media (max-width: 360px) {
      width: 328px;
      text-align: center;
    }
  }

  p {
    margin-top: 40px;
    color: #3d3d3d;
    text-align: center;
    line-height: 28px;

    @media (max-width: 360px) {
      width: 328px;
      text-align: center;
      margin-top: 16px;
    }
  }

  @media (max-width: 360px) {
    width: 360px;
    height: 308px;
    margin-top: 0;
  }
`;
