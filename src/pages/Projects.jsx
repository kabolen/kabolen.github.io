import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';
import {motion} from 'framer-motion';

const containerVariants = {
    animate: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

const cardVariants = {
    initial: {opacity: 0, y: 20, scale: 0.95},
    animate: {opacity: 1, y: 0, scale: 1},
    exit: {opacity: 0, y: 20}
};

function Projects() {
    return (
        <motion.div
            className="projects-page"
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <motion.div>
                <h1>Project Archive</h1>
            </motion.div>
            {projects.map(project => (
                <motion.div key={project.id} variants={cardVariants}>
                <ProjectCard {...project} />
                </motion.div>
            ))}
        </motion.div>
    );
}

export default Projects;