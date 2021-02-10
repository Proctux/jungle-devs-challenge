import styled from "styled-components";

export const Text = styled.span`
  font-size: 12px;
  color: #c53030;
  text-align: center;

  margin-top: 12px;
  max-width: 230px;

  @media (max-width: 360px) {
    width: 360px;
    margin-top: 4px;
    margin-bottom: 8px;
  }
`;
