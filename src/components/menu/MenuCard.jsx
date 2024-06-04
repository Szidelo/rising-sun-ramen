/* eslint-disable react/prop-types */
import "./menu.css";

const MenuCard = ({ menuItem }) => {
	return (
		<div className="menu-card">
			<div className="menu-card__img-wrapper">
				<img src={menuItem.image} alt="" />
			</div>
			<div className="menu-card__info">
				<div className="menu-card__info-header">
					<h4>{menuItem.name}</h4>
					<p>{menuItem.price}LEI</p>
				</div>

				<div className="d-flex flex-wrap gap-2 ">
					{menuItem.ingredients.map((ingredient) => (
						<span className="badge badeg-ingredient" key={ingredient}>{ingredient}</span>
					) )}
				</div>
				<div className="mt-2">
					<h5>{menuItem.weight}g</h5>
				</div>
			</div>
		</div>
	);
};

export default MenuCard;
