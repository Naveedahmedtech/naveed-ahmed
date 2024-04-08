import { useState, useEffect, useRef, createRef } from 'react';
import { navLinks } from '../utils/navLinks';
import ThemeToggle from '../../../../components/ThemeToggle';
import MobileNavigation from './MobileNavigation';
import { MenuIcon } from './SVGs';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';




const Navigation = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('');

    const navRefs = useRef([]);
    navRefs.current = navLinks.map((link, i) => {
        return navRefs.current[i] ?? createRef()
    });


    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.utils.toArray('.nav-link').forEach((link:any) => {
            ScrollTrigger.create({
                trigger: document.querySelector(link.getAttribute('href')),
                start: 'top center',
                end: 'bottom center',
                onEnter: () => setActiveLink(link.getAttribute('href')),
                onLeaveBack: () => setActiveLink(''),
                // markers: true, 
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);



    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);

        if (!isMobileMenuOpen) {
            gsap.to(".mobile-navigation-class", {
                duration: 0.5,
                opacity: 1,
                x: 0,
                ease: "power2.out",
            });
        } else {
            gsap.to(".mobile-navigation-class", {
                duration: 0.5,
                opacity: 0,
                x: "-100%",
                ease: "power2.in",
            });
        }
    };


    const handleNavLinkClick = (e:any) => {
        e.preventDefault();
        const targetSection = document.querySelector(e.target.getAttribute('href'));
        gsap.to(window, { duration: 1, scrollTo: targetSection.offsetTop, ease: 'power2.inOut' });
    };

    return (
        <nav>
            <div className="flex justify-between items-center">
                <ul className={`items-center space-x-6 mr-6 hidden md:flex`}>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.href} onClick={handleNavLinkClick} className={`nav-link ${activeLink === link.href ? 'active' : ''}`}>
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
                <ThemeToggle />
                <button onClick={toggleMobileMenu} className="md:hidden ml-4">
                    <MenuIcon />
                </button>
            </div>
            <MobileNavigation isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
        </nav>
    );
};

export default Navigation;
