import react from "react"
import { Link } from "react-router-dom"

function Header()
{
    return (
        <header>
            <nav>
                <div className="navigation">
                    <Link
                        className="button"
                        to="/">
                        Home
                    </Link>
                    <Link
                        className="button"
                        to="/movies">
                        All Movies
                    </Link>
                    <Link
                        className="button"
                        to="/movies/coming-soon">
                        Coming Soon
                    </Link>
                    <Link
                        className="button"
                        to="/new-movie-form">
                        Add Movie
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Header