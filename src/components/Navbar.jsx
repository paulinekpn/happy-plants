import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <header>
            <div className="navigationBar">
                <Link to="/" className='homeLink'>
                    <p>Home</p>
                </Link>
                <Link to="/" className='logout'>
                    <p>Logout</p>
                </Link>
            </div>
        </header>
    )
}

export default Navbar;