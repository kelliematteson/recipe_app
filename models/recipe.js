const { Schema, model } = require('mongoose');

const recipeSchema = new Schema ({
    name: String,
    instructions: String,
    image: String,
    category: String,
})

module.exports = model('RecipeName', recipeSchema);