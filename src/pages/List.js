import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function List(props) {
	const [tryRecipe, updateTryRecipe] = useState([]);
	useEffect(() => {
		// Immediately Invoked Function Expression
		(async () => {
			try {
				const response = await fetch(`/api/myrecipes`);
				const data = await response.json();
				updateTryRecipe(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);
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
	// 		window.location.assign('/list');
	// 	}
	// };
	// console.log(myRecipes);
	return (
		<div className="myRecipes">
			{tryRecipe.map(item => {
				return (
					<>
						<p key={item._id}>Recipe:{item.name}</p>
					</>
				);
			})}
		</div>
	);
}
