import { createContext } from "react";


const ThemeContext = createContext({
    isDarkThemed: false,
    toggleTheme: () => {}
});

export default ThemeContext;