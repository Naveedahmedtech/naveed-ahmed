import React, { ReactNode } from 'react';
import { useTheme } from './context/ThemeContext';

// AutoThemeAdjuster component
const AutoThemeAdjuster = ({ children }: { children: ReactNode }) => {
    const { theme } = useTheme(); // Use the custom hook to get the current theme

    // Optionally, you can apply theme-based styling directly here
    // For example, using inline styles or adding specific class names to a div that wraps your children
    const themeStyles = {
        color: theme === 'light' ? '#1f2937' : '#f3f4f6',
        backgroundColor: theme === 'light' ? '#f3f4f6' : '#1f2937',
        // Add more styles as needed
    };

    return (
        <div style={themeStyles}>
            {children}
        </div>
    );
};

export default AutoThemeAdjuster;
