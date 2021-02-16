import React from 'react';
export default function RecipeMap(props) {
	return (
		<div>
			<h2>recipe Info goes here</h2>
			<p>{props.recipe.meals[0].strMeal}</p>
		</div>
	);
}
