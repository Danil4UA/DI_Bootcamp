
import React from 'react';
import { useTheme } from "./ThemeContext.jsx"

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme}>
            Switch to {theme === 'light' ? 'dark' : 'light'} theme
        </button>
    );
};

export default ThemeSwitcher;