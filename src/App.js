import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { GoFullScreenBtn } from './Components/GoFullScreenBtn';
import { SiteHeader } from './Components/SiteHeader';
import { StreamingSitesList } from './Components/StreamingSitesList';

const App = () => {
  const [theme, setTheme] = useState('light')

  return (
    <Container className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <SiteHeader/>
      <StreamingSitesList theme={theme}/>
      <GoFullScreenBtn/>
    </Container>
  );
}

export default App;