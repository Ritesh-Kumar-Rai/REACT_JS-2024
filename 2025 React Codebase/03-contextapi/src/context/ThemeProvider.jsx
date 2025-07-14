import ThemeContext from "./ThemeContext";

const ThemeProvider = ({ contextParams, children }) => {
    return (
        <ThemeContext.Provider value={contextParams}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;