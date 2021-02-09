import styled from "styled-components";

export const InputField = styled.input`
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "")};
  height: ${(props) => (props.height ? props.height : "")};
  width: ${(props) => (props.width ? props.width : "")};
  border-color: ${(props) => (props.borderColor ? props.borderColor : "")};
  border-width: 1px;
  padding: 20px;
  margin-right: 12px;

  &::placeholder {
    color: "#000";
  }
`;
