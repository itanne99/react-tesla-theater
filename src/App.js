import React, { useState } from 'react';
import { ToggleThemeBtn } from './Components/ToggleThemeBtn';
import { Home } from './Pages/Home';

const App = () => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      return prevTheme === "light" ? "dark" : "light";
    });
  };

  return (
    <div style={{background: `${theme === "light"? "" : "gray" }`}}>
    <Home theme={theme} />
    <ToggleThemeBtn theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;