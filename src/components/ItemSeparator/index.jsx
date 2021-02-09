import React from "react";
import PropTypes from "prop-types";

import { Container, Border } from "./style";

const ItemSeparator = ({ backgroundWidth, backgroundColor, ...props }) => (
  <Container
    backgroundWidth={backgroundWidth}
    backgroundColor={backgroundColor}
  >
    <Border {...props} />
  </Container>
);

ItemSeparator.propTypes = {
  backgroundWidth: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default ItemSeparator;
