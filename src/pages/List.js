import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function List(props) {
	const [myRecipes, setMyRecipes] = useState([]);
	useEffect(() => {
		// Immediately Invoked Function Expression
		(async () => {
			try {
				const response = await fetch('/api/myrecipes');
				const data = await response.json();
				setMyRecipes(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);
	console.log(myRecipes);
	return (
		<div className="myRecipes">
			{myRecipes.map(recipe => {
				return (
					<>
						<p key={recipe._id}>Recipe:{recipe.strMeal}</p>

						<Link to={`/${recipe._id}`}>
							<button>Show Page</button>
						</Link>
					</>
				);
			})}
		</div>
	);
}
