import React from 'react';
import { Link } from 'react-router-dom';

export default function RecipeMap(props) {
	return (
		<div className={'column'} key={props.recipe.idMeal}>
			<div>
				<h3>{props.recipe.strMeal}</h3>
				<h4>{props.recipe.strCategory}</h4>
				<img src={props.recipe.strMealThumb} />
			</div>
		</div>
	);
}
