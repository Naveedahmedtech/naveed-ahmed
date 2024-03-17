import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';

import '../css/style.css'

const HeroSection = () => {
    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        const header = document.querySelector('header');
        if (header) {
            setHeaderHeight(header.offsetHeight);
        }

        const handleResize = () => {
            if (header) {
                setHeaderHeight(header.offsetHeight);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section id='home' className="flex items-center justify-center px-4 pt-5 md:px-20 bg-background text-text"
            style={{ minHeight: `calc(100vh - ${headerHeight}px)` }}
        >
            <div className="max-w-4xl text-center" data-aos="fade-right">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
                    <TypeAnimation
                        sequence={[
                            'Turning Ideas into Reality',
                            1500,
                            'Elevating Your Online Presence',
                            1500,
                            'Innovative Solutions for the Digital World',
                            1500,
                        ]}
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className="mt-6 text-lg md:text-xl lg:text-2xl">
                    I specialize in bringing your digital dreams to life, whether through stunning websites, effective web applications, or innovative online solutions. Let's create something remarkable together, using the latest in web technologies to achieve your goals.
                </p>
                <div className="flex flex-col md:flex-row mt-10 space-y-4 md:space-y-0 md:space-x-4 justify-center">
                    <a href="#contact" className="btn-animate-fill bg-primary text-text border-2 border-primary font-bold py-3 px-6 rounded hover:bg-background hover:text-primary transition duration-300">
                        Let's Collaborate
                    </a>
                    <a href="#projects" className="btn-animate-outline bg-transparent border-2 border-primary text-primary font-bold py-3 px-6 rounded transition duration-300">
                        See My Work
                    </a>
                </div>


            </div>
        </section>
    );
};

export default HeroSection;
