import React from 'react'
import { Container } from 'react-bootstrap'
import { GoFullScreenBtn } from '../Components/GoFullScreenBtn'
import { SiteHeader } from '../Components/SiteHeader'
import { StreamingSitesList } from '../Components/StreamingSitesList'

export const Home = (props) => {
  return (
    <Container className="d-flex flex-column justify-content-between" style={{ minHeight: "100vh" }}>
      <SiteHeader theme={props.theme}/>
      <StreamingSitesList theme={props.theme}/>
      <GoFullScreenBtn theme={props.theme}/>
    </Container>
  )
}
