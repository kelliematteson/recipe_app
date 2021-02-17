import React from 'react';
import { Link } from 'react-router-dom';

export default function RecipeMap(props) {
	const handleClick = async addRecipe => {
		const body = JSON.stringify({
			name: addRecipe['meals'].strMeal
		});
		try {
			const response = await fetch('/api/myrecipes', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: body
			});
		} catch (error) {
			console.error(error);
		}
	};
	const handleDelete = async e => {
		try {
			const response = await fetch(`/api/myrecipes/${props.match.params.id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const data = await response.json();
			setDidDelete(!didDelete);
		} catch (error) {
			console.error(error);
		} finally {
			window.location.assign('/');
		}
	};
	return (
		<div>
			<h2>recipe Info goes here</h2>
			{props.recipe.meals.map(meals => {
				return (
					<Link to={`/${meals._id}`}>
						<div key={meals.index}>
							<p>{meals.strMeal}</p>
							<img src={meals.strMealThumb} />
							<button onClick={() => handleClick({ meals })}>Click me</button>
							<button onClick={handleDelete}>Delete</button>
						</div>
					</Link>
				);
			})}
		</div>
	);
}
