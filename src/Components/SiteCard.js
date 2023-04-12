import React from "react";
import { Card } from "react-bootstrap";

export const SiteCard = (props) => {
  return (
    <Card style={{ border: "none", background: 'none' }}>

      <a href={props.url}>
        <Card.Img
          variant="top"
          src={`${process.env.PUBLIC_URL}/Icons/${props.theme}/${props.name}.png`}
        />
      </a>
      {/* <Card.Body>
        <Card.Title className="text-center">{props.name}</Card.Title>
      </Card.Body> */}
    </Card>
  );
};
