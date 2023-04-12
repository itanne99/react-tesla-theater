import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { ToggleThemeBtn } from './Components/ToggleThemeBtn';
import { Home } from './Pages/Home';

const App = () => {
  const [cookies, setCookie] = useCookies(['theme']);
  const [theme, setTheme] = useState(cookies.theme || 'light');

  useEffect(() => {
    setCookie('theme', theme);
  }, [theme, setCookie]);

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