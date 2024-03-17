import { projects } from '../../../utils/home';

const ProjectsSection = () => {
    return (
        <section id="projects" className="py-16 px-4 md:px-20 bg-background text-text">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <a href={project.demoUrl} target='_blank' key={project.id} className="overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition duration-500 hover:scale-105" data-aos="fade-up">
                            <img src={project.image} alt={project.name} className="w-full h-64 object-cover transition-opacity duration-500 hover:opacity-75" />
                            <div className="p-6">
                                <h3 className="mb-2 text-2xl font-semibold">{project.name}</h3>
                                <p className="mb-4 text-lg">{project.description}</p>
                            </div>
                        </a>
                    ))}
                </div>

            </div>
        </section>
    );
};


export default ProjectsSection;
