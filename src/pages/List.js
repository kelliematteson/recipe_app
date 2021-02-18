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
		<div className="myRecipes">
			{tryRecipe.map(item => {
				return (
					<>
						<p key={item._id}>Recipe:{item.name}</p>
						<Link to={`/show/${item._id}`} {...props}>
							<button>See the show page</button>
						</Link>
					</>
				);
			})}
		</div>
	);
}
