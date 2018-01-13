import React from 'react';
import './index.css';

export const NavBrand = props => (
    <a href={props.href} className="brand"><span>{props.title}</span></a>
);

export const NavItem = props => (
    <a href={props.onAction} className="nav-item"><span>{props.action}</span></a>
);

export const NavBar = props => (
    <header className="navbar">
        <div className="container">
            <div className="nav">
                {props.children}
            </div>
        </div>
    </header>
);
