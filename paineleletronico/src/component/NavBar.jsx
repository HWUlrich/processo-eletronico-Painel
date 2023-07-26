import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css";

const NavBar = () => {
    return (
        <nav className='navbar'>
            <ul>
                <li>
                    <Link to={`/Disp1`}>Televisor 1</Link>
                </li>
                <li>
                    <Link to={`/Disp2`}>Televisor 2</Link>
                </li>
                <li>
                    <Link to={`/Disp3`}>Televisor 3</Link>
                </li>
                <li>
                    <Link to={`/Disp3`}>Televisor 3</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;