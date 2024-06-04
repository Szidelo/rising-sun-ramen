import "./banner.css";
import FOOD_DATA from "../../data/food.json";

const Banner = () => {
	const bannerData = [
		{
			id: 1,
			label: "mancare asiatica fresh",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, distinctio? Nostrum illum repellendus soluta distinctio sequi officiis, hic laboriosam ipsam.",
			button: {
				text: "vezi meniu",
				mode: "meniu",
			},
			image: FOOD_DATA.ramen[0].image,
		},
		{
			id: 2,
			label: "despre bucatar",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, distinctio? Nostrum illum repellendus soluta distinctio sequi officiis, hic laboriosam ipsam.",
			button: {
				text: "detalii",
				mode: "despre",
			},
			image: FOOD_DATA.sushi[0].image,
		},
		{
			id: 3,
			label: "contact",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, distinctio? Nostrum illum repellendus soluta distinctio sequi officiis, hic laboriosam ipsam.",
			button: {
				text: "contact",
				mode: "contact",
			},
			image: FOOD_DATA.other[0].image,
		},
	];

	return (
	
			<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
				<div className="carousel-indicators">
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="0"
						className="active"
						aria-current="true"
						aria-label="Slide 1"></button>
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="1"
						aria-label="Slide 2"></button>
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="2"
						aria-label="Slide 3"></button>
				</div>
				<div className="carousel-inner">
					{bannerData.map((data, index) => {
						return (
							<div key={data.id} className={index == 0 ? "carousel-item active" : "carousel-item"}>
								<img src={data.image} className="banner-image d-block w-100" alt="..." />
								<div className="banner-mask"></div>
								<div className="carousel-caption d-none d-md-block">
									<h5>{data.label}</h5>
									<p>{data.text}</p>
								</div>
							</div>
						);
					})}
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
		
	);
};

export default Banner;
