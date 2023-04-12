import React from "react";
import { Button, Container } from "react-bootstrap";

export const GoFullScreenBtn = (props) => {
  return (
    <Container
      fluid
      className="mt-auto d-flex justify-content-center"
      style={{ position: "sticky", bottom: 15 }}
    >
      <Button
        variant={props.theme === "light"? "dark" : "light"}
        href={`https://www.youtube.com/redirect?q=${window.location.href}`}
      >
        <h3>Go Fullscreen</h3>
      </Button>
    </Container>
  );
};
