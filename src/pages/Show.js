import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Show(props) {
	const [recipe, setRecipe] = useState({});
	const nameInput = useRef(null);
	const instructionsInput = useRef(null);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(
					`/api/myrecipes/show/${props.match.params.id}`
				);
				const data = await response.json();
				setRecipe(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, [recipe]);
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
			window.location.assign('/list');
		}
	};
	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const response = await fetch(`/api/myrecipes/${props.match.params.id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: nameInput.current.value,
					instructions: instructionsInput.current.value
				})
			});
			const data = await response.json();
			setRecipe(data);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="Page">
			<div className="ShowPage">
				<div className="show-cards">
					<h2>{recipe.name}</h2>
					<h4>{recipe.category}</h4>
					<p>{recipe.instructions}</p>
					<img src={recipe.image} />
				</div>
				<div className="updateForm">
					<form onSubmit={handleSubmit}>
						<label>
							{' '}
							<input type="text" ref={nameInput} />
						</label>
						<input type="submit" value="update" />
					</form>
					<button onClick={handleDelete}>Delete</button>
					<Link to={`/list`}>
						<button className="showpage-button">back to List page</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
