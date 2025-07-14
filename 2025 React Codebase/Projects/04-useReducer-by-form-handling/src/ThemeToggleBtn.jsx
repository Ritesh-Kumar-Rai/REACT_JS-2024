import React from 'react'

const ThemeToggleBtn = () => {

    const [isdarkThemed, setIsDarkThemed] = React.useState(true);

    const toggleTheme = () => {
        setIsDarkThemed(prev => !prev);
    }

    React.useEffect(() => {
        const theme = isdarkThemed ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
    }, [isdarkThemed]);


    return (
        <button className='theme-toggler' type='button' onClick={toggleTheme}>Toggle Theme ({isdarkThemed ? 'Dark' : 'Light'})</button>
    )
};

export default ThemeToggleBtn;