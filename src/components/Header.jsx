import react from "react"
import { Link } from "react-router-dom"

function Header()
{
    return (
        <header>
            <nav>
                <div className="navigation">
                    <Link
                        className="nav-button"
                        to="/">
                        Home
                    </Link>
                    <Link
                        className="nav-button"
                        to="/movies">
                        All Movies
                    </Link>
                    <Link
                        className="nav-button"
                        to="/movies/coming-soon">
                        Coming Soon
                    </Link>
                    <Link
                        className="nav-button"
                        to="/new-movie-form">
                        Add Movie
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Header