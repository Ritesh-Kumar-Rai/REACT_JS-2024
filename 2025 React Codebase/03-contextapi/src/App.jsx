import { useEffect, useState } from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import ThemeContextProvider from "./context/ThemeProvider";
import Navbar from './components/Navbar';
import Card from './components/Card';

function App() {
  const [isDarkThemed, setIsDarkThemed] = useState(false);

  // function for theme toggling
  const toggleTheme = () => {
    setIsDarkThemed(prev => !prev);
  };

  useEffect(() => {
    const theme = isDarkThemed ? "dark" : "light";
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, [isDarkThemed]);

  return (
    <>
      <ThemeContextProvider contextParams={{ isDarkThemed, toggleTheme }}>
        <Navbar />
        <div className="container">
          <Card />
        </div>
      </ThemeContextProvider>
    </>
  )
}

export default App
