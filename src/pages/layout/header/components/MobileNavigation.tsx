import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { CrossIcon } from './SVGs'; // Ensure this icon has an animation
import { navLinks } from '../utils/navLinks';

const MobileNavigation = ({ isOpen, setIsOpen }:any) => {
    gsap.registerPlugin(ScrollToPlugin);
    const menuRef = useRef(null);

    useEffect(() => {
        const menuAnimation = gsap.timeline();
        if (isOpen) {
            menuAnimation
                .to('.mobile-nav-bg', { opacity: 0.95, duration: 0.5, ease: 'power3.out', background: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)' })
                .fromTo('.mobile-nav', { x: '100%' }, { x: 0, opacity: 1, duration: 0.5, ease: 'power3.out', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' })
                .fromTo('.nav-link', { opacity: 0, y: 20 }, { opacity: 1, y: 0, stagger: 0.1, duration: 0.2 }, '-=0.25')
                .fromTo('.close-btn', { rotation: 0 }, { rotation: 90, duration: 0.5, ease: 'elastic.out(1, 0.3)' }, '-=1');
        } else {
            menuAnimation
                .to('.mobile-nav', { x: '100%', opacity: 0, duration: 0.5, ease: 'power3.in' })
                .to('.mobile-nav-bg', { opacity: 0, duration: 0.5, ease: 'power3.in', display: 'none' }, '-=0.5');
        }
    }, [isOpen]);

    const handleLinkClick = (e:any, href:any) => {
        e.preventDefault();
        setIsOpen(false);
        gsap.to(window, { duration: 1, scrollTo: href, ease: 'power2.inOut' });
    };

    return (
        <>
            <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40 mobile-nav-bg"
                onClick={() => setIsOpen(false)}
            ></div>
            <div
                className="fixed top-0 right-0 bottom-0 w-64 bg-background shadow-xl z-50 mobile-nav"
                ref={menuRef}
            >
                <button
                    className="close-btn p-4"
                    onClick={() => setIsOpen(false)}
                >
                    <CrossIcon />
                </button>
                <ul className="flex flex-col items-center justify-center space-y-4 mt-10">
                    {navLinks.map((link:any, index:any) => (
                        <li key={index} className="w-full text-center">
                            <a href={link.href} className="nav-link block py-2 w-full transition-colors duration-200 hover:bg-opacity-50"
                                onClick={(e) => handleLinkClick(e, link.href)}>
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
