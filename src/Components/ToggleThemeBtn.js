import React from "react";
import { Button } from "react-bootstrap";
import "../Styles/Components/ToggleThemeBtn.css";
import { FiMoon, FiSun } from "react-icons/fi";

export const ToggleThemeBtn = (props) => {
  const circleStyle = {
    height: "4em",
    width: "fit-content",
    borderRadius: "50%",
    padding: "10px 20px",
  };

  const iconStyle = {
    height: "100%",
    width: "auto",
  };

  return (
    <Button
      variant={props.theme === "light" ? "dark" : "light"}
      style={circleStyle}
      className="top-right m-3"
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
