import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';

function Projects() {
    return (
        <div className="projects-page">
            <h2>My Projects</h2>
            {projects.map(project => (
                <ProjectCard key={project.id} {...project} />
            ))}
        </div>
    );
}

export default Projects;