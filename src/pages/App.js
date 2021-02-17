import React, { useState, useEffect } from 'react';
import RecipeMap from '../components/RecipeMap';
export default function App(props) {
	const [query, updateQuery] = useState({
		baseURL: 'https://www.themealdb.com/api/json/v1/1/',
		option: 'filter.php?i=',
		food: '',
		searchURL: ''
	});
	const [recipe, updateRecipe] = useState([]);
	useEffect(() => {
		query.searchURL.length > 0 &&
			(async () => {
				try {
					const response = await fetch(query.searchURL);
					const data = await response.json();
					updateRecipe([...data.meals]);
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
	const handleClick = async addRecipe => {
		const body = JSON.stringify({
			name: addRecipe['item'].strMeal
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
			<div className={'Page'}>
				{recipe.map(item => {
					return (
						<div key={item.idMeal}>
							<RecipeMap recipe={item} />
							<button onClick={() => handleClick({ item })}>
								Add to My List
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
}
