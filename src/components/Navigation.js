import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/" className = {(nav) => (nav.isActive ? "nav-active" : "")}> 
                {/* class name avec fonction fléchée permet d'appliquer une classe seulement si le path est actif */}
                    <li>Accueil</li>
                </NavLink>
                <NavLink to ="/about" className = {(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>À propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;