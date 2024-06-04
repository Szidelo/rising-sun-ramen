import "./about.css";
import FOOD_DATA from "../../data/food.json";
import { Link } from "react-router-dom";

const MenuSection = () => {
	return (
		<section className="menu">
			<h5>Meniu</h5>
			<h1>Recomandarile bucatarului</h1>
			<div className="menu__images row">
				<div className="col-12 col-md-6 col-xl-4 py-3">
					<img src={FOOD_DATA.ramen[1].image} alt="" />
				</div>
				<div className="col-12 col-md-6 col-xl-4 py-3">
					<img src={FOOD_DATA.sushi[1].image} alt="" />
				</div>
				<div className="col-12 col-md-6 col-xl-4 py-3">
					<img src={FOOD_DATA.other[1].image} alt="" />
				</div>
			</div>
			<div className="menu__text">
				<p className="my-4">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, animi?
				</p>
				<p className="my-4">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum consectetur nulla,
					voluptate dolores perspiciatis quos ducimus unde aut doloremque. Sint consequuntur, error
					laborum ipsam exercitationem doloribus voluptatibus ea. Omnis alias quo impedit! Placeat
					laborum sed illo vel quae ad obcaecati tempore, tenetur labore et ut vitae odit possimus
					officia consequuntur.
				</p>
			</div>
            <div>
                <button className="btn main-btn mt-5">
                    <Link to="/menu">Exploreaza Meniul</Link>
                </button>
            </div>
		</section>
	);
};

export default MenuSection;
