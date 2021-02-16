import React from 'react';
export default function RecipeMap(props) {
	let recipe = JSON.parse(json);
	console.log(recipe.strMeal, recipe.idMeal);
	return (
		<div>
			<h2>recipe Info goes here</h2>
			{/* {props.recipe.meals.map(([meals], index) => {
				return (
					<div key={meals.index}>
						<h3>{meals.strMeal}</h3>
					</div>
				);
			})} */}
		</div>
	);
}
