import React, { useState, useEffect } from 'react';

export default function Show(props) {
	const [recipe, setRecipe] = useState([]);

	useEffect(() => {
		async () => {
			try {
				const response = await fetch(`/api/myrecipes/${props.match.params.id}`);
				const data = await response.json();
				console.log(data);
				setRecipe([data]);
			} catch (error) {
				console.error(error);
			}
		};
	});

	return <div className="ShowPage">show page here: {recipe}</div>;
}
