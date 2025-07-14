import { createContext } from "react";


const ThemeContext = createContext({
    isDarkThemed: false,
    setIsDarkThemed: () => {}
});

export default ThemeContext;