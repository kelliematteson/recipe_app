import React, { useState } from 'react';

export default function Show(props) {
	return (
		<div className="ShowPage">
			This is the {props.page} page
			<h2>This is where I want the recipe data to render</h2>
			<p>Image</p>
			<p>Ingredients</p>
			<p>Instructions</p>
		</div>
	);
}
