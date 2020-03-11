import React from 'react';
import './Explore.css';
import CareerCard from "./components/CareerCard.js";

function Explore() {
	return (
		<div className="background">
			<div className="center-background-1">
				<div className="textbox-1">
					<h1 className="text1">Explore These Careers</h1>
				</div>
				<div className="textbox-2">
					<h1 className="text2">Click On A Career To Learn More</h1>
				</div>

				<div className="career-box">
					<div className="row1">
						<CareerCard />
						<CareerCard />
						<CareerCard />
						<CareerCard />
						<CareerCard />
						<CareerCard />
						<CareerCard />
						<CareerCard />

						<CareerCard />
						<CareerCard />
						<CareerCard />
						<CareerCard />
						<CareerCard />
						<CareerCard />
						<CareerCard />
						<CareerCard />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Explore;
