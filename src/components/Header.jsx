import React from 'react';
import {Link} from 'react-router-dom';
import {
    Navbar,
    NavbarBrand,
    NavbarNav,
    Collapse,
    NavLink,
} from 'mdbreact';

export const Header = () => (
    <Navbar color="indigo" dark expand="md" scrolling>
        <Collapse navbar>
            <NavbarNav left>
                <NavLink to="/" activeClassName="active" exact>
                    Home
                </NavLink>
                <NavLink to="/profile" activeClassName="active">
                    Profile
                </NavLink>
            </NavbarNav>
        </Collapse>
    </Navbar>
);
