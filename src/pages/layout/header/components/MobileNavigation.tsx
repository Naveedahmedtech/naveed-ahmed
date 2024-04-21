import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { CrossIcon } from './SVGs';
import { navLinks } from '../utils/navLinks';

const MobileNavigation = ({ isOpen, setIsOpen }: any) => {
    gsap.registerPlugin(ScrollToPlugin);
    const menuRef = useRef(null);

    useEffect(() => {
        const menuAnimation = gsap.timeline();
        if (isOpen) {
            menuAnimation
                .fromTo('.mobile-nav', { x: '100%' }, { x: 0, opacity: 1, duration: 0.75, ease: 'elastic.out(1, 0.75)', boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)' })
                .fromTo('.nav-link', { opacity: 0, y: 30 }, { opacity: 1, y: 0, stagger: 0.1, duration: 0.3 }, '-=0.5')
                .fromTo('.close-btn', { scale: 0.8 }, { scale: 1, duration: 0.5, ease: 'bounce.out' }, '-=0.5');
        } else {
            menuAnimation
                .to('.mobile-nav', { x: '100%', opacity: 0, duration: 0.5, ease: 'power3.in' })
                .to('.mobile-nav-bg', { opacity: 0, duration: 0.25, ease: 'power3.in', display: 'none' }, '-=0.25');
        }
    }, [isOpen]);

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        setIsOpen(false);
        gsap.to(window, { duration: 1, scrollTo: href, ease: 'power2.inOut' });
    };

    return (
        <>
            <div
                className="fixed inset-0 bg-background bg-opacity-60 backdrop-blur-sm z-40 mobile-nav-bg"
                onClick={() => setIsOpen(false)}
            ></div>
            <div
                className="fixed top-0 right-0 bottom-0 w-full bg-background shadow-2xl z-50 mobile-nav"
                ref={menuRef}
            >
                <button
                    className="close-btn p-4 transform transition duration-300 ease-in-out hover:rotate-180"
                    onClick={() => setIsOpen(false)}
                >
                    <CrossIcon />
                </button>
                <ul className="flex flex-col items-center justify-center space-y-4 mt-10">
                    {navLinks.map((link, index) => (
                        <li key={index} className="w-full text-center">
                            <a
                                href={link.href}
                                className="nav-link nav-link-font-size block py-2 w-full transition-colors duration-300 hover:text-blue-500" 
                                onClick={(e) => handleLinkClick(e, link.href)}
                                style={{

                                }}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default MobileNavigation;
