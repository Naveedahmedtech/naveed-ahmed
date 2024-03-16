import React from 'react';
import { useTheme } from './context/ThemeContext';

const ThemeToggleButton = () => {
    const { toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme} className="p-2 bg-primary rounded text-text">
            Toggle Theme
        </button>
    );
};


export default ThemeToggleButton;
