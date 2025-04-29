import {motion} from 'framer-motion';

function Contact() {
    return (
        <motion.section
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{opacity: 1, scale: 1}}
            exit={{opacity: 0, scale: 0.95}}
            transition={{duration: 0.5}}
        >
            <h1>Contact</h1>
            <h5>Email me at: <a href="mailto:kadesbolen@gmail.com">kadesbolen@gmail.com</a></h5>
            <h5>Find me on <a href="https://www.linkedin.com/in/kade-bolen-65931a253/" target="_blank" rel="noopener noreferrer">LinkedIn</a></h5>
            <h5>Visit my <a href="https://github.com/kabolen" target="_blank" rel="noopener noreferrer">GitHub Profile</a></h5>
        </motion.section>
    );
}

export default Contact;