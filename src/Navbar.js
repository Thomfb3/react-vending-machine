import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="Navbar">
            <NavLink exact to="/">
                Vending Machine
            </NavLink>
            <NavLink exact to="/soda">
                Soda
            </NavLink>
            <NavLink exact to="/candy">
                Candy
            </NavLink>
            <NavLink exact to="/chips">
                Chips
            </NavLink>
        </nav>
    );
}

export default Navbar;
