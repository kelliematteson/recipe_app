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

// Read

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

// Update


// Destroy

module.exports = recipeController;