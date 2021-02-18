const express = require('express');
const recipeController = express.Router();
const Recipe = require('../models/recipe');

//INDUCES
//Index, New, Delete, Update, Create, Edit, Show
// -------New, Edit (removing this to build an api)
// Index, Delete, Update, Create, Show


// Create
recipeController.post('/', async (req, res)=> {
    try{
        const newRecipe = await Recipe.create(req.body)
        res
            .status(200)
            .json(newRecipe)
    }catch(error){
        res
            .status(400)
            .json(error)   
    }
})

// Read (Index)
recipeController.get('/', async (req, res) => {
    try{
        const foundRecipes = await Recipe.find({})
        res
            .status(200)
            .json(foundRecipes)
    }catch(error){
        res
            .status(400)
            .json(error)   
    }
})
// Show Page (Show)
recipeController.get('/show/:id', async (req, res) => {
	try {
		const foundRecipe = await Recipe.findById(req.params.id);
		res.status(200).json(foundRecipe)
	} catch (error) {
		res.status(400).json(error)
	}
})
// Destroy
recipeController.delete('/:id', async (req, res) => {
	try {
		const foundRecipe = await Recipe.findByIdAndDelete(req.params.id);
		res.status(200).json(foundRecipe)
	} catch (error) {
		res.status(400).json(error)
	}
})
// Update
recipeController.put('/:id', async (req, res) => {
	try {
		const foundRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
			new: true
		});
		res.status(200).json(foundRecipe);
	} catch (error) {
		res.status(400).json(error);
	}
});

module.exports = recipeController;