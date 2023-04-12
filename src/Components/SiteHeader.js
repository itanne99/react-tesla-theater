import React from 'react'
import { Container } from 'react-bootstrap'
import '../Styles/Components/SiteHeader.css'

export const SiteHeader = (props) => {

  return (
    <Container>
        <h1 style={{color: `${props.theme === "light"? "": "white"}`}} className='tesla-font text-center my-5'>Tesla Theater</h1>
    </Container>
  )
}
