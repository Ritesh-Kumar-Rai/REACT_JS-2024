import { createContext, useContext, useState } from "react";

// theme context
const ThemeToggleContext = createContext({
    isDarkThemed: false,
    toggleTheme: () => { }
});

// context provider component
const ThemeToggleContextProvider = (props) => {

    // state for context toggle theme
    const [isDarkThemed, setIsDarkThemed] = useState(true);

    const toggleTheme = () => {
        setIsDarkThemed((prev) => !prev);
    };

    return (
        <ThemeToggleContext.Provider value={{ isDarkThemed, toggleTheme }}>
            {props.children}
        </ThemeToggleContext.Provider>
    );
};

// custom hook
const useThemeContext = () => {
    return useContext(ThemeToggleContext);
};

export { ThemeToggleContextProvider, useThemeContext };