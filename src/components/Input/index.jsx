import React from "react";
import PropTypes from "prop-types";

import { InputField } from "./style";

const Input = ({
  name,
  placeholder,
  height,
  width,
  borderRadius,
  borderColor,
  ref,
  ...props
}) => (
  <InputField
    name={name}
    placeholder={placeholder}
    height={height}
    width={width}
    borderRadius={borderRadius}
    borderColor={borderColor}
    ref={ref}
    {...props}
  />
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
  placeholder: PropTypes.string,
  borderRadius: PropTypes.string,
  borderColor: PropTypes.string,
  ref: PropTypes.string.isRequired,
};

Input.defaultProps = {
  placeholder: "",
  borderRadius: "",
  height: "24px",
  width: "",
  borderColor: "",
};

export default Input;
