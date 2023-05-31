import React from "react";
import "./Card.css";
import projectpng from "../../assets/images/projectpng.png";
const Card = () => {
	return (
		<>
			<div className="card-container">
				<div className="card1">
					<h5>Project name : "My personal Project"</h5>
					<img
						src={projectpng}
						alt="projecticon"
						style={{ width: "100px", height: "100px" }}
					/>
					<h5>Project Type : "Personal"</h5>
					<h5>github:"link to be inserted"</h5>
				</div>
				<div className="card2">
					<h5>Project name : "Futsal Reservation System"</h5>
					<img
						src={projectpng}
						alt="projecticon"
						style={{ width: "100px", height: "100px" }}
					/>
					<h5>Project Type : "College Project"</h5>
					<h5>github:"link to be inserted"</h5>
				</div>
				<div className="card3">
					<h5>Project name : "Official Project"</h5>
					<img
						src={projectpng}
						alt="projecticon"
						style={{ width: "100px", height: "100px" }}
					/>
					<h5>Project Type : "UN Legal Aid</h5>
					<h5>github:"link to be inserted"</h5>
				</div>
			</div>
		</>
	);
};

export default Card;
