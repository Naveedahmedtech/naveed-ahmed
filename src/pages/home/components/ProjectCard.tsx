import { motion } from 'framer-motion';

const ProjectCard = ({ project }: any) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
        // key={index}
        >
            <img src={project.image} alt={project.name} className="w-full h-64 object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 transition-opacity duration-500 hover:opacity-100 flex items-center justify-center p-6">
                <div>
                    <h3 className="mb-2 text-2xl font-semibold text-text">{project.name}</h3>
                    <p className="mb-4 text-lg text-text">{project.description}</p>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-text font-bold py-2 px-4 rounded hover:bg-primary-dark transition duration-300">
                        View Project
                    </a>
                </div>
            </div>
        </motion.div>
    );
};


export default ProjectCard
