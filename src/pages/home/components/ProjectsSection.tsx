import React from 'react';
import { projects } from '../../../utils/home';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
    return (
        <section id="projects" className="py-16 px-4 md:px-20 bg-background text-text">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard project={project} />
                        // <div key={project.id} className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition duration-500 hover:scale-105" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                        //     <img src={project.image} alt={project.name} className="w-full h-64 object-cover" loading="lazy" />
                        //     <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 hover:opacity-100 flex items-center justify-center p-6">
                        //         <div>
                        //             <h3 className="mb-2 text-2xl font-semibold text-white">{project.name}</h3>
                        //             <p className="mb-4 text-lg text-gray-200">{project.description}</p>
                        //             <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primary-dark transition duration-300" aria-label={`View ${project.name}`}>
                        //                 View Project
                        //             </a>
                        //         </div>
                        //     </div>
                        // </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
