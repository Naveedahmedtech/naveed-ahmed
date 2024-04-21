import React, { useRef, useEffect } from 'react';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Home = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = [
      heroRef.current,
      aboutRef.current,
      projectsRef.current,
      contactRef.current,
    ];

    sections.forEach((section, index) => {
      gsap.fromTo(
        section.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 90%',
            end: 'bottom 60%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  return (
    <>
      <div ref={heroRef}><HeroSection /></div>
      <div ref={aboutRef}><AboutSection /></div>
      <div ref={projectsRef}><ProjectsSection /></div>
      <div ref={contactRef}><ContactSection /></div>
    </>
  );
};

export default Home;
