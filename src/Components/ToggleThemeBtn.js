import React from "react";
import { Button } from "react-bootstrap";
import "../Styles/Components/ToggleThemeBtn.css";
import { FiMoon, FiSun } from "react-icons/fi";

export const ToggleThemeBtn = (props) => {
  const circleStyle = {
    height: "5em",
    width: "fit-content"
  };

  const iconStyle = {
    height: "95%",
    width: "100%",
  };

  return (
    <Button
      variant={props.theme === "light" ? "dark" : "light"}
      style={circleStyle}
      className="top-right m-3 "
      onClick={props.toggleTheme}
    >
      {props.theme === "light" ? (
        <FiSun style={iconStyle} />
      ) : (
        <FiMoon style={iconStyle} />
      )}
    </Button>
  );
};
