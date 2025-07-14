import { useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeContextProvider = ({ children }) => {

    const [isDarkThemed, setIsDarkThemed] = useState(false);

    return (
        <ThemeContext.Provider value={{ isDarkThemed, setIsDarkThemed }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;