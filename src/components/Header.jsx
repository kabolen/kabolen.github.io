import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className={"logo"}>
                <img src={"../public/favicon.ico"} alt={"Kade Bolen Logo"} />
                <span className={"site-name"}>Kade Bolen Portfolio</span>
            </div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/about">About Me</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
}

export default Header;