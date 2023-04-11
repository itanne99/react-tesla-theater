import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SiteCard } from "./SiteCard";
import _ from "lodash";

const sites = [
    { "name": "Disney+", "url": "https://www.disneyplus.com/" },
    { "name": "HBO Max", "url": "https://www.hbomax.com/" },
    { "name": "Hulu", "url": "https://www.hulu.com/" },
    { "name": "Netflix", "url": "https://www.netflix.com/" },
    { "name": "Plex", "url": "https://www.plex.tv/" },
    { "name": "Twitch", "url": "https://www.twitch.tv/" },
    { "name": "YouTube", "url": "https://www.youtube.com/" },
    { "name": "YouTubeTV", "url": "https://tv.youtube.com/welcome/" }
];

const sortedSites = _.sortBy(sites, "name");

export const StreamingSitesList = (props) => {
  return (
    <Container>
      <Row lg={4} className="g-5">
        {sortedSites.map((site) => (
          <Col>
            <SiteCard name={site.name} url={site.url} theme={props.theme}/>
          </Col>
        ))}
      </Row>
    </Container>
  );
};