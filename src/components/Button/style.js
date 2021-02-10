import styled from "styled-components";

export const ButtonComponent = styled.button`
  height: ${(props) => (props.height ? props.height : "")};
  width: ${(props) => (props.width ? props.width : "")};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : ""};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "")};
  border: none;
  color: ${(props) => (props.color ? props.color : "")};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "")};
  margin-right: ${(props) => (props.marginRight ? props.marginRight : "")};

  @media (max-width: 360px) {
    width: ${(props) => (props.mobileWidth ? props.mobileWidth : "")};
    font-size: 14px;
    margin-right: 16px;
  }
`;
