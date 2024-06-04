import { useEffect, useState } from "react";
import "./navbar.css";

import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
	const locationPath = useLocation();
	const [location, setLocation] = useState();

	const links = [
		{ id: "home", name: "home", path: "/" },
		{ id: "menu", name: "menu", path: "/menu" },
		{ id: "contact", name: "contact", path: "/contact" },
	];

	useEffect(() => {
		setLocation(locationPath.pathname);
	}, [locationPath.pathname]);

	return (
		<nav className="navigation">
			<div className="navigation__container">
				<div className="navigation__logo-wrapper">
					<Link to="/">LOGO</Link>
				</div>
				<div className="navigation__bar">
					<ul className="navigation__bar-list">
						{links.map((link) => {
							return (
								<li key={link.id} onClick={() => setLocation(link.path)}>
									<Link className={location == link.path ? "active" : ""} to={link.path}>
										{link.name}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
