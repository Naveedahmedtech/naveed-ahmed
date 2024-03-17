import React, { useState, useEffect } from 'react';
import hero from "../../../assets/images/hero.png"
import cv from "../../../assets/images/naveed.pdf"
import { TypeAnimation } from 'react-type-animation';
import CubeAnimation from '../../../animations/CubeAnimation';
import InteractiveParticles from '../../../animations/InteractiveParticles';
import InteractiveGlobe from '../../../animations/InteractiveGlobe';
import ParticleSystem from '../../../animations/ParticleSystem';
import CustomCursor from '../../../components/CustomCursor';

const HeroSection = () => {
    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        const header = document.querySelector('header');
        if (header) {
            setHeaderHeight(header.offsetHeight);
        }

        // Optional: Adjust on window resize
        const handleResize = () => {
            if (header) {
                setHeaderHeight(header.offsetHeight);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section id='home' className="flex flex-col md:flex-row items-center justify-center px-4 pt-5 md:px-20 bg-background text-text"
            style={{ minHeight: `calc(100vh - ${headerHeight}px)` }}
        >
            <div className="flex-1 flex justify-center flex-col" data-aos="fade-right">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left">
                    <TypeAnimation
                        sequence={[
                            'Crafting Digital Experiences',
                            1000,
                            'Building Exceptional UI/UX',
                            1000,
                        ]}
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className="mt-4 text-lg md:text-xl text-center md:text-left">
                    I'm a Software Engineer specializing in building exceptional digital experiences with the MERN stack. Currently, I'm focused on developing scalable web applications and engaging user interfaces.
                </p>
                <div className="flex flex-col md:flex-row mt-8 space-y-4 md:space-y-0 md:space-x-4 text-center md:text-left">
                    <a href="#contact" className="bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primary-dark transition duration-300">
                        Hire Me
                    </a>
                    <a href={cv} download className="bg-transparent border-2 border-primary text-primary font-bold py-2 px-4 rounded hover:bg-primary hover:text-white transition duration-300">
                        Download CV
                    </a>
                </div>
            </div>

            {/* <div className="flex-1 mb-8 md:mb-0" data-aos="fade-left">
                <InteractiveGlobe />
            </div> */}
            <div className="flex-1 mb-8 md:mb-0" data-aos="fade-left">
                <img src={hero} alt="Naveed Ahmed" className="rounded-full w-3/4 mx-auto lg:w-3/5" />
            </div>
        </section>

    );
};

export default HeroSection;
