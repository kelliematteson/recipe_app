import React, { useState, useEffect } from 'react';
import RecipeMap from '../components/RecipeMap';
export default function App(props) {
	const [query, updateQuery] = useState({
		baseURL: 'https://www.themealdb.com/api/json/v1/1/',
		option: 'filter.php?i=',
		food: '',
		searchURL: ''
	});
	const [recipe, updateRecipe] = useState({});
	useEffect(() => {
		query.searchURL.length > 0 &&
			(async () => {
				try {
					const response = await fetch(query.searchURL);
					const data = await response.json();
					updateRecipe({ ...recipe, ...data });
				} catch (e) {
					console.error(e);
				}
			})();
	}, [query]);
	const handleChange = event => {
		updateQuery({ ...query, ...{ [event.target.id]: event.target.value } });
	};
	const handleSubmit = async event => {
		event.preventDefault();
		await updateQuery({
			...query,
			searchURL: query.baseURL + query.option + query.food
		});
	};
	// const handleClick = async addRecipe => {
	// 	const body = JSON.stringify({
	// 		name: addRecipe['meals'].strMeal
	// 	});
	// 	try {
	// 		const response = await fetch('/api/recipes', {
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
	return (
		<div className="Page-wrapper">
			<h2>Get a Recipe</h2>

			<form onSubmit={handleSubmit}>
				<label htmlFor="food"> Title</label>
				<input
					id="food"
					type="text"
					value={query.food}
					onChange={handleChange}
				/>
				<input type="submit" value="Find a Recipe" />
			</form>
			{Object.keys(recipe).length ? (
				<RecipeMap recipe={recipe} key={recipe._id} />
			) : (
				''
			)}
			<div className={'Page'}></div>
		</div>
	);
}
