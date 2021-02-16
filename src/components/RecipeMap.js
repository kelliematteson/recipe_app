import React from 'react';
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
	return (
		<div>
			<h2>recipe Info goes here</h2>
			{props.recipe.meals.map((meals, index) => {
				return (
					<div key={meals.index}>
						<h3>{meals.strMeal}</h3>
						<button onClick={() => handleClick({ meals })}>Click me</button>
					</div>
				);
			})}
		</div>
	);
}
