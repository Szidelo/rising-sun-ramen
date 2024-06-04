import "./about.css";
import portraitImg from "../../../public/img/portrait.png";

const About = () => {
	return (
		<div className="about">
			<div className="about__container row rounded">
				<div className="col-12 col-lg-7 about__container-text">
					<h1>Despre Rising Sun Ramen</h1>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem quod sit ab,
						explicabo veniam tempora maiores asperiores sed! Temporibus tempore asperiores molestias
						quam exercitationem dicta nulla nesciunt iure molestiae explicabo sit dolorem, aperiam
						consequuntur veritatis voluptate dolorum iusto magni laudantium fuga. Unde quidem
						possimus architecto eius vitae officiis, minima ab.
					</p>
				</div>
				<div className="col-12 col-lg-5 about__container-imege">
					<img src={portraitImg} alt="" className="rounded"/>
				</div>
			</div>
		</div>
	);
};

export default About;
