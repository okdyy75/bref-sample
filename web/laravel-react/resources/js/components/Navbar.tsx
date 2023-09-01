import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/dogs">Dogs</Link>
                </li>
                <li>
                    <Link to="/dogs/a">grep id a</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
