import {Link} from "react-router-dom";

function NotFound() {
    return (
        <section style={{textAlign: "center", padding: '2rem'}}>
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
        </section>
    );
}

export default NotFound;