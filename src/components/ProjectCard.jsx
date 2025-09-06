import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

function ProjectCard({ title, description, tools, githubLink, archiveLink }) {
    return (
        <div className="project-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <p><strong>Tools:</strong> {tools}</p>
            <div className="project-links">
                <Link to={archiveLink}>Archive</Link>
                <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        </div>
    );
}

export default ProjectCard;