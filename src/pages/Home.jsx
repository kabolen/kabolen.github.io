import {motion} from 'framer-motion';

function Home() {
    return (
        <motion.section
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{opacity: 1, scale: 1}}
            exit={{opacity: 0, scale: 0.95}}
            transition={{duration: 0.5}}
        >
            <h2>Welcome to My Portfolio!</h2>
            <p>I'm a Computer Science student passionate about technology, creativity, collaborating with others to
                create impactful things.</p>
        </motion.section>
    );
}

export default Home;