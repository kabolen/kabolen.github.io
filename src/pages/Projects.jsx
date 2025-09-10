import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';
import projectsData from '../projects.json';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Time delay between each card animation
    },
  },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function Projects() {
    // Sort projects alphabetically by title
    const sortedProjects = [...projectsData].sort((a, b) => a.title.localeCompare(b.title));

    return (
        <div>
            <Header />
            <div className="main-content">
                <div className="title-container">
                    <h1>Projects</h1>
                </div>
                <motion.div
                    className="projects-list"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {sortedProjects.map((project) => (
                        <motion.div key={project.title} variants={cardVariants}>
                            <ProjectCard
                                title={project.title}
                                description={project.description}
                                tools={project.tools}
                                githubLink={project.githubLink}
                                archiveLink={project.archiveLink}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

export default Projects;