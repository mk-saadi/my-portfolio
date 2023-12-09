import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<nav className="flex items-center justify-center mt-2 md:mt-0 activeButton">
			<NavLink
				className="navLink"
				to="/"
			>
				About
			</NavLink>
			<NavLink
				className="navLink"
				to="/projects"
			>
				Projects
			</NavLink>
			<NavLink
				className="navLink"
				to="contacts"
			>
				Contacts
			</NavLink>
		</nav>
	);
};

export default NavBar;
