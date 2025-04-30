import {useParams} from 'react-router-dom';
import projects from '../data/projects';

function ProjectPage() {
    const { slug } = useParams();
    const project = projects.find(p => p.slug === slug);

    if (!project) {
        return <p>Project not found.</p>;
    }

    return (
        <section>
            {/* Main project content */}
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            {/* Images, Documentation, etc */}
            <div className="image-grid">
                {project.images && project.images.map((img, idx) => (
                    <div className="image-wrapper" key={idx}>
                        <img src={img} alt={`${project.title} screenshot ${idx + 1}`} />
                    </div>
                ))}
            </div>
            {/* More detailed sections */}
        </section>
    );
}

export default ProjectPage;