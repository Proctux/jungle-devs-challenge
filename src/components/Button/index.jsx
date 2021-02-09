import React from "react";

import { ButtonComponent } from "./style";

const Button = ({ children, ...props }) => (
  <ButtonComponent {...props}>{children}</ButtonComponent>
);

export default Button;
