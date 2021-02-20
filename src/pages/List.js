import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function List(props) {
	const [tryRecipe, updateTryRecipe] = useState([]);
	useEffect(() => {
		// Immediately Invoked Function Expression
		(async () => {
			try {
				const response = await fetch(`/api/myrecipes`);
				const data = await response.json();
				updateTryRecipe(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	return (
		<div className="Page">
			<h1>My Recipes</h1>
			<div className="myRecipes">
				{tryRecipe.map(item => {
					return (
						<div key={item._id} className="list-items">
							<div className="eachCard">
								<Link to={`/show/${item._id}`}>
									<h3 key={item._id}>{item.name}</h3>
								</Link>
								<img className="list-images" src={item.image} />
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
