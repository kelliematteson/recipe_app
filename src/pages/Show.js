import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Show(props) {
	const [recipe, setRecipe] = useState({});
	const notesInput = useRef(null);

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
					notes: notesInput.current.value
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
					<h1>{recipe.name}</h1>
					<h3>Ingredients:</h3>{' '}
					<p>
						Salmon, seasalt, thyme, cucumber, brown rice, extra virgin olive
						oil, rosemary
					</p>
					<h3>Instructions:</h3>{' '}
					<p>
						Tip the bulghar into a pan, cover with water and boil for 10 mins.
						Drain really well in a sieve, pressing out any excess water. To make
						the tzatziki, squeeze and discard the juice from the cucumber, then
						mix into the yogurt with the chopped mint and a little salt.
					</p>
					<h4>Notes:</h4>
					<p>
						<span>{recipe.notes}</span>
					</p>
					<img className="showImage" src={recipe.image} />
				</div>
				<div className="updateForm">
					<form onSubmit={handleSubmit}>
						<label>
							{'Add your recipe Notes here'}
							<input type="text" ref={notesInput} />
						</label>
						<input type="submit" value="update" />
					</form>
					<button className="showpage-button" onClick={handleDelete}>
						Delete
					</button>
					<Link to={`/list`}>
						<button className="showpage-button">back to List page</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
