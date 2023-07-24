import { NavLink } from "react-router-dom";
import React from "react";

const NavigationItem = ({ navName = 'Home', iconName = 'fa-home  fa-lg', exactTo = "/", clicked, activeLink, }) => {
    return (
        <li key={iconName} className={`nav-item ${activeLink === exactTo ? "active" : ""}`} onClick={() => clicked(exactTo)}>
            <NavLink className="nav-link" to={exactTo}>
                {/* Warning: Received `true` for a non-boolean attribute `exact`. */}
                <i className={`fa ${iconName}`} aria-hidden="true" />
                {navName}
            </NavLink>

        </li>
    )
}

export default NavigationItem;