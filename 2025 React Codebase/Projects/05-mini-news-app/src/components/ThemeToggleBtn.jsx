import React, { useEffect } from 'react'
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useThemeContext } from '../contexts/ThemeToggleContext'

export const ThemeToggleBtn = () => {

    const { isDarkThemed, toggleTheme } = useThemeContext();

    useEffect(() => {
        const theme = isDarkThemed ? "dark" : "light";
        document.documentElement.setAttribute('data-theme', theme);
    }, [isDarkThemed]);

    return (
        <button className='btn' type='button' onClick={toggleTheme}>{isDarkThemed ? <MdLightMode color='gold' /> : <MdDarkMode />}</button>
    )
}
