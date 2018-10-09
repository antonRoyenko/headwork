import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => (
    <header>
        <nav>
            <ul className="nav justify-content-end py-4">
                <li className="nav-item">
                    <Link className="nav-link" to='/'>Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/profile'>Profile</Link>
                </li>
            </ul>
        </nav>
    </header>
)
