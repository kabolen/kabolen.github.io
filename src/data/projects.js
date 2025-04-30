import {Project} from './projects.d.ts';

const projects: Project[] = [
    {
        id: 1,
        title: "Personal Portfolio Website",
        slug: "portfolio-website",
        description: "A first attempt at a static website to showcase my personal and academic projects. Secondarily " +
            "acts as a medium through which I am practicing my web development skills.",
        tech: ["Javascript", "JSX", "React", "WebStorm"],
        github: "https://github.com/kabolen/kabolen.github.io",
    },
    {
        id: 2,
        title: "Beyond Beauty Brushes",
        slug: "beauty-brushes",
        description: "An accessible approach to using makeup tools. Designed for those with less motor function in " +
            "their hands and wrists.",
        tech: ["Shapr3D, Autodesk Fusion360, Orca Slicer, 3D Printing"],
        images: [
            "/assets/bigCheck.jpg",
            "/assets/dock0.jpeg",
            "/assets/handlePrinting.jpeg"
        ]
    },
    {
        id: 3,
        title: "Custom Walker Tray",
        slug: "custom-walker-tray",
        description: "A custom-made tray to fit over a walker, protecting the user from harming themselves on harsh " +
            "components or geometries on the top of the walker.",
        tech: ["Shapr3D, Autodesk Fusion360, Orca Slicer, 3D Printing, Laser Cutting"],
        images: [] //TODO: Add walker images
    },
    {
        id: 4,
        title: "Domino ML Train Finder",
        description: "A Python app using machine learning to analyze domino patterns.",
        tech: ["Python", "TensorFlow", "Computer Vision"],
        github: "https://github.com/BoiseState/CS471-S25-Team11",
        liveDemo: "", // TODO: Add link to domino project website (if applicable)
        images: [] // TODO Add train finder images
    },
    {
        id: 5,
        title: "Eagles Brew",
        description: "A custom made application for a small cafe. They needed a way to get their products to customers " +
            "via an app, and I was part of a small team who created it for them.",
        tech: ["Flutter, Dart, Swift, IOS, Android"],
        github: "https://github.com/Nolan-Olhausen/CS469MobileApp",
        images:[] // TODO: Add images
    },
    // TODO: Add more projects
];

export default projects;