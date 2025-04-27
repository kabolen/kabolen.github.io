import {motion} from 'framer-motion';

function About() {
    return (
        <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{opacity: 1, scale: 1}}
        exit={{opacity: 0, scale: 0.95}}
        transition={{duration: 0.5}}
        >
            <h2>About Me</h2>
            <p>Nothing Here!</p> //TODO
        </motion.section>
    );
}

export default About;