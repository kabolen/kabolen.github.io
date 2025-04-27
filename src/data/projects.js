import {Project} from './projects.d.ts';

const projects: Project[] = [
    {
        id: 1,
        title: "Domino ML Train Finder",
        description: "A Python app using machine learning to analyze domino patterns.",
        tech: ["Python", "TensorFlow", "Computer Vision"],
        github: "https://github.com/kabolen/domino-train-finder",
        liveDemo: "" // TODO: Add link to domino project website (if applicable)
    },
    {
        id: 2,
        title: "CNC Machine Simulator",
        description: "Simulates CNC toolpaths based on g-code input files.",
        tech: ["Python", "PyOpenGL", "Tkinter"],
        github: "https://github.com/kabolen/cnc-simulator"
    },
    // TODO: Add more projects
];

export default projects;