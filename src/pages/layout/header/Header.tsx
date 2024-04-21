import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Logo from './components/Logo';
import Navigation from './components/Navigation';
import { Footer } from '..';
import Home from '../../home/Home';
import { useTheme } from '../../../context/ThemeContext';

const Header = () => {
    const headerRef = useRef(null);
    const { theme } = useTheme();

    // Function to update header styles based on the current theme
    const updateHeaderStyles = () => {
        const rootStyle = getComputedStyle(document.documentElement);
        const defaultBackgroundColor = rootStyle.getPropertyValue('--color-background').trim();
        const darkThemeBackgroundColor = rootStyle.getPropertyValue('--color-dark-background').trim();

        gsap.to(headerRef.current, {
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            backgroundColor: theme === 'dark' ? darkThemeBackgroundColor : defaultBackgroundColor,
            duration: 0.3
        });
    };

    // useEffect to handle theme changes
    useEffect(() => {
        updateHeaderStyles();
    }, [theme]); // Dependency on theme to ensure it runs every time theme changes

    return (
        <>
            <header ref={headerRef} className="text-text bg-background transition-shadow duration-300 ease-in-out" style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
                <div className="px-4 md:px-20 mx-auto py-5 flex justify-between items-center">
                    <Logo />
                    <Navigation />
                </div>
            </header>
            <Home />
            <Footer />
        </>
    );
};

export default Header;
