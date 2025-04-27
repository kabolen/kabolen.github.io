import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1>Kade Bolen</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
}

export default Header;