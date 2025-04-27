import {motion} from 'framer-motion';

function Contact() {
    return (
        <motion.section
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{opacity: 1, scale: 1}}
            exit={{opacity: 0, scale: 0.95}}
            transition={{duration: 0.5}}
        >
            <h2>Contact</h2>
            <p>Email me at: <a href="mailto:kadesbolen@gmail.com">kadesbolen@gmail.com</a></p>
            <p>Find me on <a href="https://linkedin.com/in/kabolen" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        </motion.section>
    );
}

export default Contact;