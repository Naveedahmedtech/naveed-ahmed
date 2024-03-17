import { useState, useEffect, useRef, createRef } from 'react';
import { navLinks } from '../utils/navLinks';
import ThemeToggle from '../../../../components/ThemeToggle';
import MobileNavigation from './MobileNavigation';
import { MenuIcon } from './SVGs';

const Navigation = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('');

    // Refs for navigation links for direct DOM access if needed
    const navRefs = useRef([]);
    navRefs.current = navLinks.map((link, i) => navRefs.current[i] ?? createRef());

    useEffect(() => {
        const handleScroll = () => {
            let found = false;
            navLinks.forEach((link) => {
                const section = document.querySelector(link.href);
                if (section instanceof HTMLElement) { // Check if the section is not null
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    if (window.scrollY >= sectionTop - sectionHeight / 3 && window.scrollY < sectionTop + sectionHeight - sectionHeight / 3) {
                        setActiveLink(link.href);
                        found = true;
                    }
                }
            });
            if (!found) setActiveLink('');
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <nav>
            <div className="flex justify-between items-center">
                <ul className={`flex items-center space-x-6 mr-6 hidden md:flex`}>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.href} className={`nav-link ${activeLink === link.href ? 'active' : ''}`}>
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
                <ThemeToggle />
                <button onClick={toggleMobileMenu} className="md:hidden">
                    <MenuIcon />
                </button>
            </div>
            <MobileNavigation isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
        </nav>
    );
};

export default Navigation;
