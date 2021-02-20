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
					console.log(data);
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
			name: addRecipe['item'].strMeal,
			instructions: addRecipe['item'].strInstructions,
			image: addRecipe['item'].strMealThumb,
			notes: ''
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
		} finally {
			window.location.assign('/list');
		}
	};
	return (
		<body>
			<div className="Page">
				<div className="form">
					<h1>What's for Dinner?!!</h1>
					<h4>The App that helps you figure it out</h4>
					<form onSubmit={handleSubmit}>
						<label htmlFor="food"></label>
						<input
							id="food"
							placeholder="Main Ingredient "
							type="text"
							value={query.food}
							onChange={handleChange}
						/>
						<input type="submit" value="Find a Recipe" />
					</form>
				</div>
				<div className="data">
					{recipe.map(item => {
						return (
							<div key={item.idMeal} className="item">
								<RecipeMap recipe={item} />
								<button onClick={() => handleClick({ item })}>
									Add to My List
								</button>
							</div>
						);
					})}
				</div>
			</div>
		</body>
	);
}
