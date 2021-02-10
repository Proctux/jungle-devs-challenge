import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : ""};
  height: ${(props) => (props.backgroundHeight ? props.backgroundHeight : "")};
  width: ${(props) => (props.backgroundWidth ? props.backgroundWidth : "")};

  @media (max-width: 360px) {
    width: ${(props) =>
      props.mobileBackgroundWidth ? props.mobileBackgroundWidth : ""};
  }
`;

export const Border = styled.div`
  border-width: ${(props) => (props.borderWidth ? props.borderWidth : "")};
  border-style: ${(props) => (props.borderStyle ? props.borderStyle : "")};
  border-color: ${(props) => (props.borderColor ? props.borderColor : "")};
  display: flex;
  width: 720px;

  @media (max-width: 360px) {
    width: 328px;
  }

  padding-right: 328px;
`;
