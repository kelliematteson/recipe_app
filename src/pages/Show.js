import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Show(props) {
	const [recipe, setRecipe] = useState({
		name: ''
	});
	const nameInput = useRef(null);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`api/show/${props.match.params.id}`);
				const data = await response.json();
				setRecipe(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);
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
					name: nameInput.current.value
				})
			});
			const data = await response.json();
			setRecipe(data);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="ShowPage">
			<p>{recipe.name}</p>
			<form onSubmit={handleSubmit}>
				<label>
					{' '}
					<input type="text" ref={nameInput} />
				</label>
				<input type="submit" value="update" />
			</form>
			<button onClick={handleDelete}>Delete</button>
			<Link to={`/list`}>
				<button>back to List page</button>
			</Link>
		</div>
	);
}
