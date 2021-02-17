import React from 'react';
import { Link } from 'react-router-dom';

export default function RecipeMap(props) {
	// const handleClick = async addRecipe => {
	// 	const body = JSON.stringify({
	// 		name: addRecipe['meals'].strMeal
	// 	});
	// 	try {
	// 		const response = await fetch('/api/myrecipes', {
	// 			method: 'POST',
	// 			headers: {
	// 				'Content-Type': 'application/json'
	// 			},
	// 			body: body
	// 		});
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// };
	// const handleDelete = async e => {
	// 	try {
	// 		const response = await fetch(`/api/myrecipes/${props.match.params.id}`, {
	// 			method: 'DELETE',
	// 			headers: {
	// 				'Content-Type': 'application/json'
	// 			}
	// 		});
	// 		const data = await response.json();
	// 		setDidDelete(!didDelete);
	// 	} catch (error) {
	// 		console.error(error);
	// 	} finally {
	// 		window.location.assign('/');
	// 	}
	// };
	return (
		<div className={'column'} key={props.recipe.idMeal}>
			<div>
				<p>{props.recipe.strMeal}</p>
				<img src={props.recipe.strMealThumb} />
			</div>
		</div>
	);
}
