import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
    return(
        <header>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/about"> About</Link>
            </nav>
        </header>
    )
}
export default Header