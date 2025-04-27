function ProjectCard({ title, description, tech, github, liveDemo }) {
    return (
        <div className="project-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <p><strong>Technologies:</strong> {tech.join(", ")}</p>
            <a href={github} target="_blank" rel="noopener noreferrer">View on GitHub</a>
            {liveDemo && <a href={liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a>}
        </div>
    );
}

export default ProjectCard;