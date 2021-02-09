import React from "react";
import PropTypes from "prop-types";
import Toggle from "react-toggle";
import style from "react-toggle/style.css";

import { Switch, ToggleText } from "./style";

const ToggleButton = ({ onSelect, isSelected }) => {
  const handleCheck = () => {
    onSelect();
  };

  return (
    <Switch>
      <Toggle
        defaultChecked={isSelected}
        style={style}
        icons={{
          checked: <ToggleText>A</ToggleText>,
          unchecked: <ToggleText>B</ToggleText>,
        }}
        onChange={handleCheck}
      />
    </Switch>
  );
};

ToggleButton.propTypes = {
  onSelect: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

export default ToggleButton;
