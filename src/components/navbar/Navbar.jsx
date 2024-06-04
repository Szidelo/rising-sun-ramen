import { useEffect, useState } from "react";
// import { FiMenu } from "react-icons/fi";
// import { CgClose } from "react-icons/cg";

import "./navbar.css";

import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
	const locationPath = useLocation();
	const [location, setLocation] = useState();
	const [isVisible, setIsVisible] = useState(false);

	const links = [
		{ id: "home", name: "home", path: "/" },
		{ id: "menu", name: "menu", path: "/menu" },
		{ id: "contact", name: "contact", path: "/contact" },
	];

	const toggleNav = () => {
		setIsVisible((prevState) => {
			return (prevState = !prevState);
		});
	};

	useEffect(() => {
		setLocation(locationPath.pathname);
	}, [locationPath.pathname]);

	return (
		<>
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
			<nav className="mobile-nav">
				<div className="mobile-nav-container">
					<div className="navigation__logo-wrapper">
						<Link to="/">LOGO</Link>
					</div>
					<div>
						{/* <FiMenu className="menu-btn" onClick={toggleNav} /> */}
					</div>
					<div className={isVisible ? "mobile-nav-list" : "mobile-nav-list hidden"}>
						<div>
							{/* <CgClose className="close-btn" onClick={toggleNav} /> */}
						</div>
						<ul>
							{links.map((link) => {
								return (
									<li
										key={link.id}
										onClick={() => {
											setLocation(link.path);
											setTimeout(() => {
												toggleNav();
											}, 500);
										}}>
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
		</>
	);
};

export default Navbar;
