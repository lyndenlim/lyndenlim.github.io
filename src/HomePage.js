import { Link } from "react-router-dom"

function HomePage() {
    return (
        <div>
            Lynden Lim
            <br />
            <Link to="/about">
                <button>About</button>
            </Link>
            <Link to="/projects">
                <button>Projects</button>
            </Link>
            <Link to="/skills">
                <button>Skills</button>
            </Link>
            <Link to="/contact">
                <button>Contact</button>
            </Link>
        </div>
    )
}

export default HomePage