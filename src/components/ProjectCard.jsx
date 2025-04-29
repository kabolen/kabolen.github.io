import {Link} from 'react-router-dom';

function ProjectCard({ title, description, tech, github, liveDemo, slug }) {
    return (
        <div className="project-card">
            <Link to={`/projects/${slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <h3>{title}</h3>
                <p className={"project-description"}>{description}</p>
                <p className={"project-description"}><strong>Technologies:</strong> {tech.join(", ")}</p>
            </Link>
            <div style={{ marginTop: '0.5rem' }}>
                {github && (
                    <a href={github} target="_blank" rel="noopener noreferrer" style={{ marginRight: '1rem' }}>
                        View on GitHub
                    </a>
                )}
                {liveDemo && (
                    <a href={liveDemo} target="_blank" rel="noopener noreferrer">
                        Live Demo
                    </a>
                )}
            </div>
        </div>
    );
}

export default ProjectCard;