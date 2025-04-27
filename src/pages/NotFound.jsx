import {Link} from "react-router-dom";
import {motion} from "framer-motion";

function NotFound() {
    return (
        <motion.section
            style={{textAlign: "center", padding: '2rem'}}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{opacity: 1, scale: 1}}
            exit={{opacity: 0, scale: 0.95}}
            transition={{duration: 0.5}}
        >
            <h1 style={{fontSize: '4rem', marginBottom: '1rem'}}>404</h1>
            <p style={{fontSize: '1.5rem'}}>Whoops! The page you're looking for is not real.</p>
            <Link to={"/"} style={{
                display: 'inline-block',
                marginTop: '2rem',
                padding: '0.75rem 1.5rem',
                backgroundColor: '#4CAF50',
                color: 'white',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '1rem'
            }}>
                Back to Home
            </Link>
        </motion.section>
    );
}

export default NotFound;