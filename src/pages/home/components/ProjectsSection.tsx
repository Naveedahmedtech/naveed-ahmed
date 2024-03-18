import { projects } from '../../../utils/home';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
    return (
        <section id="projects" className="py-16 px-4 md:px-20 bg-background text-text">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard project={project} key={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
