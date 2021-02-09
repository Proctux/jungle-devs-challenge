import React from "react";
import PropTypes from "prop-types";

import { Text } from "./style";

const ErrorText = ({ message }) => {
  console.log(message);

  return <Text>{message}</Text>;
};

ErrorText.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorText;
