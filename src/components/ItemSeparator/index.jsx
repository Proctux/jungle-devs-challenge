import React from "react";
import PropTypes from "prop-types";

import { Container, Border } from "./style";

const ItemSeparator = ({
  backgroundWidth,
  backgroundColor,
  mobileBackgroundWidth,
  ...props
}) => (
  <Container
    backgroundWidth={backgroundWidth}
    backgroundColor={backgroundColor}
    mobileBackgroundWidth={mobileBackgroundWidth}
  >
    <Border {...props} />
  </Container>
);

ItemSeparator.propTypes = {
  backgroundWidth: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  mobileBackgroundWidth: PropTypes.string,
};

ItemSeparator.defaultProps = {
  mobileBackgroundWidth: "",
};

export default ItemSeparator;
