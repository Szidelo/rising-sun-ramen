import "./footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer>
			<div className="footer__content">
				<Link to="/">LOGO</Link>

				<p>
					All rights reserved{" "}
					<a className="link-portfolio" href="https://www.linkedin.com/in/claudiu-szidelo-671b1324a/">@Szidelo Claudiu</a> 2024
				</p>
			</div>
		</footer>
	);
};

export default Footer;
