import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

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
    const projects = [
        {
            title: "Accessible Makeup Brushes",
            description: "An accessible design for makeup tools created for those with little or no motor function in their hands and wrists.",
            tools: "Shapr3D, Fusion360, 3D Printing, Laser Cutting",
            githubLink: "#",
            archiveLink: "/projects/makeup-brushes"
        },
        {
            title: "Custom Walker Tray",
            description: "",
            tools: "IDE, Software, Fabrication, etc.",
            githubLink: "#",
            archiveLink: "#"
        },
        {
            title: "Project",
            description: "A short description about the project. More details will be included in it's page.",
            tools: "IDE, Software, Fabrication, etc.",
            githubLink: "#",
            archiveLink: "#"
        }
    ];

    // Sort projects alphabetically by title
    const sortedProjects = [...projects].sort((a, b) => a.title.localeCompare(b.title));

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